"use client";

import { FC } from "react";
import { Button } from "@/modules/shared/components/ui/button";
import { donate } from "@/app/actions";

export const DonateOneTimeForm: FC = () => {
  return (
    <form className="flex flex-col gap-4" action={donate}>
      <input
        placeholder="Ingresá un monto."
        className="outline-1 p-1 placeholder:text-sm"
        name="amount"
      />
      <Button
        type="submit"
        variant="outline"
        className="rounded-none cursor-pointer"
      >
        Donación única
      </Button>
    </form>
  );
};
