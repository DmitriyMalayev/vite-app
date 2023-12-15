import {useState} from "react";

const IncrementNumber = () => {
    const [count, setCount] = useState(10)

    const handleClick = () => {
        setTimeout(() => {
            setCount((prevState) => {
                return prevState + 1
            })
        }, 3000)
    }
    const sayHello = () => {
        console.log("Hello")
    }
    sayHello()



    return (
        <div>
            <h2>You clicked {count}</h2>
            <button type={"button"} onClick={handleClick}>Increase Number</button>
        </div>
    );
};

export default IncrementNumber;