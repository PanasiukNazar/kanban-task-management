export default {
    toggleTheme(state) {
        state.isDarkTheme = !state.isDarkTheme;
    },

    toggleSidebar(state) {
        state.isSidebarHidden = !state.isSidebarHidden;
    },

    setActiveBoard(state, id) {
        state.activeBoard = state.localBoardsMap[id];
    },
};
