import React, {useState} from 'react';

// eslint-disable-next-line react/prop-types
const AddPerson = ({addPerson}) => {
    const [person, setPerson] = useState({
        name: "",
        age: "",
        hobby:""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!person.name) {
            alert('Please Provide Name Value');
            return;
        }
        addPerson(person.name, person.age,person.hobby);
        // setPerson({name:"", age: "", hobby: ""})
    };
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-row'>
                <label htmlFor='name' className='form-label'>
                    name
                </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-input'
                    value={person.name}
                    onChange={(e) => setPerson({...person, name: e.target.value})}
                />
            </div>
            <div className='form-row'>
                <label htmlFor='age' className='form-label'>
                    age
                </label>
                <input
                    type={"number"}
                    name='age'
                    id='age'
                    className='form-input'
                    value={person.age}
                    onChange={(e) => setPerson({...person, age: e.target.value})}

                />
            </div>
            <div className='form-row'>
                <label htmlFor='hobby' className='form-label'>
                    hobby
                </label>
                <input
                    type='text'
                    name='hobby'
                    id='hobby'
                    className='form-input'
                    value={person.hobby}
                    onChange={(e) => setPerson({...person, hobby: e.target.value})}
                />
            </div>

            <button className='btn btn-block' type='submit'>
                submit
            </button>
        </form>
    )
};

export default AddPerson;

