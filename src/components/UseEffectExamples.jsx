import {useEffect, useState} from 'react';

const UseEffectExamples = () => {
    const [value, setValue] = useState(0)
    const [secondValue, setSecondValue] = useState(0)

    const sayHello = () => {
        console.log("Hello")
    }
    sayHello()
    useEffect(() => {
        console.log("Will only run once")
    }, [])


    useEffect(() => {
        console.log("Hello from first useEffect")
    }, [value, secondValue])  //if value or second value change will invoke first argument


    useEffect(() => {
        console.log("Hello from second useEffect")
    }, [])


    return (
        <div>
            <h1>{value}</h1>
            <button className={"btn"} onClick={() => setValue(value + 1)}>Click First Value</button>
            <h1>{secondValue}</h1>
            <button className={"btn"} onClick={() => setSecondValue(value + 1)}>Click Second Value</button>
        </div>
    );
};

export default UseEffectExamples;

/*
useEffectHook
    Accepts two arguments (second one optional)
    First Argument -> CallBack Function
    Second Argument -> Dependency Array

    By Default run on each render (initial and rerender)
    Callback can't return Promise
        Can't become async
    If Dependency Array is empty useEffect will only run on initial render
*/