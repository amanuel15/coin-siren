'use client';

import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export default function PortalDropdown({ className }: { className?: string }) {
  const [show, setShow] = useState<string | boolean>(false);
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="text-primary-foreground font-semibold" variant="ghost">
            채용 <IoIosArrowDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuCheckboxItem checked={show === 'a'} onCheckedChange={(val) => setShow(val && 'a')}>
            해외 개발자 원격 채용
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={show === 'b'} onCheckedChange={(val) => setShow(val && 'b')}>
            외국인 원격 채용 (비개발 직군)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={show === 'c'} onCheckedChange={(val) => setShow(val && 'c')}>
            한국어 가능 외국인 채용
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
