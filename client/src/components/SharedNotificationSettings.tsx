/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useUser } from "@clerk/nextjs";
export const SharedNotificationSettings = ({
  title = "Notification Settings",
  subtitle = "Manage your notification settings here",
}: SharedNotificationSettingsProps) => {
  const { user } = useUser();
  const [updateUser] = 

  return <div>SharedNotificationSettings</div>;
};

export default SharedNotificationSettings;
