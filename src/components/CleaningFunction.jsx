import {useEffect, useState} from 'react';

const CleaningFunction = () => {
    const [toggle, setToggle] = useState(false)
    console.log("Initial Render")
    return (
        <div>
            <button className={"btn"}
                    onClick={() => setToggle(!toggle)}>Toggle Component
            </button>
            {toggle && <RandomComponent/>}
        </div>
    );
};

const RandomComponent = () => {
    useEffect(() => {

        console.log("useEffect Running")
        const changeBackground = () => {
            document.title = "Hello"
        }

        window.addEventListener("scroll", changeBackground)

        const intId = setInterval(() => {

        }, 1000)


        return () => {
            clearInterval(intId)   //runs after render but before useEffect
            window.removeEventListener("scroll", changeBackground)
        }

    }, []);
    return <h1>Hello</h1>
}

export default CleaningFunction;