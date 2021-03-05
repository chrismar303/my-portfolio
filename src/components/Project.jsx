import { useState, useEffect } from 'react';
import sanityClient from '../client';

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
            tags
        }`)
        .then(data => setProjectsData(data))
        .catch(console.error);
    }, [projectsData]);
   
    return (
        <main className="bg-gray-100 min-h-screen p-12">
            <section className="container mx-auto">
                {/* page title */}
                <div className="text-center">
                    <h1 className="text-5xl sticks">My Projects</h1>
                    <h3 className="mt-4 text-gray-600">My latest works. Enjoy!</h3>
                </div>
                {/* Project Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {projectsData?.map((project, index) => <ProjectItem project={project} index={index} />)}
                </div>
            </section>
        </main>
    )
}

// TODO: add github links
function ProjectItem({ project }) {
    return (
        <article className="bg-white shadow-md rounded-md overflow-hidden">
             {/* card header */}
            <div className="pt-2 px-3 py-1">
                <h1 className="lg:text-center text-2xl font-bold sticks">{project.title}</h1>
            </div>
            <img className="w-full h-40 bg-red-500"  />
            {/* card body */}
            <div className="px-3 mt-2">
                <div className="flex justify-between text-sm uppercase text-gray-400">
                    <span>Date: </span>
                    <span className="">{new Date(project.date).toLocaleDateString()}</span>
                </div>
               
                <p className="text-md text-gray-700 leading-snug mt-2">{project.description}</p>
                {/* links */}
                <div className="flex my-4 text-center ">
                    <a href="#" className="w-1/2 font-semibold text-green-500 border-green-500 border rounded-sm px-4 py-2 hover:bg-green-500 hover:text-white transition ease-in">
                        Github
                    </a>
                    <a href={project.link} className="w-1/2 font-semibold text-red-500 border-red-500 border rounded-sm px-4 py-2 hover:bg-red-500 hover:text-white transition ease-in" alt={project.title} target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                </div>
            </div>
            {/* card footer */}
            <div className="border-t border-gray-200 px-3 py-1 mt-2">
                <h4 className="mb-1 text-sm text-gray-400">Tags:</h4>
                <div className="flex text-xs gap-x-4 gap-y-2 py-1 overflow-x-auto">
                    {project.tags.map(tag => (
                        <span className="bg-red-100 text-red-600 px-4 py-0.5 font-semibold rounded-xl">{tag}</span>
                    ))}
                </div>
            </div>
        </article >
    )
}

export default Project;