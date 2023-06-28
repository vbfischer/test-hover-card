import React from "react";

export interface ViewContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export const ViewContainer = ({
  children,
  ...htmlProps
}: ViewContainerProps) => {
  return (
    <div {...htmlProps} className="container mx-auto">
      {children}
    </div>
  );
};
