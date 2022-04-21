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
    actions: [
        {
            name: 'Identify',
            code: 'identify',
            /* wwEditor:start */
            edit: () => import('./src/components/Identify.vue'),
            getIsValid({ userId }) {
                return !!userId;
            },
            /* wwEditor:end */
        },
        {
            name: 'Event',
            code: 'event',
            /* wwEditor:start */
            edit: () => import('./src/components/Event.vue'),
            getIsValid({ event }) {
                return !!event;
            },
            /* wwEditor:end */
        },
    ],
};
