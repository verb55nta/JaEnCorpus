import Initialdata from './data_100.json';

const initialState = {
    val: 0,
    availableEn: 0,
    loading: 0,
    data: Initialdata,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return Object.assign({}, state, {
                val: Math.min(state.val + 1, state.data.length - 1),
            })
        }
        case 'DECREMENT': {
            return Object.assign({}, state, {
                val: Math.max(state.val - 1, 0),
            })
        }
        case 'UPDATE': {
            console.log("not implemented");
            var d = action.data

            return Object.assign({}, state, {
                data: d
            });
        }
        case 'loadStart': {
            return Object.assign({}, state, {
                loading: 1
            })
        }
        case 'loadEnd': {
            return Object.assign({}, state, {
                loading: 0
            })
        }
        default:
            return state
    }
}