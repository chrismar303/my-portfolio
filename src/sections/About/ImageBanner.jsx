import { aboutData }  from '../../data';

const ImageBanner = () => {
    return (
        <div className="flex-1 flex justify-center overflow-hidden lg:rounded-sm">
            <img className="max-h-96 object-cover" src={aboutData.image} alt={aboutData.imageAlt} />
        </div>
    )
}

export default ImageBanner;