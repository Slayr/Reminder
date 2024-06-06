import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "frequency";

export const NotificationTitle = (record: TNotification): string => {
  return record.frequency?.toString() || String(record.id);
};
