"use strict";
n.r(t);
var a = n("570140"),
  i = n("434404"),
  r = n("821864"),
  s = n("308063");
t.default = {
  init() {
    a.default.dispatch({
      type: "INTEGRATION_SETTINGS_INIT"
    })
  },
  setSection(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    a.default.dispatch({
      type: "INTEGRATION_SETTINGS_SET_SECTION",
      section: e,
      sectionId: t
    })
  },
  startEditingCommandPermissions(e) {
    a.default.dispatch({
      type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
      commandId: e
    })
  },
  stopEditingCommandPermissions(e) {
    a.default.dispatch({
      type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
      commandId: e
    })
  },
  startEditingIntegration(e) {
    a.default.dispatch({
      type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
      integrationId: e
    })
  },
  stopEditingIntegration() {
    a.default.dispatch({
      type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
    })
  },
  updateIntegration(e) {
    a.default.dispatch({
      type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
      settings: e
    })
  },
  startEditingWebhook(e) {
    a.default.dispatch({
      type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
      webhookId: e
    })
  },
  stopEditingWebhook() {
    a.default.dispatch({
      type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
    })
  },
  updateWebhook(e) {
    a.default.dispatch({
      type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
      settings: e
    })
  },
  async saveApplicationPermissions(e, t, n) {
    try {
      a.default.dispatch({
        type: "INTEGRATION_SETTINGS_SUBMITTING"
      }), await r.updateApplicationCommandPermissions({
        applicationId: e,
        commandId: e,
        defaultEveryoneValue: !0,
        defaultEverywhereValue: !0,
        guildId: t,
        permissions: n
      }), a.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
      })
    } catch (e) {
      a.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
        errors: e.body
      })
    }
  },
  async saveIntegration(e, t) {
    try {
      a.default.dispatch({
        type: "INTEGRATION_SETTINGS_SUBMITTING"
      }), await i.default.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), a.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
      })
    } catch (e) {
      a.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
        errors: e.body
      })
    }
  },
  async saveWebhook(e, t) {
    try {
      a.default.dispatch({
        type: "INTEGRATION_SETTINGS_SUBMITTING"
      }), await s.default.update(e, t.id, t), a.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
      })
    } catch (e) {
      a.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
        errors: e.body
      })
    }
  }
}