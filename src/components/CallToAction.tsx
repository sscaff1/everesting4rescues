import { MID_CITY_MUTT_MAMAS_URL } from '@/constants';
import CallToActionButtons from './CallToActionButtons';

function CallToAction() {
  return (
    <div className="bg-white py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-xl mb-6 text-black">
            Join me on December 20th starting at 5:30AM CST as I attempt to climb 29,029 ft on Alpe du Zwift to support{' '}
            <a
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
              href={MID_CITY_MUTT_MAMAS_URL}
            >
              Mid City Mutt Mamas
            </a>
            . Zwift users are welcome to join for as many ascents as they&apos;d like! (No Sherpas required 🏔️)
          </p>
          <CallToActionButtons />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
