var i,
    a = r(392711),
    s = r.n(a),
    o = r(442837),
    l = r(544891),
    u = r(570140),
    c = r(592125),
    d = r(944486),
    f = r(914010),
    _ = r(981631);
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
let p = {},
    m = {};
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Z.getChannelId(),
        r = c.Z.getChannel(n);
    if (null != r && null == r.getGuildId() && null != n && (null == p[n] || e)) {
        var i;
        return (
            (p[n] =
                null !== (i = p[n]) && void 0 !== i
                    ? i
                    : {
                          channelId: n,
                          ringing: []
                      }),
            u.Z.dispatch({
                type: 'CALL_CONNECT',
                channelId: n
            }),
            !0
        );
    }
    return !1;
}
function E() {
    return g(!0);
}
function v(e) {
    let { callStoreInternalState: n } = e;
    (p = { ...n.calls }), (m = { ...n.enqueuedRings });
}
function I() {
    (p = {}), (m = {});
}
function T() {
    return g(!0);
}
function b(e) {
    let { channelId: n } = e;
    return g(!1, n);
}
function y(e) {
    let { channel: n } = e;
    if ((null != m[n.id] && delete m[n.id], null == p[n.id])) return !1;
    delete p[n.id];
}
function S(e) {
    let { channelId: n, messageId: r, region: i, ringing: a } = e;
    if (
        ((p[n] = {
            channelId: n,
            messageId: r,
            region: i,
            ringing: a,
            unavailable: !1,
            regionUpdated: !1
        }),
        null != m[n])
    ) {
        let e = m[n];
        delete m[n],
            1 !== e.indexOf('all') && (e = null),
            l.tn.post({
                url: _.ANM.CALL_RING(n),
                body: { recipients: e },
                oldFormErrors: !0,
                rejectWithError: !0
            });
    }
}
function A(e) {
    var n;
    let { channelId: r, recipients: i } = e;
    m[r] = s().union(null !== (n = m[r]) && void 0 !== n ? n : [], null != i ? i : ['all']);
}
function N(e) {
    let { channelId: n, messageId: r, region: i, ringing: a } = e,
        s = p[n],
        o = null != s && (s.regionUpdated || s.region !== i);
    p[n] = {
        ...p[n],
        messageId: r,
        region: i,
        ringing: a,
        regionUpdated: o
    };
}
function C(e) {
    let { channelId: n, unavailable: r } = e,
        i = p[n];
    !0 === r && null != i
        ? (p[n] = {
              ...i,
              unavailable: r
          })
        : (p[n] = {
              channelId: n,
              ringing: [],
              messageId: null,
              region: null,
              regionUpdated: !1,
              unavailable: r
          }),
        null != m[n] && delete m[n];
}
function R(e) {
    let { channelId: n } = e;
    null == n && (m = {});
}
class O extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, d.Z);
    }
    getCall(e) {
        return p[e];
    }
    getCalls() {
        return Object.values(p);
    }
    getMessageId(e) {
        let n = this.getCall(e);
        return null != n ? n.messageId : null;
    }
    isCallActive(e, n) {
        let r = p[e];
        return null != r && !r.unavailable && (null != n ? r.messageId === n : null != r.region);
    }
    isCallUnavailable(e) {
        let n = p[e];
        return null != n && n.unavailable;
    }
    getInternalState() {
        return {
            calls: p,
            enqueuedRings: m
        };
    }
}
h(O, 'displayName', 'CallStore'),
    (n.Z = new O(u.Z, {
        CONNECTION_OPEN: E,
        CONNECTION_CLOSED: I,
        OVERLAY_INITIALIZE: v,
        CONNECTION_RESUMED: T,
        CHANNEL_SELECT: b,
        CHANNEL_DELETE: y,
        CALL_CREATE: S,
        CALL_UPDATE: N,
        CALL_DELETE: C,
        CALL_ENQUEUE_RING: A,
        VOICE_CHANNEL_SELECT: R
    }));
