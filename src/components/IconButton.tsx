import React from "react";

export interface IconButtonProps extends React.ComponentPropsWithoutRef<"a"> {}

export const IconButton = ({ children }: IconButtonProps) => {
  return <a className="join-item btn btn-sm btn-ghost">{children}</a>;
};
