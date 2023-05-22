<template>
    <div class="board">
        <NoColumnsBoard v-if="!boardLength" />

        <div
            class="columns-board"
            :class="!isSidebarHidden ? 'columns-board--reduced' : ''"
        >
            <Column v-for="column in activeBoard?.columns" :column="column" />

            <div class="add-column">
                <h3 class="title">+ New Column</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
import NoColumnsBoard from './NoColumnsBoard.vue';
import Column from './Column.vue';

const route = useRoute();
const store = useStore();

const activeBoard = computed(() => store.state.activeBoard);
const isSidebarHidden = computed(() => store.state.isSidebarHidden);
const boardLength = computed(() => store.getters.getBoardColumnLength);

function setActiveBoard(id) {
    store.commit('setActiveBoard', id);
}

onMounted(() => setActiveBoard(route.params.id));

onBeforeRouteUpdate((to) => {
    setActiveBoard(to.params.id);
});
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

.board {
    height: 100vh;
    background: $minor_background;

    .columns-board {
        display: flex;
        position: absolute;
        left: 0;
        transition: all 0.5s ease;
        padding-top: $universal_backdown;

        .add-column {
            width: 280px;
            height: 100vh;
            margin-top: 39px;
            position: relative;
            margin-left: $universal_backdown;
            margin-right: $universal_backdown;
            background: linear-gradient(
                180deg,
                #e9effa 0%,
                rgba(233, 239, 250, 0.5) 100%
            );
            border-radius: 6px;

            .title {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                white-space: nowrap;
                font-style: normal;
                color: $minor_color;
                font-weight: $bold_text;
                font-size: $large_font_size;
                font-family: $regular_family;
                line-height: $large_line_height;
            }
        }
    }

    .columns-board--reduced {
        left: 300px;
        transition: all 0.5s ease;
    }
}
</style>
