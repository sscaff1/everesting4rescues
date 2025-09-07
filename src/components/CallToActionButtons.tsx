import { TbBrandYoutubeFilled, TbPigMoney, TbBrandStrava, TbBrandZwift } from 'react-icons/tb';
import { YOUTUBE_URL, DONATION_URL, STRAVA_URL, ZWIFT_URL } from '@/constants';

const BUTTONS = [
  {
    label: 'Watch Live on YouTube',
    icon: TbBrandYoutubeFilled,
    href: YOUTUBE_URL,
    backgroundColor: 'bg-red-600',
    hoverColor: 'hover:bg-red-700',
  },
  {
    label: 'Join on Zwift',
    icon: TbBrandZwift,
    href: ZWIFT_URL,
    backgroundColor: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
  },
  {
    label: 'Donate Now',
    icon: TbPigMoney,
    href: DONATION_URL,
    backgroundColor: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
  },
  {
    label: 'Strava',
    icon: TbBrandStrava,
    href: STRAVA_URL,
    backgroundColor: 'bg-[#FC5201]',
    hoverColor: 'hover:bg-[#c94101]',
  },
];

function CallToActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {BUTTONS.map((button) => (
        <a
          key={button.label}
          href={button.href}
          className={`flex items-center justify-items-center text-center ${button.backgroundColor} text-white px-8 py-3 rounded-lg font-semibold ${button.hoverColor} transition-colors min-h-[75px]`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button.icon className="inline-block text-2xl" />
          <span className="ml-2 text-md">{button.label}</span>
        </a>
      ))}
    </div>
  );
}

export default CallToActionButtons;
