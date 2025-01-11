import React from "react";
import { AiOutlineMenu } from "react-icons/ai"; // Ícone de menu
import { GoSearch } from "react-icons/go"; // Ícone de pesquisa
import { useNavigate } from "react-router-dom"; // Importação corrigida

export const Header = ({ onMenuToggle }) => {
    const navigate = useNavigate(); // Agora a função será reconhecida

    const navigateToHome = () => {
        navigate("/"); // Redireciona para a página inicial
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
