var r,
    i = n(47120);
var a = n(789020);
var o = n(724458);
var s = n(442837),
    l = n(570140),
    u = n(700785),
    c = n(592125),
    d = n(131951),
    _ = n(19780),
    E = n(944486),
    f = n(981631),
    h = n(65154);
function p(e, t, n) {
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
let m = new Map(),
    I = null,
    T = null,
    g = null;
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT,
        t = m.get(e);
    return null == t && ((t = new Map()), m.set(e, t)), t;
}
function A(e, t) {
    let n = m.get(e);
    if (null == n) return !1;
    let r = n.delete(t);
    return 0 === n.size && m.delete(e), r;
}
function v(e, t, n) {
    var r, i, a;
    return ((null !== (a = null === (i = m.get(e)) || void 0 === i ? void 0 : null === (r = i.get(t)) || void 0 === r ? void 0 : r.flags) && void 0 !== a ? a : h.Dg.NONE) & n) === n;
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = m.get(e);
    if (null == r) return !1;
    for (let [e, { flags: i }] of r) {
        if (!n || e !== I) {
            if ((i & t) === t) return !0;
        }
    }
    return !1;
}
function O(e, t, n) {
    var r, i;
    let a = S(e),
        o = a.get(t),
        s = null !== (r = null == o ? void 0 : o.flags) && void 0 !== r ? r : 0;
    if (0 === s && 0 === n) return !1;
    if (0 === n) a.delete(t), 0 === a.size && m.delete(e);
    else {
        let e = null !== (i = null == o ? void 0 : o.since) && void 0 !== i ? i : null,
            r = (s & h.Dg.VOICE) === h.Dg.VOICE,
            l = (n & h.Dg.VOICE) === h.Dg.VOICE;
        r !== l && (e = l ? Date.now() : null),
            a.set(t, {
                flags: n,
                since: e
            });
    }
    return !0;
}
function R(e) {
    let { user: t, sessionId: n } = e;
    (I = t.id), (T = n), (g = null);
}
function C(e) {
    let { context: t, userId: n, speakingFlags: r } = e;
    if ((r & h.Dg.PRIORITY) === h.Dg.PRIORITY) {
        let e = c.Z.getChannel(E.Z.getVoiceChannelId());
        null != e &&
        u.BT({
            permission: f.Plq.PRIORITY_SPEAKER,
            user: n,
            context: e
        })
            ? d.Z.setCanHavePriority(n, !0)
            : (d.Z.setCanHavePriority(n, !1), (r &= ~h.Dg.PRIORITY));
    }
    return O(t, n, r);
}
function y(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, channelId: r, sessionId: i } = t,
            a = !1,
            o = g;
        return n === I && i === T && (g = null != r ? r : null), o !== g && (a = m.delete(h.Yn.DEFAULT) || a), null == r ? (a = n === I && i === T ? m.delete(h.Yn.DEFAULT) || a : A(h.Yn.DEFAULT, n) || a) : n === I && i !== T ? (a = m.delete(h.Yn.DEFAULT) || a) : n !== I && r !== _.Z.getChannelId() && (a = A(h.Yn.DEFAULT, n) || a), a || e;
    }, !1);
}
class L extends (r = s.ZP.Store) {
    initialize() {
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(_.Z);
    }
    getSpeakingDuration(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.Yn.DEFAULT,
            a = null === (r = m.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.since;
        return null != a ? t - a : 0;
    }
    getSpeakers() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return Array.from(null !== (t = null === (e = m.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter((e) => v(n, e, h.Dg.VOICE));
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
        return v(t, e, h.Dg.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
        return v(t, e, h.Dg.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
        return v(t, e, h.Dg.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return N(e, h.Dg.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return null != I && this.isSpeaking(I, e);
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return N(e, h.Dg.VOICE | h.Dg.PRIORITY);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return null != I && this.isPrioritySpeaker(I, e) && this.isSpeaking(I, e);
    }
}
p(L, 'displayName', 'SpeakingStore'),
    (t.Z = new L(l.Z, {
        CONNECTION_OPEN: R,
        OVERLAY_INITIALIZE: R,
        SPEAKING: C,
        VOICE_STATE_UPDATES: y
    }));
