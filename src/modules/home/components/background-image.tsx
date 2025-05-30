import background from "@/modules/home/assets/background.jpg";
import Image from "next/image";
import { FC } from "react";

export const Background: FC = () => {
  return (
    <div className="absolute inset-0 z-0 h-screen">
      <Image
        src={background}
        alt="Background Image"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};
