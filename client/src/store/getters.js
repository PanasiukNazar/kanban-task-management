export default {
    getBoardColumnLength(state) {
        return !!state.activeBoard?.columns.length;
    },

    getCurrentBoardName(state) {
        return state.activeBoard ? state.activeBoard.title : '';
    },
};
