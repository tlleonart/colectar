import { FC } from "react";
import { Button } from "@/modules/shared/components/ui/button";

const navigationLinks = [
  "Quiénes somos",
  "Qué hacemos",
  "Puntos Colectar",
  "Empresa",
  "Eventos",
  "Contacto",
];

export const HeaderNavigation: FC = () => {
  return (
    <div className="flex justify-between">
      {navigationLinks.map((link, index) => (
        <Button
          key={index}
          className="h-full rounded-none text-white cursor-pointer"
          variant="link"
        >
          {link}
        </Button>
      ))}
    </div>
  );
};
