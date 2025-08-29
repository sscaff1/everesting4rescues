import Image from 'next/image';
import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction';
import Challenge from '@/components/Challenge';
import CallToActionButtons from '@/components/CallToActionButtons';
import { MID_CITY_MUTT_MAMAS_URL } from '@/constants';

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
        <Hero />
        <CallToAction />
        <Challenge />
        {/* Mid City Mutt Mamas Section - Full Width */}
        <div className="bg-[#dde1ec] py-8 text-[#202d46]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-[1.5]">
                <h2 className="text-3xl font-bold">Support Mid City Mutt Mamas</h2>
                <div>
                  <p className="text-lg my-6">
                    Mid City Mutt Mamas is dedicated to rescuing and giving second chances to homeless and displaced
                    canine community members. Every dog, puppy and senior alike, deserves a fair chance at a caring and
                    joyful life. 100% of all donations will go directly to supporting their mission.
                  </p>
                  <a
                    href={MID_CITY_MUTT_MAMAS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#202d46] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Visit Mid City Mutt Mamas
                  </a>
                </div>
              </div>
              <div className="relative aspect-auto rounded-lg overflow-hidden flex-1 max-h-[400px]">
                <Image
                  src="/images/midcity-dog.jpg"
                  alt="Mid City Mutt Mamas Animal Shelter"
                  className="object-cover w-full h-full"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-white py-12 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pl-4">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image src="/images/profile.jpg" alt="Profile" width={192} height={192} className="rounded-full" />
              <div className="text-left">
                <p className="text-lg text-gray-700 mb-4">
                  As a software architect in fintech and an avid cyclist, I&apos;m combining my passion for technology
                  and cycling to make a difference. This virtual Everest challenge is not just about the physical
                  achievement, but about raising awareness and support for Mid City Mutt Mamas.
                </p>
                <p className="text-lg text-gray-700">
                  Follow my journey on YouTube as I stream the entire event live on December 20th. Your support and
                  encouragement will help me push through this challenging ride! (Virtual high-fives welcome 🖐️)
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="text-center bg-white">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the Journey</h2>
              <p className="text-xl text-gray-600 mb-8">
                Watch the live stream on December 20th and help us make a difference!
              </p>
              <div className="max-w-4xl mx-auto">
                <CallToActionButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
