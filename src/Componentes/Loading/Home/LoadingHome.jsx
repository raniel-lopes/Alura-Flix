import { bouncy } from "ldrs";
import { useEffect } from "react";

// Registra o loader assim que o componente for montado
const LoadingHome = () => {
    useEffect(() => {
        // Registra o loader quando o componente for montado
        bouncy.register();
    }, []);

    return (
        <div className="w-full relative grid place-content-center min-h-screen">
            <l-bouncy size="45" speed="1.75" color="black" />
        </div>
    );
};

export default LoadingHome;
