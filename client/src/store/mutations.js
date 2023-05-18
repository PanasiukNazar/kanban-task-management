export default {
    toggleTheme(state) {
        state.isDarkTheme = !state.isDarkTheme;
    },

    toggleSidebar(state) {
        state.isSidebarHidden = !state.isSidebarHidden;
    },

    selectBoard(state, id) {
        state.boardItems.forEach((item) => {
            item.isSelected = item.id === id;
        });
    },
};
