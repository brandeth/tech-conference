import aishaAvatar from '~/assets/images/avatar-aisha-patel.webp'
import bertramAvatar from '~/assets/images/avatar-bertram-gilfoyle.webp'
import carlosAvatar from '~/assets/images/avatar-carlos-rivera.webp'
import devonAvatar from '~/assets/images/avatar-devon-park.webp'
import dineshAvatar from '~/assets/images/avatar-dinesh-chugtai.webp'
import elenaAvatar from '~/assets/images/avatar-elena-vasquez.webp'
import fatimaAvatar from '~/assets/images/avatar-fatima-al-rashid.webp'
import hannahAvatar from '~/assets/images/avatar-hannah-bergstrom.webp'
import jamesAvatar from '~/assets/images/avatar-james-okonkwo.webp'
import juliaAvatar from '~/assets/images/avatar-julia-petrov.webp'
import kwameAvatar from '~/assets/images/avatar-kwame-asante.webp'
import lucasAvatar from '~/assets/images/avatar-lucas-moreau.webp'
import marcusAvatar from '~/assets/images/avatar-marcus-chen.webp'
import meiLinAvatar from '~/assets/images/avatar-mei-lin-zhang.webp'
import naomiAvatar from '~/assets/images/avatar-naomi-tanaka.webp'
import oliverAvatar from '~/assets/images/avatar-oliver-chang.webp'
import priyaAvatar from '~/assets/images/avatar-priya-sharma.webp'
import ryanAvatar from '~/assets/images/avatar-ryan-o-sullivan.webp'
import sarahAvatar from '~/assets/images/avatar-sarah-lindstrom.webp'
import tomAvatar from '~/assets/images/avatar-tom-kowalski.webp'

export type Speaker = {
  imageSrc: string
  imageAlt: string
  imageBackgroundColor: string
  name: string
  titleAndCompany: string
  talkTitle: string
  bio?: string
  trackName?: string
  startTime?: string
  endTime?: string
  day?: string
}

