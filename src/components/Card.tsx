import { CardProps } from "./Card.types";
import * as HoverCard from "@radix-ui/react-hover-card";
import { HoverToolbar } from "./HoverToolbar";

export const Card = ({ children, ...htmlProps }: CardProps) => {
  return (
    <HoverCard.Root openDelay={300}>
      <HoverCard.Trigger asChild>
        <div
          className="card w-96 card-bordered bg-base-100 shadow-xl px-lg cursor-pointer hover:bg-sky-700/25"
          {...htmlProps}
        >
          <div className="card-body">{children}</div>
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          side="right"
          align="center"
          avoidCollisions={false}
          sideOffset={-200}
        >
          <HoverToolbar>Content</HoverToolbar>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
