"use client";

import { FC } from "react";
import { Button } from "./button";
import { useVolunteerModal } from "../../infra/hooks/useVolunteerModal";

export const VolunteerButton: FC = () => {
  const { open } = useVolunteerModal();

  return (
    <Button
      className="rounded-none h-full text-black hover:bg-transparent duration-700 hover:text-white cursor-pointer transition-all"
      variant="outline"
      onClick={() => {
        open();
      }}
    >
      SER VOLUNTARIO
    </Button>
  );
};
