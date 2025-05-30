import { FC } from "react";
import { Button } from "@/modules/shared/components/ui/button";

export const VolunteerForm: FC = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        placeholder="Nombre"
        type="text"
        className="p-1 outline-1 placeholder:text-sm"
      />
      <input
        placeholder="Telefono"
        type="tel"
        className="p-1 outline-1 placeholder:text-sm"
      />
      <input
        placeholder="Correo electrónico"
        type="email"
        className="p-1 outline-1 placeholder:text-sm"
      />
      <input
        placeholder="Contanos cómo te gustaría colaborar"
        type="text"
        className="p-1 outline-1 placeholder:text-sm"
      />
      <Button
        type="submit"
        variant="outline"
        className="p-4 rounded-none cursor-pointer"
      >
        Enviar
      </Button>
    </form>
  );
};
