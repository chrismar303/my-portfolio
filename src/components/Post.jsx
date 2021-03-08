import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import PostItem from './PostItem';
import Section from './Section';

const Post = () => {
    const [postData, setPostData] = useState(null);

    // TODO: do this with axios
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                publishedAt,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then(data => setPostData(data))
            .catch(console.error);
    }, [postData]);
    
    return (
        <main className="bg-gray-50 min-h-screen px-2 md:px-4">
            <Section title="Blog Post" subtitle="Welcome to my page of blog post">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                    {postData && postData.map((post, index) => (
                        <article className="">
                            <Link to={`/post/${post.slug.current}`} key={post.slug.current} exact>
                                <PostItem 
                                    key={index} 
                                    title={post.title}
                                    imgUrl={post.mainImage.asset.url}
                                    alt={post.mainImage.alt}
                                    published={post.publishedAt}
                                />
                            </Link>
                        </article>
                    ))}
                </div>
            </Section>
        </main>
    )
}



export default Post;