import petcartImage from '../../assets/OurWork/petcart.jpg';
import petcareblogs from '../../assets/OurWork/PetCareBlogs.jpg';
import admin from '../../assets/OurWork/admin.jpg';
import resume from '../../assets/OurWork/resume.jpg';
import banners from '../../assets/OurWork/banners.jpg';
import emailSetupImage from '../../assets/OurWork/email.jpg';

export const projects = [
  // Type 1: External URL Projects
  {
    id: 1,
    title: 'PetCart.Shop',
    year: '2025',
    description: [
      "Online store frontend for pet essentials with smooth shopping and checkout.",
      "Use Email as test@petcartshop.com and Password as PetCart.Shop for login:"
    ],
    imageUrl: petcartImage,
    type: 'external',
    url: 'https://petcart.shop',
  },
  {
    id: 2,
    title: 'Pet Cart Blogs',
    year: '2025',
    description: 'Blog section sharing pet care tips, guides, and product advice.',
    imageUrl: petcareblogs,
    type: 'external',
    url: 'https://petcart.shop/blog/4',
  },
  {
    id: 3,
    title: 'PetCart.Shop Admin Panel',
    year: '2025',
    description: 'Web-based admin dashboard to manage products, orders, and users efficiently. Use random mail and password for login',
    imageUrl: admin,
    type: 'external',
    url: 'https://admin.petcart.shop',
  },
  {
    id: 4,
    title: 'Sample Resume Site Template',
    year: '2025',
    description: 'Lightweight static site perfect for online CVs or portfolio pages. Please use only desktop browser to view this site; it is yet to be enhanced for mobile view.',
    imageUrl: resume, 
    type: 'external',
    url: 'https://resume.weblancehub.com',
  },
  {
    id: 5,
    title: 'PetCart.Shop Promotional Banners',
    year: '2025',
    description: 'Simple, clean banners designed for promotions and website display.',
    imageUrl: banners, 
    type: 'external',
    url: 'https://petcart.shop/shop',
  },
  
  // Type 2: Internal Popup Project
  {
    id: 6,
    title: 'Professional Domain Email Setup',
    year: '2025',
    description: 'A custom email solution using Cloudflare and Gmail for a professional address without any monthly fees.',
    imageUrl: emailSetupImage,
    type: 'internal',
    details: {
      headline: 'Free and Paid Professional Email Solutions',
      fullDescription: `We provided a complete email solution that scales from a simple portfolio to a full-scale business.

The initial setup leverages **Cloudflare Email Routing** and **Gmail**, allowing clients to use their custom domain (e.g., contact@yourdomain.com) for professional email communication at no cost. All incoming emails are seamlessly forwarded to their personal Gmail inbox. To ensure a professional brand image, we also configured Gmail to send emails that appear to be from the client's domain.

For businesses that require more robust features, we offer a dedicated setup using **Zoho Mail**. This provides a complete business email suite with a dedicated inbox, support for multiple users, and higher sending limits. This paid solution is ideal for secure and reliable large-scale business operations.`,
      services: ['Email Setup', 'Cloudflare Configuration', 'Gmail Integration', 'Zoho Mail Setup'],
      team: ['Hussain Mahammad (Email & Cloud Setup)'],
      images: [emailSetupImage],
    },
  },
];