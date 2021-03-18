const Content = ({ project }) => {
    return (
        <div className="px-3 mt-2 h-full xl:flex xl:flex-col xl:gap-4">
            {/* metadata */}
            <Metadata date={project.date} />
            {/* header */}
            <Header title={project.title} description={project.description} />
            {/* links */}
            <Button project={project} />
        </div>
    )
}

function Metadata({ date }) {
    return (
        <div className="flex justify-between text-xs uppercase text-gray-400">
            <span>Date: </span>
            <span>{new Date(date).toLocaleDateString()}</span>
        </div>
    )
}

function Header({ title, description }) {
    return (
        <>
            <h1 className="text-xl font-bold mt-2 ">{title}</h1>    
            <p className="text-sm text-gray-700 leading-snug">{description}</p>    
        </>
    )
}

function Button({ project }) {
    return (
        <div className="flex items-center my-4 text-center">
            {project?.github && 
                <a href={project.github} className="flex-1 font-semibold text-green-500 border-green-500 border rounded-sm px-4 py-2 hover:bg-green-500 hover:text-white transition ease-in" alt="github" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            }
            <a href={project.link} className="flex-1 font-semibold text-red-500 border-red-500 border rounded-sm px-4 py-2 hover:bg-red-500 hover:text-white transition ease-in" alt={project.title} target="_blank" rel="noopener noreferrer">
                Demo
            </a>
        </div>
    )
} 

export default Content;