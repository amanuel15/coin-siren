import Image from "next/image";

import LogoWhite from "../../public/logo_white.png";

export default function Navbar() {
  return (
    <div className="flex flex-row gap-4 items-center py-4">
      <Image src={LogoWhite} alt="logo-white" />
      <h3 className="text-primary-foreground">Hyperhire</h3>
    </div>
  );
}
