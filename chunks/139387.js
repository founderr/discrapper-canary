var i = e(570140),
    r = e(434404),
    o = e(821864),
    a = e(308063);
n.Z = {
    init() {
        i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_INIT' });
    },
    setSection(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_SET_SECTION',
            section: t,
            sectionId: n
        });
    },
    startEditingCommandPermissions(t) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_COMMAND',
            commandId: t
        });
    },
    stopEditingCommandPermissions(t) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_STOP_EDITING_COMMAND',
            commandId: t
        });
    },
    startEditingIntegration(t) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_INTEGRATION',
            integrationId: t
        });
    },
    stopEditingIntegration() {
        i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION' });
    },
    updateIntegration(t) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_UPDATE_INTEGRATION',
            settings: t
        });
    },
    startEditingWebhook(t) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_WEBHOOK',
            webhookId: t
        });
    },
    stopEditingWebhook() {
        i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK' });
    },
    updateWebhook(t) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_UPDATE_WEBHOOK',
            settings: t
        });
    },
    async saveApplicationPermissions(t, n, e) {
        try {
            i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }),
                await o.U3({
                    applicationId: t,
                    commandId: t,
                    defaultEveryoneValue: !0,
                    defaultEverywhereValue: !0,
                    guildId: n,
                    permissions: e
                }),
                i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (t) {
            i.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: t.body
            });
        }
    },
    async saveIntegration(t, n) {
        try {
            i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }), await r.Z.updateIntegration(t, n.id, n.expire_behavior, n.expire_grace_period, n.enable_emoticons), i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (t) {
            i.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: t.body
            });
        }
    },
    async saveWebhook(t, n) {
        try {
            i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }), await a.Z.update(t, n.id, n), i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (t) {
            i.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: t.body
            });
        }
    }
};
