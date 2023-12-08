<template>
    <div>
        <h1>{{ foodName }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello Foods'
            }
        },
        props: {
            foodName: ''
        }
    }
</script>

<style>
</style>