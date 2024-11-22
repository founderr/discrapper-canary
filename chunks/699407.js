let r, i, a;
n.d(t, {
    X: function () {
        return h;
    },
    l: function () {
        return E;
    }
}),
    n(177593),
    n(733860),
    n(47120),
    n(653041),
    n(17089);
var s,
    o = n(756647),
    l = n(442837),
    u = n(544891),
    c = n(761609);
function d(e, t, n) {
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
let f = 1500,
    _ = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : (e) => setImmediate(() => e()),
    p = new c.R(),
    h = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    m = [],
    g = () => Promise.resolve({ sessionId: void 0 }),
    E = (e) => {
        var t;
        let { dispatcher: n, actionHandler: s, getFingerprint: c, getSessionId: E = g, TRACKING_URL: v, drainTimeoutOverride: I, waitFor: b } = e;
        f = null != I ? I : 1500;
        function T() {
            return 0 !== m.length && (null != i ? null != r : null != c());
        }
        function S() {
            null == a && T() && (a = _(y, { timeout: f }));
        }
        function y() {
            if (((a = null), !T())) return;
            let e = m.slice();
            (m = []),
                A(e).then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null === (t = e.resolve) || void 0 === t || t.call(e);
                        });
                    },
                    (t) => {
                        m.unshift(...e);
                        let { message: n } = t.body || t;
                        console.warn('[AnalyticsTrackingStore] Track:', n);
                    }
                );
        }
        function A(e) {
            let t = Date.now(),
                n = e.map((e) => ({
                    ...e,
                    properties: {
                        ...e.properties,
                        client_send_timestamp: t
                    }
                }));
            return u.tn.post({
                url: v,
                body: {
                    token: r,
                    events: n
                },
                retries: 3,
                rejectWithError: !1
            });
        }
        (h.handleConnectionOpen = function (e) {
            let { analyticsToken: t, user: n } = e;
            return null != t && (r = t), null != n.id && (i = n.id), S(), !1;
        }),
            (h.handleConnectionClosed = function () {
                return y(), (r = null), (i = null), !1;
            }),
            (h.handleFingerprint = function () {
                return y(), !1;
            }),
            (h.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: a, resolve: s } = e;
                return (
                    E().then((e) => {
                        let { sessionId: l } = e,
                            u = {
                                type: t,
                                fingerprint: a,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: l,
                                    ...n
                                },
                                resolve: s
                            },
                            d = (function (e) {
                                if (null != i) return i;
                                let t = e.fingerprint || c();
                                return null != t ? (0, o.s)(t) : null;
                            })(u);
                        null != d && (u.properties.client_uuid = p.generate(d)), m.push(u);
                        m.length > 10000 && (m = m.slice(-10000)), r ? y() : S();
                    }),
                    !1
                );
            });
        class N extends (t = l.ZP.Store) {
            initialize() {
                null != b && this.waitFor(...b);
            }
            constructor(...e) {
                super(...e), d(this, 'submitEventsImmediately', A);
            }
        }
        return d(N, 'displayName', 'AnalyticsTrackingStore'), new N(n, s);
    };
