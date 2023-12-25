// eslint-disable-next-line react/prop-types
const Person = ({id, name, age, hobby, addPerson, removePerson}) => {
    return (
        <div>
            <h4>{name}</h4>
            <h4>{age}</h4>
            <h4>{hobby}</h4>
            <button onClick={() => removePerson(id)}>Remove</button>
        </div>
    );
};

export default Person;