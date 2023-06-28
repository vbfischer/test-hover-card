import React from "react";

export interface LayoutProps extends React.ComponentPropsWithoutRef<"div"> {}

export const Layout = ({ children, ...htmlProps }: LayoutProps) => {
  return (
    <div {...htmlProps} className="grid grid-cols-1 gap-4 my-16">
      {children}
    </div>
  );
};
