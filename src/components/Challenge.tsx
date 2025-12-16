import { LiaMountainSolid } from 'react-icons/lia';
import Image from 'next/image';

function Challenge() {
  return (
    <>
      <div className="bg-[#32578f] py-12 text-white px-8">
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
                number of ascents! Whether you want to ride one climb or several, you can be part of this event and help
                support Mid City Mutt Mamas. The more riders we have, the more awareness we can raise for this great
                cause. Look for the meetup link closer to the event date.
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

      <div className="relative py-12 px-4">
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
            <li>Date: December 20th, 2025 starting at 5:30AM CST</li>
            <li>Platform: Zwift</li>
            <li>Live Stream: Full coverage on YouTube</li>
          </ul>
        </div>
      </div>
      <div className="bg-white px-8">
        <p className="text-xl text-gray-700 py-12 max-w-3xl mx-auto">
          This challenge is not just about the physical achievement - it&apos;s about raising awareness and support for
          Mid City Mutt Mamas. Every pedal stroke and every foot of elevation gained will help provide care for animals
          in need. Join me on this journey, either by watching the live stream or by making a donation to support this
          worthy cause.
        </p>
      </div>
    </>
  );
}

export default Challenge;
