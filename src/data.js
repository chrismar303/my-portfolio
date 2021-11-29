import projectOne from './assets/images/project1.png';
import projectTwo from './assets/images/project2.png';
import projectThree from './assets/images/project3.jpg';
import projectFour from './assets/images/project4.png';
import projectFive from './assets/images/project5.jpg';
import aboutImage from './assets/images/about3.JPG';
import { FaReact, FaPython, FaJs, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGraduationCap } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { SiCplusplus } from 'react-icons/si';

//TODO : add project image overlay

export const aboutData = {
    image: aboutImage,
    imageAlt: 'me',
    body: 'My name is Christian Martinez. I graduated from the University of California, Irvine with a Bachelor of Science in Computer Science. I specialized in Systems and Software. I am a first-generation college student looking to break into the Software Engineering industry.',
    education: [ 
        { title: 'University of California, Irvine', subtitle: 'B.S. Computer Science', type: 'Degree', icon: < FaGraduationCap /> },
        { title: 'React Native Course', subtitle: 'Udemy', type: 'Certificate', icon: <RiFilePaper2Line /> },
        { title: 'Web Developers Course', subtitle: 'Udemy', type: 'Certificate', icon: <RiFilePaper2Line /> }
    ],
    skills: { 
        'React': { icon: <FaReact />, color: 'text-blue-500' },
        'Node': { icon: <FaNodeJs />, color: 'text-green-500' },
        'Python' : { icon: <FaPython />, color: 'text-yellow-400'},
        'Java': { icon: <FaJava />, color: 'text-red-500' },
        'HTML': { icon: <FaHtml5 />, color: 'text-red-500'},
        'CSS': { icon: <FaCss3Alt />, color: 'text-blue-700' },
        'Javascript': { icon: <FaJs />, color: 'text-yellow-200' },
        'C++': { icon: <SiCplusplus />, color: 'text-blue-500' }
    }

}

export const projectsData = [
    { 
        title: 'COVID-19 Tracker', 
        description: 'React Application that tracks global data pertaining to COVID-19. Also allows for country-specific inspection of data.\n', 
        github: 'https://github.com/chrismar303',
        link: 'https://covid-19-tracker-e0dc2.firebaseapp.com/',
        tags: ['React', 'CovidAPI', 'NewsApi'],
        date: 'September 2020',
        image: projectOne 
    },
    { 
        title: 'FOODAR', 
        description: 'A website that tracks a user’s list of establishments or restaurants the user would like to visit. When the logs in, establishments are listed in the order of closest proximity', 
        github: 'https://github.com/chrismar303',
        link: 'https://hidden-retreat-20671.herokuapp.com/',
        tags: ['NodeJs', 'EJS', 'HTML', 'CSS3', 'Mongoose', 'PassportJS', 'YelpAPI'],
        date: 'August 2020',
        image: projectTwo 
    },
    { 
        title: 'Stock ROI Projector', 
        description: 'A Python program that tracks the user’s Return On Investment based on the user’s selected time interval and growth expectations.', 
        github: 'https://github.com/chrismar303',
        link: 'https://www.google.com',
        tags: ['Python'],
        date: 'October 2021',
        image: projectThree 
    },
    { 
        title: 'Class Tracker', 
        description: 'A python script that uses the selenium library to automate the process of checking a class’ availability status.', 
        github: 'https://github.com/chrismar303',
        link: 'https://www.google.com',
        tags: ['Python', 'BeautifulSoup'],
        date: 'November 2021',
        image: projectFour 
    },
    { 
        title: 'Movie Showtimes Link Scraper', 
        description: 'A python script that saves automates the process of finding all AMC movie showtimes based on a given zip code. Ticket purchase links and showtimes are saved onto a local file.', 
        github: 'https://github.com/chrismar303',
        link: 'https://www.google.com',
        tags: ['Python', 'Selenium'],
        date: 'September 2020',
        image: projectFive 
    },
]