export default {
    getBoardColumnLength(state) {
        return !!state.activeBoard?.columns.length;
    },

    getBoardColumns(state) {
        return state.activeBoard.columns.map((item) => {
            return item;
        });
    },
};
