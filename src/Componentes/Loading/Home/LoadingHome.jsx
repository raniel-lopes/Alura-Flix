import { bouncy } from "ldrs";
import { useEffect } from "react";


// Registra o loader assim que o componente for montado
useEffect(() => {
    bouncy.register();
}, []);

const LoadingHome = () => {
    return (
        <div className="w-full relative grid place-content-center min-h-sreen">
            <l-bouncy size="45" speed="1.75" color="black" ></l-bouncy>
        </div>
    );
};

export default LoadingHome;