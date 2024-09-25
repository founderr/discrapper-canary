let r;
var i,
    a = n(442837),
    o = n(570140),
    s = n(314897),
    l = n(979651),
    u = n(1163);
function c(e, t, n) {
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
let d = 5,
    _ = {
        hqStreamingFrameAnimationPlayed: !1,
        hqStreamingPopoutDismissed: !1,
        hqStreamingOptInPopoutDismissedCount: 0,
        hqStreamingOptInPopoutDismissed: !1,
        hqStreamingIsEnabled: !1,
        hqStreamingDidEnable: !1
    },
    E = !1,
    f = _;
function h(e) {
    f = {
        ...f,
        ...(null == e ? void 0 : e(f))
    };
}
function p() {
    h(() => ({ hqStreamingFrameAnimationPlayed: !0 }));
}
function m() {
    h(() => ({ hqStreamingPopoutDismissed: !0 }));
}
function I() {
    !f.hqStreamingOptInPopoutDismissed &&
        h((e) => ({
            hqStreamingOptInPopoutDismissedCount: e.hqStreamingOptInPopoutDismissedCount + 1,
            hqStreamingOptInPopoutDismissed: !0
        }));
}
function T(e) {
    let { shouldShow: t } = e,
        n = null != r && r.extendedOptInDuration ? d : 1;
    E = t && f.hqStreamingOptInPopoutDismissedCount < n;
}
function g(e) {
    let { enabled: t } = e;
    h((e) => ({
        hqStreamingIsEnabled: t,
        hqStreamingDidEnable: t || e.hqStreamingDidEnable
    }));
}
function S() {
    h(() => _);
}
function A() {
    if (null == l.Z.getVoiceStateForUser(s.default.getId()))
        h(() => ({
            hqStreamingOptInPopoutDismissed: !1,
            hqStreamingFrameAnimationPlayed: !1
        }));
}
function v() {
    r = u.Z.getCurrentConfig({ location: 'handleExperimentFetch' }, { autoTrackExposure: !1 });
}
class N extends (i = a.ZP.PersistedStore) {
    getState() {
        return f;
    }
    shouldShowOptInPopout() {
        return E;
    }
    initialize(e) {
        null != e && (f = e);
    }
}
c(N, 'displayName', 'PerksDemosUIState'),
    c(N, 'persistKey', 'PerksDemosUIState'),
    (t.Z = new N(o.Z, {
        PERMIUM_PERKS_DEMO_FRAME_ANIMATION_PLAYED: p,
        PREMIUM_PERKS_DEMO_POPOUT_DISMISSED: m,
        PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_DISMISSED: I,
        PREMIUM_PERKS_DEMO_OPT_IN_POPOUT_SHOULD_SHOW: T,
        PREMIUM_PERKS_DEMO_ENABLED: g,
        PREMIUM_PERKS_DEMO_UI_RESET: S,
        VOICE_STATE_UPDATES: A,
        CONNECTION_OPEN: v,
        EXPERIMENTS_FETCH_SUCCESS: v,
        EXPERIMENT_OVERRIDE_BUCKET: v,
        LOGOUT: S
    }));
