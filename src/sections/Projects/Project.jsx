import Content from './Content';
import Footer from './Footer';

const Project = ({ project, reverse }) => {
    return (
        <article className={`bg-white shadow rounded-sm overflow-hidden lg:rounded-sm lg:shadow-md lg:transform lg:hover:scale-110 lg:duration-500 lg:flex ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            {/* Card img */}
            <div className="lg:w-1/2 h-50 lg:h-auto bg-gray-100">
                <img className="w-full h-full object-cover" src={project.image} />
            </div>

            {/* Card Content */}
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-between">
                {/* card body */}
                <Content project={project} />
                {/* card footer */}
                <Footer tags={project.tags} />
            </div>
        </article>
    )
}

export default Project;