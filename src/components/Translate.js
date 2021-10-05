import React, { useState}  from "react";
import Dropdown from "./Dropdown";

const options = [
    {
        label: 'Afrikanns',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [languge, setLanguage] = useState(options[0]);

    return (
        <div>
            <Dropdown 
            selected={languge}
            onSelectedChange={setLanguage}
            options={options} 
            />
        </div>
    );
};

export default Translate