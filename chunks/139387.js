var r = n(570140),
    i = n(434404),
    l = n(821864),
    u = n(308063);
e.Z = {
    init() {
        r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_INIT' });
    },
    setSection(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_SET_SECTION',
            section: t,
            sectionId: e
        });
    },
    startEditingCommandPermissions(t) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_COMMAND',
            commandId: t
        });
    },
    stopEditingCommandPermissions(t) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_STOP_EDITING_COMMAND',
            commandId: t
        });
    },
    startEditingIntegration(t) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_INTEGRATION',
            integrationId: t
        });
    },
    stopEditingIntegration() {
        r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION' });
    },
    updateIntegration(t) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_UPDATE_INTEGRATION',
            settings: t
        });
    },
    startEditingWebhook(t) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_WEBHOOK',
            webhookId: t
        });
    },
    stopEditingWebhook() {
        r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK' });
    },
    updateWebhook(t) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_UPDATE_WEBHOOK',
            settings: t
        });
    },
    async saveApplicationPermissions(t, e, n) {
        try {
            r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }),
                await l.U3({
                    applicationId: t,
                    commandId: t,
                    defaultEveryoneValue: !0,
                    defaultEverywhereValue: !0,
                    guildId: e,
                    permissions: n
                }),
                r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (t) {
            r.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: t.body
            });
        }
    },
    async saveIntegration(t, e) {
        try {
            r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }), await i.Z.updateIntegration(t, e.id, e.expire_behavior, e.expire_grace_period, e.enable_emoticons), r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (t) {
            r.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: t.body
            });
        }
    },
    async saveWebhook(t, e) {
        try {
            r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }), await u.Z.update(t, e.id, e), r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (t) {
            r.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: t.body
            });
        }
    }
};
