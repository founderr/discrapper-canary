let r, i;
var a,
    o = n(47120);
var s = n(724458);
var l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    _ = n(189786),
    E = n(981631),
    f = n(354459);
function h(e, t, n) {
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
let p = 0,
    m = 0,
    I = {},
    T = new Set(),
    g = new Map(),
    S = {},
    A = {},
    v = {},
    N = {};
function O(e, t) {
    return ''.concat(e, ':').concat(t);
}
function R(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function C(e) {
    var t;
    let n = null !== (t = I[E.ME]) && void 0 !== t ? t : {},
        r = {};
    u().each(n, (t, n) => {
        t.channelId !== e && (r[n] = t);
    }),
        (I[E.ME] = r);
}
function y(e) {
    var t;
    return null !== (t = g.get(e)) && void 0 !== t ? t : new Set();
}
function b(e, t) {
    let n = y(e);
    if (!n.has(t)) (n = new Set(n)).add(t), g.set(e, n);
}
function L(e, t) {
    let n = y(e);
    if (!!n.has(t)) (n = new Set(n)).delete(t), 0 === n.size ? g.delete(e) : g.set(e, n);
}
function D(e, t, n) {
    let r = R(I, null != e ? e : E.ME),
        i = r[t],
        a = n(i);
    return i === a ? [!1, a, i] : (null != i && (delete r[t], null != i.channelId && (delete R(S, i.channelId)[t], delete R(A, i.channelId)[t]), null != i.sessionId && delete R(v, t)[i.sessionId], L(null != e ? e : E.ME, t)), null != a && ((r[t] = a), null != a.channelId && ((R(S, a.channelId)[t] = a), a.selfVideo && ((R(A, a.channelId)[t] = a), b(null != e ? e : E.ME, t))), null != a.sessionId && (R(v, t)[a.sessionId] = a)), [!0, a, i]);
}
function M(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let [n, r, a] = w(t.guildId, t);
        return n ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (p += 1), m++, !0) : e;
    }, !1);
}
function P(e) {
    let t = !1;
    for (let n of e.voiceStates) {
        let [r] = w(e.guildId, n);
        t = t || r;
    }
    for (let n of e.removedVoiceStateUsers) D(e.guildId, n, () => null), (t = !0);
    return t && m++, t;
}
function U(e) {
    let { userId: t, channelId: n, platform: r } = e;
    N[O(t, n)] = r;
}
function w(e, t) {
    return D(e, t.userId, (e) => {
        if (null == t.channelId) return null;
        {
            let n = {
                channelId: t.channelId,
                deaf: t.deaf,
                mute: t.mute,
                requestToSpeakTimestamp: t.requestToSpeakTimestamp,
                selfDeaf: t.selfDeaf,
                selfMute: t.selfMute,
                selfStream: t.selfStream,
                selfVideo: t.selfVideo,
                sessionId: t.sessionId,
                suppress: t.suppress,
                userId: t.userId,
                discoverable: t.discoverable
            };
            return null != e ? e.merge(n) : new _.Z(n);
        }
    });
}
function x(e) {
    let { guildId: t, channelId: n } = e,
        [i] = D(t, r, (e) => (null == e ? void 0 : e.set('channelId', n)));
    return i;
}
function G(e) {
    let { user: t, sessionId: n } = e,
        a = null != r && r !== t.id;
    return a && ((I = {}), (S = {}), (v = {}), (A = {}), g.clear()), (r = t.id), (i = n), a;
}
function k() {
    (I = {}), (S = {}), (v = {}), (A = {}), g.clear();
}
function B(e) {
    let { voiceStates: t, user: n, sessionId: a } = e;
    for (let [e, n] of ((I = {}), (S = {}), (v = {}), (A = {}), Object.entries(t))) for (let [t, r] of Object.entries(n)) D(e, t, () => new _.Z(r));
    (r = n.id), (i = a);
}
function F(e) {
    let { guild: t } = e;
    u().forEach(I[t.id], (e) => {
        D(t.id, e.userId, () => null);
    }),
        delete I[t.id];
}
function Z(e) {
    let { channel: t } = e;
    C(t.id);
}
function V(e) {
    let { channelId: t } = e;
    C(t);
}
class H extends (a = c.ZP.Store) {
    getAllVoiceStates() {
        return I;
    }
    getVoiceStateVersion() {
        return m;
    }
    getVoiceStates(e) {
        return R(I, null != e ? e : E.ME);
    }
    getVoiceStatesForChannel(e) {
        return R(S, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return R(A, e);
    }
    getVoiceState(e, t) {
        return this.getVoiceStates(e)[t];
    }
    getDiscoverableVoiceState(e, t) {
        let n = this.getVoiceState(e, t);
        return null == n || !1 === n.discoverable ? null : n;
    }
    getVoiceStateForChannel(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        return null === (t = R(S, e)) || void 0 === t ? void 0 : t[n];
    }
    getVoiceStateForUser(e) {
        return Object.values(R(v, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(R(v, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        var n;
        return null != t ? (null === (n = R(v, e)) || void 0 === n ? void 0 : n[t]) : null;
    }
    getUserVoiceChannelId(e, t) {
        var n;
        return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId;
    }
    getCurrentClientVoiceChannelId(e) {
        let t = this.getVoiceState(e, r);
        return null != t && null != i && t.sessionId === i ? t.channelId : null;
    }
    getUsersWithVideo(e) {
        var t;
        return null !== (t = g.get(e)) && void 0 !== t ? t : T;
    }
    isCurrentClientInVoiceChannel() {
        var e;
        return null != i && (null === (e = v[r]) || void 0 === e ? void 0 : e[i]) != null;
    }
    isInChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        if (null == e) return !1;
        let n = this.getVoiceStateForChannel(e, t);
        return null != n && (t !== r || (null != i && n.sessionId === i));
    }
    hasVideo(e) {
        return Object.values(R(A, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        var n, a;
        let o = null != i && (null === (a = v[r]) || void 0 === a ? void 0 : null === (n = a[i]) || void 0 === n ? void 0 : n.channelId);
        return t === r && e === o ? f.wR.DESKTOP : N[O(t, e)];
    }
    get userHasBeenMovedVersion() {
        return p;
    }
}
h(H, 'displayName', 'VoiceStateStore'),
    (t.Z = new H(d.Z, {
        CONNECTION_OPEN: G,
        CONNECTION_OPEN_SUPPLEMENTAL: k,
        OVERLAY_INITIALIZE: B,
        VOICE_CHANNEL_SELECT: x,
        VOICE_STATE_UPDATES: M,
        GUILD_DELETE: F,
        GUILD_CREATE: F,
        CHANNEL_DELETE: Z,
        CALL_DELETE: V,
        PASSIVE_UPDATE_V2: P,
        RTC_CONNECTION_PLATFORM: U
    }));
