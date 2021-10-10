import React from "react";

const Link = ( { className, href, childern } ) => {
    return <a className={className} href={href}>{childern}</a>;
};

export default Link;