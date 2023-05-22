<template>
    <div class="header__menu">
        <div
            class="logo__section"
            :class="!isSidebarHidden ? 'logo__section--enlarged' : ''"
        >
            <div>
                <img src="@/assets/logo-dark.svg" alt="" />
            </div>
        </div>

        <div class="board__description">
            <h4 class="title">{{ activeBoardTitle }}</h4>

            <div class="task__adder">
                <div class="button__wrapper">
                    <button>+ Add New Task</button>
                </div>
                <div class="board__editor">
                    <img src="@/assets/icon-vertical-ellipsis.svg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const isSidebarHidden = computed(() => store.state.isSidebarHidden);
const activeBoardTitle = computed(() => store.state.activeBoard?.title);
</script>

<style lang="scss">
@import '../styles/main.scss';

.header__menu {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    background: $color_white;
    border-bottom: 1px solid #e4ebfa;

    .logo__section {
        border-right: 1px solid #e4ebfa;
        @include base-transition;

        div {
            @include logo-backdown;
        }
    }

    .logo__section--enlarged {
        margin-right: 58px;
        @include base-transition;
    }

    .board__description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;

        .title {
            font-style: normal;
            color: $primary_black;
            font-weight: $bold_text;
            margin-left: $medium_margin;
            font-size: $large_font_size;
            font-family: $regular_family;
            line-height: $large_line_height;
        }

        .task__adder {
            display: flex;
            align-items: center;

            .button__wrapper {
                @include common-button;
                margin-right: $universal_backdown;
            }

            .board__editor {
                padding-right: $universal_backdown;
                cursor: pointer;
            }
        }
    }
}
</style>
