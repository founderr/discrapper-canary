let r, i, a;
n.d(t, {
    X: function () {
        return S;
    },
    l: function () {
        return N;
    }
});
var o,
    s = n(177593);
var l = n(733860);
var u = n(47120);
var c = n(653041);
n(17089);
var d = n(756647),
    _ = n(442837),
    E = n(544891),
    f = n(761609);
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
let p = 1500,
    m = 10000,
    I = 1500,
    T = null !== (o = window.requestIdleCallback) && void 0 !== o ? o : (e) => setImmediate(() => e()),
    g = new f.R(),
    S = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    A = [],
    v = () => Promise.resolve({ sessionId: void 0 }),
    N = (e) => {
        var t;
        let { dispatcher: n, actionHandler: o, getFingerprint: s, getSessionId: l = v, TRACKING_URL: u, drainTimeoutOverride: c, waitFor: f } = e;
        function N(e) {
            if (null != i) return i;
            let t = e.fingerprint || s();
            return null != t ? (0, d.s)(t) : null;
        }
        function O() {
            return 0 !== A.length && (null != i ? null != r : null != s());
        }
        function R() {
            null == a && O() && (a = T(C, { timeout: I }));
        }
        function C() {
            if (((a = null), !O())) return;
            let e = A.slice();
            (A = []),
                y(e).then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null === (t = e.resolve) || void 0 === t || t.call(e);
                        });
                    },
                    (t) => {
                        A.unshift(...e);
                        let { message: n } = t.body || t;
                        console.warn('[AnalyticsTrackingStore] Track:', n);
                    }
                );
        }
        function y(e) {
            let t = Date.now(),
                n = e.map((e) => ({
                    ...e,
                    properties: {
                        ...e.properties,
                        client_send_timestamp: t
                    }
                }));
            return E.tn.post({
                url: u,
                body: {
                    token: r,
                    events: n
                },
                retries: 3
            });
        }
        (I = null != c ? c : p),
            (S.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (r = t), null != n.id && (i = n.id), R(), !1;
            }),
            (S.handleConnectionClosed = function () {
                return C(), (r = null), (i = null), !1;
            }),
            (S.handleFingerprint = function () {
                return C(), !1;
            }),
            (S.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: i, resolve: a } = e;
                return (
                    l().then((e) => {
                        let { sessionId: o } = e,
                            s = {
                                type: t,
                                fingerprint: i,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: o,
                                    ...n
                                },
                                resolve: a
                            },
                            l = N(s);
                        null != l && (s.properties.client_uuid = g.generate(l)), A.push(s);
                        A.length > m && (A = A.slice(-m)), r ? C() : R();
                    }),
                    !1
                );
            });
        class L extends (t = _.ZP.Store) {
            initialize() {
                null != f && this.waitFor(...f);
            }
            constructor(...e) {
                super(...e), h(this, 'submitEventsImmediately', y);
            }
        }
        return h(L, 'displayName', 'AnalyticsTrackingStore'), new L(n, o);
    };
