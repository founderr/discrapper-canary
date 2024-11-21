n(47120), n(789020), n(724458);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(700785),
    c = n(592125),
    d = n(131951),
    f = n(19780),
    _ = n(944486),
    p = n(981631),
    h = n(65154);
let m = new Map(),
    g = null,
    E = null,
    v = null;
function b(e, t) {
    let n = m.get(e);
    if (null == n) return !1;
    let r = n.delete(t);
    return 0 === n.size && m.delete(e), r;
}
function I(e, t, n) {
    var r, i, a;
    return ((null !== (a = null === (i = m.get(e)) || void 0 === i ? void 0 : null === (r = i.get(t)) || void 0 === r ? void 0 : r.flags) && void 0 !== a ? a : h.Dg.NONE) & n) === n;
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = m.get(e);
    if (null == r) return !1;
    for (let [e, { flags: i }] of r) {
        if (!n || e !== g) {
            if ((i & t) === t) return !0;
        }
    }
    return !1;
}
function S(e) {
    let { user: t, sessionId: n } = e;
    (g = t.id), (E = n), (v = null);
}
class y extends (r = o.ZP.Store) {
    initialize() {
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(f.Z);
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
        return Array.from(null !== (t = null === (e = m.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter((e) => I(n, e, h.Dg.VOICE));
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
        return I(t, e, h.Dg.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
        return I(t, e, h.Dg.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
        return I(t, e, h.Dg.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return T(e, h.Dg.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return null != g && this.isSpeaking(g, e);
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return T(e, h.Dg.VOICE | h.Dg.PRIORITY);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
        return null != g && this.isPrioritySpeaker(g, e) && this.isSpeaking(g, e);
    }
}
(s = 'SpeakingStore'),
    (a = 'displayName') in (i = y)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new y(l.Z, {
        CONNECTION_OPEN: S,
        OVERLAY_INITIALIZE: S,
        SPEAKING: function (e) {
            let { context: t, userId: n, speakingFlags: r } = e;
            if ((r & h.Dg.PRIORITY) === h.Dg.PRIORITY) {
                let e = c.Z.getChannel(_.Z.getVoiceChannelId());
                null != e &&
                u.BT({
                    permission: p.Plq.PRIORITY_SPEAKER,
                    user: n,
                    context: e
                })
                    ? d.Z.setCanHavePriority(n, !0)
                    : (d.Z.setCanHavePriority(n, !1), (r &= ~h.Dg.PRIORITY));
            }
            return (function (e, t, n) {
                var r, i;
                let a = (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT,
                            t = m.get(e);
                        return null == t && ((t = new Map()), m.set(e, t)), t;
                    })(e),
                    s = a.get(t),
                    o = null !== (r = null == s ? void 0 : s.flags) && void 0 !== r ? r : 0;
                if (0 === o && 0 === n) return !1;
                if (0 === n) a.delete(t), 0 === a.size && m.delete(e);
                else {
                    let e = null !== (i = null == s ? void 0 : s.since) && void 0 !== i ? i : null,
                        r = (o & h.Dg.VOICE) === h.Dg.VOICE,
                        l = (n & h.Dg.VOICE) === h.Dg.VOICE;
                    r !== l && (e = l ? Date.now() : null),
                        a.set(t, {
                            flags: n,
                            since: e
                        });
                }
                return !0;
            })(t, n, r);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { userId: n, channelId: r, sessionId: i } = t,
                    a = !1,
                    s = v;
                return n === g && i === E && (v = null != r ? r : null), s !== v && (a = m.delete(h.Yn.DEFAULT) || a), null == r ? (a = n === g && i === E ? m.delete(h.Yn.DEFAULT) || a : b(h.Yn.DEFAULT, n) || a) : n === g && i !== E ? (a = m.delete(h.Yn.DEFAULT) || a) : n !== g && r !== f.Z.getChannelId() && (a = b(h.Yn.DEFAULT, n) || a), a || e;
            }, !1);
        }
    }));
