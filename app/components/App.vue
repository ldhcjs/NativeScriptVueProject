import { StackLayout } from '@nativescript/core';
<template lang="html">
    <RadSideDrawer
        ref="drawer"
        drawerLocation="Left"
        gesturesEnabled="true"
        :drawerTransition="transition"
    >
        <StackLayout ~drawerContent backgroundColor="#ffffff">
            <DrawerContent />
        </StackLayout>
        <Frame ~mainContent ref="drawerMainContent">
            <Home />
            <Chat />
        </Frame>
    </RadSideDrawer>
</template>

<script>
import DrawerContent from "./DrawerContent";
import Home from "./Home";
import Chat from "./Chat";
import { SlideInOnTopTransition } from "nativescript-ui-sidedrawer";

export default {
    data() {
        return {
            transition: new SlideInOnTopTransition(),
        };
    },

    components: {
        DrawerContent,
        Home,
        Chat,
    },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";
</style>
