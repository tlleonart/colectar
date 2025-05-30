"use client";

import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "./button";
import { cn } from "@/modules/shared/lib/utils";
import { useDonateModal } from "../../infra/hooks/useDonateModal";

interface DonateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "donate" | "join";
  size?: "sm" | "md" | "lg";
}

const labels = {
  donate: "DONAR",
  join: "SUMATE",
};

export const DonateButton: FC<DonateButtonProps> = ({
  variant = "donate",
  size = "md",
  className,
  ...props
}) => {
  const { open } = useDonateModal();

  return (
    <Button
      className={cn(
        variant === "donate" &&
          "rounded-none h-full bg-transparent transition-all duration-700",
        variant === "join" && "rounded-none w-2/3 p-6",
        "cursor-pointer",
        size === "lg" && "p-4 text-lg",
        className
      )}
      variant="outline"
      {...props}
      onClick={() => {
        open();
      }}
    >
      {labels[variant]}
    </Button>
  );
};
