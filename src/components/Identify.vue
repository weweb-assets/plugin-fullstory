<template>
    <wwEditorInputRow
        label="User ID"
        required
        type="query"
        :model-value="userId"
        placeholder="Enter a value"
        bindable
        @update:modelValue="setUserId"
    />
    <wwEditorInputRow
        label="Properties"
        type="array"
        :model-value="properties"
        bindable
        @update:modelValue="setProperties"
        @add-item="setProperties([...properties, {}])"
    >
        <template #default="{ item, setItem }">
            <wwEditorInputRow
                type="query"
                :model-value="item.key"
                label="Key"
                placeholder="Enter a value"
                bindable
                small
                @update:modelValue="setItem({ ...item, key: $event })"
            />
            <wwEditorInputRow
                type="query"
                :model-value="item.value"
                label="Value"
                placeholder="Enter a value"
                bindable
                small
                @update:modelValue="setItem({ ...item, value: $event })"
            />
        </template>
    </wwEditorInputRow>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        args: { type: Object, default: () => ({ userId: null, properties: [] }) },
    },
    emits: ['update:args'],
    computed: {
        userId() {
            return this.args.userId;
        },
        properties() {
            return this.args.properties || [];
        },
    },
    methods: {
        setUserId(userId) {
            this.$emit('update:args', { ...this.args, userId });
        },
        setProperties(properties) {
            this.$emit('update:args', { ...this.args, properties });
        },
    },
};
</script>
