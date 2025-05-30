"use client";

import { useModal } from "./useModal";

export const useDonateModal = () => {
  const { isOpen, setIsOpen, open, close } = useModal("donate-modal");

  return {
    isOpen,
    setIsOpen,
    open,
    close,
  };
};
