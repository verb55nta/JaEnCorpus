import Initialdata from './data_100.json';

const initialState = {
    val: 0,
    availableEn: 0,
    loading: 0,
    data: Initialdata,
    started: 0,
    timerId: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT': {
            var oldid = state.timerId;
            clearTimeout(oldid);
            return Object.assign({}, state, {
                val: 0,
                availableEn: 0,
                loading: 0,
                data: Initialdata,
                started: 0,
                timerId: null,
            })
        }
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
        case 'clearEn': {
            var oldid = state.timerId;
            clearTimeout(oldid);
            var id = action.id
            return Object.assign({}, state, {
                availableEn: 0,
                timerId: id
            })
        }
        case 'onEn': {
            return Object.assign({}, state, {
                availableEn: 1
            })
        }
        case 'start': {
            /*
            if (state.started === 0) {
                return Object.assign({}, state, {
                    started: 1,
                    val: 0
                })
            }
            else return state;
            */
            return Object.assign({}, state, {
                started: 1,
                val: 0
            })
        }
        case 'initVal': {
            return Object.assign({}, state, {
                val: 0
            })
        }
        case 'clearStart': {
            window.onkeydown = null
            return Object.assign({}, state, {
                started: 0
            })
        }
        case 'deleteTimer': {
            var oldid = state.timerId;
            clearTimeout(oldid);
            return state;
        }
        default:
            return state
    }
}