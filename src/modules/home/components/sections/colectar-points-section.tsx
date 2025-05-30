import { FC } from "react";
import { ColectarPointsHeading } from "./colectar-points-heading";
import { ColectarPointsLocationList } from "./colectar-points-location-list";
import { ColectarPointsCallToAction } from "./colectar-points-call-to-action";

export const ConlectarPointsSection: FC = () => {
  return (
    <section id="colectar-points" className="p-10 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <ColectarPointsHeading />
        <ColectarPointsLocationList />
        <ColectarPointsCallToAction />
      </div>
    </section>
  );
};
