import Initialdata from './data_100.json';
const crypto = require('crypto')

const initialState = {
    val: 0,
    availableEn: 0,
    loading: 0,
    data: Initialdata,
    started: 0,
    timerId: null,
    storedData: localStorage.getItem('all'),
    stored_complete: 0,

}



export function md5hex(str) {
    const md5 = crypto.createHash('md5')
    return md5.update(str, 'binary').digest('hex')
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
                updateFailed: 0,
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

            var d = action.data;

            //console.log(md5hex(JSON.stringify(d)));
            //if (state.storedData != null) console.log(md5hex(JSON.stringify(state.storedData)));
            localStorage.setItem('all', JSON.stringify(d))
            return Object.assign({}, state, {
                data: d,
                updateFailed: 0,
                storedData: localStorage.getItem('all'),
                stored_complete: 1
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

            ///*
            if (state.storedData != null) {
                var ldata_md5 = md5hex(JSON.stringify(state.storedData))
                if (ldata_md5 == "7ed676711475ac290adafd8368dd573f") {
                    return Object.assign({}, state, {
                        started: 1,
                        val: 0,
                        data: JSON.parse(state.storedData),
                        stored_complete: 1
                    })
                }
                /*
                
                */
            }
            //*/
            //console.log(md5hex("abc"));

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
        case 'updateFailed': {
            return Object.assign({}, state, {
                updateFailed: 1
            })
        }
        default:
            return state
    }
}