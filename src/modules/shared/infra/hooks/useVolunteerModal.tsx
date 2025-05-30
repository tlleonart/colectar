"use client";

import { useModal } from "./useModal";

export const useVolunteerModal = () => {
  const { isOpen, setIsOpen, open, close } = useModal("volunteer-modal");

  return {
    isOpen,
    setIsOpen,
    open,
    close,
  };
};
