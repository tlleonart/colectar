import { FC } from "react";

export const ColectarPointsHeading: FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-semibold mb-6">Puntos Colectar</h2>
      <p className="text-xl text-gray-700 mb-4">
        Son puntos aliados, distribuidos en distintos espacios geográficos de la
        ciudad, que tienen como objetivo garantizar la accesibilidad para todo
        aquel que quiera colaborar.
      </p>
      <p className="text-lg text-gray-600">
        Actualmente, Colectar cuenta con 6 puntos en la ciudad a donde podés
        acercarte a realizar donaciones. Estos espacios funcionan como lugares
        de recepción, ya que luego nosotras nos encargamos de pasarlo a buscar y
        distribuirlo hacia las personas que más lo necesitan, sin intermediarios
        de por medio.
      </p>
    </div>
  );
};
