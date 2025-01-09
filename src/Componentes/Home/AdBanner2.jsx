import Button from "../Button"

const AdBanner2 = ({ imageSrc, showButton, bannerTitle }) => {
    return (
        <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity -80"></div>
            <img
                className="w-full"
                src={imageSrc}
                alt="Promotional Banner"
            />
            {showButton && bannerTitle && (
                <div className="absolute flex flex-col items-start gap-4 left-8 bottom-10 md:left-10 md:bottom-24 xl:left-14 xl:bottom-48 text-white">
                    <h2 className="text-lg font-bold md:text-2xl lg:text-3xl lg:mb-3 lg:max-w-md xl:max-w-xl xl:mb-6 xl:text-4xl">
                        {bannerTitle}
                    </h2>
                    <Button text="Explore Category" />
                </div>
            )}
        </div>
    );
};

export default AdBanner2;