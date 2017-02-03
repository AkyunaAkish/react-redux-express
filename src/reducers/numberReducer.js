import {
    ADD_NUMBER
} from '../actions/types'


const initialState = {
    number: 0
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state,
                number: state.number += action.payload
            }
            break
        case ADD_NUMBER:
            state.number += action.payload
            return state
            break
            default:
            return { ...state }
    }
}

// let state = { a: 'a', b: 'b' }
//
// let newState = { ...state, b: 'c' } // { a: 'a', b: 'c' }
//
