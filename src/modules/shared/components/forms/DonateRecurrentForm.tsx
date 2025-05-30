import { FC } from "react";
import { Button } from "@/modules/shared/components/ui/button";
import { donate } from "@/app/actions";

export const DonateRecurrentForm: FC = () => {
  return (
    <form className="flex flex-col gap-4 h-full" action={donate}>
      <input
        placeholder="Ingresá un monto."
        className="outline-1 p-1 placeholder:text-sm"
      />
      <Button
        type="submit"
        variant="outline"
        className="rounded-none cursor-pointer"
      >
        Doná mensualmente.
      </Button>
    </form>
  );
};
