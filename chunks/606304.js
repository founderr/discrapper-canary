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
    h = n(981631),
    p = n(65154);
let m = new Map(),
    g = null,
    E = null,
    v = null;
function I(e, t) {
    let n = m.get(e);
    if (null == n) return !1;
    let r = n.delete(t);
    return 0 === n.size && m.delete(e), r;
}
function S(e, t, n) {
    var r, i, a;
    return ((null !== (a = null === (i = m.get(e)) || void 0 === i ? void 0 : null === (r = i.get(t)) || void 0 === r ? void 0 : r.flags) && void 0 !== a ? a : p.Dg.NONE) & n) === n;
}
function b(e, t) {
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
function T(e) {
    let { user: t, sessionId: n } = e;
    (g = t.id), (E = n), (v = null);
}
class y extends (r = o.ZP.Store) {
    initialize() {
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(f.Z);
    }
    getSpeakingDuration(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Yn.DEFAULT,
            a = null === (r = m.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.since;
        return null != a ? t - a : 0;
    }
    getSpeakers() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
        return Array.from(null !== (t = null === (e = m.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter((e) => S(n, e, p.Dg.VOICE));
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
        return S(t, e, p.Dg.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
        return S(t, e, p.Dg.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
        return S(t, e, p.Dg.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
        return b(e, p.Dg.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
        return null != g && this.isSpeaking(g, e);
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
        return b(e, p.Dg.VOICE | p.Dg.PRIORITY);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
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
        CONNECTION_OPEN: T,
        OVERLAY_INITIALIZE: T,
        SPEAKING: function (e) {
            let { context: t, userId: n, speakingFlags: r } = e;
            if ((r & p.Dg.PRIORITY) === p.Dg.PRIORITY) {
                let e = c.Z.getChannel(_.Z.getVoiceChannelId());
                null != e &&
                u.BT({
                    permission: h.Plq.PRIORITY_SPEAKER,
                    user: n,
                    context: e
                })
                    ? d.Z.setCanHavePriority(n, !0)
                    : (d.Z.setCanHavePriority(n, !1), (r &= ~p.Dg.PRIORITY));
            }
            return (function (e, t, n) {
                var r, i;
                let a = (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT,
                            t = m.get(e);
                        return null == t && ((t = new Map()), m.set(e, t)), t;
                    })(e),
                    s = a.get(t),
                    o = null !== (r = null == s ? void 0 : s.flags) && void 0 !== r ? r : 0;
                if (0 === o && 0 === n) return !1;
                if (0 === n) a.delete(t), 0 === a.size && m.delete(e);
                else {
                    let e = null !== (i = null == s ? void 0 : s.since) && void 0 !== i ? i : null,
                        r = (o & p.Dg.VOICE) === p.Dg.VOICE,
                        l = (n & p.Dg.VOICE) === p.Dg.VOICE;
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
                return n === g && i === E && (v = null != r ? r : null), s !== v && (a = m.delete(p.Yn.DEFAULT) || a), null == r ? (a = n === g && i === E ? m.delete(p.Yn.DEFAULT) || a : I(p.Yn.DEFAULT, n) || a) : n === g && i !== E ? (a = m.delete(p.Yn.DEFAULT) || a) : n !== g && r !== f.Z.getChannelId() && (a = I(p.Yn.DEFAULT, n) || a), a || e;
            }, !1);
        }
    }));
