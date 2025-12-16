import { YOUTUBE_URL, ZWIFT_URL, DONATION_URL, MID_CITY_MUTT_MAMAS_URL, EMAIL_ADDRESS } from '@/constants';

function Footer() {
  return (
    <footer className="bg-[#192030] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Everesting 4 Rescues</h3>
            <p className="text-gray-400 mb-4">
              A virtual Everest challenge to support Mid City Mutt Mamas animal shelter. Join us on December 20th
              starting at 5:30AM CST as we climb 29,029 ft on Alpe du Zwift.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href={YOUTUBE_URL} className="text-gray-400 hover:text-white transition-colors">
                  Watch Live
                </a>
              </li>
              <li>
                <a href={ZWIFT_URL} className="text-gray-400 hover:text-white transition-colors">
                  Join on Zwift
                </a>
              </li>
              <li>
                <a
                  href={DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href={MID_CITY_MUTT_MAMAS_URL}
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
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors">
                  {EMAIL_ADDRESS}
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
  );
}

export default Footer;
