import { FC } from "react";
import { Background } from "./background-image";
import { WelcomeSection } from "./sections/welcome-section";
import { ConlectarPointsSection } from "./sections/colectar-points-section";

export const Home: FC = () => {
  return (
    <main className="relative">
      <Background />
      <div className="relative z-10">
        <WelcomeSection />
        <ConlectarPointsSection />
      </div>
    </main>
  );
};
