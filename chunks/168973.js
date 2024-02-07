"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var i, r, s, a, o = n("917351"),
  l = n.n(o),
  u = n("446674"),
  c = n("95410"),
  d = n("913144"),
  f = n("228803"),
  E = n("116319"),
  p = n("49111"),
  h = n("13030");
(i = s || (s = {})).DATA_SAVER = "data_saver", i.STANDARD = "standard", i.BEST = "best", (r = a || (a = {})).VERY_LOW = "very_low", r.LOW = "low", r.MEDIUM = "medium", r.HIGH = "high", r.VERY_HIGH = "very_high";
let _ = (window.innerWidth - p.CHANNEL_SIDEBAR_WIDTH) / 2,
  S = null,
  m = {};
class T extends u.default.DeviceSettingsStore {
  initialize(e) {
    var t, n;
    (m = null != e ? e : {}).useSystemTheme = null == (n = m.useSystemTheme) || null == (0, f.default)() ? E.SystemThemeState.UNSET : "boolean" == typeof n ? n ? E.SystemThemeState.ON : E.SystemThemeState.OFF : n, m.darkSidebar = null !== (t = m.darkSidebar) && void 0 !== t ? t : function() {
      var e;
      let t = u.default.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
      return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e
    }()
  }
  getUserAgnosticState() {
    return m
  }
  get displayCompactAvatars() {
    var e;
    return null !== (e = m.displayCompactAvatars) && void 0 !== e && e
  }
  get lowQualityImageMode() {
    var e;
    return null !== (e = m.lowQualityImageMode) && void 0 !== e && e
  }
  get videoUploadQuality() {
    var e;
    return null !== (e = m.videoUploadQuality) && void 0 !== e ? e : "standard"
  }
  get dataSavingMode() {
    var e, t;
    return null !== (t = null !== (e = m.dataSavingMode) && void 0 !== e ? e : m.lowQualityImageMode) && void 0 !== t && t
  }
  get expressionPickerWidth() {
    var e;
    return null !== (e = m.expressionPickerWidth) && void 0 !== e ? e : h.ExpressionPickerWidths.MIN
  }
  get messageRequestSidebarWidth() {
    var e;
    return null !== (e = m.messageRequestSidebarWidth) && void 0 !== e ? e : p.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH
  }
  get threadSidebarWidth() {
    var e;
    return null !== (e = m.threadSidebarWidth) && void 0 !== e ? e : p.DEFAULT_CHAT_SIDEBAR_WIDTH
  }
  get postSidebarWidth() {
    var e;
    return null !== (e = m.postSidebarWidth) && void 0 !== e ? e : _
  }
  get callChatSidebarWidth() {
    var e;
    return null !== (e = m.callChatSidebarWidth) && void 0 !== e ? e : p.DEFAULT_CHAT_SIDEBAR_WIDTH
  }
  get homeSidebarWidth() {
    var e;
    return null !== (e = m.homeSidebarWidth) && void 0 !== e ? e : (null == S && (S = Math.max((window.innerWidth - p.CHANNEL_SIDEBAR_WIDTH) * .4, p.DEFAULT_CHAT_SIDEBAR_WIDTH)), S)
  }
  get callHeaderHeight() {
    return m.callHeaderHeight
  }
  get useSystemTheme() {
    var e;
    return null !== (e = m.useSystemTheme) && void 0 !== e ? e : E.SystemThemeState.UNSET
  }
  get activityPanelHeight() {
    return m.activityPanelHeight
  }
  get disableVoiceChannelChangeAlert() {
    var e;
    return null !== (e = m.disableVoiceChannelChangeAlert) && void 0 !== e && e
  }
  get disableEmbeddedActivityPopOutAlert() {
    var e;
    return null !== (e = m.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e
  }
  get disableActivityHardwareAccelerationPrompt() {
    var e;
    return null !== (e = m.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e
  }
  get disableInviteWithTextChannelActivityLaunch() {
    var e;
    return null !== (e = m.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e
  }
  get disableHideSelfStreamAndVideoConfirmationAlert() {
    var e;
    return null !== (e = m.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e
  }
  get pushUpsellUserSettingsDismissed() {
    var e;
    return null !== (e = m.pushUpsellDismissed) && void 0 !== e && e
  }
  get disableActivityHostLeftNitroUpsell() {
    var e;
    return null !== (e = m.disableActivityHostLeftNitroUpsell) && void 0 !== e && e
  }
  get disableCallUserConfirmationPrompt() {
    var e;
    return null !== (e = m.disableCallUserConfirmationPrompt) && void 0 !== e && e
  }
  get disableApplicationSubscriptionCancellationSurvey() {
    var e;
    return null !== (e = m.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e
  }
  get enableAndroidChatListAnimations() {
    var e;
    return null !== (e = m.enableAndroidChatListAnimations) && void 0 !== e && e
  }
  get darkSidebar() {
    var e;
    return null !== (e = m.darkSidebar) && void 0 !== e && e
  }
  get useMobileChatCustomRenderer() {
    var e;
    return null !== (e = m.useMobileChatCustomRenderer) && void 0 !== e && e
  }
  get saveCameraUploadsToDevice() {
    var e;
    return null === (e = m.saveCameraUploadsToDevice) || void 0 === e || e
  }
  get swipeToReply() {
    var e;
    return null !== (e = m.swipeToReply) && void 0 !== e && e
  }
}
T.displayName = "UnsyncedUserSettingsStore", T.persistKey = "UnsyncedUserSettingsStore", T.migrations = [() => {
  let e = c.default.get("UserSettingsStore");
  return c.default.remove("UserSettingsStore"), l.pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
}];
var g = new T(d.default, {
  UNSYNCED_USER_SETTINGS_UPDATE: function(e) {
    m = {
      ...m,
      ...e.settings
    }
  },
  LOGOUT: function() {
    m = {
      useSystemTheme: m.useSystemTheme,
      darkSidebar: m.darkSidebar
    }
  },
  LOGIN_SUCCESS: function() {
    null == m && (m = {})
  },
  REGISTER_SUCCESS: function() {},
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
    return m.darkSidebar = !m.darkSidebar, !0
  }
})