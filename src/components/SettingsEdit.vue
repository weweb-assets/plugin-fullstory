<template>
    <div class="fullstory-settings-edit">
        <wwEditorFormRow required label="Organization ID">
            <template #append-label>
                <a
                    class="fullstory-settings-edit__link"
                    href="https://help.fullstory.com/hc/en-us/articles/360047075853-How-do-I-find-my-FullStory-Org-Id-"
                    target="_blank"
                >
                    Find it here
                </a>
            </template>
            <wwEditorInputText
                type="text"
                name="org-id"
                placeholder="Enter the organization ID"
                :model-value="settings.publicData.orgId"
                large
                @update:modelValue="changeOrgId"
            />
        </wwEditorFormRow>
    </div>
</template>

<script>
export default {
    props: {
        settings: { type: Object, required: true },
    },
    emits: ['update:settings'],
    methods: {
        changeOrgId(orgId) {
            this.$emit('update:settings', { ...this.settings, publicData: { orgId } });
        },
    },
};
</script>

<style lang="scss" scoped>
.fullstory-settings-edit {
    display: flex;
    flex-direction: column;
    &__link {
        color: var(--ww-color-blue-500);
        margin-left: var(--ww-spacing-02);
    }
    &__row {
        display: flex;
        align-items: center;
    }
    &__radio-label {
        margin-left: var(--ww-spacing-02);
    }
}
</style>
