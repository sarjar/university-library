import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { getInitials } from '@/lib/utils';
import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback } from './ui/avatar';

const Header = ({ session }: { session: Session }) => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row gap-8">
        <li>
          <Link className="flex flex-row items-center" href="/my-profile">
            <Avatar>
              <AvatarFallback className="text-primary bg-primary/10">
                {getInitials(session?.user?.name || '')}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
