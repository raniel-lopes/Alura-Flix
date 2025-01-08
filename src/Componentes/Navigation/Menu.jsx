import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-rounter-dom";

export const Menu = ({ isShowMenu, onCloseMenu }) => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        onCloseMenu();
        navigate(path);
    };

    return (
        <div
            className={`fixed left-0 top-0 w-64 px-6 min-h-screen bg-navbar transition-transform duration-500 z-[70] ${
                isShowMenu ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="h-20 flex items-center">
                <IoMdClose
                    onClick={onCloseMenu}
                    className="w-[24px] h-[24px] cursor-pointer"
                />
            </div>
            <div className="flex flex-col gap-5 font-normal text-lg mb-3">
                <span
                    onClick={() => navigateTo("/")}
                    className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                    Inicio
                </span>
                <span
                    onClick={() => navigateTo("/search")}
                    className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                    Series
                </span>
                <span
                    onClick={() => navigateTo("/search")}
                    className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                    Filmes
                </span>
                <span
                    onClick={() => navigateTo("/search")}
                    className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                    Originais
                </span>
                <span
                    onClick={() => navigateTo("/search")}
                    className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                    Tendências
                </span>
                <span
                    onClick={() => navigateTo("/search")}
                    className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                    Ver mais
                </span>
            </div>
            <div className="flex flex-col gap-4 mt-8">
                <span className="w-full h-[1px] bg-colorMenu opacity-30"></span>
                <div className="flex justify-between items-center">
                    <span className="hover:text-white transition-colors duration-300">
                        Gêneros
                    </span>
                    <MdKeyboardArrowRight size={24} />
                </div>
                <span className="w-full h1-[1px] bg-colorMenu opacity-30"></span>
            </div>
        </div>
    )
}