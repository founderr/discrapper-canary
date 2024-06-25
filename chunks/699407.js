"use strict";
let i, r, s;
n.d(t, {
  X: function() {
    return T
  },
  l: function() {
    return S
  }
}), n(177593), n(733860), n(47120), n(653041), n(17089);
var o, a = n(756647),
  l = n(442837),
  u = n(544891),
  _ = n(761609);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = 1500,
  E = null !== (o = window.requestIdleCallback) && void 0 !== o ? o : e => setImmediate(() => e()),
  I = new _.R,
  T = {
    handleConnectionOpen: () => {},
    handleConnectionClosed: () => {},
    handleFingerprint: () => {},
    handleTrack: () => {}
  },
  h = [],
  f = () => Promise.resolve({
    sessionId: void 0
  }),
  S = e => {
    let {
      dispatcher: t,
      actionHandler: n,
      getFingerprint: o,
      getSessionId: _ = f,
      TRACKING_URL: S,
      drainTimeoutOverride: A,
      waitFor: N
    } = e;
    d = null != A ? A : 1500;

    function m() {
      return 0 !== h.length && (null != r ? null != i : null != o())
    }

    function O() {
      null == s && m() && (s = E(p, {
        timeout: d
      }))
    }

    function p() {
      if (s = null, !m()) return;
      let e = h.slice();
      h = [], R(e).then(() => {
        e.forEach(e => {
          var t;
          null === (t = e.resolve) || void 0 === t || t.call(e)
        })
      }, t => {
        h.unshift(...e);
        let {
          message: n
        } = t.body || t;
        console.warn("[AnalyticsTrackingStore] Track:", n)
      })
    }

    function R(e) {
      let t = Date.now(),
        n = e.map(e => ({
          ...e,
          properties: {
            ...e.properties,
            client_send_timestamp: t
          }
        }));
      return u.tn.post({
        url: S,
        body: {
          token: i,
          events: n
        },
        retries: 3
      })
    }
    T.handleConnectionOpen = function(e) {
      let {
        analyticsToken: t,
        user: n
      } = e;
      return null != t && (i = t), null != n.id && (r = n.id), O(), !1
    }, T.handleConnectionClosed = function() {
      return p(), i = null, r = null, !1
    }, T.handleFingerprint = function() {
      return p(), !1
    }, T.handleTrack = function(e) {
      let {
        event: t,
        properties: n,
        flush: i,
        fingerprint: s,
        resolve: l
      } = e;
      return _().then(e => {
        let {
          sessionId: u
        } = e, _ = {
          type: t,
          fingerprint: s,
          properties: {
            client_track_timestamp: Date.now(),
            client_heartbeat_session_id: u,
            ...n
          },
          resolve: l
        }, c = function(e) {
          if (null != r) return r;
          let t = e.fingerprint || o();
          return null != t ? (0, a.s)(t) : null
        }(_);
        null != c && (_.properties.client_uuid = I.generate(c)), h.push(_);
        h.length > 1e4 && (h = h.slice(-1e4)), i ? p() : O()
      }), !1
    };
    class g extends l.yh {
      initialize() {
        null != N && this.waitFor(...N)
      }
      constructor(...e) {
        super(...e), c(this, "submitEventsImmediately", R)
      }
    }
    return c(g, "displayName", "AnalyticsTrackingStore"), new g(t, n)
  }