let r, i, a, o;
var s,
    l = n(47120);
var u = n(653041);
var c = n(724458);
var d = n(442837),
    _ = n(570140),
    E = n(258609),
    f = n(594190),
    h = n(569545),
    p = n(382182),
    m = n(139656),
    I = n(855403),
    T = n(314897),
    g = n(592125),
    S = n(430824),
    A = n(131951),
    v = n(496675),
    N = n(19780),
    O = n(944486),
    R = n(979651),
    C = n(981631),
    y = n(70722);
function L(e, t, n) {
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
let b = null,
    D = {},
    M = null;
function P() {
    (r = new Map()), (i = {}), (a = {}), (o = {}), (D = {});
}
function U(e) {
    var t;
    null == i[e.ownerId] && (i[e.ownerId] = {}), (i[e.ownerId][null !== (t = e.guildId) && void 0 !== t ? t : C.kod] = e);
}
function w(e, t) {
    var n;
    let r = null != t ? t : C.kod;
    return (null === (n = i[e]) || void 0 === n ? void 0 : n[r]) != null && (delete i[e][r], !0);
}
function x(e) {
    r.delete(e);
}
function G() {
    let e = [];
    for (let t in i) {
        let n = i[t];
        for (let r in n) e.push(i[t][r]);
    }
    return e;
}
function k(e) {
    let { applicationStreamState: t } = e;
    (i = t.streamsByUserAndGuild), (r = new Map(t.activeStreams)), (a = t.rtcStreams), (o = t.streamerActiveStreamMetadatas);
}
function B(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, guildId: r, channelId: i, sessionId: a, selfStream: o, discoverable: s } = t;
        if (o && null != i)
            return (
                U({
                    streamType: null != r ? y.lo.GUILD : y.lo.CALL,
                    ownerId: n,
                    guildId: r,
                    channelId: i,
                    discoverable: s
                }),
                !0
            );
        {
            let t = T.default.getSessionId();
            return n === T.default.getId() && a !== t && null != N.Z.getChannelId() ? e : w(n, r) || e;
        }
    }, !1);
}
function F(e) {
    let { streamKey: t } = e,
        n = (0, h.my)(t);
    r.delete(t),
        r.set(t, {
            ...n,
            state: C.jm8.CONNECTING
        }),
        n.ownerId === T.default.getId() && (D[n.channelId] = !1);
}
function Z(e) {
    var t;
    let { streamType: n, guildId: i, channelId: a, pid: s, sourceName: l, sourceId: u, previewDisabled: c } = e,
        d = (0, h.V9)({
            streamType: n,
            guildId: i,
            channelId: a,
            ownerId: T.default.getId()
        }),
        _ = null !== (t = null != s ? f.ZP.getGameForPID(s) : null != u ? f.ZP.getRunningGames().find((e) => (0, I.Z)(u, e.windowHandle)) : null) && void 0 !== t ? t : null;
    (o[d] = {
        id: null == _ ? void 0 : _.id,
        pid: s,
        sourceName: l,
        previewDisabled: c
    }),
        r.delete(d),
        r.set(d, {
            streamType: n,
            guildId: i,
            channelId: a,
            ownerId: T.default.getId(),
            state: C.jm8.CONNECTING
        });
}
function V(e) {
    let { streamKey: t } = e;
    o[t] = null;
}
function H(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: o } = e;
    r.set(t, {
        ...(0, h.my)(t),
        state: o ? C.jm8.PAUSED : C.jm8.ACTIVE
    }),
        (a[t] = {
            streamKey: t,
            region: n,
            viewerIds: i
        });
}
function Y(e) {
    let { streamKey: t } = e;
    x(t);
}
function j(e) {
    let { id: t, channelId: n } = e;
    if (
        ((b = t),
        Array.from(r.values()).forEach((e) => {
            (0, h.V9)(e) !== b && e.state === C.jm8.ENDED && x((0, h.V9)(e));
        }),
        null != t)
    )
        (0, h.DB)(t) && t.includes(T.default.getId()) && (D[n] = !1);
}
function W(e) {
    let { streamKey: t, unavailable: i, reason: o } = e;
    delete a[t];
    let s = r.get(t);
    if (null == s) return !1;
    let l = C.jm8.ENDED;
    if (i) l = C.jm8.RECONNECTING;
    else if (o === C.si2.UNAUTHORIZED) l = C.jm8.FAILED;
    else if (o === C.si2.SAFETY_GUILD_RATE_LIMITED) {
        let { guildId: e } = (0, h.my)(t);
        n
            .e('76731')
            .then(n.bind(n, 626892))
            .then((t) => {
                let { default: n } = t;
                n(e);
            }),
            (l = C.jm8.ENDED);
    }
    r.set(t, {
        ...s,
        state: l
    }),
        l === C.jm8.ENDED && b !== t && x(t);
}
function K(e) {
    let { streamKey: t } = e,
        n = r.get(t);
    if (null == n) return !1;
    r.set(t, {
        ...n,
        state: C.jm8.FAILED
    });
}
function z(e) {
    let { streamKey: t, state: n } = e;
    if (null == t) return !1;
    let i = r.get(t);
    if (null == i || i.state === C.jm8.ENDED) return !1;
    let a = i.state;
    switch (n) {
        case C.hes.DISCONNECTED:
            a = C.jm8.RECONNECTING;
            break;
        case C.hes.RTC_CONNECTED:
            a = C.jm8.ACTIVE;
    }
    if (a === i.state) return !1;
    r.set(t, {
        ...i,
        state: a
    });
}
function q(e) {
    let { channelId: t, selfStreamHidden: n } = e;
    (0, h.DB)(b) && (null == b ? void 0 : b.includes(T.default.getId())) && !1 === D[t] && !0 === n && (b = null), (D[t] = n);
}
function Q(e) {
    let { intent: t } = e;
    M = t;
}
function X(e, t) {
    let n = g.Z.getBasicChannel(t);
    return e === y.lo.CALL || (null != n && v.Z.canBasicChannel(C.S7T.VIEW_CHANNEL, n));
}
function $(e) {
    if (X(e.streamType, e.channelId)) return !0;
    let t = g.Z.getBasicChannel(e.channelId);
    return null != t && (0, p.p9)(t, R.Z, S.Z, v.Z, E.Z)[0];
}
P();
class J extends (s = d.ZP.Store) {
    initialize() {
        this.syncWith([v.Z], () => !0), this.waitFor(f.ZP, v.Z);
    }
    isSelfStreamHidden(e) {
        var t;
        return null !== (t = D[e]) && void 0 !== t && t;
    }
    getLastActiveStream() {
        var e;
        return (0, m.Z)(A.Z) ? (null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null) : null;
    }
    getAllActiveStreams() {
        return (0, m.Z)(A.Z) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, m.Z)(A.Z) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        var t;
        return (0, m.Z)(A.Z) ? (null !== (t = r.get(e)) && void 0 !== t ? t : null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        var t;
        if (!(0, m.Z)(A.Z) || null == e) return null;
        let n = (0, h.V9)(e);
        return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null;
    }
    getCurrentUserActiveStream() {
        let e = O.Z.getVoiceChannelId(),
            t = g.Z.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(T.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        var n;
        let r = this.getStreamForUser(e, t);
        return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find((t) => t.ownerId === e)) && void 0 !== n ? n : null;
    }
    getStreamerActiveStreamMetadata() {
        var e;
        let t = O.Z.getVoiceChannelId(),
            n = g.Z.getChannel(t);
        if (null == n) return null;
        let r = this.getActiveStreamForUser(T.default.getId(), n.getGuildId());
        return null == r ? null : null !== (e = o[(0, h.V9)(r)]) && void 0 !== e ? e : null;
    }
    getStreamerActiveStreamMetadataForStream(e) {
        var t;
        return null !== (t = o[e]) && void 0 !== t ? t : null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        var t;
        let n = o[e];
        return null !== (t = null == n ? void 0 : n.previewDisabled) && void 0 !== t && t;
    }
    getAnyStreamForUser(e) {
        var t;
        if (!(0, m.Z)(A.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => $(e))) && void 0 !== t ? t : null;
    }
    getAnyDiscoverableStreamForUser(e) {
        var t;
        if (!(0, m.Z)(A.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => $(e) && !1 !== e.discoverable)) && void 0 !== t ? t : null;
    }
    getStreamForUser(e, t) {
        var n;
        if (!(0, m.Z)(A.Z)) return null;
        let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : C.kod];
        return null != r && $(r) ? r : null;
    }
    getRTCStream(e) {
        var t;
        return (0, m.Z)(A.Z) ? (null !== (t = a[e]) && void 0 !== t ? t : null) : null;
    }
    getAllApplicationStreams() {
        return (0, m.Z)(A.Z) ? G().filter((e) => null != e && X(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, m.Z)(A.Z) ? G().filter((t) => null != t && t.channelId === e && X(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, m.Z)(A.Z)) return [];
        let t = null,
            n = null != (t = 'string' == typeof e ? e : (0, h.V9)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return M;
    }
    getState() {
        return (0, m.Z)(A.Z)
            ? {
                  activeStreams: Array.from(r.entries()),
                  streamsByUserAndGuild: i,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: o
              }
            : {
                  activeStreams: [],
                  streamsByUserAndGuild: {},
                  rtcStreams: {},
                  streamerActiveStreamMetadatas: {}
              };
    }
}
L(J, 'displayName', 'ApplicationStreamingStore'),
    (t.Z = new J(_.Z, {
        OVERLAY_INITIALIZE: k,
        VOICE_STATE_UPDATES: B,
        STREAM_WATCH: F,
        STREAM_START: Z,
        STREAM_STOP: V,
        STREAM_CREATE: H,
        STREAM_UPDATE: H,
        STREAM_TIMED_OUT: K,
        STREAM_DELETE: W,
        STREAM_CLOSE: Y,
        STREAM_UPDATE_SELF_HIDDEN: q,
        SET_STREAM_APP_INTENT: Q,
        RTC_CONNECTION_STATE: z,
        CHANNEL_RTC_SELECT_PARTICIPANT: j,
        CONNECTION_OPEN: P,
        CONNECTION_CLOSED: P,
        LOGOUT: P
    }));
