import {data} from "../data.jsx";
import {useState} from "react";

const UpdateData = () => {
    const [people, setPeople] = useState(data)

    function removeAll() {
        setPeople([])
    }

    function deleteOne(id) {

        const newList = people.filter((e) => e.id !== id)
        setPeople(newList)
    }

    return (
        <div>

            {people.map((person) => {
                return (
                    <div key={person.id}>
                        <h1>{person.name}</h1>
                        <button type={"button"} onClick={() => deleteOne(person.id)}>Delete Person</button>
                    </div>

                )

            })}
            <button type={"button"} onClick={() => removeAll()}>Remove All</button>

        </div>
    );

};

export default UpdateData;