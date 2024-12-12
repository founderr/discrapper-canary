r.d(n, {
    R: function () {
        return g;
    },
    Z: function () {
        return S;
    }
});
var i = r(47120);
var a = r(392711),
    s = r.n(a),
    o = r(433517),
    l = r(147913),
    u = r(536442),
    c = r(810788),
    d = r(19780),
    f = r(115470),
    _ = r(531578);
function h(e, n, r) {
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
let p = 200,
    m = {
        chance: 0.2,
        cooldown: 86400000
    },
    g = {
        [_.nw.VOICE]: {
            ...m,
            hotspot: u.v6.VOICE_CALL_FEEDBACK,
            storageKey: 'lastVoiceFeedback',
            eligibilityChecks: [b]
        },
        [_.nw.STREAM]: {
            ...m,
            hotspot: u.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: 'lastStreamFeedback'
        },
        [_.nw.VIDEO_BACKGROUND]: {
            ...m,
            hotspot: u.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: 'lastVideoBackgroundFeedback'
        },
        [_.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            hotspot: u.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: 'lastActivityFeedback'
        },
        [_.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            hotspot: u.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: 'inAppReportsFeedback'
        },
        [_.nw.USER_DM_MUTE]: {
            cooldown: 604800000,
            chance: 1,
            hotspot: u.v6.USER_DM_MUTE_FEEDBACK,
            storageKey: 'userDmMute'
        },
        [_.nw.BLOCK_USER]: {
            cooldown: 0,
            chance: 1,
            hotspot: u.v6.BLOCK_USER_FEEDBACK,
            storageKey: 'blockUser'
        }
    };
function E(e) {
    var n, r;
    if (__OVERLAY__) return !1;
    let i = null !== (n = f.Z.getFeedbackConfig(e)) && void 0 !== n ? n : g[e],
        a = [T, I, v],
        s = null !== (r = i.eligibilityChecks) && void 0 !== r ? r : [];
    return a.every((e) => e(i)) && s.every((e) => e(i));
}
function v(e) {
    return c.Z.hasHotspot(e.hotspot);
}
function I(e) {
    return Math.random() < e.chance;
}
function T(e) {
    if (null != e.storageKey) {
        let n = o.K.get(e.storageKey);
        if (null != n && Date.now() - n < e.cooldown) return !1;
    }
    return !0;
}
function b(e) {
    return !d.Z.getWasEverRtcConnected() || d.Z.getWasEverMultiParticipant();
}
function y(e) {
    let n = g[e];
    null != n.storageKey && o.K.set(n.storageKey, Date.now());
}
class S extends l.Z {
    possiblyShowFeedbackModal(e, n) {
        if (!!E(e) && (null == this.feedbackTypeToShow || !(_.b5[this.feedbackTypeToShow] < _.b5[e]))) (this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(n);
    }
    constructor(...e) {
        super(...e),
            h(this, 'feedbackTypeToShow', null),
            h(
                this,
                'showFeedbackModalDebounced',
                s().debounce((e) => {
                    null != this.feedbackTypeToShow && (y(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e());
                }, p)
            );
    }
}
