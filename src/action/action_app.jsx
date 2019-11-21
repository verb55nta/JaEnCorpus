export default {
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
    }
}