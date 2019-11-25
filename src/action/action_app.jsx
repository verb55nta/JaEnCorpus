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
    updateFailed: () => {
        return { type: 'updateFailed' }
    },
    updateStart: () => {
        return { type: 'updateStart' }
    },
    updateCompleted: () => {
        return { type: 'updateCompleted' }
    },
    createModal: () => {
        return { type: 'createModal' }
    },
    deleteModal: () => {
        return { type: 'deleteModal' }
    },

    check: () => {
        return { type: 'check' }
    },
    uncheck: () => {
        return { type: 'uncheck' }
    },
    checkJudge: () => {
        return { type: 'checkJudge' }
    }
}