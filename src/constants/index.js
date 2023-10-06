import {
  frontend,
  backend,
  game,
  javascript,
  aws,
  html,
  css,
  reactjs,
  redux,
  godot,
  nodejs,
  git,
  python,
  docker,
  postgresql,
  rubyrails,
  mongodb,
  meteor,
  goalgetters,
  outrun,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Game Developer',
    icon: game,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Amazon Web Services',
    icon: aws,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Godot',
    icon: godot,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Ruby on Rails',
    icon: rubyrails,
  },
  {
    name: 'Mongodb',
    icon: mongodb,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Meteor',
    description: 'Medium clone; a digital publishing application that allows users to create, customize, publish, and discover pieces of writing called tales.',
    tags: [
      {
        name: 'redux',
        color: 'blue-text-gradient',
      },
      {
        name: 'rubyonrails',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
    ],
    image: meteor,
    repo: 'https://github.com/rjeriomenko/Meteor',
    demo: 'https://meteor.onrender.com',
  },
  {
    id: 'project-2',
    name: 'Goal Getters',
    description:
      'Social platform for users to work alongside each other as they carve out their best selves.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: goalgetters,
    repo: 'https://github.com/rjeriomenko/GoalGetters',
    demo: 'https://goal-getters.onrender.com/',
  },
  {
    id: 'project-3',
    name: 'outRun()',
    description: 'Top-down 2D action-idle videogame that runs in the browser using vanilla JavaScript and Canvas API.',
    tags: [
      {
        name: 'js',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'canvas',
        color: 'pink-text-gradient',
      },
    ],
    image: outrun,
    repo: 'https://github.com/rjeriomenko/outRun',
    demo: 'https://rjeriomenko.github.io/outRun/',
  },
];

export { services, technologies, experiences, projects };
