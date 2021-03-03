import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import PostItem from './PostItem';
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
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center sticks">Blog Post Page</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my page of blog post</h2>
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
            </section>
        </main>
    )
}



export default Post;