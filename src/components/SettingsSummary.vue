<template>
    <div class="fullstory-settings-summary">
        <wwEditorIcon large name="key" class="fullstory-settings-summary__icon" />
        <span class="caption-m">{{ orgId }}</span>
    </div>
</template>

<script>
export default {
    props: {
        settings: { type: Object, required: true },
    },
    computed: {
        orgId() {
            return this.settings.publicData.orgId || '';
        },
    },
};
</script>

<style lang="scss" scoped>
.fullstory-settings-summary {
    display: flex;
    align-items: center;
    &__icon {
        margin-right: var(--ww-spacing-02);
    }
}
</style>
