export default {
    toggleTheme(state) {
        state.isDarkTheme = !state.isDarkTheme;
    },

    selectBoard(state, id) {
        state.boardItems.forEach((item) => {
            item.isSelected = item.id === id;
        });
    },
};
