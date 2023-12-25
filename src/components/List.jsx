import Person from "./Person.jsx";
import {memo} from "react";

// eslint-disable-next-line react/prop-types
const List = ({people, addPerson, removePerson}) => {
    return (
        // eslint-disable-next-line react/prop-types
        <div key={people.id}>
            {/* eslint-disable-next-line react/prop-types */}
            {people.map((person) => {
                return <Person key={person.id} people={people} addPerson={addPerson} removePerson={removePerson} {...person}/>
            })}
        </div>
    );
};

export default memo(List);