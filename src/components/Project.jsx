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
                <div className="grid gap-4 mt-4">
                    {projectsData?.map((project, index) => <ProjectItem project={project} index={index} />)}
                </div>
            </section>
        </main>
    )

    // return (
    //     <main className="bg-gray-100 min-h-screen p-12">
    //         <section className="container mx-auto">
    //             <h1 className="text-5xl flex justify-center sticks">My Projects</h1>
    //             <h2 className="text-lg text-gray-600 flex justify-center mb-12">
    //                 Welcome to my projects page!
    //             </h2>
    //             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //                 {projectsData && projectsData.map((project, index) => (
    //                     <article className="relative rounded-lg shadow-xl bg-white p-16">
    //                         <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
    //                             <a 
    //                                 href={project.link}
    //                                 alt={project.title}
    //                                 target="_blank" 
    //                                 rel="noopener noreferrer"
    //                             >   
    //                                 {project.title}
    //                             </a>
    //                         </h3>
    //                         <div className="text-gray-500 text-xs space-x-4">
    //                             <div className="flex flex-wrap gap-x-4 gap-y-2">
    //                                 <span>
    //                                     <strong className="font-bold">Finished on</strong>:{" "}
    //                                     {new Date(project.date).toLocaleDateString()}
    //                                 </span>
    //                                 <span>
    //                                     <strong className="font-bold">Company</strong>:{" "}
    //                                     {project.place}
    //                                 </span>
    //                                 <span>
    //                                     <strong className="font-bold">Type</strong>:{" "}
    //                                     {project.projectType}
    //                                 </span>
    //                             </div>
    //                             <p className="my-6 text-lg text-gray-700 leading-relaxed">
    //                                 {project.description}
    //                             </p>
    //                             {/* TODO: add tags */}
    //                             {/* <div className="flex">
    //                                 {project.tags.map(tag => <span className="border-red-500 mr-2">{tag}</span>)}
    //                             </div> */}
    //                             <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover-text-red-400">
    //                                 View The Project{" "}
    //                             </a>
    //                         </div>
    //                     </article>
    //                 ))}
    //             </section>
    //         </section>
    //     </main>
    // )
}


function ProjectItem({ project }) {
    return (
        <a className="text-black" href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">
            <article className="bg-white shadow-md rounded-md">
            {/* card header */}
            <div className="px-3 pt-2">
                <h1 className="text-2xl font-bold">{project.title}</h1>
            </div>
            <img className="w-full h-32 bg-red-500"  />
            {/* card body */}
            <div className="px-3 mt-2">
                <div className="flex justify-between text-md text-gray-400">
                    <span>Date: </span>
                    <span className="">{new Date(project.date).toLocaleDateString()}</span>
                </div>
                <p className="font-light text-gray-900">{project.description}</p>
            </div>
            {/* card footer */}
            <div className="border-t border-gray-200 px-3 py-1 mt-2">
                <h4 className="mb-1  text-gray-400">Tags:</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2 py-1">
                    {project.tags.map(tag => (
                        <span className="text-sm bg-red-100 text-red-600 px-4 font-semibold rounded-lg">{tag}</span>
                    ))}
                </div>
            </div>
        </article >
        </a>

    )
}

export default Project;