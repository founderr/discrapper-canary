var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(544891),
    d = n(570140),
    f = n(592125),
    _ = n(944486),
    p = n(914010),
    h = n(981631);
let m = {},
    g = {};
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Z.getChannelId(),
        n = f.Z.getChannel(t);
    if (null != n && null == n.getGuildId() && null != t && (null == m[t] || e)) {
        var r;
        return (
            (m[t] =
                null !== (r = m[t]) && void 0 !== r
                    ? r
                    : {
                          channelId: t,
                          ringing: []
                      }),
            d.Z.dispatch({
                type: 'CALL_CONNECT',
                channelId: t
            }),
            !0
        );
    }
    return !1;
}
class v extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, _.Z);
    }
    getCall(e) {
        return m[e];
    }
    getCalls() {
        return Object.values(m);
    }
    getMessageId(e) {
        let t = this.getCall(e);
        return null != t ? t.messageId : null;
    }
    isCallActive(e, t) {
        let n = m[e];
        return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region);
    }
    isCallUnavailable(e) {
        let t = m[e];
        return null != t && t.unavailable;
    }
    getInternalState() {
        return {
            calls: m,
            enqueuedRings: g
        };
    }
}
(a = 'CallStore'),
    (i = 'displayName') in (r = v)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new v(d.Z, {
        CONNECTION_OPEN: function () {
            return E(!0);
        },
        CONNECTION_CLOSED: function () {
            (m = {}), (g = {});
        },
        OVERLAY_INITIALIZE: function (e) {
            let { callStoreInternalState: t } = e;
            (m = { ...t.calls }), (g = { ...t.enqueuedRings });
        },
        CONNECTION_RESUMED: function () {
            return E(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return E(!1, t);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            if ((null != g[t.id] && delete g[t.id], null == m[t.id])) return !1;
            delete m[t.id];
        },
        CALL_CREATE: function (e) {
            let { channelId: t, messageId: n, region: r, ringing: i } = e;
            if (
                ((m[t] = {
                    channelId: t,
                    messageId: n,
                    region: r,
                    ringing: i,
                    unavailable: !1,
                    regionUpdated: !1
                }),
                null != g[t])
            ) {
                let e = g[t];
                delete g[t],
                    1 !== e.indexOf('all') && (e = null),
                    c.tn.post({
                        url: h.ANM.CALL_RING(t),
                        body: { recipients: e },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    });
            }
        },
        CALL_UPDATE: function (e) {
            let { channelId: t, messageId: n, region: r, ringing: i } = e,
                a = m[t],
                s = null != a && (a.regionUpdated || a.region !== r);
            m[t] = {
                ...m[t],
                messageId: n,
                region: r,
                ringing: i,
                regionUpdated: s
            };
        },
        CALL_DELETE: function (e) {
            let { channelId: t, unavailable: n } = e,
                r = m[t];
            !0 === n && null != r
                ? (m[t] = {
                      ...r,
                      unavailable: n
                  })
                : (m[t] = {
                      channelId: t,
                      ringing: [],
                      messageId: null,
                      region: null,
                      regionUpdated: !1,
                      unavailable: n
                  }),
                null != g[t] && delete g[t];
        },
        CALL_ENQUEUE_RING: function (e) {
            var t;
            let { channelId: n, recipients: r } = e;
            g[n] = l().union(null !== (t = g[n]) && void 0 !== t ? t : [], null != r ? r : ['all']);
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            null == t && (g = {});
        }
    }));
