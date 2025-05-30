"use client";

import { FC } from "react";
import { useDonateModal } from "@/modules/shared/infra/hooks/useDonateModal";
import { Modal } from "./base-modal";
import { DonateOneTimeForm } from "@/modules/shared/components/forms/DonateOneTimeForm";
import { DonateRecurrentForm } from "@/modules/shared/components/forms/DonateRecurrentForm";

export const DonateModal: FC = () => {
  const { isOpen, setIsOpen } = useDonateModal();

  return (
    <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Hacé tu donación."
      description="Seleccioná de que forma querés hacer tu donación."
    >
      <div className="flex justify-center align-middle items-start gap-8">
        <div className="h-full justify-between flex flex-col w-1/2 gap-10">
          <div>
            <h1 className={`text-xl`}>Donación única.</h1>
            <p className="text-sm">Doná por única vez, el monto que quieras.</p>
          </div>
          <DonateOneTimeForm />
        </div>
        <div className="h-full justify-between flex flex-col w-1/2 gap-10">
          <div>
            <h1 className={`text-xl`}>Donación mensual.</h1>
            <p className="text-sm">Doná mensualmente, el monto que quieras.</p>
          </div>
          <DonateRecurrentForm />
        </div>
      </div>
    </Modal>
  );
};
