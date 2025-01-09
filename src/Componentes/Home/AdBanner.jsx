import Button from "../Button";

const AdBanner = ({ imageUrl, buttonEnabled, title }) => {
    return (
        <div className="relative w-full sm:max-w-lg sm:mx-auto md:max-w-sm md:mx-0 lg:max-w-xl xl:max-w-3xl">
            <img
                className="w-full h-auto"
                src={imageUrl}
                alt="Advertisement Banner"
            />
            {buttonEnabled && title && (
                 <div className="absolute inset-x-0 bottom-5 flex flex-col items-center justify-center gap-4 text-white">
                    <h3 className="text-base font-bold">{title}</h3>
                    <Button text="Explore More" noNavigate={true} />
                </div>
            )}
        </div>
    );
};

export default AdBanner;