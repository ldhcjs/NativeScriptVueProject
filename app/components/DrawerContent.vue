<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout row="0" class="nt-drawer__header">
            <Image
                class="nt-drawer__header-image fas t-36"
                src.decode="font://&#xf2bd;"
            />
            <Label class="nt-drawer__header-brand" text="User Name" />
            <Label
                class="nt-drawer__header-footnote"
                text="username@mail.com"
            />
        </StackLayout>

        <ScrollView row="1" class="nt-drawer__body">
            <StackLayout>
                <GridLayout
                    columns="auto, *"
                    :class="
                        'nt-drawer__list-item' +
                        (selectedPage === 'Home' ? ' -selected:' : '')
                    "
                    @tap="onNavigationItemTap(Home)"
                >
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas" />
                    <Label col="1" text="Home" class="p-r-10" />
                </GridLayout>

                <GridLayout
                    columns="auto, *"
                    :class="
                        'nt-drawer__list-item' +
                        (selectedPage === 'Chat' ? ' -selected:' : '')
                    "
                    @tap="onNavigationItemTap(Chat)"
                >
                    <Label
                        col="0"
                        text.decode="&#x1F4AC;"
                        class="nt-icon fas"
                    />
                    <Label col="1" text="Chat" class="p-r-10" />
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
import Home from "./Home";
import Chat from "./Chat";
import * as utils from "~/shared/utils";
import { SelectedPageService } from "~/shared/selected-page-service";

export default {
    mounted() {
        SelectedPageService.getInstance().selectedPage$.subscribe(
            (selectedPage) => (this.selectedPage = selectedPage)
        );
    },
    data() {
        return {
            Home: Home,
            Chat: Chat,
            selectedPage: "",
        };
    },
    components: {
        Home,
        Chat,
        // Add any page
    },
    methods: {
        onNavigationItemTap(component) {
            this.$navigateTo(component, {
                clearHistory: true,
            });
            utils.closeDrawer();
        },
    },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";
// Add custom style
</style>
