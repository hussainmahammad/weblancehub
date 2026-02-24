import React from 'react';

// Define the icons as separate components for cleaner code
const BusinessIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17h6m-3-3v6" />
  </svg>
);

const ResumeIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v6" />
  </svg>
);

const InvitationIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12l3 3" />
  </svg>
);

const BlogIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

const HostingIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12h.01" />
  </svg>
);

const EmailIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SeoIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const LogoIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9h.01" />
  </svg>
);

const GoogleIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const MaintenanceIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const serviceItems = [
  {
    title: "Business Websites",
    price: "₹1199",
    icon: BusinessIcon,
    description: "Get a ready-to-use 1–2 page business website (Home + Services/Contact) with a free .online domain for the first year. We handle the complete setup, including Google search indexing and basic SEO, and ensure your site is mobile-friendly and ready for your business. From the second year onward, the client will bear renewal charges for the domain and hosting (~₹1,000–₹2,000/year), and we can assist with renewals or suggest the best plans."
  },
  {
    title: "Resume / Portfolio Websites",
    price: "₹299",
    icon: ResumeIcon,
    description: "Share your resume with us, and we’ll create an attractive website using our pre-built templates for just $299. Your personalized resume site will be hosted at yourname.workfolio.online, showcasing your education, skills, projects, and achievements. It includes a button to download your resume as a PDF, making it perfect for job applications. Want a custom domain? We can help with that too!"
  },
  {
    title: "Invitation Websites",
    price: "₹299 + domain cost",
    icon: InvitationIcon,
    description: "Our Basic Invitation Package includes a 1-page attractive design with a clean and modern layout, showcasing your event invitation details such as date, time, venue, and host names. It also features one beautifully placed wedding or event image to make the page more personal and engaging. The design is fully mobile-friendly, ensuring it looks great on both phones and laptops, and comes with an easy sharing link that guests can conveniently open via WhatsApp or SMS."
  },
  {
    title: "Blog Websites",
    price: "₹1999 + Domain cost",
    icon: BlogIcon,
    description: "Create your own professional blog with our affordable, static website plans starting at just ₹999 + domain cost. Enjoy a clean homepage with clickable post previews that link to a dedicated blog page, showcasing your content in a mobile-responsive, fast-loading design. Perfect for sharing stories, ideas, or expertise with minimal setup. For dynamic features like admin access and user comments, request a custom backend solution through our Get Quote form."
  },

  {
    title: "Professional Email Setup",
    price: "₹99 + Domain cost",
    icon: EmailIcon,
    description: "Get a professional email address with your domain! For just ₹99 (first email) + ₹49 per additional email, we’ll set up custom emails (e.g., yourname@yourdomain.com) using Gmail and Cloudflare for seamless sending and receiving. One-time setup, no recurring fees. For advanced features like larger storage or collaboration tools, our premium Zoho Mail setup offers a tailored solution—request a custom quote today!"
  },
  {
    title: "Basic SEO Setup",
    price: "₹199",
    icon: SeoIcon,
    description: "We add proper titles, descriptions, and keywords to your pages so Google can show your site when people search for your business."
  },
  {
    title: "Logo / Banner Design",
    price: "₹49",
    icon: LogoIcon,
    description: "A simple, neat logo or banner designed in your preferred style and colors — perfect for small businesses or personal websites."
  },
  {
    title: "Google Business Profile Setup",
    price: "₹150",
    icon: GoogleIcon,
    description: "We create and verify your Google Business Profile so people can find you on Google Maps, see your contact info, and call you directly."
  },
  {
    title: "Annual Hosting & Maintenance",
    price: "₹350",
    icon: MaintenanceIcon,
    description: "We keep your website running smoothly all year, handle technical updates, and give you two free content changes (like updating phone numbers or adding images)."
  },
];