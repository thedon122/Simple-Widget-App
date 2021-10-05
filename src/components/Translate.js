import React, { useState}  from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

 //const api = AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM;
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
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
            label="Select a Language"
            selected={languge}
            onSelectedChange={setLanguage}
            options={options} 
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text ={text} languge={languge} />
        </div>
    );
};

export default Translate