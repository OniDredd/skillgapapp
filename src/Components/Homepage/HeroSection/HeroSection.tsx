import Link from "next/link";
import Banner from '../../../../public/homebanner.png'

export default function HeroSection() {
    return (
      <section className="w-full py-40 px-32 flex flex-col justify-cente border-b-[1px] border-black bg-cover bg-homebanner bg-opacity-50">
        <div className=" w-6/12 flex flex-col space-y-10">
          <h1 className="font-heading uppercase font-black text-6xl text-black">
            Master the Journey: From Novice to Pro
          </h1>
          <p className="text-black">
            Welcome to Skill-Gap: Your bridge to mastery in fighting games, leveling the playing field 
            with seasoned players. Providing players with an efficient, structured, and seamless learning journey.
          </p>
          <Link className="py-2 px-10 self-start bg-black text-white rounded-sm uppercase hover:bg-Secondary-100 duration-200" href="/">Learn More</Link>
        </div>
      </section>
    );
  }