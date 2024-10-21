<template>
    <div class="info-container">
        <h2 id="title-header">{{ title }}</h2>
        <p id="description">{{ description }}</p>

        <!--Movie or TV Show info -->
        <slot name="type-info"></slot>
    </div>
</template>

<script>
import { inject, isReactive } from 'vue';

export default {
    setup() {
        const elementObject = inject('elementObj');

        let dataData = {};

        if ( isReactive(elementObject) ) {
            dataData.title = elementObject.title;
            dataData.description = elementObject.description;
        }

        const fullData = {
            ...dataData,
        };

        return fullData;
    },
}
</script>

<style>
    .info-container {
        background-color: var(--info-bg);
    }
</style>
