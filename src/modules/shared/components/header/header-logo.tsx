import Link from "next/link";
import { FC } from "react";

export const HeaderLogo: FC = () => {
  return (
    <div className="flex justify-center align-middle items-center cursor-pointer">
      <Link href="/">
        <h1 className="text-2xl ml-4">C O L E C T A R</h1>
      </Link>
    </div>
  );
};
