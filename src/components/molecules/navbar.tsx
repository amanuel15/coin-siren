import Image from 'next/image';

import LogoWhite from '../../public/logo_white.png';
import { Button } from '../ui/button';
import PortalDropdown from './portal-dropdown';

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 md:flex md:flex-row md:justify-between md:items-center">
      <div className=" flex flex-row gap-4 items-center py-4">
        <Image src={LogoWhite} alt="logo-white" />
        <h3 className="text-primary-foreground">Hyperhire</h3>
      </div>
      <PortalDropdown className="hidden md:block" />
      <Button className="hidden md:block bg-primary-foreground text-primary hover:bg-primary-foreground/80">
        문의하기
      </Button>
    </div>
  );
}
