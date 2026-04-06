import shoftAfrica from '..//../assets/images/shoft-africa.png';
import oniduuruBg from '..//../assets/icons/oniduuru_bg.svg';
import talentPicture from '..//../assets/images/talent2.png';
import scouterPicture from '..//../assets/images/xyz.jpg';
import OniduuruQR from '..//../assets/images/Oniduuru-test-QR.png';

import amazonLaightSailLogo from '..//../assets/images/AmazonLightsail_logo.jpg';
import angularLogo from '..//../assets/images/Angular_logo.png';
import awsLogo from '..//../assets/images/aws_logo.jpeg';
import capacitorLogo from '..//../assets/images/capacitor_logo.jpg';
import cloudinaryLogo from '..//../assets/images/cloudinary_logo.png';
import flowbiteLogo from '..//../assets/images/flowbite_logo.png';
import hostingerLogo from '..//../assets/images/Hostinger_logo.png';
import ionicLogo from '..//../assets/images/ionic_logo.png';
import monoLookupLogo from '..//../assets/images/mono_logo.png';
import nestJsLogo from '..//../assets/images/nestjs_logo.png';
import paystackLogo from '..//../assets/images/paystack_logo.png';
import reduceImagesLogo from '..//../assets/images/reduceImages_logo.png';
import tailwindLogo from '..//../assets/images/tailwind_logo.jpg';
import OniduuruLogo from '..//../assets/images/Oniduuru-QR.png';
import MoniepointLogo from '..//../assets/images/moniepoint.jpg';

export const ImageProps = {
  shoftAfrica,
  oniduuruBg,
  talentPicture,
  scouterPicture,
  OniduuruQR,

  amazonLaightSailLogo,
  angularLogo,
  awsLogo,
  capacitorLogo,
  cloudinaryLogo,
  flowbiteLogo,
  hostingerLogo,
  ionicLogo,
  monoLookupLogo,
  nestJsLogo,
  paystackLogo,
  reduceImagesLogo,
  tailwindLogo,
  OniduuruLogo,
  MoniepointLogo
};


export interface CatalogItem {
  id: string;
  name: string;
  imageUrl: string;
  text?: string;
  route?: string;
}

export const catalogItemsArray: CatalogItem[] = [
  { id: '1', name: 'An efficient social services platform to find skilled talents.', imageUrl: oniduuruBg, text: "Oniduuru Market Place", route: '/landing-pages/oniduuru-marketplace' },
  { id: '2', name: 'Data Analytics Platform', imageUrl: 'https://placehold.co/400x400/28a745/ffffff?text=Analytics+App' },
  { id: '3', name: 'Customer Relationship Manager', imageUrl: 'https://placehold.co/400x400/ffc107/333333?text=CRM+App' },
  { id: '4', name: 'Inventory Management System', imageUrl: 'https://placehold.co/400x400/dc3545/ffffff?text=Inventory+App' },
  { id: '5', name: 'Human Resources Portal', imageUrl: 'https://placehold.co/400x400/6f42c1/ffffff?text=HR+App' },
  { id: '6', name: 'E-commerce Backend', imageUrl: 'https://placehold.co/400x400/fd7e14/ffffff?text=E-commerce+App' },
  { id: '7', name: 'Financial Accounting Software', imageUrl: 'https://placehold.co/400x400/20c997/ffffff?text=Finance+App' },
  { id: '8', name: 'Cybersecurity Solutions', imageUrl: 'https://placehold.co/400x400/6610f2/ffffff?text=Security+App' },
]

export const OniduuruRoutes = {
  scouterSignUp: 'https://oniduuru-marketplace.vercel.app/scouter/scouter-signup?stage=scouter_onboarding',
  talentSignUp: 'https://oniduuru-marketplace.vercel.app/talent/talent-signup?stage=talent_onboarding',
  loginSignIn: 'https://oniduuru-marketplace.vercel.app/auth/login',
  appUrl: 'https://oniduuru-marketplace.vercel.app/auth/welcome-page'
}
