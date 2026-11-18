/** External profiles and contact details for Juniel Tejoc. */

import type { SocialLink } from './types';

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/Juniel072897',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/juniel-tejoc-430078282/',
    icon: 'linkedin',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61596055830725',
    icon: 'facebook',
  },
];

export const contact = {
  email: '' as string,
  phone: '' as string,
  location: 'Negros Oriental, Philippines',
  ctaHeading: "Let's build something",
  ctaSubheading: 'that works.',
  ctaBody:
    "I'm open to remote WordPress development and SEO opportunities, as well as website projects for businesses that want a stronger online presence.",
} as const;

export const resume = {
  available: false,
  path: '/juniel-tejoc-cv.pdf',
} as const;
