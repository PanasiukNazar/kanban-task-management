<template>
    <div class="header__menu">
        <div class="logo__section">
            <div>
                <img src="@/assets/logo-dark.svg" alt="" />
            </div>
        </div>

        <div class="board__description">
            <h4 class="title">Platform launch</h4>

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

<script setup></script>

<style lang="scss">
@import '../styles/main.scss';

.header__menu {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    background: $color_white;
    border-bottom: 1px solid #e4ebfa;

    .logo__section {
        border-right: 1px solid #e4ebfa;

        div {
            @include logo-backdown;
        }
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
                background: $common_background;
                border-radius: $universal_backdown;
                margin-right: $universal_backdown;

                button {
                    font-style: normal;
                    color: $color_white;
                    font-weight: $bold_text;
                    font-family: $regular_family;
                    font-size: $regular_font_size;
                    line-height: $regular_line_height;
                    padding: $small_padding $universal_backdown;
                }
            }

            .board__editor {
                padding-right: $universal_backdown;
                cursor: pointer;
            }
        }
    }
}
</style>
