<template>
    <div class="task" @click="open()">
        <h4 class="task__title">{{ task.title }}</h4>

        <div class="subtasks">
            <p>{{ checkedSubtasks.length }} of {{ subtasksLength }} subtasks</p>
        </div>
    </div>
    <ModalsContainer />
</template>

<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal';
import TaskInfoModal from './TaskInfoModal.vue';
import { computed } from 'vue';

const props = defineProps({
    task: Object,
});

const subtasksLength = computed(() => {
    return props.task.subtasks.length;
});

const checkedSubtasks = computed(() => {
    return props.task.subtasks.filter((item) => {
        return item.checked;
    });
});

const { open } = useModal({
    component: TaskInfoModal,
    attrs: {
        task: props.task,
    },
});
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

.task {
    cursor: pointer;
    border-radius: 8px;
    padding: $universal_backdown $regular_margin;
    background: $color_white;
    box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    &__title {
        font-style: normal;
        color: $primary_black;
        font-weight: $bold_text;
        margin-bottom: $tiny_margin;
        font-family: $regular_family;
        font-size: $regular_font_size;
        line-height: $regular_line_height;
    }

    .subtasks {
        p {
            font-style: normal;
            color: $minor_color;
            font-weight: $bold_text;
            font-size: $small_font_size;
            font-family: $regular_family;
            line-height: $small_line_height;
        }
    }
}
</style>
