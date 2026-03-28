import portfolioImage1 from '../../src/assets/project1.png';
import portfolioImage2 from '../../src/assets/project2.png';
import portfolioImage3 from '../../src/assets/project3.png';
import portfolioImage4 from '../../src/assets/project4.png';
import portfolioImage5 from '../../src/assets/Hareth-Image.png';

export const portfolioItems = [
  {
    id: 1,
    title: 'Mana Calendar',
    category: 'Calendar',
    image: portfolioImage1,
    description: [
      'Different ways to view your calendar – quickly switch between month, week, and day views.',
      'Integrated location services and contact management for enhanced event creation.',
    ],
    tech: ['React Native', 'Node JS', 'Mongo DB', 'Firebase'],
  },
  {
    id: 2,
    title: 'Rigor',
    category: 'Todo Tasks',
    image: portfolioImage2,
    description: [
      'Developed a digital checklist system with timestamp tracking, multimedia capture, and SQL database integration.',
      'Implemented comprehensive testing suite including unit tests and E2E testing for quality assurance.',
    ],
    tech: ['React Native', 'SQA', 'Firebase'],
  },
  {
    id: 3,
    title: 'Tali',
    category: 'Health Care',
    image: portfolioImage3,
    description:
      'A modern healthcare application designed to track and manage personal health data through connected medical devices. The app automatically records measurements like blood pressure and glucose levels and uses AI to analyze the data and assist users through an interactive chat system.',
    tech: ['React Native', 'Graph QL', 'Railway', 'Node JS'],
  },
  {
    id: 4,
    title: 'Genfit',
    category: 'Fitness',
    image: portfolioImage4,
    description:
      'GenFit is a fitness-focused mobile application that helps users manage workouts, track fitness goals, and stay motivated on their health journey. It offers a clean user experience with tools designed for better performance and progress tracking.',
    tech: ['React Native', 'Supabase', 'Node JS'],
  },
  {
    id: 5,
    title: 'Hareth Optics',
    category: 'E-commerce / Eyewear',
    image: portfolioImage5,
    description:
      'Hareth Optics is a modern mobile application that allows users to explore and purchase premium eyewear online with an advanced Virtual Try-On feature. The app enables customers to see how glasses look on their face before buying, making the shopping experience more confident and convenient. The platform also includes a dedicated delivery agent app for efficient order management and fast home delivery.',
    tech: ['React Native (Expo)', 'Graph QL', 'Shopify', 'Node JS', 'Mongo DB', 'Firebase'],
  },
];

