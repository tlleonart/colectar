"use client";

import { FC } from "react";
import { useVolunteerModal } from "../../infra/hooks/useVolunteerModal";
import { VolunteerForm } from "../forms/VolunteerForm";
import { Modal } from "./base-modal";

export const VolunteerModal: FC = () => {
  const { isOpen, setIsOpen } = useVolunteerModal();

  return (
    <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Convertite en voluntario."
      description="Decinos cómo te gustaría colaborar con nosotros."
    >
      <VolunteerForm />
    </Modal>
  );
};
