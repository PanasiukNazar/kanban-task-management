<template>
    <VueFinalModal
        class="confirm-modal"
        content-class="confirm-modal-content"
        overlay-transition="vfm-fade"
        content-transition="vfm-fade"
    >
        <div class="header">
            <h3 class="title">
                Research pricing points of various competitors and trial
                different business models
            </h3>
            <div class="task__editor">
                <img src="@/assets/icon-vertical-ellipsis.svg" />
            </div>
        </div>

        <p class="pretitle">
            We know what we're planning to build for version one. Now we need to
            finalise the first pricing model we'll use. Keep iterating the
            subtasks until we have a coherent proposition.
        </p>

        <div class="subtasks-section">
            <div class="subtasks__count">
                Subtasks ({{ checkedSubtasks.length }} of {{ subtasksLength }})
            </div>

            <div class="subtask" v-for="subtask in task.subtasks">
                <input
                    type="checkbox"
                    :checked="subtask.checked"
                    @click="toggleSubtask(subtask.id)"
                />
                <p
                    class="subtask__title"
                    :class="subtask.checked ? 'subtask--checked' : ''"
                >
                    {{ subtask.title }}
                </p>
            </div>
        </div>

        <div class="task-status">
            <div class="title">Current Status</div>
        </div>
    </VueFinalModal>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { VueFinalModal } from 'vue-final-modal';

const store = useStore();

const props = defineProps({
    task: Object,
});

const subtasksLength = computed(() => {
    return props.task.subtasks.length;
});

const boardColumns = computed(() => {
    return store.getters.getBoardColumns;
});

const checkedSubtasks = computed(() => {
    return props.task.subtasks.filter((item) => {
        return item.checked;
    });
});

function toggleSubtask(id) {
    store.commit('toggleSubtask', {
        taskId: props.task.id,
        subtaskId: id,
    });

    console.log(boardColumns);
}
</script>

<style lang="scss">
@import '../styles/main.scss';

.confirm-modal {
    display: flex;
    justify-content: center;
    align-items: center;
}
.confirm-modal-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #fff;
    border-radius: 0.5rem;
    max-width: 480px;
    padding: $medium_padding - 2;
}
.confirm-modal-content > * + * {
    margin: 0.5rem 0;
}
.confirm-modal-content h1 {
    font-size: 1.375rem;
}
.confirm-modal-content button {
    margin: 0.25rem 0 0 auto;
    padding: 0 8px;
    border: 1px solid;
    border-radius: 0.5rem;
}
.dark .confirm-modal-content {
    background: #000;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $universal_backdown;
    .title {
        max-width: 385px;
        font-style: normal;
        color: $primary_black;
        font-weight: $bold_text;
        font-family: $regular_family;
        font-size: $medium_font_size;
        line-height: $medium_line_height;
    }

    .task__editor {
        cursor: pointer;
    }
}

.pretitle {
    font-style: normal;
    color: $minor_color;
    font-weight: $thin_text;
    font-size: $small_font_size;
    font-family: $regular_family;
    line-height: $medium_line_height;
    margin-bottom: $universal_backdown;
}

.subtasks-section {
    .subtasks__count {
        font-style: normal;
        color: $minor_color;
        font-weight: $bold_text;
        font-size: $small_font_size;
        font-family: $regular_family;
        margin-bottom: $regular_margin;
        line-height: $small_line_height;
    }

    .subtask {
        display: flex;
        background: $minor_background;
        padding: $small_padding;
        border-radius: 4px;
        padding-left: $small_padding + 2;

        &:not(:last-child) {
            margin-bottom: $tiny_margin;
        }

        input {
            accent-color: $common_background;
            cursor: pointer;
            width: 20px;
        }

        &__title {
            font-style: normal;
            color: $primary_black;
            font-weight: $bold_text;
            font-size: $small_font_size;
            margin-left: $regular_margin;
            font-family: $regular_family;
            line-height: $small_line_height;
        }

        .subtask--checked {
            text-decoration: line-through;
            opacity: 0.5;
        }
    }
}

.task-status {
    .title {
        font-style: normal;
        color: $minor_color;
        font-weight: $bold_text;
        margin-bottom: $tiny_margin;
        font-size: $small_font_size;
        font-family: $regular_family;
        line-height: $small_line_height;
    }
    .status__items {
        width: 100%;
        height: 40px;
        border: 1px solid $minor_color;
        font-style: normal;
        color: $primary_black;
        font-weight: $thin_text;
        font-size: $small_font_size + 1;
        font-family: $regular_family;
        line-height: $medium_line_height;
        padding-left: 16px;

        option {
            font-style: normal;
            color: $primary_black;
            font-weight: $thin_text;
            font-size: $small_font_size + 1;
            font-family: $regular_family;
            line-height: $medium_line_height;
        }
    }
}
</style>
