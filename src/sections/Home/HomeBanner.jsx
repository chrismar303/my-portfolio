import meImg from '../../assets/images/me.jpg';

const HomeRight = () => {
    return (
        <div className="flex flex-col items-center py-8 md:py-4 flex-1 h-full  justify-center relative w-full ">
            <div className="rounded-full overflow-hidden">
                <img className="h-40 md:h-64 lg:h-96 object-scale-down" src={meImg} alt="beach"/>
            </div>
            <div><h3>me</h3></div>
        </div>
    )
}

export default HomeRight;