export default {
    getBoardColumnLength(state) {
        return !!state.activeBoard?.columns.length;
    },
};
