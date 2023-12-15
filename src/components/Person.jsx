import React, {useState} from "react";

const Person = () => {
    const [people, setPeople] = useState([
        {name: "Mike", age: 41, hobby: "cooking"},
        {name: "Dave", age: 41, hobby: "cooking"},
    ])

    function handleClick() {
        setPeople([{name:"ABC", age:100, hobby: "designing"}])
    }

    return (
        <div>
            {people.map((person) => {
                return (
                    <div key={person.name}>
                        <h5>{person.name}</h5>
                        <h5>{person.age}</h5>
                        <h5>{person.hobby}</h5>
                    </div>
                )
            })}
            <button onClick={handleClick}>Click</button>

        </div>
    );

};

export default Person;