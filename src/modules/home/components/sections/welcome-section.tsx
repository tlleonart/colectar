import { FC, Suspense } from "react";
import { DonateButton } from "@/modules/shared/components/ui/donate-button";

export const WelcomeSection: FC = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="container mx-auto text-white p-24 mt-20">
        <h1 className="text-6xl font-semibold">Colectar</h1>
        <p className="text-4xl">Hasta que todo sea como lo soñamos</p>
        <Suspense>
          <DonateButton size="lg" className="mt-4" />
        </Suspense>
      </div>
    </section>
  );
};
