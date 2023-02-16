import HomeMain from './HomeMain';
import HomeBanner from './HomeBanner';
const Home = () => {
    return (
        <main id="home" className="px-6 border-b-2 min-h-screen">
            <section className="flex flex-col items-center min-h-screen  py-20 lg:py-32 lg:flex-row">
                {/* left / top */}
                <HomeMain />
                {/* right / bottom */}
                <HomeBanner />  
            </section>
        </main>
    )
}

export default Home;