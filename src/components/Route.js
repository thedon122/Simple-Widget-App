import { useEffect, useState } from "react";

const Route = ( { path, childern }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path ? childern : null
};

export default Route;