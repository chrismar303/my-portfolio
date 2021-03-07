import { useState, useEffect } from 'react';
import beachside from '../beachside.jpg';
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../client.js';

// TODO: put into 1 place (about / singlepost)
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const About = () => {
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        .then(data => setAuthor(data[0]))
        .catch(console.error);
    }, []);
    if(!author) return <div>Loading...</div>

    return (
        <main>
            <section className="container mx-auto min-h-screen  pt-12 lg:px-12">
                <h2 className="text-lg font-semibold text-center">About me</h2>
                {/* hero */}
                <div className="flex flex-col mt-4 lg:mt-8 lg:flex-row">
                    {/* img */}
                    <div className="flex-1 overflow-hidden lg:rounded-sm">
                        <img className="" src={author.authorImage} alt="author"/>
                    </div>
                    {/* content */}
                    <div className="flex-1 p-2 lg:h-1/2 lg:m-auto lg:pl-8 ">
                        {/* about */}
                        <div>
                            <h3 className="text-lg font-semibold text-red-500">Who I Am</h3>
                            <p className="mt-2 ">
                                Hey it is your boy Chrismar. Welcome to my website. Please enjoy and hit me up :)
                                UCI Graduate! ZOT ZOT ZOT!!! Forever An OG Computer Scientist with a specialization in Systems and Software
                            </p>
                        </div>
                        {/* skills sections */}
                        <div>
                            <h3 className="mt-4 text-lg font-semibold text-red-500">Skills</h3>
                            <ul className="p-2 text-sm flex gap-2">
                                <Skill name="React" />
                                <Skill name="Node" />
                                <Skill name="Python" />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
    // return (
    //     <main className="relative">
    //         <img src={beachside} alt="Beachside" className="absolute w-full" />
    //         <div className="p-10 lg:pt-48 container mx-auto relative">
    //             <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
    //                 <img 
    //                     src={urlFor(author.authorImage).url()} 
    //                     alt="author" 
    //                     className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" 
    //                 />
    //                 <div className="text-lg flex flex-col justify-center">
    //                     <h1 className="sticks text-6xl text-green-300 mb-4">
    //                         Hello Welcome to Chrismar Online. I'm{" "}
    //                         <span className="text-green-100">{author.name}</span>
    //                     </h1>
    //                     <div className="prose lg:prose-xl text-white">
    //                         <BlockContent 
    //                             blocks={author.bio} 
    //                             projectId="wdj97s84"
    //                             dataset="production" />
    //                     </div>
    //                 </div>
    //             </section>
    //         </div>
    //     </main>
    // )
}

function Skill({ name }) {
    return (
        <li className="px-2 py-1 text-red-500 border border-red-500">{name}</li>
    )
}

export default About;
