import Logo from '../../../../public/skillgaplogoblack.svg'
import Image from 'next/image';

export default function TestimonialSection() {
    return (
      <section className="w-full py-20 flex flex-col justify-center bg-white text-black border-b-[1px] border-black">
        <div className="flex flex-row overflow-hidden">
          {/* Animated Slider */}
          <div className='flex flex-row animate-slide-infinite'>
            <div className='w-screen px-28 flex flex-row justify-between'>
              {/* Review Block */}
              <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='w-32 h-32 rounded-full bg-gray-500 border-[1px] border-Secondary-100'/>
                <p className='text-2xl font-semibold uppercase'>Gamertag</p>
                <p>Rank - Rank</p>
              </div>
              {/* Review Block */}
              <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='w-32 h-32 rounded-full bg-gray-500 border-[1px] border-Secondary-100'/>
                <p className='text-2xl font-semibold uppercase'>Gamertag</p>
                <p>Rank - Rank</p>
              </div>
              {/* Review Block */}
              <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='w-32 h-32 rounded-full bg-gray-500 border-[1px] border-Secondary-100'/>
                <p className='text-2xl font-semibold uppercase'>Gamertag</p>
                <p>Rank - Rank</p>
              </div>
              {/* Review Block */}
              <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='w-32 h-32 rounded-full bg-gray-500 border-[1px] border-Secondary-100'/>
                <p className='text-2xl font-semibold uppercase'>Gamertag</p>
                <p>Rank - Rank</p>
              </div>
            </div>

            <div className='w-screen px-28 flex flex-row justify-between'>
              {/* Review Block */}
              <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='w-32 h-32 rounded-full bg-gray-500 border-[1px] border-Secondary-100'/>
                <p className='text-2xl font-semibold uppercase'>Gamertag</p>
                <p>Rank - Rank</p>
              </div>
              {/* Review Block */}
              <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='w-32 h-32 rounded-full bg-gray-500 border-[1px] border-Secondary-100'/>
                <p className='text-2xl font-semibold uppercase'>Gamertag</p>
                <p>Rank - Rank</p>
              </div>
              {/* Review Block */}
              <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='w-32 h-32 rounded-full bg-gray-500 border-[1px] border-Secondary-100'/>
                <p className='text-2xl font-semibold uppercase'>Gamertag</p>
                <p>Rank - Rank</p>
              </div>
              {/* Review Block */}
              <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='w-32 h-32 rounded-full bg-gray-500 border-[1px] border-Secondary-100'/>
                <p className='text-2xl font-semibold uppercase'>Gamertag</p>
                <p>Rank - Rank</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }