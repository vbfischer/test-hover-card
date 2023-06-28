import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Settings } from "./Settings";
import {
  FaBeer,
  FaPrint,
  FaAngleDown,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { IconButton } from "./IconButton";

export interface HoverToolbarProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export const HoverToolbar = (_: HoverToolbarProps) => {
  return (
    <div
      data-attr-hover-toolbar
      className="navbar bg-base-100 rounded-box shadow-xl rounded-box"
    >
      <div className="flex gap-2">
        <Popover.Root>
          <Popover.Trigger asChild>
            <div className="join join-horizontal">
              <IconButton>
                <FaPrint />
              </IconButton>
              <IconButton>
                <FaAngleDown />
              </IconButton>
            </div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.PopoverContent
              sideOffset={16}
              className="dropdown-content shadow menu p-16 bg-base-200 rounded-box"
            >
              <Settings />
              <Popover.Arrow />
            </Popover.PopoverContent>
          </Popover.Portal>
        </Popover.Root>
        <IconButton>
          <FaEnvelope />
        </IconButton>
        <IconButton>
          <FaCheckCircle />
        </IconButton>
      </div>
    </div>
  );
};
