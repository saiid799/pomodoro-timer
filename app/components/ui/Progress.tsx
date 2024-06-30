import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const progressVariants = cva(
  "w-full h-2 bg-secondary rounded-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-secondary",
        success: "bg-green-200",
        warning: "bg-yellow-200",
        danger: "bg-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, variant, value, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(progressVariants({ variant }), className)}
        {...props}
      >
        <div
          className="h-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${value}%` }}
        />
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress, progressVariants };
