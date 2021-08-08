import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Merijn Kleinreesink | Consultant', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'The website features the professional portfolio of Merijn Kleinreesink.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'stedin.jpg',
    title: 'Building an AI Center of Excellence',
    info: 'Stedin is one of the largest network operators in the utilities sector of the Netherlands. They face the energy transition the upcoming years, in which fossil fuels will have to become redundant. This asks for the implentation of (smart) technology to create a future-proof organisation to get work done.',
    info2:
      'Working side-by-side with the innovation department of Stedin, I had the challenge to diffuse knowledge of Intelligent Robotics throughout the organisation (co-organised Hackathon for C-Level and Learning Friday). And also bridge the tactical and operational layers by creating pilots, proof-of-concepts and production-ready solutions.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'node1.png',
    title: 'Becoming a Digital Consultant ',
    info: 'Node1 is a Digital Consultancy Boutique focusing on intelligent automation by the use of Azure AI and the UiPath RPA Platform. As a digital consultant in the early stage of the company, I had the pleasure to see a company grow from an unique position. I have had the opportunity to co-create the internal Academy (including a course), the development process and act as a trustperson.',
    info2:
      'In client work I had the opportunity to work on several interesting projects. The main showcase will be Stedin, where I co-created as a lead teachnical consultant their AI Compentence Center. Furthermore I acted as a Digital Strategy consultant for a major logistics player and a Business Analyst in a compelex technical carve-out within a corporate spin-off. Many experiences condensed in 2,5 years.',
    url: 'https://en.node1.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sap.png',
    title: 'Designing a new Diagnosis Tool',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/merijn-kleinreesink/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
