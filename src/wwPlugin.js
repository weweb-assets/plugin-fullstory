import * as FullStory from '@fullstory/browser';
/* wwEditor:start */
import './components/SettingsEdit.vue';
import './components/SettingsSummary.vue';
import './components/Event.vue';
/* wwEditor:end */

export default {
    onLoad() {
        if (!this.settings.publicData.orgId) return;
        FullStory.init({ orgId: this.settings.publicData.orgId });
    },
    /*=============================================m_ÔÔ_m=============================================\
        Fullstory API
    \================================================================================================*/
    identify(userId, properties) {
        properties = Array.isArray(properties)
            ? properties.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : properties;
        FullStory.analytics.identify(userId, properties);
    },
    event(event, properties) {
        properties = Array.isArray(properties)
            ? properties.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})
            : properties;
        FullStory.event(event, properties);
    },
};
