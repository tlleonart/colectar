"use client";

import { Button } from "@/modules/shared/components/ui/button";
import { Mail, Plus } from "lucide-react";
import { FC } from "react";

export const ColectarPointsCallToAction: FC = () => {
  return (
    <div className="mt-16 bg-[#4ECDC4] rounded-lg p-8 text-white text-center relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4">
          ¿Querés sumarte y ser un Punto Colectar?
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Si tenés un espacio y querés ser parte de nuestra red de puntos de
          donación, escribinos y te contamos cómo sumarte a esta iniciativa
          solidaria.
        </p>
        <Button
          className="bg-white text-[#4ECDC4] hover:bg-white/90 cursor-pointer"
          onClick={() =>
            (window.location.href = "mailto:colectar.ros@gmail.com")
          }
        >
          <Mail className="mr-2 h-4 w-4" />
          Escribinos a colectar.ros@gmail.com
        </Button>
      </div>

      <div className="absolute top-0 right-0 w-40 h-40 bg-[#1A535C]/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFD166]/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white/10 rounded-full"></div>

      <Plus className="absolute top-10 left-10 text-white/20" size={24} />
      <Plus className="absolute bottom-12 right-16 text-white/20" size={16} />
      <Plus className="absolute top-1/2 right-10 text-white/20" size={20} />
    </div>
  );
};
