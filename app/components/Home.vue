<template>
    <Page>
        <ActionBar>
            <Label text="Home" />
        </ActionBar>

        <GridLayout rows="*,*,*,*,*" columns="*">
            <Label row="0" class="info">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf135; " />
                    <Span :text="message" />
                </FormattedString>
            </Label>
            <button
                row="1"
                text="Take a Picture"
                @tap="takePicture"
                height="100%"
            />
            <button
                row="2"
                text="Get a Location"
                @tap="getGeolocation"
                height="100%"
            />
            <button
                row="3"
                text="Date Picker"
                @tap="showDatePickerModal"
                height="100%"
            />
            <!-- <DatePicker
                v-show="showDatePicker"
                :year="year"
                :month="month"
                :day="day"
            /> -->
        </GridLayout>
    </Page>
</template>

<script>
import * as Camera from "@nativescript/camera";
import { CoreTypes, DatePicker } from "@nativescript/core";
import * as Geolocation from "@nativescript/geolocation";
import DatePickerModal from "./DatePickerModal.vue";

export default {
    computed: {
        message() {
            return "Blank {N}-Vue app";
        },
    },
    methods: {
        // 사진 촬영 기능, 권한 요청 -> 사진 찍기 -> 사진 리소스 얻기
        async takePicture() {
            await Camera.requestCameraPermissions();
            const imageAsset = await Camera.takePicture();
            console.log("Picture taken:", imageAsset);
        },
        // GPS 기능, 권한 요청 -> 위도/경도 얻기
        async getGeolocation() {
            await Geolocation.enableLocationRequest();
            const coordinates = await Geolocation.getCurrentLocation({
                desiredAccuracy: CoreTypes.Accuracy.high,
                maximumAge: 5000,
                timeout: 20000,
            }).then((currentLocation) => {
                console.log(
                    "My coordinates is:",
                    currentLocation.latitude,
                    currentLocation.longitude
                );
                const dialogs = require("@nativescript/core").Dialogs;
                dialogs.alert({
                    title: "현재 좌표",
                    message:
                        "Latitude : " +
                        currentLocation.latitude +
                        "\nLongitude : " +
                        currentLocation.longitude,
                });
            });
        },
        showDatePickerModal() {
            this.$showModal(DatePickerModal, {
                context: {
                    year: this.year,
                    month: this.month,
                    day: this.day,
                },
                fullscreen: false,
            }).then((newDate) => {
                if (newDate) {
                    this.year = newDate.getFullYear();
                    this.month = newDate.getMonth() + 1;
                    this.day = newDate.getDate();
                }
            });
        },
    },
    data() {
        return {
            showDatePicker: false,
            year: 2023,
            month: 9,
            day: 13,
        };
    },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
    @include colorize($color: accent);
}

.info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
}
</style>
