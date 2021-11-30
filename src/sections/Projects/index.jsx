import Section from '../../components/Section';
import Project from './Project'
import { projectsData } from '../../data.js';

const Projects = () => {
// TODO: make card have max-size
    return (
        <main id="projects" className="bg-gray-50  px-2 md:px-4">
            <Section title="My Projects" subtitle="My latest works. Enjoy!">
                {/* Project Cards */}
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-y-4 gap-x-4 md:gap-y-8 md:w-3/4 lg:w-3/4 lg:gap-8 lg:py-4 mx-auto">
                    {projectsData?.map((project, index) => {
                        const props = { project, index };
                        return index % 2 === 0 ? <Project {...props} /> : <Project {...props} reverse />;
                    })}
                </div>
            </Section>
        </main>
    )
}


export default Projects;