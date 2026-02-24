import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { serviceData } from '../data/Services&Pricings.jsx';

// Assuming Icons are defined as before (kept for completeness)
const Icons = {
    BusinessIcon: ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>),
    ResumeIcon: ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v6" /></svg>),
    InvitationIcon: ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12l3 3" /></svg>),
    BlogIcon: ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>),
    HostingIcon: ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12h.01" /></svg>),
    EmailIcon: ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>),
    SeoIcon: ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>),
    LogoIcon: ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9h.01" /></svg>),
    GoogleIcon: ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12a2 2 0 100-4 2 2 0 000 4z" /></svg>),
    MaintenanceIcon: ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
};

const iconMap = {
    BusinessIcon: Icons.BusinessIcon,
    ResumeIcon: Icons.ResumeIcon,
    InvitationIcon: Icons.InvitationIcon,
    BlogIcon: Icons.BlogIcon,
    HostingIcon: Icons.HostingIcon,
    EmailIcon: Icons.EmailIcon,
    SeoIcon: Icons.SeoIcon,
    LogoIcon: Icons.LogoIcon,
    GoogleIcon: Icons.GoogleIcon,
    MaintenanceIcon: Icons.MaintenanceIcon,
};

function Pricing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleCardClick = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    // Function to generate the dynamic grid class based on the number of plans
    const getGridClass = (tierCount) => {
        // Fallback to a single column if no tiers or 0 tiers
        if (!tierCount || tierCount === 0) return 'grid-cols-1';

        // Base class: single column for small screens, 2 columns for medium screens
        let baseClass = 'grid-cols-1 gap-8 sm:grid-cols-2';

        // Dynamic large screen class based on plan count
        let lgClass = '';
        if (tierCount === 1) {
            // Center a single item horizontally within the 2-column sm grid, and keep it 1 column wide
            // We'll adjust the container class for better centering of a single column on desktop
            lgClass = 'lg:grid-cols-1 lg:max-w-md lg:mx-auto'; 
            // NOTE: The main modal grid should be adjusted to: 'mt-6 px-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:max-w-xl lg:mx-auto'
            // But since the current structure is `grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4` we need to adjust the **parent** grid to only have one child
            // This is complex with the existing structure. Let's instead adjust the **child** grid container's classes for the number of items.
            // When there is only 1 plan, we want it centered on a large screen.
            return 'grid-cols-1'; // Use this for the inner div's grid-cols

        } else if (tierCount === 2) {
            // 2 columns for large screens
            lgClass = 'lg:grid-cols-2';
        } else if (tierCount === 3) {
            // 3 columns for large screens
            lgClass = 'lg:grid-cols-3';
        } else {
            // 4 or more columns for large screens (defaulting to 4 columns)
            lgClass = 'lg:grid-cols-4';
        }
        
        // Combine base and large screen classes, ensuring lg class overrides sm class if set
        return `${baseClass} ${lgClass}`;
    };

    // Calculate grid class for the modal if a service is selected
    const tierCount = selectedService?.pricingTiers?.length || 0;
    const modalGridClass = getGridClass(tierCount);

    // Special class for the pricing tiers container when only 1 plan exists to better center it
    const pricingContainerClass = tierCount === 1 
        ? 'mx-auto max-w-sm' // This will restrict the width of the container for better centering
        : 'w-full';


    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{serviceData.pageTitle}</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">{serviceData.pageSubtitle}</p>
            </div>

            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-12 gap-x-8 px-4 sm:px-6 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:px-8">
                {serviceData.services.map((service, index) => {
                    const IconComponent = iconMap[service.icon];
                    return (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
                            onClick={() => handleCardClick(service)}
                        >
                            <div>
                                <div className="flex justify-center">
                                    {IconComponent && <IconComponent className="h-16 w-16 text-blue-600 transition-colors duration-300 group-hover:text-blue-500" />}
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-7 text-gray-900 text-center">{service.name}</h3>
                                {service.pricingTiers && (
                                    <p className="mt-2 text-sm leading-6 text-gray-600 text-center">{service.pricingTiers[0].price}</p>
                                )}
                                <p className="mt-4 text-sm leading-6 text-gray-600 text-center">{service.shortDescription || service.description}</p>
                            </div>
                            <div className="mt-6 text-center">
                                <button
                                    onClick={() => handleCardClick(service)}
                                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    See Detailed Pricing
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {isModalOpen && selectedService && createPortal(
                <div 
                    className="fixed inset-0 z-[9999] flex items-start justify-center bg-gray-900 bg-opacity-75 pt-10 p-4 overflow-y-auto transform"
                    onClick={handleCloseModal}
                >
                    <div 
                        className="relative w-full max-w-4xl my-8 rounded-lg bg-white p-0 shadow-2xl max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="p-8 pb-4 flex justify-between items-center border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {selectedService.name} - Detailed Pricing
                            </h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Pricing Tiers Grid - MODIFIED */}
                        <div className={`mt-6 px-8 grid ${modalGridClass} ${pricingContainerClass}`}>
                            {selectedService.pricingTiers && selectedService.pricingTiers.map((tier, tierIndex) => (
                                <div key={tierIndex} className="rounded-lg border border-gray-200 overflow-hidden">
                                    <div className="bg-blue-500 text-white p-4 text-center font-bold">
                                        {tier.tierName}
                                    </div>
                                    <div className="p-6 text-left">
                                        <div className="text-center mb-4">
                                            {tier.price !== 'Custom Quote' && (
                                                <p className="text-sm text-gray-500">Starting at</p>
                                            )}
                                            <p className="text-2xl font-bold text-blue-600">{tier.price}</p>
                                        </div>
                                        <ul className="space-y-3 text-sm text-gray-600">
                                            {tier.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start">
                                                    <svg className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-left">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Custom Quote CTA */}
                        <div className="mt-8 px-8 pb-8 text-center">
                            
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}

export default Pricing;