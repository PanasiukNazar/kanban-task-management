<template>
    <div class="board">
        <div class="no-columns-board">
            <router-view></router-view>
        </div>

        <div
            class="columns-board"
            :class="!isSidebarHidden ? 'columns-board--reduced' : ''"
        >
            <div class="column" v-for="column in activeBoard?.columns">
                <div class="column__header">
                    <div
                        class="color"
                        :style="{ background: column.color }"
                    ></div>
                    <h4 class="title">
                        {{ column.title }} ({{ column.tasks?.length }})
                    </h4>
                </div>

                <div class="task" v-for="task in column.tasks">
                    <h4 class="task__title">{{ task.title }}</h4>

                    <div class="subtasks">
                        <p>0 of 3 subtasks</p>
                    </div>
                </div>
            </div>

            <div class="add-column">
                <h3 class="title">+ New Column</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';

const route = useRoute();
const router = useRouter();
const store = useStore();

const activeBoard = computed(() => store.state.activeBoard);
const isSidebarHidden = computed(() => store.state.isSidebarHidden);

function setActiveBoard(id) {
    store.commit('setActiveBoard', id);
}

onMounted(() => setActiveBoard(route.params.id));

onBeforeRouteUpdate((to) => {
    setActiveBoard(to.params.id);
});

// const boardColumnLength = store.getters.getBoardColumnLength;
// !boardColumnLength ? router.push(to.path + '/no-columns') : '';
</script>

<style lang="scss">
@import '../styles/main.scss';

.board {
    height: 100vh;
    position: relative;
    background: $minor_background;
    padding-top: $universal_backdown;

    .columns-board {
        display: flex;
        position: absolute;
        left: 0;
        transition: all 0.5s ease;

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
        }

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
