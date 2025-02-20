import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tamal Mallick | Portfolio | mallickboy',
  description:
    'Portfolio of Tamal Mallick ( mallickboy ), showcasing professional experience, projects, and achievements in the field of software development.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Tamal Mallick`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {/* I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder. */}
        I specialize in building scalable <strong className="text-stone-100">backend systems</strong> and APIs with  
        <strong className="text-stone-100"> Python</strong>, <strong className="text-stone-100"> Node.js</strong>, and 
        <strong className="text-stone-100"> cloud technologies</strong>. With a strong foundation in
        <strong className="text-stone-100"> AI/ML</strong>, I integrate intelligent solutions into applications to boost
        performance and enhance user experience. I also bring experience in{' '}
        <strong className="text-stone-100"> Full-Stack Development</strong>, crafting end-to-end solutions built on
        robust backend architectures.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I love exploring emerging <strong className="text-stone-100"> tech trends</strong>,
        experimenting with new tools, and diving into innovative projects that push the boundaries of what's possible.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      my_target: "_blank",
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a dedicated software developer driven by curiosity and a passion for creative problem-solving.
    I see every challenge as an opportunity to learn and grow, continuously pushing my limits while engaging with a 
    vibrant tech community. Whether tackling complex coding problems or exploring fresh ideas, I remain committed to 
    bringing innovative solutions to life.`,
  aboutItems: [
    {label: 'Location', text: 'Kolkata, India', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, IoT, Cycling', Icon: SparklesIcon},
    {label: 'Study', text: 'B.Tech from IIIT Kalyani', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Fresher', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 5,
      },
      {
        name: 'Bengali',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {name: 'Python', level: 9},
      {name: 'Node.js', level: 7},
      {name: 'Cloud Technologies', level: 8},
    ],
  },
  {
    name: 'Python Development',
    skills: [
      {name: 'Flask Microframework', level: 9},
      {name: 'FastAPI', level: 9},
      {name: 'Django Framework', level: 4},
    ],
  },
  {
    name: 'Artificial Intelligence and Machine Learning',
    skills: [
      {name: 'Machine Learning', level: 6},
      {name: 'Deep Learning', level: 9},
      {name: 'Natural Language Processing', level: 8},
    ],
  },
  {
    name: 'Full-Stack Development',
    skills: [
      {name: 'React Framework', level: 7},
      {name: 'HTML5/CSS3', level: 8},
      {name: 'Bootstrap', level: 4},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems_example: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI-Powered Surveillance Vehicle',
    description:
      'AI-powered surveillance vehicle with ESP32-CAM for real-time streaming and YOLO-based object detection. Features robotics-based GPIO control, web APIs for remote control via PyQt5, and real-time detection.',
    url: 'https://github.com/mallickboy/AI-Powered-Surveillance-Vehicle',
    image: porfolioImage4,
  },
  {
    title: 'SenpaiType',
    description:
      'Contributed to a minimal typing practice website, inspired by Monkeytype, with no features except typing practice.',
    url: 'https://github.com/mallickboy/SenpaiType',
    image: porfolioImage5,
  },
  {
    title: 'Python Search Engine',
    description:
      'A domain-specific Python search engine leveraging Flask, Pinecone, and Sentence Transformers for semantic search. Deployed on Azure with Gunicorn, Nginx, and SSL for secure and scalable performance.',
    url: 'https://github.com/mallickboy/Python_Search_Engine',
    image: porfolioImage2,
  },
  {
    title: 'EdTech Platform',
    description:
      'An innovative EdTech platform built with ReactJS, Node.js, and MongoDB, enabling seamless course management, user interaction, and real-time updates.',
    url: 'https://github.com/mallickboy/EdTech.github.io',
    image: porfolioImage9,
  },
  {
    title: 'Youtube to MP4 and MP3 Downloader',
    description: 'A tool to download YouTube videos as MP4 and MP3, packaged with a Windows installer.',
    url: 'https://github.com/mallickboy/Youtube-to-MP4-and-MP3-downloader-with-Windows-Installer',
    image: porfolioImage3,
  },
  {
    title: 'FREDS',
    description:
      'Blockchain-based social media platform for decentralized user interaction, integrating AI to monitor abusive content.',
    url: 'https://github.com/mallickboy/FREDS_SC0',
    image: porfolioImage6,
  },
  {
    title: 'Virtual Mouse',
    description:
      'A gesture recognition system using OpenCV and MediaPipe for real-time interaction with applications like video games.',
    url: 'https://github.com/mallickboy/VirtualMouse',
    image: porfolioImage8,
  },
  {
    title: 'Fiteness App',
    description:
      ' A Node.js and MongoDB-based application providing fitness, diet, and exercise recommendations based on fitness tracking and daily steps via an Android app.',
    url: 'https://github.com/mallickboy/Fictional-Chatbot',
    image: porfolioImage1,
  },
  {
    title: 'Daily Task Management System',
    description: 'A Flask-based backend system for managing daily tasks with features for setting and tracking to-dos.',
    url: 'https://github.com/mallickboy/Daily-Task-Management-System',
    image: porfolioImage10,
  },
  // {
  //   title: 'Gesture-Controlled Video Games',
  //   description:
  //     'A system that allows controlling video games through hand gestures using a camera, including integration with popular games like Valorant.',
  //   url: 'https://github.com/mallickboy/Gesture-Controlled-Video-Games',
  //   image: porfolioImage11,
  // },
  {
    title: 'Cyclone Intensity Prediction',
    description:
      'A deep learning project focusing on predicting cyclone intensity and track using satellite data, achieving 99.6% accuracy.',
    url: 'https://github.com/mallickboy/Cyclone-Intensity-and-Track-Prediction-using-Deep-Learning',
    image: porfolioImage7,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2025',
    location: 'Indian Institute of Information Technology (IIIT), Kalyani',
    title: 'Bachelors in Computer Science and Engineering',
    content: (
      <p>
        At IIIT Kalyani, I built a strong foundation in computer science, focusing on algorithms, data structures, and
        software engineering. I gained hands-on experience in backend development, AI/ML, and full-stack development
        using Python, Node.js, and C++. I also explored cloud technologies and microservices, working on projects that
        emphasized scalability and performance.
      </p>
    ),
  },
  {
    date: 'March 2021',
    location: "New Barrackpore Colony Boys' High School",
    title: 'Higher Secondary Education (Class 12)',
    content: (
      <p>
        During high school, I excelled in Mathematics, Physics, and Computer Science, which sparked my interest in
        technology and problem-solving. The experience fostered my critical thinking, time management, and teamwork
        skills—key assets in my academic and professional journey.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - July 2024',
    location: 'Indian Institute of Information Technology (IIIT), Kalyani',
    title: 'Deep Learning Intern - Cyclone Intensity and Track Prediction',
    content: (
      <p>
        I worked on a SERB-funded project focused on predicting cyclone intensity and track using deep learning. I
        analyzed satellite data to predict cyclone characteristics like wind speed, central pressure, and path. Using
        CNN, TensorFlow, and YOLO, I helped achieve 99.6% accuracy in predicting central pressure. This experience
        deepened my knowledge of AI/ML, data analysis, and predictive modeling.
      </p>
    ),
  },
  {
    date: 'February 2025 - Present',
    location: 'CodSoft AI Internship',
    title: 'AI Intern - Chatbot Development',
    content: (
      <p>
        Currently, I'm working on building a simple chatbot at CodSoft using predefined rules and pattern matching
        techniques to process user queries. This internship is enhancing my skills in Natural Language Processing (NLP)
        and conversational AI. I'm excited to explore more about AI-driven solutions and improve my understanding of
        conversational interfaces.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Dr. Uma Das (Professor, Physics, Space and Atmospheric Science, IIIT Kalyani)',
      text: 'Among all the students I have seen till today, he is among the top 1% in terms of capability, learning, sincerity, and perseverance.',
      image: 'https://iiitkalyani.ac.in/images/staff/udmain.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I am always open to connecting and discussing potential opportunities. Feel free to reach out to me :',
  items: [
    {
      type: ContactType.Email,
      text: 'contact@mallickboy.com',
      href: 'mailto:contact@mallickboy.com',
    },
    {
      type: ContactType.Location,
      text: 'Kolkata, India',
      href: 'https://www.google.ca/maps/place/New+Barrakpur,+Kolkata,+West+Bengal/@23.6751681,78.6083316,4.87z',
    },
    {
      type: ContactType.Twitter,
      text: '@themallickboy',
      href: 'https://www.twitter.com/themallickboy/',
    },
    {
      type: ContactType.Github,
      text: 'mallickboy',
      href: 'https://github.com/mallickboy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mallickboy'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/20946022/tamal-mallick'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mallickboy/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/themallickboy'},
];
