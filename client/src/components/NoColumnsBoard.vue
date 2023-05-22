<template>
    <div
        class="no-column-board"
        :class="!isSidebarHidden ? 'no-column-board--reduced' : ''"
    >
        <div class="add-column">
            <p class="title">
                This board is empty. Create a new column to get started.
            </p>
            <div class="button-wrapper">
                <button>+ Add New Column</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const isSidebarHidden = computed(() => store.state.isSidebarHidden);
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

.no-column-board {
    background: $minor_background;
    height: 100vh;

    .add-column {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: 0;
        @include base-transition;
        transform: translate(-50%, -50%);

        .title {
            margin: 0;
            font-style: normal;
            color: $minor_color;
            font-weight: $bold_text;
            font-family: $regular_family;
            font-size: $medium_font_size;
            line-height: $medium_line_height;
            margin-bottom: $medium_margin;
        }

        .button-wrapper {
            @include common-button;
        }
    }
}

.no-column-board--reduced {
    .add-column {
        @include base-transition;
        margin-left: 58px;
    }
}
</style>
