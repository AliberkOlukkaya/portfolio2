"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ProjectTabButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: React.ReactNode;
    active?: boolean;
  };

const ProjectTabButton = React.forwardRef<
  HTMLButtonElement,
  ProjectTabButtonProps
>(
  (
    {
      icon,
      children,
      active = false,
      className,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          `
          relative z-0 flex h-14 w-[320px] shrink-0 cursor-pointer
          items-center justify-center gap-2 overflow-hidden rounded-lg
          border px-6 py-3 font-semibold text-white

          transition-all duration-500

          before:absolute before:inset-0 before:-z-10
          before:translate-x-[150%] before:translate-y-[150%]
          before:scale-[2.5] before:rounded-full
          before:bg-purple-600
          before:transition-transform before:duration-1000
          before:ease-[cubic-bezier(0.16,1,0.3,1)]
          before:content-['']

          hover:scale-[1.03]
          hover:border-purple-400
          hover:before:translate-x-0
          hover:before:translate-y-0

          active:scale-[0.97]

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-purple-400
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#090713]
          `,
          active
            ? `
              border-purple-400
              bg-[#1b1629]
              shadow-[0_0_24px_-8px_rgba(168,85,247,0.8)]
            `
            : `
              border-white/10
              bg-[#171326]
              text-zinc-200
            `,
          className,
        )}
        {...props}
      >
        {icon && <span className="relative z-10">{icon}</span>}

        <span className="relative z-10 whitespace-nowrap text-sm">
          {children}
        </span>

        {active && (
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-x-8 bottom-0 z-10 h-px
              bg-gradient-to-r
              from-transparent via-purple-200 to-transparent
            "
          />
        )}
      </button>
    );
  },
);

ProjectTabButton.displayName = "ProjectTabButton";

export default ProjectTabButton;