n.d(t, {
    J$: function () {
        return C;
    },
    Pz: function () {
        return T;
    },
    fZ: function () {
        return y;
    }
});
var r,
    i = n(47120);
var a = n(653041);
var o = n(442837),
    s = n(46973),
    l = n(570140),
    u = n(304680),
    c = n(131951),
    d = n(594174),
    _ = n(981631),
    E = n(65154);
function f(e, t, n) {
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
let h = C(E.Yn.DEFAULT, _._s_.TRANSPORT, 0),
    p = h,
    m = {},
    I = new Map(),
    T = {
        availableOutgoingBitrate: !0,
        bitrate: !0,
        bitrateTarget: !0,
        bytesReceived: !0,
        bytesSent: !0,
        encoderQualityPsnr: !0,
        encoderQualityVmaf: !0,
        encodeUsage: !0,
        frameRateDecode: !0,
        frameRateEncode: !0,
        frameRateInput: !0,
        frameRateNetwork: !0,
        frameRateRender: !0,
        inboundBitrateEstimate: !0,
        packetsLost: !0,
        packetsReceived: !0,
        packetsSent: !0,
        ping: !0
    },
    g = 600;
function S(e, t, n) {
    return ''.concat(e, ':').concat(t, ':').concat(n);
}
function A(e, t) {
    return ''.concat(e, ':').concat(t);
}
class v {
    static empty() {
        return new v({});
    }
    put(e, t, n, r) {
        if ('' === r) {
            let r = { ...this.state };
            return delete r[S(e, t, n)], new v(r);
        }
        return new v({
            [S(e, t, n)]: r,
            ...this.state
        });
    }
    get(e, t, n) {
        let r = this.state[S(e, t, n)];
        return null != r ? r : null;
    }
    constructor(e) {
        f(this, 'state', void 0), (this.state = e);
    }
}
let N = v.empty(),
    O = !1,
    R = null;
function C(e, t, n) {
    return ''.concat(e, ':').concat(t, ':').concat(n);
}
function y(e) {
    let [t, n] = e.split(':');
    return {
        context: t,
        section: n
    };
}
function b() {
    Object.values(E.Yn).forEach((e) => {
        m[e] = {};
    });
}
function L(e) {
    Object.values(E.Yn).forEach((t) => {
        let n = t;
        e.filter((e) => {
            let { connection: t } = e;
            return t.context === n;
        }).forEach((e, t) => {
            l.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_UPDATE',
                stats: e.stats,
                context: n,
                index: t,
                mediaEngineConnectionId: e.connection.mediaEngineConnectionId
            });
        });
    });
}
function D() {
    null != R && (R.destroy(), (R = null));
}
function M(e) {
    var t;
    p = null !== (t = e.section) && void 0 !== t ? t : h;
}
function P() {
    D();
}
function U(e) {
    null != e.channelId && (b(), I.clear());
}
function w(e) {
    if (null === e.streamId) {
        let t = A(e.userId, e.context);
        I.set(t, E.Z.NO_OVERRIDE);
    }
}
function x(e) {
    p = e.section;
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
        r = {};
    for (let [i, a] of Object.entries(e)) {
        let e = t[i];
        if (Array.isArray(a)) {
            if ('object' == typeof a[0]) {
                let t = Array.isArray(e) ? e : [],
                    o = (r[i] = []);
                for (let e = 0; e < a.length; e++) {
                    let r = t[e],
                        i = 'object' == typeof r ? r : {};
                    o.push(G(a[e], i, n));
                }
            } else r[i] = a;
        } else if ('object' == typeof a && null !== a) {
            let t = 'object' == typeof e && null !== e ? e : {};
            r[i] = G(a, t, n);
        } else if (i in T && 'number' == typeof a) {
            let t = (r[i] = Array.isArray(e) ? e : []);
            t.push({
                value: a,
                time: n
            }),
                t.length > g && t.shift();
        } else r[i] = a;
    }
    return r;
}
function k(e) {
    let { context: t, stats: n, index: r } = e,
        i = m[t];
    if (null != n) {
        let [e, a, o] = p.split(':');
        if (e === t && parseInt(o) === r && null != d.default.getUser(a)) {
            let {
                rtp: { inbound: e }
            } = n;
            !Object.keys(e).includes(a) && (p = h);
        }
        i[r] = G(n, i[r]);
    } else delete i[r];
}
function B(e) {
    u.gl();
}
function F(e) {
    let { path: t } = e,
        n = c.Z.getMediaEngine();
    if ((D(), !n.supports(E.AN.CONNECTION_REPLAY) || 0 === t.length)) return;
    let r = n.createReplayConnection(E.Yn.DEFAULT, t);
    null != r &&
        ((R = r),
        r.on(s.Sh.Video, (e, t, n, i, a) => {
            l.Z.dispatch({
                type: 'RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT',
                mediaEngineConnectionId: r.mediaEngineConnectionId,
                userId: e,
                videoSsrc: null != i ? i : 0,
                streamId: null != t ? t : ''
            });
        }),
        l.Z.wait(() => u.bA()));
}
function Z(e) {
    N = N.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
}
function V(e) {
    let { value: t } = e;
    O = t;
}
function H(e) {
    let { userId: t, context: n, quality: r } = e;
    I.set(A(t, n), r);
}
b();
class Y extends (r = o.ZP.Store) {
    getSection() {
        return p;
    }
    getStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.Yn.DEFAULT;
        return m[e][0];
    }
    getInboundStats(e, t) {
        var n, r;
        let i = null === (r = this.getAllStats(t)[0]) || void 0 === r ? void 0 : null === (n = r.rtp) || void 0 === n ? void 0 : n.inbound[e],
            a = null == i ? void 0 : i.find((e) => 'video' === e.type);
        return {
            codec: null == a ? void 0 : a.codec.name,
            resolution: null == a ? void 0 : a.resolution,
            bitrateEstimate: void 0
        };
    }
    getOutboundStats(e) {
        var t, n, r;
        let i;
        let a = this.getAllStats(e),
            o = null === (t = a[0]) || void 0 === t ? void 0 : t.transport,
            s = null === (r = a[0]) || void 0 === r ? void 0 : null === (n = r.rtp) || void 0 === n ? void 0 : n.outbound,
            l = null == s ? void 0 : s.find((e) => 'video' === e.type);
        return (
            Array.isArray(null == o ? void 0 : o.availableOutgoingBitrate) && o.availableOutgoingBitrate.length > 0 && (i = o.availableOutgoingBitrate[o.availableOutgoingBitrate.length - 1].value),
            {
                codec: null == l ? void 0 : l.codec.name,
                resolution: null == l ? void 0 : l.resolution,
                bitrateEstimate: i
            }
        );
    }
    getAllStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.Yn.DEFAULT;
        return Object.values(m[e]);
    }
    getVideoStreams() {
        return N;
    }
    shouldRecordNextConnection() {
        return O;
    }
    getSimulcastDebugOverride(e, t) {
        let n = A(e, t);
        return I.has(n) ? I.get(n) : E.Z.NO_OVERRIDE;
    }
}
f(Y, 'displayName', 'RTCDebugStore'),
    (t.ZP = new Y(l.Z, {
        RTC_DEBUG_MODAL_OPEN: M,
        RTC_DEBUG_MODAL_CLOSE: P,
        RTC_DEBUG_MODAL_SET_SECTION: x,
        RTC_DEBUG_MODAL_UPDATE: k,
        RTC_DEBUG_MODAL_OPEN_REPLAY: B,
        RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: F,
        RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: Z,
        RTC_DEBUG_SET_RECORDING_FLAG: V,
        RTC_DEBUG_SET_SIMULCAST_OVERRIDE: H,
        VOICE_CHANNEL_SELECT: U,
        RTC_CONNECTION_VIDEO: w
    })),
    c.Z.getMediaEngine().on(s.aB.ConnectionStats, L);
