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
        <div className="relative bg-[url(images/hero.jpg)] bg-cover bg-center text-white">
          <div className="relative">
            {/* Header with Logo */}
            <div className="flex items-center justify-between mb-8 py-4 px-24 bg-black/15">
              <div className="flex items-center space-x-4">
                <img src="/images/logo.png" alt="Everesting 4 Rescues Logo" className="w-24 h-24 rounded-full" />
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
            {/* Main Hero Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto items-center">
              <div className="text-left">
                <h1 className="text-5xl font-bold mb-4">vEveresting for Mid City Mutt Mamas</h1>
                <p className="text-xl text-blue-200 mb-6">
                  Join me on December 20th as I attempt to climb 29,029 ft on Alpe du Zwift to support Mid City Mutt
                  Mamas animal shelter. Zwift users are welcome to join for as many ascents as they&apos;d like! (No
                  Sherpas required 🏔️)
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-200">29,029</div>
                  <div className="text-blue-100">Feet to Climb</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-200">8.5</div>
                  <div className="text-blue-100">Alpe du Zwift Ascents</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-200">10-12</div>
                  <div className="text-blue-100">Hours of Riding</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">100%</div>
                  <div className="text-blue-100">To Mid City Mutt Mamas</div>
                </div>
              </div>
            </div>
            {/* Quick Info Bar */}
            <div className="relative py-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-center container mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <span className="text-blue-200">🎥 Live Stream:</span> Full coverage on YouTube
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <span className="text-blue-200">📅 Date:</span> December 20th, 2025
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <span className="text-blue-200">🎯 Goal:</span> Support Mid City Mutt Mamas
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <span className="text-blue-200">🚴 Join:</span> Ride with me on Zwift
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Details Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">The Challenge</h2>
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">What is Virtual Everesting?</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    A virtual Everest challenge involves climbing the equivalent height of Mount Everest (29,029 ft /
                    8,848m) in a single ride on a smart trainer. Think of it as climbing Everest, but with better WiFi
                    and no risk of frostbite. This is one of cycling&apos;s toughest endurance challenges, typically
                    taking 10-12 hours to complete at high power output. It requires not just physical strength, but
                    also mental fortitude, careful nutrition management, and strategic pacing.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Join the Challenge</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    While I&apos;ll be attempting the full Everest challenge, Zwift users are welcome to join me for any
                    number of ascents! Whether you want to ride one climb or several, you can be part of this event and
                    help support Mid City Mutt Mamas. The more riders we have, the more awareness we can raise for this
                    great cause. Look for the meetup link closer to the event date.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Route: Alpe du Zwift</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    I&apos;ll be tackling this challenge on the iconic Alpe du Zwift, a virtual climb that mirrors the
                    famous Alpe d&apos;Huez. Each ascent of Alpe du Zwift gains approximately 3,415 ft (1,041m) of
                    elevation. To reach Everest&apos;s height, I&apos;ll need to complete 8.5 ascents of this virtual
                    mountain, totaling over 29,000 ft of climbing. I&apos;ll be maintaining a high power output
                    throughout the challenge to complete it in 10-12 hours. (Yes, I&apos;ve been told this is a bit
                    crazy 🤪)
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg mt-6">
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Challenge Details</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Total Elevation: 29,029 ft (8,848m)</li>
                      <li>• Number of Ascents: 8.5 times up Alpe du Zwift</li>
                      <li>• Elevation per Ascent: 3,415 ft (1,041m)</li>
                      <li>• Expected Duration: 10-12 hours (Please send coffee ☕)</li>
                      <li>• Date: December 20th, 2025</li>
                      <li>• Platform: Zwift</li>
                      <li>• Live Stream: Full coverage on YouTube</li>
                    </ul>
                  </div>

                  <p className="text-lg text-gray-700 mt-6">
                    This challenge is not just about the physical achievement - it&apos;s about raising awareness and
                    support for Mid City Mutt Mamas. Every pedal stroke and every foot of elevation gained will help
                    provide care for animals in need. Join me on this journey, either by watching the live stream or by
                    making a donation to support this worthy cause.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mid City Mutt Mamas Section - Full Width */}
        <div className="bg-green-50 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-xl p-8">
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
                    <img
                      src="/images/shelter-placeholder.jpg"
                      alt="Mid City Mutt Mamas Animal Shelter"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Section - Full Width */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">My Equipment</h2>
              <p className="text-sm text-gray-600 mb-6 italic">
                Note: All equipment links are affiliate links. Any purchases made through these links will help support
                Mid City Mutt Mamas at no additional cost to you.
              </p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Bike Setup</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Frame:{' '}
                      <a
                        href="https://www.bikesdirect.com/products/motobecane/gran-premio-pro.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Gran Premio Pro (Bikes Direct)
                      </a>
                    </li>
                    <li>
                      • Saddle:{' '}
                      <a
                        href="https://www.amazon.com/s?k=128mm+bike+saddle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        128mm Ali Express Saddle
                      </a>
                    </li>
                    <li>
                      • Cranks:{' '}
                      <a
                        href="https://www.amazon.com/s?k=shimano+tiagra+165mm+crankset"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        165mm Shimano Tiagra
                      </a>
                    </li>
                    <li>
                      • Handlebars:{' '}
                      <a
                        href="https://www.amazon.com/s?k=38cm+carbon+handlebars"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        38cm Carbon Bars
                      </a>
                    </li>
                    <li>
                      • Stem:{' '}
                      <a
                        href="https://www.amazon.com/s?k=90mm+bike+stem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        90mm Stem
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Training Equipment</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Smart Trainer:{' '}
                      <a
                        href="https://www.amazon.com/Wahoo-KICKR-Smart-Trainer-Black/dp/B07DGR98VQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Wahoo Kickr Core
                      </a>
                    </li>
                    <li>
                      • Cooling:{' '}
                      <a
                        href="https://www.amazon.com/s?k=sharper+image+fly+01+fan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Sharper Image FLY 01 Fan
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">Cycling Kit</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Shoes:{' '}
                      <a
                        href="https://www.amazon.com/s?k=trek+rsl+road+shoes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Trek RSL Road
                      </a>
                    </li>
                    <li>
                      • Bibs:{' '}
                      <a
                        href="https://www.amazon.com/s?k=assos+bibs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Assos Bibs
                      </a>
                    </li>
                    <li>
                      • Jersey:{' '}
                      <a
                        href="https://www.tulanegear.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Custom Tulane Jersey
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  💝 <strong>Support Mid City Mutt Mamas:</strong> When you purchase any equipment through these links,
                  a portion of the sale will be donated to Mid City Mutt Mamas. This helps provide care and find homes
                  for animals in need, at no extra cost to you!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gallery</h2>

          {/* Bike Setup Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">My Training Setup</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/images/setup-placeholder.jpg"
                  alt="My complete bike setup with trainer"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300" />
              </div>
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/images/bike-detail-placeholder.jpg"
                  alt="Close-up of my bike setup"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              (Placeholder images - actual setup photos coming soon!)
            </p>
          </div>

          {/* Mid City Mutt Mamas Dogs Gallery */}
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Meet Some of Our Friends at Mid City Mutt Mamas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                  <img
                    src={`/images/dog-placeholder-${num}.jpg`}
                    alt={`Adorable dog from Mid City Mutt Mamas ${num}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">Help us find loving homes for dogs like this one!</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <a
                href="https://www.midcitymutt.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View More Adoptable Pets
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              (Placeholder images - actual adoptable pets coming soon!)
            </p>
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
