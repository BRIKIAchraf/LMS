/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import SharedNotificationSettings from "@/components/SharedNotificationSettings";
export const UserSettings = () => {
  return (
    <div className="w-3/5">
      <SharedNotificationSettings
        title="User Settings"
        subtitle="Manage your notification settings"
      />
    </div>
  );
};

export default UserSettings;
