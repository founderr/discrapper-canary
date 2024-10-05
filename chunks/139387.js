var i = t(570140),
    r = t(434404),
    o = t(821864),
    a = t(308063);
n.Z = {
    init() {
        i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_INIT' });
    },
    setSection(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_SET_SECTION',
            section: e,
            sectionId: n
        });
    },
    startEditingCommandPermissions(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_COMMAND',
            commandId: e
        });
    },
    stopEditingCommandPermissions(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_STOP_EDITING_COMMAND',
            commandId: e
        });
    },
    startEditingIntegration(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_INTEGRATION',
            integrationId: e
        });
    },
    stopEditingIntegration() {
        i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION' });
    },
    updateIntegration(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_UPDATE_INTEGRATION',
            settings: e
        });
    },
    startEditingWebhook(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_WEBHOOK',
            webhookId: e
        });
    },
    stopEditingWebhook() {
        i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK' });
    },
    updateWebhook(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_UPDATE_WEBHOOK',
            settings: e
        });
    },
    async saveApplicationPermissions(e, n, t) {
        try {
            i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }),
                await o.U3({
                    applicationId: e,
                    commandId: e,
                    defaultEveryoneValue: !0,
                    defaultEverywhereValue: !0,
                    guildId: n,
                    permissions: t
                }),
                i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (e) {
            i.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: e.body
            });
        }
    },
    async saveIntegration(e, n) {
        try {
            i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }), await r.Z.updateIntegration(e, n.id, n.expire_behavior, n.expire_grace_period, n.enable_emoticons), i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (e) {
            i.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: e.body
            });
        }
    },
    async saveWebhook(e, n) {
        try {
            i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }), await a.Z.update(e, n.id, n), i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (e) {
            i.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: e.body
            });
        }
    }
};
