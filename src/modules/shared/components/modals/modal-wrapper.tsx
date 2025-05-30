import { FC } from "react";
import { DonateModal } from "./donate-modal";
import { VolunteerModal } from "./volunteer-modal";

export const ModalWrapper: FC = () => {
  return (
    <>
      <DonateModal />
      <VolunteerModal />
    </>
  );
};
