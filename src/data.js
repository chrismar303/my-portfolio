import beachside from './assets/images/beachside.jpg';
// import aboutImage from './assets/images/about2.jpg';
// import aboutImage from './assets/images/about.JPG';
import aboutImage from './assets/images/about3.JPG';

export const aboutData = {
    image: aboutImage,
    imageAlt: 'me',
    body: 'My name is Christian Martinez. I graduated from the University of California, Irvine with a Bachelor of Science in Computer Science. I specialized in System and Software',
    education: [ 
        { title: 'University of California, Irvine', subtitle: 'B.S. Computer Science', type: 'Degree' },
        { title: 'React Native Course', subtitle: 'Udemy', type: 'Certificate' },
        { title: 'Web Developers Course', subtitle: 'Udemy', type: 'Certificate' }
    ],
    skills: ['React', 'Node', 'Python', 'HTML', 'CSS', 'Java', 'C++'],

}

export const projectsData = [
    { 
        title: 'Chris', 
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, qui. Deserunt, incidunt non illo saepe odit sit, ipsa iure eius quo esse consequuntur velit ducimus atque provident neque dignissimos assumenda!', 
        github: 'https://github.com/chrismar303',
        link: 'https://www.google.com',
        tags: ['React', 'Python'],
        date: new Date(),
        image: beachside 
    },
    { 
        title: 'Chris', 
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, qui. Deserunt, incidunt non illo saepe odit sit, ipsa iure eius quo esse consequuntur velit ducimus atque provident neque dignissimos assumenda!', 
        github: 'https://github.com/chrismar303',
        link: 'https://www.google.com',
        tags: ['React', 'Python'],
        date: new Date(),
        image: beachside 
    },
    { 
        title: 'Chris', 
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, qui. Deserunt, incidunt non illo saepe odit sit, ipsa iure eius quo esse consequuntur velit ducimus atque provident neque dignissimos assumenda!', 
        github: 'https://github.com/chrismar303',
        link: 'https://www.google.com',
        tags: ['React', 'Python', 'C', 'C++', 'Java', 'Javascript'],
        date: new Date(),
        image: beachside 
    }
]