import { useState, useEffect, useCallback } from 'react';

interface NotificationOptions {
  title: string;
  body: string;
  icon?: string;
  tag?: string;
  requireInteraction?: boolean;
}

interface UsePushNotificationsReturn {
  isSupported: boolean;
  permission: NotificationPermission | 'unsupported';
  requestPermission: () => Promise<boolean>;
  showNotification: (options: NotificationOptions) => void;
  scheduleDailyChallenge: () => void;
  scheduleBibleStudyReminder: (hour: number, minute: number) => void;
  cancelAllNotifications: () => void;
}

const STORAGE_KEY = 'bible-app-notifications';

interface NotificationSettings {
  dailyChallengeEnabled: boolean;
  bibleStudyEnabled: boolean;
  bibleStudyTime: { hour: number; minute: number };
  lastDailyChallengeDate?: string;
}

const defaultSettings: NotificationSettings = {
  dailyChallengeEnabled: false,
  bibleStudyEnabled: false,
  bibleStudyTime: { hour: 9, minute: 0 },
};

export const usePushNotifications = (): UsePushNotificationsReturn => {
  const [permission, setPermission] = useState<NotificationPermission | 'unsupported'>('default');
  const isSupported = 'Notification' in window;

  useEffect(() => {
    if (isSupported) {
      setPermission(Notification.permission);
    } else {
      setPermission('unsupported');
    }
  }, [isSupported]);

  // Check for scheduled notifications
  useEffect(() => {
    if (!isSupported || permission !== 'granted') return;

    const checkScheduledNotifications = () => {
      const settings = getSettings();
      const now = new Date();
      const today = now.toISOString().split('T')[0];

      // Daily challenge notification (check every minute)
      if (settings.dailyChallengeEnabled && settings.lastDailyChallengeDate !== today) {
        if (now.getHours() >= 8) { // Show at 8 AM or later
          showNotificationInternal({
            title: '📖 Sfida Giornaliera!',
            body: 'La tua sfida biblica quotidiana ti aspetta. Metti alla prova le tue conoscenze!',
            tag: 'daily-challenge',
            requireInteraction: true
          });
          saveSettings({ ...settings, lastDailyChallengeDate: today });
        }
      }

      // Bible study reminder
      if (settings.bibleStudyEnabled) {
        const { hour, minute } = settings.bibleStudyTime;
        if (now.getHours() === hour && now.getMinutes() === minute) {
          showNotificationInternal({
            title: '✝️ Tempo di Studio Biblico',
            body: 'È il momento del tuo studio biblico quotidiano. Apri la Parola di Dio!',
            tag: 'bible-study',
            requireInteraction: true
          });
        }
      }
    };

    // Check immediately and then every minute
    checkScheduledNotifications();
    const interval = setInterval(checkScheduledNotifications, 60000);

    return () => clearInterval(interval);
  }, [isSupported, permission]);

  const getSettings = (): NotificationSettings => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  };

  const saveSettings = (settings: NotificationSettings) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  };

  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (!isSupported) return false;

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result === 'granted';
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  }, [isSupported]);

  const showNotificationInternal = (options: NotificationOptions) => {
    if (!isSupported || permission !== 'granted') return;

    try {
      new Notification(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        tag: options.tag,
        requireInteraction: options.requireInteraction || false,
      });
    } catch (error) {
      console.error('Error showing notification:', error);
    }
  };

  const showNotification = useCallback((options: NotificationOptions) => {
    showNotificationInternal(options);
  }, [isSupported, permission]);

  const scheduleDailyChallenge = useCallback(() => {
    const settings = getSettings();
    saveSettings({ ...settings, dailyChallengeEnabled: true });
  }, []);

  const scheduleBibleStudyReminder = useCallback((hour: number, minute: number) => {
    const settings = getSettings();
    saveSettings({
      ...settings,
      bibleStudyEnabled: true,
      bibleStudyTime: { hour, minute }
    });
  }, []);

  const cancelAllNotifications = useCallback(() => {
    saveSettings(defaultSettings);
  }, []);

  return {
    isSupported,
    permission,
    requestPermission,
    showNotification,
    scheduleDailyChallenge,
    scheduleBibleStudyReminder,
    cancelAllNotifications,
  };
};
