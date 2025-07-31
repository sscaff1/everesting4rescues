import Image from 'next/image';
import CountUp from '@/components/CountUp';
import { YOUTUBE_URL, DONATION_URL } from '@/constants';

function Hero() {
  return (
    <div className="relative bg-[url(/images/hero.jpg)] bg-cover bg-center text-white">
      <div className="relative">
        {/* Header with Logo */}
        <div className="mb-8 bg-black/15 py-4 px-8">
          <div className="container mx-auto flex items-center justify-between ">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/logo.png"
                alt="Everesting 4 Rescues Logo"
                className="w-24 h-24 rounded-full"
                width={96}
                height={96}
              />
              <span className="text-xl font-bold hidden sm:block">Climbing Mount Everest on a Trainer</span>
            </div>
            <div className="flex space-x-4">
              <a href={YOUTUBE_URL} className="text-white hover:text-blue-200 transition-colors">
                Watch Live
              </a>
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto items-center px-8">
          <div className="text-left">
            <h1 className="text-3xl sm:text-6xl font-bold text-white text-center text-shadow-lg">
              vEveresting for Rescue Dogs
            </h1>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/25 backdrop-blur-xl rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-200 tabular-nums">
                <CountUp from={0} to={29029} separator="," direction="up" duration={0.3} className="count-up-text" />
              </div>
              <div className="text-blue-100">Feet to Climb</div>
            </div>
            <div className="bg-black/25 backdrop-blur-xl rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-200">8.5</div>
              <div className="text-blue-100">Alpe du Zwift Ascents</div>
            </div>
            <div className="bg-black/25 backdrop-blur-xl rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-200">10-12</div>
              <div className="text-blue-100">Hours of Riding</div>
            </div>
            <div className="bg-black/25 backdrop-blur-xl rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-blue-100">To Mid City Mutt Mamas</div>
            </div>
          </div>
        </div>
        {/* Quick Info Bar */}
        <div className="relative py-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-center container mx-auto px-8">
          <div className="bg-black/25 backdrop-blur-xl rounded-lg p-3">
            <span className="text-blue-200">🎥 Live Stream:</span> Full coverage on YouTube
          </div>
          <div className="bg-black/25 backdrop-blur-xl rounded-lg p-3">
            <span className="text-blue-200">📅 Date:</span> December 20th, 2025
          </div>
          <div className="bg-black/25 backdrop-blur-xl rounded-lg p-3">
            <span className="text-blue-200">🎯 Goal:</span> Support Mid City Mutt Mamas
          </div>
          <div className="bg-black/25 backdrop-blur-xl rounded-lg p-3">
            <span className="text-blue-200">🚴 Join:</span> Ride with me on Zwift
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
