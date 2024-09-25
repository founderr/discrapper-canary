var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(544891),
    l = n(570140),
    u = n(592125),
    c = n(944486),
    d = n(914010),
    _ = n(981631);
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
let f = {},
    h = {};
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z.getChannelId(),
        n = u.Z.getChannel(t);
    if (null != n && null == n.getGuildId() && null != t && (null == f[t] || e)) {
        var r;
        return (
            (f[t] =
                null !== (r = f[t]) && void 0 !== r
                    ? r
                    : {
                          channelId: t,
                          ringing: []
                      }),
            l.Z.dispatch({
                type: 'CALL_CONNECT',
                channelId: t
            }),
            !0
        );
    }
    return !1;
}
function m() {
    return p(!0);
}
function I(e) {
    let { callStoreInternalState: t } = e;
    (f = { ...t.calls }), (h = { ...t.enqueuedRings });
}
function T() {
    (f = {}), (h = {});
}
function g() {
    return p(!0);
}
function S(e) {
    let { channelId: t } = e;
    return p(!1, t);
}
function A(e) {
    let { channel: t } = e;
    if ((null != h[t.id] && delete h[t.id], null == f[t.id])) return !1;
    delete f[t.id];
}
function v(e) {
    let { channelId: t, messageId: n, region: r, ringing: i } = e;
    if (
        ((f[t] = {
            channelId: t,
            messageId: n,
            region: r,
            ringing: i,
            unavailable: !1,
            regionUpdated: !1
        }),
        null != h[t])
    ) {
        let e = h[t];
        delete h[t],
            1 !== e.indexOf('all') && (e = null),
            s.tn.post({
                url: _.ANM.CALL_RING(t),
                body: { recipients: e },
                oldFormErrors: !0
            });
    }
}
function N(e) {
    var t;
    let { channelId: n, recipients: r } = e;
    h[n] = a().union(null !== (t = h[n]) && void 0 !== t ? t : [], null != r ? r : ['all']);
}
function O(e) {
    let { channelId: t, messageId: n, region: r, ringing: i } = e,
        a = f[t],
        o = null != a && (a.regionUpdated || a.region !== r);
    f[t] = {
        ...f[t],
        messageId: n,
        region: r,
        ringing: i,
        regionUpdated: o
    };
}
function R(e) {
    let { channelId: t, unavailable: n } = e,
        r = f[t];
    !0 === n && null != r
        ? (f[t] = {
              ...r,
              unavailable: n
          })
        : (f[t] = {
              channelId: t,
              ringing: [],
              messageId: null,
              region: null,
              regionUpdated: !1,
              unavailable: n
          }),
        null != h[t] && delete h[t];
}
function C(e) {
    let { channelId: t } = e;
    null == t && (h = {});
}
class y extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z);
    }
    getCall(e) {
        return f[e];
    }
    getCalls() {
        return Object.values(f);
    }
    getMessageId(e) {
        let t = this.getCall(e);
        return null != t ? t.messageId : null;
    }
    isCallActive(e, t) {
        let n = f[e];
        return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region);
    }
    isCallUnavailable(e) {
        let t = f[e];
        return null != t && t.unavailable;
    }
    getInternalState() {
        return {
            calls: f,
            enqueuedRings: h
        };
    }
}
E(y, 'displayName', 'CallStore'),
    (t.Z = new y(l.Z, {
        CONNECTION_OPEN: m,
        CONNECTION_CLOSED: T,
        OVERLAY_INITIALIZE: I,
        CONNECTION_RESUMED: g,
        CHANNEL_SELECT: S,
        CHANNEL_DELETE: A,
        CALL_CREATE: v,
        CALL_UPDATE: O,
        CALL_DELETE: R,
        CALL_ENQUEUE_RING: N,
        VOICE_CHANNEL_SELECT: C
    }));
