import { useState, useEffect, useCallback } from 'react';
import { z } from 'zod';

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
  scheduleGoalReminder: (hour: number, minute: number) => void;
  cancelAllNotifications: () => void;
}

const STORAGE_KEY = 'bible-app-notifications';

// Zod schema for validation
const NotificationSettingsSchema = z.object({
  dailyChallengeEnabled: z.boolean(),
  bibleStudyEnabled: z.boolean(),
  bibleStudyTime: z.object({
    hour: z.number().int().min(0).max(23),
    minute: z.number().int().min(0).max(59),
  }),
  goalReminderEnabled: z.boolean(),
  goalReminderTime: z.object({
    hour: z.number().int().min(0).max(23),
    minute: z.number().int().min(0).max(59),
  }),
  lastDailyChallengeDate: z.string().optional(),
  lastGoalReminderDate: z.string().optional(),
});

type NotificationSettings = z.infer<typeof NotificationSettingsSchema>;

const defaultSettings: NotificationSettings = {
  dailyChallengeEnabled: false,
  bibleStudyEnabled: false,
  bibleStudyTime: { hour: 9, minute: 0 },
  goalReminderEnabled: false,
  goalReminderTime: { hour: 18, minute: 0 },
};

const getSettings = (): NotificationSettings => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultSettings;
    
    const parsed = JSON.parse(saved);
    const result = NotificationSettingsSchema.safeParse(parsed);
    
    if (result.success) {
      return result.data;
    }
    
    console.warn('Invalid notification settings in localStorage, using defaults');
    return defaultSettings;
  } catch {
    return defaultSettings;
  }
};

const saveSettings = (settings: NotificationSettings) => {
  const result = NotificationSettingsSchema.safeParse(settings);
  if (result.success) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result.data));
  }
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

  const showNotificationInternal = useCallback((options: NotificationOptions) => {
    if (!isSupported || Notification.permission !== 'granted') return;

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

      // Goal reminder notification
      if (settings.goalReminderEnabled && settings.lastGoalReminderDate !== today) {
        const { hour, minute } = settings.goalReminderTime;
        if (now.getHours() === hour && now.getMinutes() === minute) {
          showNotificationInternal({
            title: '🎯 Obiettivi Giornalieri',
            body: 'Non dimenticare di completare i tuoi obiettivi giornalieri! Guadagna punti e mantieni la serie!',
            tag: 'goal-reminder',
            requireInteraction: true
          });
          saveSettings({ ...settings, lastGoalReminderDate: today });
        }
      }
    };

    // Check immediately and then every minute
    checkScheduledNotifications();
    const interval = setInterval(checkScheduledNotifications, 60000);

    return () => clearInterval(interval);
  }, [isSupported, permission, showNotificationInternal]);

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

  const showNotification = useCallback((options: NotificationOptions) => {
    showNotificationInternal(options);
  }, [showNotificationInternal]);

  const scheduleDailyChallenge = useCallback(() => {
    const settings = getSettings();
    saveSettings({ ...settings, dailyChallengeEnabled: true });
  }, []);

  const scheduleBibleStudyReminder = useCallback((hour: number, minute: number) => {
    // Validate hour and minute
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return;
    
    const settings = getSettings();
    saveSettings({
      ...settings,
      bibleStudyEnabled: true,
      bibleStudyTime: { hour, minute }
    });
  }, []);

  const scheduleGoalReminder = useCallback((hour: number, minute: number) => {
    // Validate hour and minute
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return;
    
    const settings = getSettings();
    saveSettings({
      ...settings,
      goalReminderEnabled: true,
      goalReminderTime: { hour, minute }
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
    scheduleGoalReminder,
    cancelAllNotifications,
  };
};