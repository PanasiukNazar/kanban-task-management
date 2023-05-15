<template>
    <div class="sidebar" :class="isSidebarHidden ? 'sidebar--hidden' : ''">
        <div class="header__section">
            <div class="logo">
                <img src="@/assets/logo-dark.svg" />
            </div>

            <div class="boards">
                <div class="boards__counter">
                    <p class="boards__title">
                        All boards ({{ boardsItems.length }})
                    </p>
                </div>

                <div
                    class="list__item"
                    v-for="item in boardsItems"
                    :key="item.id"
                    :class="item.isSelected ? 'item--selected' : ''"
                    @click="selectBoard(item.id)"
                >
                    <div class="icon">
                        <img src="@/assets/icon-board.svg" />
                    </div>
                    <p class="title">{{ item.title }}</p>
                </div>

                <div class="add-to__list">
                    <p>+ Create New Board</p>
                </div>
            </div>
        </div>

        <div class="footer__section">
            <div class="theme">
                <div class="light__icon">
                    <img src="@/assets/icon-light-theme.svg" />
                </div>

                <div
                    class="theme__switcher"
                    @click="toggleTheme"
                    :class="currentTheme ? 'dark' : ''"
                >
                    <p></p>
                </div>

                <div class="dark__icon">
                    <img src="@/assets/icon-dark-theme.svg" />
                </div>
            </div>

            <div @click="toggleSidebar" class="sidebar__concealer">
                <div class="concealer__icon">
                    <img src="@/assets/icon-hide-sidebar.svg" />
                </div>
                <span>Hide Sidebar</span>
            </div>
        </div>

        <div
            v-show="isSidebarHidden"
            @click="toggleSidebar"
            class="sidebar__opener"
        >
            <img src="@/assets/icon-show-sidebar.svg" />
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { ref } from 'vue';

const store = useStore();

let isSidebarHidden = ref(false);

const boardsItems = computed(() => store.state.boardItems);
const currentTheme = computed(() => store.state.isDarkTheme);

function toggleSidebar() {
    isSidebarHidden.value = !isSidebarHidden.value;
}

function selectBoard(id) {
    store.commit('selectBoard', id);
}

function toggleTheme() {
    store.commit('toggleTheme');
}
</script>

<style lang="scss">
@import '../styles/main.scss';

.sidebar {
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 300px;
    height: 100vh;
    transition: all 0.5s ease;
}

.sidebar__opener {
    background-color: #635fc7;
    border-radius: 0px 100px 100px 0px;
    position: fixed;
    left: 0;
    bottom: 200px;
    cursor: pointer;

    img {
        padding: $regular_padding;
    }
}

.sidebar--hidden {
    left: -300px;
    transition: all 0.5s ease;
}

.logo {
    margin: $medium_padding 0px $medium_margin 0px;
    margin-left: $medium_margin;
}

.boards {
    display: flex;
    flex-direction: column;
    .boards__title {
        text-align: left;
        font-style: normal;
        margin-bottom: $regular_margin;
        margin-left: $medium_margin;
        color: $minor_color;
        font-weight: $bold_text;
        font-size: $small_font_size;
        font-family: $regular_family;
        line-height: $small_line_height;
        letter-spacing: $regular_letter_spacing;
    }

    .list__item {
        display: flex;
        align-items: center;
        padding: 15px 92px 14px 34px;
        border-radius: 0px 100px 100px 0px;
        cursor: pointer;
        .title {
            margin-left: $regular_margin;
            font-style: normal;
            color: $minor_color;
            font-weight: $bold_text;
            font-family: $regular_family;
            font-size: $regular_font_size;
            line-height: $regular_line_height;
        }
    }
    .item--selected {
        background-color: #635fc7;

        .title {
            color: $color_white;
        }
        .icon {
            img {
                filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
                    saturate(2%) hue-rotate(358deg) brightness(106%)
                    contrast(101%);
            }
        }
    }
    .add-to__list {
        cursor: pointer;
        margin-left: $medium_margin;
        margin-top: $small_margin;

        p {
            font-style: normal;
            font-weight: $bold_text;
            color: $common_background;
            font-family: $regular_family;
            margin-left: $regular_margin;
            font-size: $regular_font_size;
            line-height: $regular_line_height;
            text-align: left;
            margin: 0px;
        }
    }
}

.footer__section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .theme {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0px 24px;
        padding: $small_padding 64px;
        background: $minor_background;

        .theme__switcher {
            display: flex;
            align-items: center;
            padding: 4px;
            justify-content: start;
            width: 40px;
            height: 20px;
            background-color: $common_background;
            border-radius: 12px;
            cursor: pointer;

            p {
                width: 14px;
                height: 14px;
                background: $color_white;
                border-radius: 50%;
            }
        }
        .dark {
            justify-content: end;
        }
    }
    .sidebar__concealer {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 22px 0px $large_margin $medium_margin;

        span {
            font-style: normal;
            margin-left: $small_margin;
            color: $minor_color;
            font-weight: $bold_text;
            font-size: $regular_font_size;
            font-family: $regular_family;
            line-height: $regular_line_height;
        }
    }
}
</style>
