var i,
    a = r(47120);
var s = r(789020);
var o = r(724458);
var l = r(442837),
    u = r(570140),
    c = r(700785),
    d = r(592125),
    f = r(131951),
    _ = r(19780),
    h = r(944486),
    p = r(981631),
    m = r(65154);
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
let E = new Map(),
    v = null,
    I = null,
    T = null;
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yn.DEFAULT,
        n = E.get(e);
    return null == n && ((n = new Map()), E.set(e, n)), n;
}
function y(e, n) {
    let r = E.get(e);
    if (null == r) return !1;
    let i = r.delete(n);
    return 0 === r.size && E.delete(e), i;
}
function S(e, n, r) {
    var i, a, s;
    return ((null !== (s = null === (a = E.get(e)) || void 0 === a ? void 0 : null === (i = a.get(n)) || void 0 === i ? void 0 : i.flags) && void 0 !== s ? s : m.Dg.NONE) & r) === r;
}
function A(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = E.get(e);
    if (null == i) return !1;
    for (let [e, { flags: a }] of i) {
        if (!r || e !== v) {
            if ((a & n) === n) return !0;
        }
    }
    return !1;
}
function N(e, n, r) {
    var i, a;
    let s = b(e),
        o = s.get(n),
        l = null !== (i = null == o ? void 0 : o.flags) && void 0 !== i ? i : 0;
    if (0 === l && 0 === r) return !1;
    if (0 === r) s.delete(n), 0 === s.size && E.delete(e);
    else {
        let e = null !== (a = null == o ? void 0 : o.since) && void 0 !== a ? a : null,
            i = (l & m.Dg.VOICE) === m.Dg.VOICE,
            u = (r & m.Dg.VOICE) === m.Dg.VOICE;
        i !== u && (e = u ? Date.now() : null),
            s.set(n, {
                flags: r,
                since: e
            });
    }
    return !0;
}
function C(e) {
    let { user: n, sessionId: r } = e;
    (v = n.id), (I = r), (T = null);
}
function R(e) {
    let { context: n, userId: r, speakingFlags: i } = e;
    if ((i & m.Dg.PRIORITY) === m.Dg.PRIORITY) {
        let e = d.Z.getChannel(h.Z.getVoiceChannelId());
        null != e &&
        c.BT({
            permission: p.Plq.PRIORITY_SPEAKER,
            user: r,
            context: e
        })
            ? f.Z.setCanHavePriority(r, !0)
            : (f.Z.setCanHavePriority(r, !1), (i &= ~m.Dg.PRIORITY));
    }
    return N(n, r, i);
}
function O(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        let { userId: r, channelId: i, sessionId: a } = n,
            s = !1,
            o = T;
        return r === v && a === I && (T = null != i ? i : null), o !== T && (s = E.delete(m.Yn.DEFAULT) || s), null == i ? (s = r === v && a === I ? E.delete(m.Yn.DEFAULT) || s : y(m.Yn.DEFAULT, r) || s) : r === v && a !== I ? (s = E.delete(m.Yn.DEFAULT) || s) : r !== v && i !== _.Z.getChannelId() && (s = y(m.Yn.DEFAULT, r) || s), s || e;
    }, !1);
}
class D extends (i = l.ZP.Store) {
    initialize() {
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(_.Z);
    }
    getSpeakingDuration(e, n) {
        var r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Yn.DEFAULT,
            s = null === (i = E.get(a)) || void 0 === i ? void 0 : null === (r = i.get(e)) || void 0 === r ? void 0 : r.since;
        return null != s ? n - s : 0;
    }
    getSpeakers() {
        var e, n;
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yn.DEFAULT;
        return Array.from(null !== (n = null === (e = E.get(r)) || void 0 === e ? void 0 : e.keys()) && void 0 !== n ? n : []).filter((e) => S(r, e, m.Dg.VOICE));
    }
    isSpeaking(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT;
        return S(n, e, m.Dg.VOICE);
    }
    isPrioritySpeaker(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT;
        return S(n, e, m.Dg.PRIORITY);
    }
    isSoundSharing(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT;
        return S(n, e, m.Dg.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yn.DEFAULT;
        return A(e, m.Dg.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yn.DEFAULT;
        return null != v && this.isSpeaking(v, e);
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yn.DEFAULT;
        return A(e, m.Dg.VOICE | m.Dg.PRIORITY);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Yn.DEFAULT;
        return null != v && this.isPrioritySpeaker(v, e) && this.isSpeaking(v, e);
    }
}
g(D, 'displayName', 'SpeakingStore'),
    (n.Z = new D(u.Z, {
        CONNECTION_OPEN: C,
        OVERLAY_INITIALIZE: C,
        SPEAKING: R,
        VOICE_STATE_UPDATES: O
    }));
