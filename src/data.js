//  icons
import {
  FiYoutube,
  FiInstagram,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
} from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

// companies icons
import Meidice from './assets/img/brands/7.svg';
import Investment from './assets/img/brands/8.svg';
import Computer from './assets/img/brands/9.svg';
import RealEstate from './assets/img/brands/10.svg';
import ImportAndExport from './assets/img/brands/11.svg';
import Food from './assets/img/brands/12.svg';

// projects images
import Oil from './assets/img/projects/oil.jpeg';
import Flour from './assets/img/projects/flour.jpeg';

import GasImage from './assets/img/projects/gas.png';
import RealEstateImage from './assets/img/projects/real estate (1).png';
import AppleVinegarImage from './assets/img/projects/apple vinegar.png';
import LaboratoryEquipment from './assets/img/projects/lab eqipments.png';
import Drilling from './assets/img/projects/drilling processes.png';
import JewelleryImage from './assets/img/projects/jewellery.png';
import OrganicFood from './assets/img/projects/organic food (1).png';
import UltraSound from './assets/img/projects/ultrasound.png';
import OilTools from './assets/img/projects/oil tools.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/founder 1.webp';
import TestiImage2 from './assets/img/testimonials/founder 2.jpeg';
import TestiImage3 from './assets/img/testimonials/founder 3.jpeg';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'Products',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  // {
  //   icon: <FiYoutube />,
  //   href: '',
  // },
  // {
  //   icon: <FiInstagram />,
  //   href: '',
  // },
  // {
  //   icon: <FiFacebook />,
  //   href: '',
  // },
  {
    icon: <BsWhatsapp />,
    href: 'https://wa.me/905345144988',
  },
];

// companies
export const brands = [
  {
    img: Meidice,
    service: 'Medicine',
    href: '',
  },
  {
    img: Investment,
    service: 'Investments',
    href: '',
  },
  {
    img: Computer,
    service: 'Trading',
    href: '',
  },
  {
    img: RealEstate,
    service: 'Real Estate',
    href: '',
  },
  {
    img: ImportAndExport,
    service: 'Import/Export',
    href: '',
  },
  {
    img: Food,
    service: 'Food',
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Oil,
    name: 'Oil',
    category: 'Energy',
  },
  {
    id: '2',
    image: AppleVinegarImage,
    name: 'Apple Vinegar',
    category: 'Food',
  },
  {
    id: '3',
    image: OrganicFood,
    name: 'Organic Products',
    category: 'Food',
  },
  {
    id: '4',
    image: Flour,
    name: 'Flour',
    category: 'Food',
  },
  {
    id: '5',
    image: LaboratoryEquipment,
    name: 'Laboratory Equipment',
    category: 'Medical',
  },
  {
    id: '6',
    image: UltraSound,
    name: 'Ultra Sound Machines',
    category: 'Medical',
  },
  {
    id: '7',
    image: GasImage,
    name: 'Gas',
    category: 'Energy',
  },
  {
    id: '8',
    image: OilTools,
    name: 'Oil Tools',
    category: 'Energy',
  },
  {
    id: '9',
    image: Drilling,
    name: 'Drilling Processes Services',
    category: 'Energy',
  },
  {
    id: '10',
    image: JewelleryImage,
    name: 'Gold, Diamonds and Valuable Stones Mining and Shipping',
    category: 'Jewellery',
  },
  {
    id: '11',
    image: RealEstateImage,
    name: 'Real Estate Investments and Development',
    category: 'Real Estate',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Energy',
  },
  {
    name: 'Food',
  },
  {
    name: 'Medical',
  },
  {
    name: 'Jewellery',
  },
  {
    name: 'Real Estate',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'John Doe',
    authorPosition: 'Founder, Diamonds Group',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'John Doe',
    authorPosition: 'Founder, Diamonds Group',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'John Doe',
    authorPosition: 'Founder, Diamonds Group',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: `We're here to help you.`,
    description: 'Email us at info@diamondsgroupsite.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Aksaray, İnkılap Cd. No:43, 34096 Fatih/İstanbul',
    description: 'Serving clients worldwide',
  },
];
