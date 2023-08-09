import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";

interface INavbarProps {
  apiLimitCount: number;
}

const Navbar = ({ apiLimitCount = 0 }: INavbarProps) => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
