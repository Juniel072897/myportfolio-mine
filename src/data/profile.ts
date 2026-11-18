/** Identity, hero copy, and about copy for Juniel Tejoc. */

import avatar from '../assets/Juniel.png';
import type { Stat } from './types';

export const profile = {
  name: 'Juniel Tejoc',
  title: 'WordPress Developer & SEO Specialist',
  shortTitle: 'WordPress Developer & SEO Specialist',
  heroRoles: ['WordPress Developer', 'SEO Specialist'],
  location: 'Negros Oriental, Philippines',
  heroHeadline: 'Websites that perform, rank, and turn visitors into customers.',
  heroStatement:
    "I'm a WordPress Developer and SEO Specialist with 4+ years of experience building, maintaining, and optimizing websites. I specialize in WordPress development using Elementor and Gutenberg, alongside modern front-end development with Astro, JavaScript, Tailwind CSS, and Sanity CMS. I also help businesses improve their online visibility through technical SEO, on-page optimization, local SEO, website performance improvements, and search-focused content strategies.",
  about: [
    "I'm a WordPress Developer and SEO Specialist from Negros Oriental, Philippines, with 4+ years of experience creating, maintaining, and optimizing business websites.",
    'My development work includes WordPress, Elementor, Gutenberg, Astro, JavaScript, Tailwind CSS, and Sanity CMS. I build responsive interfaces, reusable components, and maintainable website experiences.',
    'My SEO work focuses on technical and on-page SEO, local search visibility, website performance, content structure, and analytics. I aim to help businesses attract relevant visitors, improve their search presence, and turn traffic into meaningful inquiries.',
  ],
  approach: [
    {
      title: 'Understand the goal',
      body: 'I align the website structure, content, and functionality with the needs of the business and its visitors.',
    },
    {
      title: 'Build for every screen',
      body: 'I create responsive WordPress and modern front-end experiences that work across desktop, tablet, and mobile.',
    },
    {
      title: 'Improve search visibility',
      body: 'I address technical SEO, on-page structure, local visibility, and performance to support organic growth.',
    },
    {
      title: 'Measure and refine',
      body: 'I use analytics and search performance insights to identify issues and guide continuous improvements.',
    },
  ],
  openTo:
    'Remote WordPress development and SEO roles, contract opportunities, and website projects for agencies and businesses.',
  avatar,
  avatarAlt: 'Portrait of Juniel Tejoc',
  resumeLabel: 'Download CV',
} as const;

export const stats: Stat[] = [
  { label: 'WordPress development experience', value: 4, suffix: '+' },
  { label: 'Front-end development experience', value: 2, suffix: '+' },
  { label: 'SEO experience', value: 1.5, suffix: '+' },
  { label: 'Professional roles', value: 5 },
];
