import {data} from "../data.jsx";
import {useReducer} from "react";
import {reducer} from "../reducer.js";
import {CLEAR_PAGE, DELETE_ONE, RESET_PAGE} from "../actions.js";

//useReducer(reducer which is a function that will manipulate the state, default state)
//with userReducer we get back a state and the dispatch


const defaultState = {
    people: data,
    isLoading: false
}

const UpdateData = () => {
    // const [people, setPeople] = useState(data)
    const [state, dispatch] = useReducer(reducer, defaultState)

    const deleteOne = (id) => {
        dispatch({type: DELETE_ONE, payload: {id}})
    }

    const clearPage = () => {
        dispatch({type: CLEAR_PAGE})
    }
    const resetPage = () => {
        dispatch({type: RESET_PAGE})
    }


    // function resetPage() {
    //     setPeople(data)
    // }


    return (
        <div>
            {state.people.map((person) => {
                return (
                    <div key={person.id}>
                        <h1>{person.name}</h1>
                        <button type={"button"} onClick={() => deleteOne(person.id)}>Delete Person</button>
                    </div>

                )
            })}
            {(state.people.length !== 0)
                ? <button type={"button"} onClick={clearPage}>Clear</button>
                : <button type={"button"} onClick={resetPage}>Reset</button>
            }
        </div>
    )
};

export default UpdateData;