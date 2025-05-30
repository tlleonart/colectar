import { FC, Suspense } from "react";
import { HeaderLogo } from "./header-logo";
import { HeaderNavigation } from "./header-navigation";
import { DonateButton } from "@/modules/shared/components/ui/donate-button";
import { VolunteerButton } from "@/modules/shared/components/ui/volunteer-button";

export const Header: FC = () => {
  return (
    <header className="absolute top-0 z-50 backdrop-blur-sm px-4 py-4 md:py-5 md:px-6 lg:px-8 shadow-md w-full text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <HeaderLogo />
        </div>
        <div>
          <HeaderNavigation />
        </div>
        <Suspense>
          <div>
            <DonateButton />
            <VolunteerButton />
          </div>
        </Suspense>
      </div>
    </header>
  );
};
