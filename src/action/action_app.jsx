export default {
    init: () => {
        return { type: 'INIT' }
    },
    incre: () => {
        return { type: 'INCREMENT' }
    },
    decre: () => {
        return { type: 'DECREMENT' }
    },
    update: (d) => {
        return { type: 'UPDATE', data: d }
    },
    loadStart: () => {
        return { type: 'loadStart' }
    },
    loadEnd: () => {
        return { type: 'loadEnd' }
    },
    clearEn: (id) => {
        return { type: 'clearEn', id: id }
    },
    onEn: () => {
        return { type: 'onEn' }
    },
    start: () => {
        return { type: 'start' }
    },
    initVal: () => {
        return { type: 'initVal' }
    },
    clearStart: () => {
        return { type: 'clearStart' }
    },
    deleteTimer: () => {
        return { type: 'deleteTimer' }
    },

}