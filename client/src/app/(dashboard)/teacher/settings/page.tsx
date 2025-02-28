import SharedNotificationSettings from "@/components/SharedNotificationSettings";
import React from "react";
export const TeacherSettings = () => {
  return (
    <div className="w-3/5">
      <SharedNotificationSettings
        title="Teacher Settings"
        subtitle="Manage your notification settings"
      />
    </div>
  );
};
export default TeacherSettings;
