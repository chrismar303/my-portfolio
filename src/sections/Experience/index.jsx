import Section from '../../components/Section';
import Technology from './components/Technology';

const Experience = () => {
    const technologies = ['Vue', 'Javascript', 'Java', 'Spring', 'Hibernate', 'Vuetify', 'HTML5', 'CSS3', 'SCSS', 'Docker', 'MySQL', 'Mongo']
    return (
        <main id="experience" className="flex flex-col justify-center items-center bg-gray-50">
            <Section title="Relevant Experience" subtitle="Where I am at!">
                <div className="w-3/5">
                    <h2 className="font-bold mb-0"><span className="text-lg">Software Engineer - Full Stack Engineer</span>
                        <span className="text-red-500"> @ Applied Medical:
                            <span className="italic"> A Next Generation Medical Company</span>
                        </span>
                    </h2>
                    <span className="text-sm font-bold text-gray-500">March 2022 - Present</span>
                    <ul class="list-disc flex flex-col gap-2 mt-4 ml-4 bullet-point-list">
                        <li>Worked on a team that develops a platform for Medical Residents and Surgeons to study and practice simulated surgery</li>
                        <li>Developed Frontend user-facing applications and features</li>
                        <li>Developed and designed backend components</li>
                        <li>Built a Database backup service on a Docker Container and saved those backup to an Azure CDN</li>
                        <li>Collaborated on an Agile team of 7 and helped design and develop features based on user stories, requirements, and design specifications</li>
                    </ul>
                    <div className="mt-8">
                        <h4 class="font-semibold text-gray-500 mb-4">Technologies</h4>
                        <ul className="flex flex-wrap gap-4">
                            {technologies.map(name => (
                                <li><Technology name={name} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
        </main>
    )
}

export default Experience;