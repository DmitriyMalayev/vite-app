import {useState} from 'react';
import PropTypes from "prop-types";


const ShortCircuit = () => {
    const [text, setText] = useState("apple")
    const [name, setName] = useState("Susan")
    const [user, setUser] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    return (
        <div>
            <h2>{text || "default value"}</h2>
            {text && (
                <div>
                    <h2>Example Return</h2>
                    <h2>{user.name && "apple"}</h2>
                </div>
            )}
            {user && <ShortCircuitComponent name={user.name}/>}
            {user ? (
                <h2>Hello {user.name}</h2>
            ) : (
                <div>
                    <h3>Please Login</h3>)
                </div>
            )}
            <button className={"btn"}>{isEditing ? "Edit" : "Add"}</button>
        </div>
    )
}

const ShortCircuitComponent = ({name}) => {
    ShortCircuitComponent.propTypes = {
        name: PropTypes.string.isRequired
    }
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}


export default ShortCircuit;


// function displayName(name){
//     return name || "Name"
// }
// function displayAndName(name){
//     return name && text
// }
//
// displayName()
// displayName(name)
// displayAndName(name)

