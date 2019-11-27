import Initialdata from './data_100.json';
const crypto = require('crypto')

const initialState = {
    val: 0,
    availableEn: 0,
    loading: 0,
    data: Initialdata,
    started: 0,
    timerId: null,
    //storedData: null,
    storedCompleted: 0,
    updateFailed: 0,
    modal: 0,
    checked: 0,
    generatedFromCheck: 0,
    modalChecked: 0,
    //checkedData: null,
}

export function md5hex(str) {
    const md5 = crypto.createHash('md5')
    return md5.update(str, 'binary').digest('hex')
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT': {
            let oldid = state.timerId;
            clearTimeout(oldid);
            localStorage.setItem('all', 0);
            localStorage.setItem('checked', 0);
            return initialState
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

            let d = action.data;

            //console.log(md5hex(JSON.stringify(d)));
            //if (state.storedData != null) console.log(md5hex(JSON.stringify(state.storedData)));
            localStorage.setItem('all', JSON.stringify(d))
            return Object.assign({}, state, {
                data: d,
                updateFailed: 0,
                storedData: localStorage.getItem('all'),
            });
        }
        case 'loadStart': {
            return Object.assign({}, state, {
                loading: 1,
                updateFailed: 0
            })
        }
        case 'loadEnd': {
            return Object.assign({}, state, {
                loading: 0
            })
        }
        case 'clearEn': {
            let oldid = state.timerId;
            clearTimeout(oldid);
            let id = action.id
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
            let data = state.data;
            //let sc = state.storeComplete;
            let sc = 0;
            //let checkedData = state.checkedData;

            let storedData = localStorage.getItem('all');

            let checkedData = localStorage.getItem('checked');
            let cDSet = new Set();

            if (storedData != 0) {
                let ldata_md5 = md5hex(JSON.stringify(storedData))
                if (ldata_md5 === "7ed676711475ac290adafd8368dd573f") {

                    data = JSON.parse(storedData);
                    sc = 1;
                }

            }
            //console.log(sc);
            ///*
            if (checkedData == 0) {

                checkedData = new Set();
                let jsonStr = JSON.stringify(Array.from(checkedData));
                localStorage.setItem('checked', jsonStr);
            }
            else {
                let cDArray = JSON.parse(checkedData);
                cDArray.forEach((x) => {
                    cDSet.add(x);
                });
            }
            //*/

            //console.log(sc);

            return Object.assign({}, state, {
                started: 1,
                val: 0,
                data: data,
                storedCompleted: sc,
                checkedData: cDSet,
                generatedFromCheck: 0,
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
            let oldid = state.timerId;
            clearTimeout(oldid);
            return state;
        }
        case 'updateStart': {

            return Object.assign({}, state, {
                storedCompleted: 0
            })
        }
        case 'updateFailed': {
            return Object.assign({}, state, {
                updateFailed: 1
            })
        }
        case 'updateCompleted': {

            return Object.assign({}, state, {
                storedCompleted: 1
            })
        }
        case 'createModal': {
            return Object.assign({}, state, {
                modal: 1
            })
        }
        case 'deleteModal': {
            return Object.assign({}, state, {
                modal: 0
            })
        }
        case 'check': {

            let checkedData_new = state.checkedData;
            checkedData_new.add(state.data[state.val].id);
            console.debug(checkedData_new);
            localStorage.setItem('checked', JSON.stringify(Array.from(checkedData_new)));
            return Object.assign({}, state, {
                checkedData: checkedData_new
            })

        }
        case 'uncheck': {

            let checkedData_new = state.checkedData;
            checkedData_new.delete(state.data[state.val].id);
            console.debug(checkedData_new);
            localStorage.setItem('checked', JSON.stringify(Array.from(checkedData_new)));
            return Object.assign({}, state, {
                checkedData: checkedData_new
            })

        }
        case 'checkJudge': {

            return Object.assign({}, state, {
                checked: state.checkedData.has(state.data[state.val].id)
            })
        }
        case 'generateFromChecked': {

            if (state.checkedData.size == 0) {
                return Object.assign({}, state, {
                    modalChecked: 1
                })
            }

            let data_new = [];
            let storedData = localStorage.getItem('all');

            let sorted = []
            state.checkedData.forEach((x) => {
                sorted.push(x);
            });
            sorted.sort();
            sorted.forEach((x) => {
                data_new.push(JSON.parse(storedData).find((item, index) => {
                    return (item.id === x);
                }));
            });
            console.debug(data_new);
            return Object.assign({}, state, {
                started: 1,
                val: 0,
                data: data_new,
                generatedFromCheck: 1,
                //storedCompleted: sc,
                //checkedData: cDSet,
            })
        }
        case 'clearCheck': {
            //let oldid = state.timerId;
            //clearTimeout(oldid);
            localStorage.setItem('checked', 0);
            let cDSet = new Set();
            let jsonStr = JSON.stringify(Array.from(cDSet));
            localStorage.setItem('checked', jsonStr);

            return Object.assign({}, state, {
                checkedData: cDSet,
                //storedCompleted: sc,
                //checkedData: cDSet,
            })
        }
        case 'checkGenerate': {
            return state;
        }
        case 'createModalChecked': {
            return Object.assign({}, state, {
                modalChecked: 1
            })
        }
        case 'deleteModalChecked': {
            return Object.assign({}, state, {
                modalChecked: 0
            })
        }

        default:
            return state
    }
}