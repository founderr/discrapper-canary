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
    m = r(957825),
    g = r(969943);
function E(e, n, r) {
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
let v = (window.innerWidth - p.PrS) / 2,
    I = 'standard',
    T = null;
function b() {
    return null == T && (T = Math.max((window.innerWidth - p.PrS) * 0.4, p.$Y6)), T;
}
let y = {};
function S(e) {
    y = {
        ...y,
        ...e.settings
    };
}
function A() {
    y = {
        useSystemTheme: y.useSystemTheme,
        darkSidebar: y.darkSidebar
    };
}
function N() {
    null == y && (y = {});
}
function C() {}
function R() {
    return (y.darkSidebar = !y.darkSidebar), !0;
}
function O() {
    var e;
    let n = u.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
    return null !== (e = null == n ? void 0 : n.darkSidebar) && void 0 !== e && e;
}
class D extends (s = u.ZP.DeviceSettingsStore) {
    initialize(e) {
        var n;
        y = null != e ? e : {};
        y.darkSidebar = null !== (n = y.darkSidebar) && void 0 !== n ? n : O();
    }
    getUserAgnosticState() {
        return y;
    }
    get displayCompactAvatars() {
        var e;
        return null !== (e = y.displayCompactAvatars) && void 0 !== e && e;
    }
    get lowQualityImageMode() {
        var e;
        return null !== (e = y.lowQualityImageMode) && void 0 !== e && e;
    }
    get videoUploadQuality() {
        var e;
        return null !== (e = y.videoUploadQuality) && void 0 !== e ? e : I;
    }
    get dataSavingMode() {
        var e, n;
        return null !== (n = null !== (e = y.dataSavingMode) && void 0 !== e ? e : y.lowQualityImageMode) && void 0 !== n && n;
    }
    get expressionPickerWidth() {
        var e;
        return null !== (e = y.expressionPickerWidth) && void 0 !== e ? e : m._j.MIN;
    }
    get messageRequestSidebarWidth() {
        var e;
        return null !== (e = y.messageRequestSidebarWidth) && void 0 !== e ? e : p.R7I;
    }
    get threadSidebarWidth() {
        var e;
        return null !== (e = y.threadSidebarWidth) && void 0 !== e ? e : p.$Y6;
    }
    get postSidebarWidth() {
        var e;
        return null !== (e = y.postSidebarWidth) && void 0 !== e ? e : v;
    }
    get callChatSidebarWidth() {
        var e;
        return null !== (e = y.callChatSidebarWidth) && void 0 !== e ? e : p.$Y6;
    }
    get homeSidebarWidth() {
        var e;
        return null !== (e = y.homeSidebarWidth) && void 0 !== e ? e : b();
    }
    get callParticipantsSidebarWidth() {
        var e;
        return null !== (e = y.callParticipantsSidebarWidth) && void 0 !== e ? e : _.at;
    }
    get callHeaderHeight() {
        return y.callHeaderHeight;
    }
    get useSystemTheme() {
        var e;
        return null !== (e = y.useSystemTheme) && void 0 !== e ? e : h.K.UNSET;
    }
    get activityPanelHeight() {
        return y.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null !== (e = y.disableVoiceChannelChangeAlert) && void 0 !== e && e;
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null !== (e = y.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e;
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null !== (e = y.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null !== (e = y.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null !== (e = y.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e;
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null !== (e = y.pushUpsellDismissed) && void 0 !== e && e;
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null !== (e = y.disableActivityHostLeftNitroUpsell) && void 0 !== e && e;
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null !== (e = y.disableCallUserConfirmationPrompt) && void 0 !== e && e;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null !== (e = y.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e;
    }
    get darkSidebar() {
        var e;
        return null !== (e = y.darkSidebar) && void 0 !== e && e;
    }
    get useMobileChatCustomRenderer() {
        var e;
        return null !== (e = y.useMobileChatCustomRenderer) && void 0 !== e && e;
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null === (e = y.saveCameraUploadsToDevice) || void 0 === e || e;
    }
    get swipeToReply() {
        var e;
        return null !== (e = y.swipeToReply) && void 0 !== e && e;
    }
    get showPlayAgain() {
        var e;
        return null === (e = y.showPlayAgain) || void 0 === e || e;
    }
    get disableVisualRefresh() {
        var e;
        return null !== (e = y.disableVisualRefresh) && void 0 !== e && e;
    }
    get listDensity() {
        var e;
        return null !== (e = y.listDensity) && void 0 !== e ? e : g.fx.COZY;
    }
}
E(D, 'displayName', 'UnsyncedUserSettingsStore'),
    E(D, 'persistKey', 'UnsyncedUserSettingsStore'),
    E(D, 'migrations', [
        () => {
            let e = c.K.get('UserSettingsStore');
            return c.K.remove('UserSettingsStore'), l().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations', 'showPlayAgain');
        }
    ]),
    (n.ZP = new D(d.Z, {
        UNSYNCED_USER_SETTINGS_UPDATE: S,
        LOGOUT: A,
        LOGIN_SUCCESS: N,
        REGISTER_SUCCESS: C,
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: R
    }));
