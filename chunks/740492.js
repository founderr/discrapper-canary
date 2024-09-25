var r,
    i,
    a,
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(433517),
    c = n(570140),
    d = n(541049),
    _ = n(874893),
    E = n(981631),
    f = n(957825);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e.DATA_SAVER = 'data_saver'), (e.STANDARD = 'standard'), (e.BEST = 'best');
})(r || (r = {})),
    !(function (e) {
        (e.VERY_LOW = 'very_low'), (e.LOW = 'low'), (e.MEDIUM = 'medium'), (e.HIGH = 'high'), (e.VERY_HIGH = 'very_high');
    })(i || (i = {}));
let p = (window.innerWidth - E.PrS) / 2,
    m = 'standard',
    I = null;
function T() {
    return null == I && (I = Math.max((window.innerWidth - E.PrS) * 0.4, E.$Y6)), I;
}
let g = {};
function S(e) {
    g = {
        ...g,
        ...e.settings
    };
}
function A() {
    g = {
        useSystemTheme: g.useSystemTheme,
        darkSidebar: g.darkSidebar
    };
}
function v() {
    null == g && (g = {});
}
function N() {}
function O() {
    return (g.darkSidebar = !g.darkSidebar), !0;
}
function R() {
    var e;
    let t = l.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
    return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e;
}
class C extends (a = l.ZP.DeviceSettingsStore) {
    initialize(e) {
        var t;
        g = null != e ? e : {};
        g.darkSidebar = null !== (t = g.darkSidebar) && void 0 !== t ? t : R();
    }
    getUserAgnosticState() {
        return g;
    }
    get displayCompactAvatars() {
        var e;
        return null !== (e = g.displayCompactAvatars) && void 0 !== e && e;
    }
    get lowQualityImageMode() {
        var e;
        return null !== (e = g.lowQualityImageMode) && void 0 !== e && e;
    }
    get videoUploadQuality() {
        var e;
        return null !== (e = g.videoUploadQuality) && void 0 !== e ? e : m;
    }
    get dataSavingMode() {
        var e, t;
        return null !== (t = null !== (e = g.dataSavingMode) && void 0 !== e ? e : g.lowQualityImageMode) && void 0 !== t && t;
    }
    get expressionPickerWidth() {
        var e;
        return null !== (e = g.expressionPickerWidth) && void 0 !== e ? e : f._j.MIN;
    }
    get messageRequestSidebarWidth() {
        var e;
        return null !== (e = g.messageRequestSidebarWidth) && void 0 !== e ? e : E.R7I;
    }
    get threadSidebarWidth() {
        var e;
        return null !== (e = g.threadSidebarWidth) && void 0 !== e ? e : E.$Y6;
    }
    get postSidebarWidth() {
        var e;
        return null !== (e = g.postSidebarWidth) && void 0 !== e ? e : p;
    }
    get callChatSidebarWidth() {
        var e;
        return null !== (e = g.callChatSidebarWidth) && void 0 !== e ? e : E.$Y6;
    }
    get homeSidebarWidth() {
        var e;
        return null !== (e = g.homeSidebarWidth) && void 0 !== e ? e : T();
    }
    get callHeaderHeight() {
        return g.callHeaderHeight;
    }
    get useSystemTheme() {
        var e;
        return null !== (e = g.useSystemTheme) && void 0 !== e ? e : _.K.UNSET;
    }
    get activityPanelHeight() {
        return g.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null !== (e = g.disableVoiceChannelChangeAlert) && void 0 !== e && e;
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null !== (e = g.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e;
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null !== (e = g.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null !== (e = g.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null !== (e = g.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e;
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null !== (e = g.pushUpsellDismissed) && void 0 !== e && e;
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null !== (e = g.disableActivityHostLeftNitroUpsell) && void 0 !== e && e;
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null !== (e = g.disableCallUserConfirmationPrompt) && void 0 !== e && e;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null !== (e = g.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e;
    }
    get enableAndroidChatListAnimations() {
        var e;
        return null !== (e = g.enableAndroidChatListAnimations) && void 0 !== e && e;
    }
    get darkSidebar() {
        var e;
        return null !== (e = g.darkSidebar) && void 0 !== e && e;
    }
    get useMobileChatCustomRenderer() {
        var e;
        return null !== (e = g.useMobileChatCustomRenderer) && void 0 !== e && e;
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null === (e = g.saveCameraUploadsToDevice) || void 0 === e || e;
    }
    get swipeToReply() {
        var e;
        return null !== (e = g.swipeToReply) && void 0 !== e && e;
    }
}
h(C, 'displayName', 'UnsyncedUserSettingsStore'),
    h(C, 'persistKey', 'UnsyncedUserSettingsStore'),
    h(C, 'migrations', [
        () => {
            let e = u.K.get('UserSettingsStore');
            return u.K.remove('UserSettingsStore'), s().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations');
        }
    ]),
    (t.ZP = new C(c.Z, {
        UNSYNCED_USER_SETTINGS_UPDATE: S,
        LOGOUT: A,
        LOGIN_SUCCESS: v,
        REGISTER_SUCCESS: N,
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: O
    }));
