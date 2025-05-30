"use client";

import { FC, useState } from "react";
import { colectarPoints } from "./colectar-points";
import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/modules/shared/components/ui/button";

export const ColectarPointsLocationList: FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="space-y-4 pr-2 custom-scrollbar">
        {colectarPoints.map((point, index) => (
          <div
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4"
            style={{ borderLeftColor: point.color }}
            onClick={() =>
              setActivePoint(point.id === activePoint ? null : point.id)
            }
            key={index}
          >
            <div className="flex items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                style={{ backgroundColor: point.color }}
              >
                <MapPin className="text-white" size={18} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{point.nombre}</h4>
                <p className="text-gray-600">{point.direccion}</p>

                {activePoint === point.id && (
                  <div className="mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          `https://maps.google.com/?q=${point.lat},${point.lng}`,
                          "_blank"
                        );
                      }}
                    >
                      Ver en Google Maps
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
