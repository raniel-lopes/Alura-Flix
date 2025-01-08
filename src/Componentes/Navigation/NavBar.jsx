import {useState} from "react";
import {Header} from "../Header";
import {Menu} from "./Menu"

export const NavBar = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);

    const toggleMenu = () => {
        setIsShowMenu((prev) => !prev);
    };

    return (
        <>
            <Header onMenuToggle={toggleMenu} />
            <Menu isShowMenu={isShowMenu} OnCloseMenu={toggleMenu} />
            {isShowMenu && (
                <div
                    onClick={toggleMenu}
                    className="fixed w-full z-[60] right-0 top-0 min-h-screen bg-black opacity-40"
                ></div>
            )}
        </>
    );
};