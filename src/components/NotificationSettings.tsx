import React, { useState, useEffect } from 'react';
import { Bell, BellOff, Clock, BookOpen, Zap } from 'lucide-react';
import { z } from 'zod';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const STORAGE_KEY = 'bible-app-notifications';

// Zod schema for validation
const NotificationSettingsSchema = z.object({
  dailyChallengeEnabled: z.boolean(),
  bibleStudyEnabled: z.boolean(),
  bibleStudyTime: z.object({
    hour: z.number().int().min(0).max(23),
    minute: z.number().int().min(0).max(59),
  }),
});

type NotificationSettingsType = z.infer<typeof NotificationSettingsSchema>;

const defaultSettings: NotificationSettingsType = {
  dailyChallengeEnabled: false,
  bibleStudyEnabled: false,
  bibleStudyTime: { hour: 9, minute: 0 },
};

const loadSettings = (): NotificationSettingsType => {
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

const NotificationSettings: React.FC = () => {
  const { t } = useLanguage();
  const { 
    isSupported, 
    permission, 
    requestPermission, 
    scheduleDailyChallenge,
    scheduleBibleStudyReminder,
  } = usePushNotifications();

  const [settings, setSettings] = useState<NotificationSettingsType>(loadSettings);

  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  const saveSettings = (newSettings: NotificationSettingsType) => {
    const result = NotificationSettingsSchema.safeParse(newSettings);
    if (result.success) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(result.data));
    }
  };

  const handleEnableNotifications = async () => {
    const granted = await requestPermission();
    if (granted) {
      toast.success(t('notificationsEnabled'));
    } else {
      toast.error(t('notificationsDenied'));
    }
  };

  const handleDailyChallengeToggle = (enabled: boolean) => {
    const newSettings = { ...settings, dailyChallengeEnabled: enabled };
    setSettings(newSettings);
    saveSettings(newSettings);
    
    if (enabled) {
      scheduleDailyChallenge();
      toast.success(t('dailyChallengeEnabled'));
    } else {
      toast.info(t('dailyChallengeDisabled'));
    }
  };

  const handleBibleStudyToggle = (enabled: boolean) => {
    const newSettings = { ...settings, bibleStudyEnabled: enabled };
    setSettings(newSettings);
    saveSettings(newSettings);
    
    if (enabled) {
      scheduleBibleStudyReminder(settings.bibleStudyTime.hour, settings.bibleStudyTime.minute);
      toast.success(t('bibleStudyReminderEnabled'));
    } else {
      toast.info(t('bibleStudyReminderDisabled'));
    }
  };

  const handleTimeChange = (value: string) => {
    const [hour, minute] = value.split(':').map(Number);
    if (isNaN(hour) || isNaN(minute)) return;
    
    const newSettings = { 
      ...settings, 
      bibleStudyTime: { hour, minute } 
    };
    setSettings(newSettings);
    saveSettings(newSettings);
    
    if (settings.bibleStudyEnabled) {
      scheduleBibleStudyReminder(hour, minute);
    }
  };

  if (!isSupported) {
    return (
      <Card className="glass-card">
        <CardContent className="flex items-center gap-3 p-4">
          <BellOff className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {t('notificationsNotSupported')}
          </span>
        </CardContent>
      </Card>
    );
  }

  const timeOptions = [];
  for (let h = 5; h <= 22; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h.toString().padStart(2, '0');
      const minute = m.toString().padStart(2, '0');
      timeOptions.push(`${hour}:${minute}`);
    }
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-serif text-lg">
          <Bell className="h-5 w-5 text-primary" />
          {t('notifications')}
        </CardTitle>
        <CardDescription>
          {t('notificationsDescription')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {permission !== 'granted' ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <Bell className="h-12 w-12 text-muted-foreground" />
            <p className="text-center text-sm text-muted-foreground">
              {t('notificationsRequestPrompt')}
            </p>
            <Button onClick={handleEnableNotifications} variant="default">
              <Bell className="mr-2 h-4 w-4" />
              {t('enableNotifications')}
            </Button>
          </div>
        ) : (
          <>
            {/* Daily Challenge Notification */}
            <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-warning/10 p-2">
                  <Zap className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <Label className="font-medium">{t('dailyChallengeNotification')}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t('dailyChallengeNotificationDesc')}
                  </p>
                </div>
              </div>
              <Switch
                checked={settings.dailyChallengeEnabled}
                onCheckedChange={handleDailyChallengeToggle}
              />
            </div>

            {/* Bible Study Reminder */}
            <div className="space-y-4 rounded-lg border p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-info/10 p-2">
                    <BookOpen className="h-5 w-5 text-info" />
                  </div>
                  <div>
                    <Label className="font-medium">{t('bibleStudyReminder')}</Label>
                    <p className="text-sm text-muted-foreground">
                      {t('bibleStudyReminderDesc')}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={settings.bibleStudyEnabled}
                  onCheckedChange={handleBibleStudyToggle}
                />
              </div>

              {settings.bibleStudyEnabled && (
                <div className="flex items-center gap-3 pl-11">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <Select
                    value={`${settings.bibleStudyTime.hour.toString().padStart(2, '0')}:${settings.bibleStudyTime.minute.toString().padStart(2, '0')}`}
                    onValueChange={handleTimeChange}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timeOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;