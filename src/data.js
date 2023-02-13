import projectOne from './assets/images/project1.png';
import projectTwo from './assets/images/project2.png';
import projectThree from './assets/images/project3.jpg';
import projectFour from './assets/images/project4.png';
import projectFive from './assets/images/project5.jpg';
import foodDraw from './assets/images/food-draw.png';
import aboutImage from './assets/images/about3.JPG';
import { FaVuejs, FaReact, FaPython, FaJs, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGraduationCap } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { SiCplusplus } from 'react-icons/si';

export const aboutData = {
    image: aboutImage,
    imageAlt: 'me',
    body: `My name is Christian Martinez. I am a Software Engineer currently working as Full Stack Engineer.
        I accidentally entered the Web Development industry in 2021 but found a passion for creating amazing things for the web!
        I am a first-generation university graduate from the University of California.
        I graduated with my Bachelor of Science in Computer Science with a specialization in Systems and Software.`,
    education: [ 
        { title: 'University of California, Irvine', subtitle: 'B.S. Computer Science', type: 'Degree', icon: < FaGraduationCap /> },
        { title: 'React Native Course', subtitle: 'Udemy', type: 'Certificate', icon: <RiFilePaper2Line /> },
        { title: 'Web Developers Course', subtitle: 'Udemy', type: 'Certificate', icon: <RiFilePaper2Line /> }
    ],
    skills: { 
        'Vue': { icon: <FaVuejs />, color: 'text-green-500' },
        'React': { icon: <FaReact />, color: 'text-blue-500' },
        'Java': { icon: <FaJava />, color: 'text-red-500' },
        'Javascript': { icon: <FaJs />, color: 'text-yellow-200' },
        'Python' : { icon: <FaPython />, color: 'text-yellow-400'},
        'Node': { icon: <FaNodeJs />, color: 'text-green-500' },
        'HTML': { icon: <FaHtml5 />, color: 'text-red-500'},
        'CSS': { icon: <FaCss3Alt />, color: 'text-blue-700' },
        'C++': { icon: <SiCplusplus />, color: 'text-blue-500' }
    }

}

export const projectsData = [
    {
        title: 'Food Draw',
        description: 'A fun Vue 3 Application to help you and your buddies choose a great restaurant so you all can stop the fighting and start the eating.',
        github: 'https://github.com/chrismar303/food-of-luck',
        tags: ['Vue3', 'TailwindCSS', 'YelpAPI'],
        date: 'In Progress 🔨',
        image: foodDraw
    },
    { 
        title: 'COVID-19 Tracker', 
        description: 'A React Application that tracks global data pertaining to COVID-19. Also allows for country-specific inspection of data.\n', 
        link: 'https://covid-19-tracker-e0dc2.firebaseapp.com/',
        tags: ['React', 'CovidAPI', 'NewsAPI'],
        date: 'September 2020',
        image: projectOne 
    },
    { 
        title: 'FOODAR', 
        description: 'A NodeJS Fullstack Application that tracks a user’s list of establishments or restaurants the user would like to visit. When the logs in, establishments are listed in the order of closest proximity', 
        link: 'https://hidden-retreat-20671.herokuapp.com/',
        tags: ['NodeJs', 'EJS', 'TailwindCSS', 'HTML', 'CSS3', 'Mongoose', 'PassportJS', 'YelpAPI'],
        date: 'August 2020',
        image: projectTwo 
    },
    { 
        title: 'Stock ROI Projector', 
        description: 'A Python program that calculates the user’s Return On Investment (ROI) based on the user’s selected time interval and growth expectations.', 
        github: 'https://github.com/chrismar303/stock_projector',
        tags: ['Python'],
        date: 'October 2021',
        image: projectThree 
    },
    { 
        title: 'Class Tracker', 
        description: 'A Python program that uses the selenium library to automate the process of checking a class’ availability status.', 
        github: 'https://github.com/chrismar303/mtsac-class-tracker',
        tags: ['Python', 'BeautifulSoup', 'Selenium'],
        date: 'November 2021',
        image: projectFour 
    },
    { 
        title: 'Movie Showtimes Link Scraper', 
        description: 'A Python program that automates the process of finding all AMC movie showtimes based on a given zip code. Ticket purchase links and showtimes are saved onto a local file.', 
        github: 'https://github.com/chrismar303/movie_showtimes_scraper',
        tags: ['Python', 'Selenium'],
        date: 'September 2020',
        image: projectFive 
    },
]

export const personalData = {
    phone: '1 (626) 460-0121',
    email: 'Chrismar303.dev@gmail.com',
    location: 'Los Angeles & Orange Country Area',
    resume: 'https://drive.google.com/file/d/1GWUC3SYNMRDMU8ccW7ujJmn5n0fGlWbd/view?usp=sharing'
}