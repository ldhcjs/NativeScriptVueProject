<template>
    <Page>
        <ActionBar title="날짜를 선택하세요" />
        <DatePicker
            :year="year"
            :month="month"
            :day="day"
            @dateChange="onDateChange"
        />
    </Page>
</template>

<script>
export default {
    props: ["year", "month", "day"],
    methods: {
        onDateChange(event) {
            this.$emit("dateChange", event.value);
        },
    },
};
</script>
