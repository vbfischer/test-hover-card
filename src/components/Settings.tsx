import React from "react";

export interface SettingsProps extends React.ComponentPropsWithoutRef<"div"> {}

export const Settings = (_: SettingsProps) => {
  return <h2 className="prose lg:prose-xl">Settings</h2>;
};
