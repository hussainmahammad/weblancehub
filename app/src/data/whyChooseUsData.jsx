import React from 'react';

// ✅ Proper Indian Rupee symbol using text (always exact)
const RupeeIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="16"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      fill="currentColor"
    >
      ₹
    </text>
  </svg>
);

// 🎧 Headset / Support icon
const HeadsetIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

// ⚡ Speed / Fast delivery icon
const SpeedIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

// ⚙️ Customization / Settings icon
const CustomIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// ✅ Why Choose Us Items
export const whyChooseUsItems = [
  {
    title: "Affordable Prices",
    description:
      "We offer competitive rates without compromising on quality, ensuring you get the best value for your money.",
    icon: RupeeIcon,
  },
  {
    title: "Fast Delivery",
    description:
      "Our efficient process ensures your project is completed quickly, so you can get your website up and running in no time.",
    icon: SpeedIcon,
  },
  {
    title: "Customizable Solutions",
    description:
      "We work with you to create a website that perfectly fits your unique needs and vision, from design to functionality.",
    icon: CustomIcon,
  },
  {
    title: "24/7 Support",
    description:
      "Our team is always available to assist you with any questions or issues, providing reliable support around the clock.",
    icon: HeadsetIcon,
  },
];
