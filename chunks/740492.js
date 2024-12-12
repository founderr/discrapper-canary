var r,
    i,
    a,
    s,
    o,
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(433517),
    f = n(570140);
n(541049);
var _ = n(36645),
    p = n(874893),
    h = n(981631),
    m = n(957825);
function g(e, t, n) {
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
((r = a || (a = {})).DATA_SAVER = 'data_saver'), (r.STANDARD = 'standard'), (r.BEST = 'best'), ((i = s || (s = {})).VERY_LOW = 'very_low'), (i.LOW = 'low'), (i.MEDIUM = 'medium'), (i.HIGH = 'high'), (i.VERY_HIGH = 'very_high');
let E = (window.innerWidth - h.PrS) / 2,
    v = null,
    I = {};
class T extends (o = c.ZP.DeviceSettingsStore) {
    initialize(e) {
        var t;
        I = null != e ? e : {};
        I.darkSidebar =
            null !== (t = I.darkSidebar) && void 0 !== t
                ? t
                : (function () {
                      var e;
                      let t = c.ZP.PersistedStore.migrateAndReadStoreState('AccessibilityStore', []).state;
                      return null !== (e = null == t ? void 0 : t.darkSidebar) && void 0 !== e && e;
                  })();
    }
    getUserAgnosticState() {
        return I;
    }
    get displayCompactAvatars() {
        var e;
        return null !== (e = I.displayCompactAvatars) && void 0 !== e && e;
    }
    get lowQualityImageMode() {
        var e;
        return null !== (e = I.lowQualityImageMode) && void 0 !== e && e;
    }
    get videoUploadQuality() {
        var e;
        return null !== (e = I.videoUploadQuality) && void 0 !== e ? e : 'standard';
    }
    get dataSavingMode() {
        var e, t;
        return null !== (t = null !== (e = I.dataSavingMode) && void 0 !== e ? e : I.lowQualityImageMode) && void 0 !== t && t;
    }
    get expressionPickerWidth() {
        var e;
        return null !== (e = I.expressionPickerWidth) && void 0 !== e ? e : m._j.MIN;
    }
    get messageRequestSidebarWidth() {
        var e;
        return null !== (e = I.messageRequestSidebarWidth) && void 0 !== e ? e : h.R7I;
    }
    get threadSidebarWidth() {
        var e;
        return null !== (e = I.threadSidebarWidth) && void 0 !== e ? e : h.$Y6;
    }
    get postSidebarWidth() {
        var e;
        return null !== (e = I.postSidebarWidth) && void 0 !== e ? e : E;
    }
    get callChatSidebarWidth() {
        var e;
        return null !== (e = I.callChatSidebarWidth) && void 0 !== e ? e : h.$Y6;
    }
    get homeSidebarWidth() {
        var e;
        return null !== (e = I.homeSidebarWidth) && void 0 !== e ? e : (null == v && (v = Math.max((window.innerWidth - h.PrS) * 0.4, h.$Y6)), v);
    }
    get callParticipantsSidebarWidth() {
        var e;
        return null !== (e = I.callParticipantsSidebarWidth) && void 0 !== e ? e : _.at;
    }
    get callHeaderHeight() {
        return I.callHeaderHeight;
    }
    get useSystemTheme() {
        var e;
        return null !== (e = I.useSystemTheme) && void 0 !== e ? e : p.K.UNSET;
    }
    get activityPanelHeight() {
        return I.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        var e;
        return null !== (e = I.disableVoiceChannelChangeAlert) && void 0 !== e && e;
    }
    get disableEmbeddedActivityPopOutAlert() {
        var e;
        return null !== (e = I.disableEmbeddedActivityPopOutAlert) && void 0 !== e && e;
    }
    get disableActivityHardwareAccelerationPrompt() {
        var e;
        return null !== (e = I.disableActivityHardwareAccelerationPrompt) && void 0 !== e && e;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        var e;
        return null !== (e = I.disableInviteWithTextChannelActivityLaunch) && void 0 !== e && e;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        var e;
        return null !== (e = I.disableHideSelfStreamAndVideoConfirmationAlert) && void 0 !== e && e;
    }
    get pushUpsellUserSettingsDismissed() {
        var e;
        return null !== (e = I.pushUpsellDismissed) && void 0 !== e && e;
    }
    get disableActivityHostLeftNitroUpsell() {
        var e;
        return null !== (e = I.disableActivityHostLeftNitroUpsell) && void 0 !== e && e;
    }
    get disableCallUserConfirmationPrompt() {
        var e;
        return null !== (e = I.disableCallUserConfirmationPrompt) && void 0 !== e && e;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        var e;
        return null !== (e = I.disableApplicationSubscriptionCancellationSurvey) && void 0 !== e && e;
    }
    get darkSidebar() {
        var e;
        return null !== (e = I.darkSidebar) && void 0 !== e && e;
    }
    get useMobileChatCustomRenderer() {
        var e;
        return null !== (e = I.useMobileChatCustomRenderer) && void 0 !== e && e;
    }
    get saveCameraUploadsToDevice() {
        var e;
        return null === (e = I.saveCameraUploadsToDevice) || void 0 === e || e;
    }
    get swipeToReply() {
        var e;
        return null !== (e = I.swipeToReply) && void 0 !== e && e;
    }
    get showPlayAgain() {
        var e;
        return null === (e = I.showPlayAgain) || void 0 === e || e;
    }
    get disableVisualRefresh() {
        var e;
        return null !== (e = I.disableVisualRefresh) && void 0 !== e && e;
    }
}
g(T, 'displayName', 'UnsyncedUserSettingsStore'),
    g(T, 'persistKey', 'UnsyncedUserSettingsStore'),
    g(T, 'migrations', [
        () => {
            let e = d.K.get('UserSettingsStore');
            return d.K.remove('UserSettingsStore'), u().pick(e, 'dataSavingMode', 'videoUploadQuality', 'lowQualityImageMode', 'useSystemTheme', 'expressionPickerWidth', 'disableVoiceChannelChangeAlert', 'disableHideSelfStreamAndVideoConfirmationAlert', 'pushUpsellDismissed', 'disableEmbeddedActivityPopOutAlert', 'disableActivityHardwareAccelerationPrompt', 'disableInviteWithTextChannelActivityLaunch', 'disableActivityHostLeftNitroUpsell', 'disableCallUserConfirmationPrompt', 'disableApplicationSubscriptionCancellationSurvey', 'enableAndroidChatListAnimations', 'showPlayAgain');
        }
    ]),
    (t.ZP = new T(f.Z, {
        UNSYNCED_USER_SETTINGS_UPDATE: function (e) {
            I = {
                ...I,
                ...e.settings
            };
        },
        LOGOUT: function () {
            I = {
                useSystemTheme: I.useSystemTheme,
                darkSidebar: I.darkSidebar
            };
        },
        LOGIN_SUCCESS: function () {
            null == I && (I = {});
        },
        REGISTER_SUCCESS: function () {},
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function () {
            return (I.darkSidebar = !I.darkSidebar), !0;
        }
    }));
