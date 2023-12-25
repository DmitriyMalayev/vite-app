import {useCallback, useState} from "react";
import List from "./List.jsx";

const LowerState = () => {
    const [people, setPeople] = useState([
        {id: 1, name: "Mike", age: 41, hobby: "cooking"},
        {id: 2, name: "Dave", age: 41, hobby: "cooking"},])
    const [count, setCount] = useState(0)
    const addPerson = (id, name, age, hobby) => {
        const fakeId = Date.now();
        const newPerson = {id: fakeId, name, age, hobby};
        setPeople([...people, newPerson]);
    };

    const removePerson = useCallback((id) => {
        setPeople(people.filter((person) => person.id !== id))
    }, [people])
    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <section>
            {/*<AddPerson addPerson={addPerson}/>*/}
            <button className={"btn"} onClick={handleClick}>
                {count}
            </button>
            <List people={people} addPerson={addPerson} removePerson={removePerson}/>

        </section>
    )
}
export default LowerState
