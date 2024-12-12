var i,
    a,
    s,
    o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(433517),
    d = r(570140),
    f = r(541049),
    _ = r(36645),
    h = r(874893),
    p = r(981631),
    m = r(957825);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.DATA_SAVER = 'data_saver'), (e.STANDARD = 'standard'), (e.BEST = 'best');
})(i || (i = {})),
    !(function (e) {
        (e.VERY_LOW = 'very_low'), (e.LOW = 'low'), (e.MEDIUM = 'medium'), (e.HIGH = 'high'), (e.VERY_HIGH = 'very_high');
    })(a || (a = {}));
let E = (window.innerWidth - p.PrS) / 2,
    v = 'standard',
    I = null;
function T() {
    return null == I && (I = Math.max((window.innerWidth - p.PrS) * 0.4, p.$Y6)), I;
}
let b = {};
function y(e) {
    b = {
        ...b,
        ...e.settings
    };
}
function S() {
    b = {
        useSystemTheme: b.useSystemTheme,
        darkSidebar: b.darkSidebar
    };
}
function A() {
    null == b && (b = {});
}
function N() {}
function C() {
    return (b.darkSidebar = !b.darkSidebar), !0;
}
function R() {
    var e;
    let n = u.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
    return null !== (e = null == n ? void 0 : n.darkSidebar) && void 0 !== e && e;
}
class O extends (s = u.ZP.DeviceSettingsStore) {
    initialize(e) {
        var n;
        b = null != e ? e : {};
        b.darkSidebar = null !== (n = b.darkSidebar) && void 0 !== n ? n : R();
    }
    getUserAgnosticState() {
        return b;
    }
    get displayCompactAvatars() {
        var e;
        return null !== (e = b.displayCompactAvatars) && void 0 !== e && e;
    }
    get lowQualityImageMode() {
        var e;
        return null !== (e = b.lowQualityImageMode) && void 0 !== e && e;
    }
    get videoUploadQuality() {
        var e;
        return null !== (e = b.videoUploadQuality) && void 0 !== e ? e : v;
    }
    get dataSavingMode() {
        var e, n;
        return null !== (n = null !== (e = b.dataSavingMode) && void 0 !== e ? e : b.lowQualityImageMode) && void 0 !== n && n;
    }
    get expressionPickerWidth() {
        var e;
        return null !== (e = b.expressionPickerWidth) && void 0 !== e ? e : m._j.MIN;
    }
    get messageRequestSidebarWidth() {
        var e;
        return null !== (e = b.messageRequestSidebarWidth) && void 0 !== e ? e : p.R7I;
    }
    get threadSidebarWidth() {
        var e;
        return null !== (e = b.threadSidebarWidth) && void 0 !== e ? e : p.$Y6;
    }
    get postSidebarWidth() {
        var e;
        return null !== (e = b.postSidebarWidth) && void 0 !== e ? e : E;
    }
    get callChatSidebarWidth() {
        var e;
        return null !== (e = b.callChatSidebarWidth) && void 0 !== e ? e : p.$Y6;
    }
    get homeSidebarWidth() {
        var e;
        return null !== (e = b.homeSidebarWidth) && void 0 !== e ? e : T();
    }
    get callParticipantsSidebarWidth() {
        var e;
        return null !== (e = b.callParticipantsSidebarWidth) && void 0 !== e ? e : _.at;
    }
    get callHeaderHeight() {
        return b.callHeaderHeight;
    }
    get useSystemTheme() {
        var e;
        return null !== (e = b.useSystemTheme) && void 0 !== e ? e : h.K.UNSET;
    }
    get activityPanelHeight() {
        return b.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null !== (e = b.disableVoiceChannelChangeAlert) && void 0 !== e && e;
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null !== (e = b.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e;
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null !== (e = b.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null !== (e = b.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null !== (e = b.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e;
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null !== (e = b.pushUpsellDismissed) && void 0 !== e && e;
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null !== (e = b.disableActivityHostLeftNitroUpsell) && void 0 !== e && e;
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null !== (e = b.disableCallUserConfirmationPrompt) && void 0 !== e && e;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null !== (e = b.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e;
    }
    get darkSidebar() {
        var e;
        return null !== (e = b.darkSidebar) && void 0 !== e && e;
    }
    get useMobileChatCustomRenderer() {
        var e;
        return null !== (e = b.useMobileChatCustomRenderer) && void 0 !== e && e;
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null === (e = b.saveCameraUploadsToDevice) || void 0 === e || e;
    }
    get swipeToReply() {
        var e;
        return null !== (e = b.swipeToReply) && void 0 !== e && e;
    }
    get showPlayAgain() {
        var e;
        return null === (e = b.showPlayAgain) || void 0 === e || e;
    }
    get disableVisualRefresh() {
        var e;
        return null !== (e = b.disableVisualRefresh) && void 0 !== e && e;
    }
    get listDensity() {
        var e;
        return null !== (e = b.listDensity) && void 0 !== e ? e : 'cozy';
    }
}
g(O, 'displayName', 'UnsyncedUserSettingsStore'),
    g(O, 'persistKey', 'UnsyncedUserSettingsStore'),
    g(O, 'migrations', [
        () => {
            let e = c.K.get('UserSettingsStore');
            return c.K.remove('UserSettingsStore'), l().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations', 'showPlayAgain');
        }
    ]),
    (n.ZP = new O(d.Z, {
        UNSYNCED_USER_SETTINGS_UPDATE: y,
        LOGOUT: S,
        LOGIN_SUCCESS: A,
        REGISTER_SUCCESS: N,
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: C
    }));
