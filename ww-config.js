export default {
    editor: {
        settings: {
            edit: () => import('./src/components/SettingsEdit.vue'),
            summary: () => import('./src/components/SettingsSummary.vue'),
            getIsValid(settings) {
                return !!settings.publicData.orgId;
            },
        },
    },
    functions: [
        {
            name: 'Identify',
            code: 'identify',
            parameters: [
                { name: 'userId', type: 'string', optional: true },
                { name: 'traits', type: 'array', optional: true },
            ],
            /* wwEditor:start */
            edit: () => import('./src/components/Identify.vue'),
            getIsValid([userId]) {
                return !!userId;
            },
            /* wwEditor:end */
        },
        {
            name: 'Event',
            code: 'event',
            parameters: [
                { name: 'event', type: 'string' },
                { name: 'properties', type: 'array', optional: true },
            ],
            /* wwEditor:start */
            edit: () => import('./src/components/Event.vue'),
            getIsValid([event]) {
                return !!event;
            },
            /* wwEditor:end */
        },
    ],
};
