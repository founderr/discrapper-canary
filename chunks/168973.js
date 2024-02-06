"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i, s, r, a, o = n("917351"),
  l = n.n(o),
  u = n("446674"),
  d = n("95410"),
  c = n("913144"),
  f = n("228803"),
  _ = n("116319"),
  h = n("49111"),
  g = n("13030");
(i = r || (r = {})).DATA_SAVER = "data_saver", i.STANDARD = "standard", i.BEST = "best", (s = a || (a = {})).VERY_LOW = "very_low", s.LOW = "low", s.MEDIUM = "medium", s.HIGH = "high", s.VERY_HIGH = "very_high";
let m = (window.innerWidth - h.CHANNEL_SIDEBAR_WIDTH) / 2,
  E = null,
  p = {};
class v extends u.default.DeviceSettingsStore {
  initialize(e) {
    var t, n;
    (p = null != e ? e : {}).useSystemTheme = null == (n = p.useSystemTheme) || null == (0, f.default)() ? _.SystemThemeState.UNSET : "boolean" == typeof n ? n ? _.SystemThemeState.ON : _.SystemThemeState.OFF : n, p.darkSidebar = null !== (t = p.darkSidebar) && void 0 !== t ? t : function() {
      var e;
      let t = u.default.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
      return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e
    }()
  }
  getUserAgnosticState() {
    return p
  }
  get displayCompactAvatars() {
    var e;
    return null !== (e = p.displayCompactAvatars) && void 0 !== e && e
  }
  get lowQualityImageMode() {
    var e;
    return null !== (e = p.lowQualityImageMode) && void 0 !== e && e
  }
  get videoUploadQuality() {
    var e;
    return null !== (e = p.videoUploadQuality) && void 0 !== e ? e : "standard"
  }
  get dataSavingMode() {
    var e, t;
    return null !== (t = null !== (e = p.dataSavingMode) && void 0 !== e ? e : p.lowQualityImageMode) && void 0 !== t && t
  }
  get expressionPickerWidth() {
    var e;
    return null !== (e = p.expressionPickerWidth) && void 0 !== e ? e : g.ExpressionPickerWidths.MIN
  }
  get messageRequestSidebarWidth() {
    var e;
    return null !== (e = p.messageRequestSidebarWidth) && void 0 !== e ? e : h.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH
  }
  get threadSidebarWidth() {
    var e;
    return null !== (e = p.threadSidebarWidth) && void 0 !== e ? e : h.DEFAULT_CHAT_SIDEBAR_WIDTH
  }
  get postSidebarWidth() {
    var e;
    return null !== (e = p.postSidebarWidth) && void 0 !== e ? e : m
  }
  get callChatSidebarWidth() {
    var e;
    return null !== (e = p.callChatSidebarWidth) && void 0 !== e ? e : h.DEFAULT_CHAT_SIDEBAR_WIDTH
  }
  get homeSidebarWidth() {
    var e;
    return null !== (e = p.homeSidebarWidth) && void 0 !== e ? e : (null == E && (E = Math.max((window.innerWidth - h.CHANNEL_SIDEBAR_WIDTH) * .4, h.DEFAULT_CHAT_SIDEBAR_WIDTH)), E)
  }
  get callHeaderHeight() {
    return p.callHeaderHeight
  }
  get useSystemTheme() {
    var e;
    return null !== (e = p.useSystemTheme) && void 0 !== e ? e : _.SystemThemeState.UNSET
  }
  get activityPanelHeight() {
    return p.activityPanelHeight
  }
  get disableVoiceChannelChangeAlert() {
    var e;
    return null !== (e = p.disableVoiceChannelChangeAlert) && void 0 !== e && e
  }
  get disableEmbeddedActivityPopOutAlert() {
    var e;
    return null !== (e = p.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e
  }
  get disableActivityHardwareAccelerationPrompt() {
    var e;
    return null !== (e = p.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e
  }
  get disableInviteWithTextChannelActivityLaunch() {
    var e;
    return null !== (e = p.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e
  }
  get disableHideSelfStreamAndVideoConfirmationAlert() {
    var e;
    return null !== (e = p.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e
  }
  get pushUpsellUserSettingsDismissed() {
    var e;
    return null !== (e = p.pushUpsellDismissed) && void 0 !== e && e
  }
  get disableActivityHostLeftNitroUpsell() {
    var e;
    return null !== (e = p.disableActivityHostLeftNitroUpsell) && void 0 !== e && e
  }
  get disableCallUserConfirmationPrompt() {
    var e;
    return null !== (e = p.disableCallUserConfirmationPrompt) && void 0 !== e && e
  }
  get disableApplicationSubscriptionCancellationSurvey() {
    var e;
    return null !== (e = p.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e
  }
  get enableAndroidChatListAnimations() {
    var e;
    return null !== (e = p.enableAndroidChatListAnimations) && void 0 !== e && e
  }
  get darkSidebar() {
    var e;
    return null !== (e = p.darkSidebar) && void 0 !== e && e
  }
  get useMobileChatCustomRenderer() {
    var e;
    return null !== (e = p.useMobileChatCustomRenderer) && void 0 !== e && e
  }
  get saveCameraUploadsToDevice() {
    var e;
    return null === (e = p.saveCameraUploadsToDevice) || void 0 === e || e
  }
  get swipeToReply() {
    var e;
    return null !== (e = p.swipeToReply) && void 0 !== e && e
  }
}
v.displayName = "UnsyncedUserSettingsStore", v.persistKey = "UnsyncedUserSettingsStore", v.migrations = [() => {
  let e = d.default.get("UserSettingsStore");
  return d.default.remove("UserSettingsStore"), l.pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
}];
var S = new v(c.default, {
  UNSYNCED_USER_SETTINGS_UPDATE: function(e) {
    p = {
      ...p,
      ...e.settings
    }
  },
  LOGOUT: function() {
    p = {
      useSystemTheme: p.useSystemTheme,
      darkSidebar: p.darkSidebar
    }
  },
  LOGIN_SUCCESS: function() {
    null == p && (p = {})
  },
  REGISTER_SUCCESS: function() {},
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
    return p.darkSidebar = !p.darkSidebar, !0
  }
})