import React from 'react';

const IdeaIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="none" stroke="currentColor" strokeWidth={30}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M480.27-80q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Zm0 280q18 0 32-11.5t17-28.5h-98q4 17 17.5 28.5T480-200ZM360-310h240v-40H360v40Zm1-90h238q37-27 59-68.5t22-91.5q0-83-58.5-141.5T480-760q-83 0-141.5 58.5T280-560q0 50 22 91.5t59 68.5Zm14-40q-25.58-24.79-40.29-56.39Q320-528 320-560q0-66.29 46.8-113.14Q413.6-720 479.8-720T593-673.14q47 46.85 47 113.14 0 32-14.71 63.61Q610.58-464.79 585-440H375Z"
        />
    </svg>
);

const DevelopIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="none" stroke="currentColor" strokeWidth={30}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m357-513 90-90-75-75-48 48-42-42 48-48-75-74-90 90 192 191Zm346 348 90-91-75-75-48 48-42-42 48-48-74-74-90 90 191 192Zm8-615 70 70-70-70ZM276-120H120v-156l194-194L80-704l174-176 236 235 178-178q9-9 20-13t22-4q11 0 22 4t20 13l71 71q9 9 13 20t4 22q0 11-4 22t-13 20L645-490l235 235L705-81 471-315 276-120Zm-96-60h70l393-394-70-70-393 394v70Zm428-429-35-35 70 70-35-35Z"
        />
    </svg>
);

const LaunchIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="none" stroke="currentColor" strokeWidth={30}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m187-551 106 45q18-36 38.5-71t43.5-67l-79-16-109 109Zm154 81 133 133q57-26 107-59t81-64q81-81 119-166t41-192q-107 3-192 41T464-658q-31 31-64 81t-59 107Zm229-96q-20-20-20-49.5t20-49.5q20-20 49.5-20t49.5 20q20 20 20 49.5T669-566q-20 20-49.5 20T570-566Zm-15 383 109-109-16-79q-32 23-67 43.5T510-289l45 106Zm326-694q9 136-34 248T705-418l-2 2-2 2 22 110q3 15-1.5 29T706-250L535-78l-85-198-170-170-198-85 172-171q11-11 25-15.5t29-1.5l110 22q1-1 2-1.5t2-1.5q99-99 211-142.5T881-877ZM149-325q35-35 85.5-35.5T320-326q35 35 34.5 85.5T319-155q-26 26-80.5 43T75-80q15-109 31.5-164t42.5-81Zm42 43q-14 15-25 47t-19 82q50-8 82-19t47-25q19-17 19.5-42.5T278-284q-19-18-44.5-17.5T191-282Z"
        />
    </svg>
);

const SupportIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="none" stroke="currentColor" strokeWidth={30}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M440-120v-60h340v-304q0-123.69-87.32-209.84Q605.36-780 480-780q-125.36 0-212.68 86.16Q180-607.69 180-484v244h-20q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v69q0 24.75-17.62 42.37Q804.75-120 780-120H440Zm-80.18-290q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Zm240 0q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5ZM241-462q-7-106 64-182t177-76q87 0 151 57.5T711-519q-89-1-162.5-50T434.72-698Q419-618 367.5-555.5T241-462Z"
        />
    </svg>
);

export const howItWorksItems = [
    {
        title: "Share Your Idea",
        description: "We'll discuss your vision, goals, and requirements to understand what you need.",
        icon: IdeaIcon,
    },
    {
        title: "Design & Develop",
        description: "Our team will create a custom design and build the website with your feedback.",
        icon: DevelopIcon,
    },
    {
        title: "Launch",
        description: "After your final approval, we will deploy your website and make it live for the world.",
        icon: LaunchIcon,
    },
    {
        title: "Support",
        description: "We provide ongoing assistance and maintenance to keep your site running smoothly.",
        icon: SupportIcon,
    },
];