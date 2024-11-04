e(724458);
var i,
    s,
    r,
    o,
    l = e(442837),
    a = e(570140),
    c = e(981631);
let u = {};
function E(t) {
    let n = u[(t = null != t ? t : 'null')];
    return (
        null == n &&
            (n = u[t] =
                {
                    state: c.hes.DISCONNECTED,
                    quality: c.IE4.UNKNOWN,
                    pings: [],
                    hostname: null,
                    lossRate: null
                }),
        n
    );
}
function d(t, n, e) {
    let i = u[(t = null != t ? t : 'null')];
    return null != i ? n(i) : e;
}
class N extends (i = l.ZP.Store) {
    getConnectionState(t) {
        return d(
            t,
            (t) => {
                let { state: n } = t;
                return n;
            },
            c.hes.DISCONNECTED
        );
    }
    getQuality(t) {
        return d(
            t,
            (t) => {
                let { quality: n } = t;
                return n;
            },
            c.IE4.UNKNOWN
        );
    }
    getHostname(t) {
        return d(
            t,
            (t) => {
                let { hostname: n } = t;
                return n;
            },
            null
        );
    }
    getPings(t) {
        return d(
            t,
            (t) => {
                let { pings: n } = t;
                return n;
            },
            []
        );
    }
    getAveragePing(t) {
        let n = this.getPings(t);
        return 0 === n.length ? 0 : n.reduce((t, n) => t + n.value, 0) / n.length;
    }
    getLastPing(t) {
        var n;
        let e = this.getPings(t);
        if (0 === e.length) return 0;
        return null === (n = e[e.length - 1]) || void 0 === n ? void 0 : n.value;
    }
    getOutboundLossRate(t) {
        return d(
            t,
            (t) => {
                let { lossRate: n } = t;
                return n;
            },
            null
        );
    }
}
(o = 'OverlayRTCConnectionStore'),
    (r = 'displayName') in (s = N)
        ? Object.defineProperty(s, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = o),
    (n.Z = new N(a.Z, {
        OVERLAY_INITIALIZE: function (t) {
            u = t.rtcConnectionStates;
        },
        RTC_CONNECTION_STATE: function (t) {
            if (null != t.streamKey) return !1;
            let n = E(t.lobbyId);
            (n.state = t.state), (n.hostname = t.hostname);
        },
        RTC_CONNECTION_PING: function (t) {
            let n = E(t.lobbyId);
            (n.pings = t.pings), (n.quality = t.quality);
        },
        RTC_CONNECTION_LOSS_RATE: function (t) {
            E(t.lobbyId).lossRate = t.lossRate;
        }
    }));
