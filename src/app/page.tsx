import Image from 'next/image';
import { LiaMountainSolid } from 'react-icons/lia';

export default function Home() {
  return (
    <>
      <head>
        <title>Everesting 4 Rescues</title>
        <meta
          name="description"
          content="Join Steven Scaffidi's virtual Everest challenge to support Mid City Mutt Mamas animal shelter"
        />
      </head>
      <div>
        {/* Hero Section - Above the Fold */}
        <div className="relative bg-[url(/images/hero.jpg)] bg-cover bg-center text-white">
          <div className="relative">
            {/* Header with Logo */}
            <div className="mb-8 bg-black/15 py-4">
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
                  <a href="#" className="text-white hover:text-blue-200 transition-colors">
                    Watch Live
                  </a>
                  <a
                    href="https://www.midcitymutt.org/"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto items-center">
              <div className="text-left">
                <h1 className="text-6xl font-bold text-white text-center text-shadow-lg">
                  vEveresting for Rescue Dogs
                </h1>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/25 backdrop-blur-xl rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-200">29,029</div>
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
            <div className="relative py-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-center container mx-auto">
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

        <div className="bg-white py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-xl mb-6 text-black">
                Join me on December 20th as I attempt to climb 29,029 ft on Alpe du Zwift to support{' '}
                <a
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.midcitymutt.org"
                >
                  Mid City Mutt Mamas
                </a>
                . Zwift users are welcome to join for as many ascents as they&apos;d like! (No Sherpas required 🏔️)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg text-center"
                >
                  Watch Live on YouTube
                </a>
                <a
                  href="#"
                  className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg text-center"
                >
                  Join on Zwift
                </a>
                <a
                  href="https://www.midcitymutt.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg text-center"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Details Section */}

        <div className="bg-[#32578f] py-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 flex items-center gap-2">
              <LiaMountainSolid className="inline-block text-6xl" />
              The Challenge
            </h2>
            <div className="space-y-6">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-semibold mb-3">What is Virtual Everesting?</h3>
                <p className="text-lg mb-4">
                  A virtual Everest challenge involves climbing the equivalent height of Mount Everest (29,029 ft /
                  8,848m) in a single ride on a smart trainer. Think of it as climbing Everest, but with better WiFi and
                  no risk of frostbite. This is one of cycling&apos;s toughest endurance challenges, typically taking
                  10-12 hours to complete at high power output. It requires not just physical strength, but also mental
                  fortitude, careful nutrition management, and strategic pacing.
                </p>

                <h3 className="text-2xl font-semibold mb-3">Join the Challenge</h3>
                <p className="text-lg mb-4">
                  While I&apos;ll be attempting the full Everest challenge, Zwift users are welcome to join me for any
                  number of ascents! Whether you want to ride one climb or several, you can be part of this event and
                  help support Mid City Mutt Mamas. The more riders we have, the more awareness we can raise for this
                  great cause. Look for the meetup link closer to the event date.
                </p>

                <h3 className="text-2xl font-semibold mb-3">The Route: Alpe du Zwift</h3>
                <p className="text-lg">
                  I&apos;ll be tackling this challenge on the iconic Alpe du Zwift, a virtual climb that mirrors the
                  famous Alpe d&apos;Huez. Each ascent of Alpe du Zwift gains approximately 3,415 ft (1,041m) of
                  elevation. To reach Everest&apos;s height, I&apos;ll need to complete 8.5 ascents of this virtual
                  mountain, totaling over 29,000 ft of climbing. I&apos;ll be maintaining a high power output throughout
                  the challenge to complete it in 10-12 hours. (Yes, I&apos;ve been told this is a bit crazy 🤪)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-12">
          <Image
            src="/images/challenge-details.png"
            alt="Challenge Details"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            width={1500}
            height={1500}
          />
          <div className="container mx-auto text-center font-bold text-shadow-lg text-white relative z-10">
            <h4 className="text-4xl mb-3">Challenge Details</h4>
            <ul className="space-y-2 text-lg list-none">
              <li>Total Elevation: 29,029 ft (8,848m)</li>
              <li>Number of Ascents: 8.5 times up Alpe du Zwift</li>
              <li>Elevation per Ascent: 3,415 ft (1,041m)</li>
              <li>Expected Duration: 10-12 hours (Please send coffee ☕)</li>
              <li>Date: December 20th, 2025</li>
              <li>Platform: Zwift</li>
              <li>Live Stream: Full coverage on YouTube</li>
            </ul>
          </div>
        </div>

        <div className="bg-white">
          <p className="text-xl text-gray-700 py-12 max-w-3xl mx-auto">
            This challenge is not just about the physical achievement - it&apos;s about raising awareness and support
            for Mid City Mutt Mamas. Every pedal stroke and every foot of elevation gained will help provide care for
            animals in need. Join me on this journey, either by watching the live stream or by making a donation to
            support this worthy cause.
          </p>
        </div>

        {/* Mid City Mutt Mamas Section - Full Width */}
        <div className="bg-[#dde1ec] py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-6">Support Mid City Mutt Mamas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-gray-700 mb-6">
                      Mid City Mutt Mamas is dedicated to rescuing and giving second chances to homeless and displaced
                      canine community members. Every dog, puppy and senior alike, deserves a fair chance at a caring
                      and joyful life. 100% of all donations will go directly to supporting their mission.
                    </p>
                    <a
                      href="https://www.midcitymutt.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Visit Mid City Mutt Mamas
                    </a>
                  </div>
                  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/shelter-placeholder.jpg"
                      alt="Mid City Mutt Mamas Animal Shelter"
                      className="object-cover w-full h-full"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-8 bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex-shrink-0">
              {/* Placeholder for profile image */}
            </div>
            <div className="text-left">
              <p className="text-lg text-gray-700 mb-4">
                As a software architect in fintech and an avid cyclist, I&apos;m combining my passion for technology and
                cycling to make a difference. This virtual Everest challenge is not just about the physical achievement,
                but about raising awareness and support for Mid City Mutt Mamas.
              </p>
              <p className="text-lg text-gray-700">
                Follow my journey on YouTube as I stream the entire event live on December 20th. Your support and
                encouragement will help me push through this challenging ride! (Virtual high-fives welcome 🖐️)
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Watch the live stream on December 20th and help us make a difference!
          </p>
          <div className="space-x-4">
            <a
              href="#"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors mb-4 sm:mb-0"
            >
              YouTube Live Stream
            </a>
            <a
              href="https://www.midcitymutt.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About Section */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Everesting 4 Rescues</h3>
                <p className="text-gray-400 mb-4">
                  A virtual Everest challenge to support Mid City Mutt Mamas animal shelter. Join us on December 20th as
                  we climb 29,029 ft on Alpe du Zwift.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.midcitymutt.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Mid City Mutt Mamas</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Watch Live
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Join on Zwift
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.midcitymutt.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Donate
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.midcitymutt.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Mid City Mutt Mamas
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Steven Scaffidi</li>
                  <li>
                    <a href="mailto:contact@everesting4rescues.com" className="hover:text-white transition-colors">
                      contact@everesting4rescues.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Everesting 4 Rescues. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0">
                  <p className="text-gray-400 text-sm">Made with ❤️ for Mid City Mutt Mamas</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
