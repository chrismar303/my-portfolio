import backgroundImg from '../landing.jpg';

const Home = () => {
    return (
        <main>
            <img className="absolute object-cover w-full h-full " src={backgroundImg} alt="landing background"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl font-bold text-red-400 leading-none lg:leading-snug home-name">I Am Chrismar</h1>
            </section>
        </main>
    )
}

export default Home;