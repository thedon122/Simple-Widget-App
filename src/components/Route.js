import { useEffect } from "react";
import { useState } from "react";

const Route = ( { path, childern }) => {
    useEffect(() => {
        const onLocationChange = () => {
            console.log('Location Change');
        };
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return window.location.pathname === path ? childern : null
};

export default Route;