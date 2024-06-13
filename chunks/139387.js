"use strict";
n.r(e);
var i = n("570140"),
  a = n("434404"),
  r = n("821864"),
  u = n("308063");
e.default = {
  init() {
    i.default.dispatch({
      type: "INTEGRATION_SETTINGS_INIT"
    })
  },
  setSection(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    i.default.dispatch({
      type: "INTEGRATION_SETTINGS_SET_SECTION",
      section: t,
      sectionId: e
    })
  },
  startEditingCommandPermissions(t) {
    i.default.dispatch({
      type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
      commandId: t
    })
  },
  stopEditingCommandPermissions(t) {
    i.default.dispatch({
      type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
      commandId: t
    })
  },
  startEditingIntegration(t) {
    i.default.dispatch({
      type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
      integrationId: t
    })
  },
  stopEditingIntegration() {
    i.default.dispatch({
      type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
    })
  },
  updateIntegration(t) {
    i.default.dispatch({
      type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
      settings: t
    })
  },
  startEditingWebhook(t) {
    i.default.dispatch({
      type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
      webhookId: t
    })
  },
  stopEditingWebhook() {
    i.default.dispatch({
      type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
    })
  },
  updateWebhook(t) {
    i.default.dispatch({
      type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
      settings: t
    })
  },
  async saveApplicationPermissions(t, e, n) {
    try {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_SUBMITTING"
      }), await r.updateApplicationCommandPermissions({
        applicationId: t,
        commandId: t,
        defaultEveryoneValue: !0,
        defaultEverywhereValue: !0,
        guildId: e,
        permissions: n
      }), i.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
      })
    } catch (t) {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
        errors: t.body
      })
    }
  },
  async saveIntegration(t, e) {
    try {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_SUBMITTING"
      }), await a.default.updateIntegration(t, e.id, e.expire_behavior, e.expire_grace_period, e.enable_emoticons), i.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
      })
    } catch (t) {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
        errors: t.body
      })
    }
  },
  async saveWebhook(t, e) {
    try {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_SUBMITTING"
      }), await u.default.update(t, e.id, e), i.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
      })
    } catch (t) {
      i.default.dispatch({
        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
        errors: t.body
      })
    }
  }
}