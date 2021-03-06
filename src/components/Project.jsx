import { useState, useEffect } from 'react';
import sanityClient from '../client';
import beachside from '../beachside.jpg'
const Project = () => {
    const [projectsData, setProjectsData] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            github,
            tags
        }`)
        .then(data => setProjectsData(data))
        .catch(console.error);
    }, [projectsData]);
   
    return (
        <main className="bg-gray-100 min-h-screen px-2 md:px-4 py-12">
            <section className="container mx-auto">
                {/* page title */}
                <div className="text-center">
                    <h1 className="text-5xl sticks">My Projects</h1>
                    <h3 className="mt-4 text-gray-600">My latest works. Enjoy!</h3>
                </div>
                {/* Project Cards */}
                {/* TODO: center cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-4 mt-4 lg:w-1/2 mx-auto">
                    {projectsData?.map((project, index) => <ProjectItem project={project} index={index} />)}
                </div>
            </section>
        </main>
    )
}

function ProjectItem({ project }) {
    return (
        <article className="bg-white shadow-lg rounded-sm overflow-hidden  lg:rounded-md lg:flex">
            {/* Card img */}
            <div className="lg:w-1/2 h-50 lg:h-auto bg-gray-100">
                <img className="w-full h-full object-cover" src={beachside} />
            </div>
                    
            <div className="lg:w-1/2">
                {/* card body */}
                <ProjectBody project={project} />
                
                {/* card footer */}
                <ProjectFooter tags={project.tags} />
            </div>
        </article >
    )
}

function ProjectBody({ project }) {
    return (
        <div className="px-3 mt-2">
            {/* metadata */}
            <div className="flex justify-between text-xs uppercase text-gray-400">
                <span>Date: </span>
                <span className="">{new Date(project.date).toLocaleDateString()}</span>
            </div>
            {/* card header */}
            <h1 className="text-xl font-bold sticks mt-2 ">{project.title}</h1>
            
            <p className="text-sm text-gray-700 leading-snug ">{project.description}</p>
            {/* links */}
            <div className="flex my-4 text-center ">
                {project?.github && 
                    <a href={project.github} className="flex-1 font-semibold text-green-500 border-green-500 border rounded-sm px-4 py-2 hover:bg-green-500 hover:text-white transition ease-in" alt="github" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                    }
                <a href={project.link} className="flex-1 font-semibold text-red-500 border-red-500 border rounded-sm px-4 py-2 hover:bg-red-500 hover:text-white transition ease-in" alt={project.title} target="_blank" rel="noopener noreferrer">
                    Demo
                </a>
            </div>
        </div>
    )
}

function ProjectFooter({ tags }) {
    return (
        <div className="border-t border-gray-200 px-3 py-1 mt-2">
            <h4 className="mb-1 text-xs text-gray-400">Tags:</h4>
            <div className="flex text-xs gap-x-4 gap-y-2 py-1 overflow-x-auto">
                {tags.map(tag => (
                    <span className="bg-red-100 text-red-600 px-4 py-0.5 font-semibold rounded-xl">{tag}</span>
                ))}
            </div>
        </div>

    )
}

export default Project;