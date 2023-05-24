<template>
    <div class="column">
        <div class="column__header">
            <div class="color" :style="{ background: column.color }"></div>
            <h4 class="title">
                {{ column.title }} ({{ column.tasks?.length }})
            </h4>
        </div>
        <Task v-for="task in column.tasks" :task="task" />
    </div>
</template>

<script setup>
import Task from './Task.vue';

const props = defineProps({
    column: Object,
});
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

.column {
    width: 280px;
    margin-left: $universal_backdown;
    margin-right: $universal_backdown;

    .column__header {
        display: flex;
        align-items: center;
        justify-content: start;
        margin-bottom: $universal_backdown;

        .color {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            margin-right: $small_margin;
        }

        .title {
            font-style: normal;
            color: $minor_color;
            font-weight: $bold_text;
            text-transform: uppercase;
            font-size: $small_font_size;
            font-family: $regular_family;
            line-height: $small_line_height;
            letter-spacing: $regular_letter_spacing;
        }
    }
}
</style>
