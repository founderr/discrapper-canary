let r, i;
var a,
    o = n(653041);
var s = n(512722),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(46973),
    E = n(570140),
    f = n(594190),
    h = n(444852),
    p = n(569545),
    m = n(687516),
    I = n(139656),
    T = n(358085),
    g = n(199902),
    S = n(314897),
    A = n(131951),
    v = n(158776),
    N = n(19780),
    O = n(981631),
    R = n(65154);
function C(e, t, n) {
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
let y = {},
    L = {},
    b = {},
    D = {},
    M = O.hVg.THEATRE,
    P = {},
    U = [],
    w = 30;
function x(e, t, n) {
    return (
        l()(null != r, 'Creating RTCConnection without session.'),
        new h.Z({
            sessionId: r,
            streamKey: e,
            serverId: t,
            initialLayout: M,
            analyticsContext: n,
            isStreamer: null != L[e],
            parentMediaSessionId: N.Z.getMediaSessionId()
        })
    );
}
function G() {
    c().forEach(P, (e, t) => {
        e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete P[t];
    });
}
function k(e) {
    c().forEach(P, (t, n) => {
        t.updateStats(e);
    }),
        e
            .filter((e) => {
                let { connection: t } = e;
                return t.context === R.Yn.STREAM;
            })
            .forEach((e) => {
                let { stats: t } = e;
                E.Z.dispatch({
                    type: 'STREAM_STATS_UPDATE',
                    stats: t
                });
            });
}
function B(e) {
    (r = e.sessionId), (i = null), G();
}
function F() {
    (r = null), (i = null), G();
}
function Z(e) {
    let { streamType: t, guildId: n, channelId: r, appContext: i, pid: a, sourceId: o } = e,
        s = (0, p.V9)({
            streamType: t,
            guildId: n,
            channelId: r,
            ownerId: S.default.getId()
        });
    if (
        ((y[s] = i),
        c().forEach(P, (e) => {
            let { analyticsContext: t } = e;
            t.setActionContext(i);
        }),
        (D[s] = o),
        (b[s] = a),
        null != a)
    ) {
        let e = f.ZP.getGameForPID(a);
        null != e &&
            (L[s] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor
            });
    }
}
function V(e) {
    let { appContext: t, streamKey: n } = e;
    (y[n] = t),
        c().forEach(P, (e) => {
            let { analyticsContext: n } = e;
            n.setActionContext(t);
        }),
        (D[n] = null),
        (b[n] = null);
}
function H(e) {
    let { streamKey: t, rtcServerId: n, region: r, viewerIds: a } = e;
    i = t;
    let o = P[t];
    if (null == o && null != n) {
        null == b[t] && (L[t] = null);
        let e = (0, p.my)(t);
        null == L[t] && null == D[t] && (L[t] = (0, m.L2)(e, v.Z));
        let i = new h.A({
            streamRegion: r,
            streamApplication: L[t],
            streamSourceType: ee(D[t]),
            actionContext: y[t],
            numViewers: null != a ? a.length : 0
        });
        (o = x(t, n, i)), (P[t] = o);
    }
    (U = []), A.Z.getMediaEngine().on(_.aB.ConnectionStats, k);
}
function Y(e) {
    let t = P[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function j(e) {
    let { stats: t } = e;
    if (null == t) return !1;
    U.push(t), U.length > w && U.shift();
}
function W(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = P[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function K(e) {
    let { streamKey: t } = e,
        n = P[t];
    if (null == n) return !1;
    t === i && ((i = null), A.Z.getMediaEngine().off(_.aB.ConnectionStats, k)), n.destroy('stream-end'), delete P[t];
}
function z(e) {
    let { layout: t } = e;
    (M = t), Object.values(P).forEach((e) => e.layoutChange(t));
}
function q() {
    return !0;
}
function Q(e) {
    return c().some(P, (t) => t === e.connection);
}
function X(e) {
    let { userId: t, context: n, quality: r } = e;
    c().forEach(P, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function $(e) {
    var t, n, r, i, a;
    let o = e.find((e) => 'video' === e.type);
    return null != o && 'video' === o.type
        ? {
              type: 'streamer',
              packetsSentOrReceived: null !== (n = o.packetsSent) && void 0 !== n ? n : 0,
              packetsLost: null !== (r = o.packetsLost) && void 0 !== r ? r : 0,
              frameRate: null !== (i = o.frameRateEncode) && void 0 !== i ? i : 0,
              resolution: null !== (a = null === (t = o.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0,
              bitrate: 0
          }
        : null;
}
function J(e) {
    var t, n, r, i, a, o;
    if (null == e) return null;
    let s = e.find((e) => 'video' === e.type);
    return null != s && 'video' === s.type
        ? {
              type: 'spectator',
              packetsSentOrReceived: null !== (n = s.packetsReceived) && void 0 !== n ? n : 0,
              packetsLost: null !== (r = s.packetsLost) && void 0 !== r ? r : 0,
              frameRate: null !== (i = s.frameRateDecode) && void 0 !== i ? i : 0,
              bitrate: null !== (a = s.bitrate) && void 0 !== a ? a : 0,
              resolution: null !== (o = null === (t = s.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== o ? o : 0
          }
        : null;
}
function ee(e) {
    var t, n, r;
    if (null == e) return 'unknown';
    if (T.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === 'Chrome') {
        if (e.startsWith('web-contents-media-stream:')) return 'tab';
        if (e.startsWith('window:')) return 'window';
        else if (e.startsWith('screen:')) return 'screen';
    } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === 'Firefox') return '' !== e ? 'window' : 'screen';
    else if ((null === (r = platform) || void 0 === r ? void 0 : r.name) === 'Safari') return 'window';
    return 'unknown';
}
class et extends (a = d.ZP.Store) {
    getActiveStreamKey() {
        return (0, I.Z)(A.Z) ? i : null;
    }
    getRTCConnections() {
        return P;
    }
    getAllActiveStreamKeys() {
        return Object.keys(P);
    }
    getRTCConnection(e) {
        return P[e];
    }
    getStatsHistory(e, t, n) {
        if (!(0, I.Z)(A.Z) || null == t) return null;
        if (n) {
            let n = g.Z.getActiveStreamForUser(t, e);
            if (null == n || 0 === g.Z.getViewerIds(n).length) return null;
        }
        return U.map((e) => (n ? $(e.rtp.outbound) : J(e.rtp.inbound[t])));
    }
    getQuality() {
        if (!(0, I.Z)(A.Z)) return O.IE4.UNKNOWN;
        let e = this.getActiveStreamKey(),
            t = null != e ? P[e] : null;
        return null != t ? t.quality : O.IE4.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = P[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = P[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = P[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return '';
        let t = P[e];
        return null != t ? (null != t.hostname ? t.hostname : '') : '';
    }
    getRegion(e) {
        if (null == e) return null;
        let t = P[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = P[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return D[e];
    }
    getUserIds(e) {
        let t = P[e];
        return null == t ? void 0 : t.getUserIds();
    }
    isUserConnected(e, t) {
        let n = P[e];
        return null == n ? void 0 : n.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = P[e];
        return null == t ? void 0 : t.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = P[e],
            r = null == n ? void 0 : n.getSecureFramesRosterMap();
        return null == r ? void 0 : r.get(t);
    }
}
C(et, 'displayName', 'StreamRTCConnectionStore'),
    (t.Z = new et(
        E.Z,
        !A.Z.isSupported() || __OVERLAY__
            ? {}
            : {
                  CONNECTION_OPEN: B,
                  CONNECTION_CLOSED: F,
                  RTC_CONNECTION_STATE: q,
                  RTC_CONNECTION_PING: q,
                  RTC_CONNECTION_LOSS_RATE: q,
                  RTC_CONNECTION_UPDATE_ID: Q,
                  RTC_CONNECTION_SECURE_FRAMES_UPDATE: q,
                  STREAM_START: Z,
                  STREAM_STOP: V,
                  STREAM_CREATE: H,
                  STREAM_SERVER_UPDATE: Y,
                  STREAM_UPDATE: W,
                  STREAM_DELETE: K,
                  STREAM_STATS_UPDATE: j,
                  STREAM_LAYOUT_UPDATE: z,
                  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: X
              }
    ));
