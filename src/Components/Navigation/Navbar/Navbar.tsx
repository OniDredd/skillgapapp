import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/skillgaplogoblack.svg";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center py-2 px-32 justify-between bg-white text-black border-black border-b-[1px]">
        <Link href="/"><Image src={Logo} width={175} height={175} alt=""/></Link>
      <div className="flex flex-row items-center space-x-12 text-sm font-medium uppercase">
            <Link href="/" className="hover:text-Secondary-100 duration-200">log in</Link>
            <Link className="py-2 px-5 bg-black text-white rounded-sm hover:bg-Secondary-100 duration-200" href="/register">sign up</Link>
      </div>
    </nav>
  );
}