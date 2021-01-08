<template>
    <li>
        <h2>{{ name }}</h2>
        <h3>{{ age }}</h3>
    </li>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }
};
</script>