<template>
    <Page>
        <ActionBar class="action-bar">
            <NavigationButton visibility="hidden" />
            <Label text="Chat" />
            <GridLayout columns="50, *">
                <Label class="action-bar-title" text="Chat" colSpan="2" />
                <Label
                    class="fas"
                    text.decode="&#xf0c9;"
                    @tap="onDrawerButtonTap"
                />
            </GridLayout>
        </ActionBar>

        <GridLayout rows="*, auto">
            <ListView :items="messages" row="0">
                <v-template>
                    <Label :text="item.text" class="message" />
                </v-template>
            </ListView>
            <GridLayout rows="auto" columns="*, auto" row="1">
                <TextField v-model="newMessage" col="0" />
                <Button text="Send" @tap="sendMessage" col="1" />
            </GridLayout>
        </GridLayout>
    </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { TextField } from "@nativescript/core";
import { ListView } from "@nativescript/core";
import { GridLayout } from "@nativescript/core";

export default {
    data() {
        return {
            newMessage: "",
            messages: [],
        };
    },
    methods: {
        onDrawerButtonTap() {
            utils.showDrawer();
        },
        sendMessage() {
            if (this.newMessage.trim() === "") return;
            this.messages.push({ text: this.newMessage.trim() });
            this.newMessage = "";
        },
    },
};
</script>

<style scoped>
.message {
    font-size: 18;
    margin: 10;
}
</style>
