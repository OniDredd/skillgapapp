import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/skillgaplogoblack.svg";
import { BsTwitter, BsYoutube, BsInstagram, BsTiktok } from "react-icons/bs";


export default function Footer() {
    return (
      <footer className="w-full flex flex-col py-20 px-32 border-t-[1px] border-white bg-white text-black">
        <div className="w-[80vw] flex flex-row justify-between uppercase text-sm">
            <Image src={Logo} width={300} height={300} alt=""/>
            <div className="flex flex-col space-y-5">
              <h3 className="text-Secondary-100 font-bold mb-5">Explore</h3>
              <Link href="/pricing" className="hover:text-Secondary-100 duration-150">pricing</Link>
              <Link href="/about" className="hover:text-Secondary-100 duration-150">about</Link>
              <Link href="/" className="hover:text-Secondary-100 duration-150">faq</Link>
              <Link href="/" className="hover:text-Secondary-100 duration-150">support</Link>
            </div>
            <div className="flex flex-col space-y-5">
              <h3 className="text-Secondary-100 font-bold mb-5">About</h3>
              <Link href="/" className="hover:text-Secondary-100 duration-150">Privacy Policy</Link>
              <Link href="/" className="hover:text-Secondary-100 duration-150">Terms Of Service</Link>
              <Link href="/" className="hover:text-Secondary-100 duration-150">Accessibility Page</Link>
              <Link href="/" className="hover:text-Secondary-100 duration-150">Press or Media Page</Link>
              <Link href="/" className="hover:text-Secondary-100 duration-150">Security</Link>
            </div>
            <div className="flex flex-col space-y-5">
              <h3 className="text-Secondary-100 font-bold mb-5">Social</h3>
              <Link href="/" className="flex flex-row items-center hover:text-Secondary-100 duration-150"><BsTwitter/>&nbsp;twitter</Link>
              <Link href="/" className="flex flex-row items-center hover:text-Secondary-100 duration-150"><BsYoutube/>&nbsp;youtube</Link>
              <Link href="/" className="flex flex-row items-center hover:text-Secondary-100 duration-150"><BsInstagram/>&nbsp;instagram</Link>
              <Link href="/" className="flex flex-row items-center hover:text-Secondary-100 duration-150"><BsTiktok/>&nbsp;tiktok</Link>
            </div>
        </div>
        <div className="w-[80vw] h-[1px] my-20 bg-black"/>
        <p className="self-center text-center text-xs uppercase">2023 Skill-Gap©</p>
      </footer>
    );
  }