export const speakers = [
  {
    imageSrc: elenaAvatar,
    imageAlt: 'Elena Vasquez',
    imageBackgroundColor: 'var(--color-brand-cyan-100)',
    name: 'elena vasquez',
    titleAndCompany: 'Principal Frontend Engineer\n@ByteCraft',
    talkTitle: 'The next frontier of web development',
    bio: 'Elena has spent the last decade pushing the boundaries of in-browser development environments. She led the browser-native IDE initiative at ByteCraft and is a frequent contributor to the TC39 process. Her work focuses on making the web platform a first-class development target.',
    trackName: 'keynote',
    startTime: '9:00',
    endTime: '10:00',
    day: 'Day 1',
  },
  {
    imageSrc: aishaAvatar,
    imageAlt: 'Aisha Patel',
    imageBackgroundColor: 'var(--color-brand-red-100)',
    name: 'aisha patel',
    titleAndCompany: 'Web Performance Lead @EdgeVane',
    talkTitle: 'Eliminating layout shift once and for all',
  },
  {
    imageSrc: naomiAvatar,
    imageAlt: 'Naomi Tanaka',
    imageBackgroundColor: 'var(--color-brand-blue-100)',
    name: 'naomi tanaka',
    titleAndCompany: 'Accessibility Engineering Lead\n@Axion',
    talkTitle: 'Screen readers deserve better components',
  },
  {
    imageSrc: jamesAvatar,
    imageAlt: 'James Okonkwo',
    imageBackgroundColor: 'var(--color-brand-purple-100)',
    name: 'james okonkwo',
    titleAndCompany: 'Engineering Director @Cartwell',
    talkTitle: 'Monorepos at scale: lessons from 500 packages',
  },
  {
    imageSrc: sarahAvatar,
    imageAlt: 'Sarah Lindstr\u00f6m',
    imageBackgroundColor: 'var(--color-brand-yellow-100)',
    name: 'sarah lindstr\u00f6m',
    titleAndCompany: 'Design Systems Lead @Tessera',
    talkTitle: 'Type-safe design tokens across platforms',
  },
  {
    imageSrc: marcusAvatar,
    imageAlt: 'Marcus Chen',
    imageBackgroundColor: 'var(--color-brand-purple-100)',
    name: 'marcus chen',
    titleAndCompany: 'Staff Software Engineer @Northstar',
    talkTitle: 'Building resilient frontend architectures',
  },
  {
    imageSrc: bertramAvatar,
    imageAlt: 'Bertram Gilfoyle',
    imageBackgroundColor: 'var(--color-brand-purple-100)',
    name: 'bertram gilfoyle',
    titleAndCompany: 'Systems Architect @Pied Piper',
    talkTitle: 'Infrastructure without unnecessary optimism',
  },
  {
    imageSrc: fatimaAvatar,
    imageAlt: 'Fatima Al-Rashid',
    imageBackgroundColor: 'var(--color-brand-blue-100)',
    name: 'fatima al-rashid',
    titleAndCompany: 'Inclusive Design Engineer @Spectra',
    talkTitle: 'Designing accessible audio experiences',
  },
  {
    imageSrc: priyaAvatar,
    imageAlt: 'Priya Sharma',
    imageBackgroundColor: 'var(--color-brand-cyan-100)',
    name: 'priya sharma',
    titleAndCompany: 'Senior Developer Advocate @Cobalt',
    talkTitle: "ARIA patterns you're probably using wrong",
  },
  {
    imageSrc: lucasAvatar,
    imageAlt: 'Lucas Moreau',
    imageBackgroundColor: 'var(--color-brand-purple-100)',
    name: 'lucas moreau',
    titleAndCompany: 'Senior Frontend Engineer @Websmith',
    talkTitle: 'Browser DevTools: hidden gems for CSS debugging',
  },
  {
    imageSrc: ryanAvatar,
    imageAlt: "Ryan O'Sullivan",
    imageBackgroundColor: 'var(--color-brand-red-100)',
    name: "ryan o'sullivan",
    titleAndCompany: 'DevTools Engineer @Cobalt',
    talkTitle: 'Profiling React renders at 120fps',
  },
  {
    imageSrc: tomAvatar,
    imageAlt: 'Tom Kowalski',
    imageBackgroundColor: 'var(--color-brand-purple-100)',
    name: 'tom kowalski',
    titleAndCompany: 'Platform Engineer @Nimbus',
    talkTitle: 'Deploy preview environments that scale',
  },
  {
    imageSrc: dineshAvatar,
    imageAlt: 'Dinesh Chugtai',
    imageBackgroundColor: 'var(--color-brand-red-100)',
    name: 'dinesh chugtai',
    titleAndCompany: 'Video Systems Engineer @Pied Piper',
    talkTitle: 'Video compression for the web: the middle-out approach',
  },
  {
    imageSrc: meiLinAvatar,
    imageAlt: 'Mei-Lin Zhang',
    imageBackgroundColor: 'var(--color-brand-yellow-100)',
    name: 'mei-lin zhang',
    titleAndCompany: 'Senior UI Engineer @Roamly',
    talkTitle: 'CSS container queries in production',
  },
  {
    imageSrc: carlosAvatar,
    imageAlt: 'Carlos Rivera',
    imageBackgroundColor: 'var(--color-brand-cyan-100)',
    name: 'carlos rivera',
    titleAndCompany: 'Engineering Manager @Relay',
    talkTitle: 'Leading frontend teams through platform change',
  },
  {
    imageSrc: devonAvatar,
    imageAlt: 'Devon Park',
    imageBackgroundColor: 'var(--color-brand-blue-100)',
    name: 'devon park',
    titleAndCompany: 'Creative Developer @Afterimage',
    talkTitle: 'Motion systems that respect user preferences',
  },
  {
    imageSrc: hannahAvatar,
    imageAlt: 'Hannah Bergstrom',
    imageBackgroundColor: 'var(--color-brand-yellow-100)',
    name: 'hannah bergstrom',
    titleAndCompany: 'Product Design Lead @Frame',
    talkTitle: 'Designing developer tools people understand',
  },
  {
    imageSrc: juliaAvatar,
    imageAlt: 'Julia Petrov',
    imageBackgroundColor: 'var(--color-brand-red-100)',
    name: 'julia petrov',
    titleAndCompany: 'Security Engineer @Foundry',
    talkTitle: 'Practical threat modeling for frontend teams',
  },
  {
    imageSrc: kwameAvatar,
    imageAlt: 'Kwame Asante',
    imageBackgroundColor: 'var(--color-brand-cyan-100)',
    name: 'kwame asante',
    titleAndCompany: 'Open Source Maintainer @Commonstack',
    talkTitle: 'Sustaining the libraries everyone depends on',
  },
  {
    imageSrc: oliverAvatar,
    imageAlt: 'Oliver Chang',
    imageBackgroundColor: 'var(--color-brand-blue-100)',
    name: 'oliver chang',
    titleAndCompany: 'AI Product Engineer @Signalworks',
    talkTitle: 'Building useful AI interfaces beyond the chat box',
  },
] satisfies Speaker[]

const featuredSpeakerNames = new Set([
  'elena vasquez',
  'naomi tanaka',
  'james okonkwo',
  'sarah lindstr\u00f6m',
  'priya sharma',
  'lucas moreau',
  "ryan o'sullivan",
  'tom kowalski',
])

export const featuredSpeakers = speakers.filter((speaker) =>
  featuredSpeakerNames.has(speaker.name),
)
