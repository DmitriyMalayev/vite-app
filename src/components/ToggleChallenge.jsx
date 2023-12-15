import {useState} from 'react';

const ToggleChallenge = () => {
    const [isSwitch, setIsSwitch] = useState(false)

    return (
        <div>
            <button className={"btn"} onClick={() => setIsSwitch(!isSwitch)}>Click Me</button>
            {isSwitch && <ConditionalComponent/>}
        </div>
    );
};

const ConditionalComponent = () => {
    return <h1>Shown if true</h1>
}

export default ToggleChallenge;