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

    toggleSubtask(state, payload) {
        state.activeBoard.columns.map((column) => {
            column.tasks.map((task) => {
                if (task.id === payload.taskId) {
                    task.subtasks.map((subtask) => {
                        if (subtask.id === payload.subtaskId) {
                            subtask.checked = !subtask.checked;
                        }
                    });
                }
            });
        });
    },
};
