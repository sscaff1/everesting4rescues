import { TbBrandYoutubeFilled, TbBrandZwift, TbPigMoney } from 'react-icons/tb';

const BUTTONS = [
  {
    label: 'Watch Live on YouTube',
    icon: TbBrandYoutubeFilled,
    href: '#',
    backgroundColor: 'bg-red-600',
    hoverColor: 'hover:bg-red-700',
  },
  {
    label: 'Join on Zwift',
    icon: TbBrandZwift,
    href: '#',
    backgroundColor: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
  },
  {
    label: 'Donate Now',
    icon: TbPigMoney,
    href: '#',
    backgroundColor: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
  },
];

function CallToActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {BUTTONS.map((button) => (
        <a
          key={button.label}
          href={button.href}
          className={`flex items-center justify-items-center text-center ${button.backgroundColor} text-white px-8 py-3 rounded-lg font-semibold ${button.hoverColor} transition-colors text-lg text-center flex-1`}
        >
          <button.icon className="inline-block text-2xl" />
          <span className="flex-1">{button.label}</span>
        </a>
      ))}
    </div>
  );
}

export default CallToActionButtons;
