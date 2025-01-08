export const Header = ({onMenuToogle}) => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };

    return (
        <header className="fixed top-0 z-50 text-white w-full bg-navbar opacity-95">
            <nav className="h-[74.5px] lg:h-[84px] flex justify-between items-center px-8 md:px-10">
            <div className="flex gap-7">
                    <AiOutlineMenu
                        onClick={onMenuToggle}
                        className="w-[24px] h-[24px] cursor-pointer text-neutral-400"
                    />
                </div>
                <div className="w-28 lg:w-36">
                    <img
                        className="cursor-pointer"
                        onClick={navigateToHome}
                        src="/logo.webp"
                        alt="logo"
                    />
                </div>
                <GoSearch className="w-[24px] h-[24px] cursor-pointer text-neutral-100" />
            </nav>
        </header>
    );
};