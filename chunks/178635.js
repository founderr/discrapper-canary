n.d(t, {
    R: function () {
        return p;
    },
    Z: function () {
        return v;
    }
});
var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(433517),
    s = n(147913),
    l = n(536442),
    u = n(810788),
    c = n(19780),
    d = n(115470),
    _ = n(531578);
function E(e, t, n) {
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
let f = 200,
    h = {
        chance: 0.2,
        cooldown: 86400000
    },
    p = {
        [_.nw.VOICE]: {
            ...h,
            hotspot: l.v6.VOICE_CALL_FEEDBACK,
            storageKey: 'lastVoiceFeedback',
            eligibilityChecks: [S]
        },
        [_.nw.STREAM]: {
            ...h,
            hotspot: l.v6.REPORT_PROBLEM_POST_STREAM,
            storageKey: 'lastStreamFeedback'
        },
        [_.nw.VIDEO_BACKGROUND]: {
            ...h,
            hotspot: l.v6.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: 'lastVideoBackgroundFeedback'
        },
        [_.nw.ACTIVITY]: {
            cooldown: 0,
            chance: 0.5,
            hotspot: l.v6.POST_ACTIVITY_FEEDBACK,
            storageKey: 'lastActivityFeedback'
        },
        [_.nw.IN_APP_REPORTS]: {
            cooldown: 172800000,
            chance: 0.5,
            hotspot: l.v6.IN_APP_REPORTS_FEEDBACK,
            storageKey: 'inAppReportsFeedback'
        },
        [_.nw.USER_DM_MUTE]: {
            cooldown: 604800000,
            chance: 1,
            hotspot: l.v6.USER_DM_MUTE_FEEDBACK,
            storageKey: 'userDmMute'
        }
    };
function m(e) {
    var t, n;
    if (__OVERLAY__) return !1;
    let r = null !== (t = d.Z.getFeedbackConfig(e)) && void 0 !== t ? t : p[e],
        i = [g, T, I],
        a = null !== (n = r.eligibilityChecks) && void 0 !== n ? n : [];
    return i.every((e) => e(r)) && a.every((e) => e(r));
}
function I(e) {
    return u.Z.hasHotspot(e.hotspot);
}
function T(e) {
    return Math.random() < e.chance;
}
function g(e) {
    if (null != e.storageKey) {
        let t = o.K.get(e.storageKey);
        if (null != t && Date.now() - t < e.cooldown) return !1;
    }
    return !0;
}
function S(e) {
    return !c.Z.getWasEverRtcConnected() || c.Z.getWasEverMultiParticipant();
}
function A(e) {
    let t = p[e];
    null != t.storageKey && o.K.set(t.storageKey, Date.now());
}
class v extends s.Z {
    possiblyShowFeedbackModal(e, t) {
        if (!!m(e) && (null == this.feedbackTypeToShow || !(_.b5[this.feedbackTypeToShow] < _.b5[e]))) (this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t);
    }
    constructor(...e) {
        super(...e),
            E(this, 'feedbackTypeToShow', null),
            E(
                this,
                'showFeedbackModalDebounced',
                a().debounce((e) => {
                    null != this.feedbackTypeToShow && (A(this.feedbackTypeToShow), (this.feedbackTypeToShow = null), e());
                }, f)
            );
    }
}
