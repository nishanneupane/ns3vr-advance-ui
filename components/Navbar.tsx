import { SignedIn } from "@clerk/nextjs";
import NavContent from "./NavContent";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div className="p-5 px-12 border-b s">
      <div className="flex items-center justify-between space-x-4">
        <NavContent />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
