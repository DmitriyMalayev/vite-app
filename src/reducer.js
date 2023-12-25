import {data} from "./data.jsx";
import {CLEAR_PAGE, DELETE_ONE, RESET_PAGE} from "./actions.js";


export const reducer = (state, action) => {
    if (action.type === CLEAR_PAGE) {
        return {...state, people: []}
    }
    if (action.type === RESET_PAGE) {
        return {...state, people: data}
    }
    if (action.type === DELETE_ONE) {
        const newList = state.people.filter((person) => person.id !== action.payload.id)
        return {...state, people: newList}
    }

    // return state
    throw new Error(`No matching type ${action.type}`)
}