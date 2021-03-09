import { useState, useEffect } from 'react';
import beachside from '../beachside.jpg';
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../client.js';
import Section from './Section';

// TODO: put into 1 place (about / singlepost)
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const About = () => {
    const [author, setAuthor] = useState(null);
    // useEffect(() => {
    //     sanityClient.fetch(`*[_type == "author"]{
    //         name,
    //         bio,
    //         "authorImage": image.asset->url
    //     }`)
    //     .then(data => setAuthor(data[0]))
    //     .catch(console.error);
    // }, []);
    // if(!author) return <div>Loading...</div>

    return (
        <main>
            <Section title="About me">
                {/* hero */}
                <div className="flex flex-col mt-4 lg:mt-8 lg:flex-row">
                    {/* img */}
                    <div className="flex-1 flex justify-center p-2 overflow-hidden lg:rounded-sm">
                        {/* <img className="" src={author.authorImage} alt="author"/> */}
                        <img className="max-h-96" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.wikia.com%2Fpathinfo%2Fimages%2F3%2F3a%2FIrvine_logo.gif&f=1&nofb=1" alt="me"/>
                    </div>
                    {/* content */}
                    <div className="flex-1 p-2 lg:h-1/2 lg:m-auto lg:pl-8 ">
                        {/* about */}
                        <div>
                            <h3 className="text-lg font-semibold text-red-500">Who I Am</h3>
                            <p className="mt-2 font-light">
                                Hey it is your boy Chrismar. Welcome to my website. Please enjoy and hit me up :)
                                UCI Graduate! ZOT ZOT ZOT!!! Forever An OG Computer Scientist with a specialization in Systems and Software
                            </p>
                        </div>
                        {/* Education */}
                        <div>
                            <h3 className="mt-4 text-lg font-semibold text-red-500">Education</h3>
                            <Education />
                        </div>
                        {/* skills sections */}
                        <div>
                            <h3 className="mt-4 text-lg font-semibold text-red-500">Skills</h3>
                            <ul className="p-2 text-sm flex flex-wrap gap-2">
                                <Skill name="React" />
                                <Skill name="Node" />
                                <Skill name="Python" />
                                <Skill name="HTML" />
                                <Skill name="CSS" />
                                <Skill name="Java" />
                                <Skill name="C++" />
                            </ul>
                        </div>

                    </div>
                </div>
            </Section>
        </main>
    )
}

function Skill({ name }) {
    return (
        <li className="px-2 py-1 text-red-500 shadow">{name}</li>
    )
}

function Education() {
    return (
        <ul>
            <li><EducationItem title="University of California, Irvine" subtitle="B.S. Computer Science" type="Degree" /></li>
            <li><EducationItem title="React Native Course" subtitle="Udemy" type="Certificate" /></li>
            <li><EducationItem title="Web Developers Course" subtitle="Udemy" type="Certificate" /></li>
        </ul>
    )
}

function EducationItem({ title, subtitle, type }) {
    return (
        <div className="bg-gray-50 shadow p-4 mt-2">
            <div className="flex justify-between items-center">
                <h4 className="font-semibold">{title}</h4>
                <span className="text-xs text-gray-500">{type}</span>
            </div>
            <h6 className="font-light">{subtitle}</h6>
        </div>
    )

} 

export default About;
