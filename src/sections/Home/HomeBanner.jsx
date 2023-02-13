import meImg from '../../assets/images/me.jpg';

const HomeBanner = () => {
    return (
        <div className="flex flex-col items-center py-8 md:py-4 flex-1 h-full justify-center relative w-full ">
            <div className="relative rounded-full overflow-hidden">
                <img className='absolute lg:w-48 left-1/3 lg:-ml-8 lg:-mt-3 md:w-32 md:-mt-3 md:-ml-6 w-20 -ml-4 -mt-1.5 z-10' src="https://www.free-emoticons.com/files/funny-emoticons/7816.png" alt="Hat Mario Emoticon" />
                <img className="h-40 md:h-64 lg:h-96 object-scale-down" src={meImg} alt="beach"/>
            </div>
            <div><h3 className="text-red-500 font-bold text-2xl">It's A Me!</h3></div>
        </div>
    )
}

export default HomeBanner;