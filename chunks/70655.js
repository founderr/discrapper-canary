var r = n(47120);
var i = n(70780),
    a = n(147913),
    o = n(710845),
    s = n(131951),
    l = n(936349),
    u = n(70956),
    c = n(358085);
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
let _ = 1 * u.Z.Millis.SECOND,
    E = 30 * u.Z.Millis.SECOND,
    f = 360,
    h = new o.Z('RTCLatencyTestManager');
class p extends a.Z {
    _terminate() {
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout);
    }
    constructor(...e) {
        super(...e),
            d(this, 'refetchTimeout', void 0),
            d(this, 'actions', { POST_CONNECTION_OPEN: () => this._handleConnectionOpen() }),
            d(this, '_handleTestRegionsResponse', (e) => {
                let t = e.map((e) => e.region);
                l.Z.shouldPerformLatencyTest(t)
                    ? s.Z.getMediaEngine()
                          .rankRtcRegions(e)
                          .then((e) => {
                              h.verbose('RTC region latency test completed, ranked regions are: ', e), (0, i.o)(e, t);
                          })
                          .catch((e) => h.warn(e))
                    : h.verbose('RTC cached ranked preferred regions are '.concat(l.Z.getPreferredRegions()));
            }),
            d(this, '_fetchAndScheduleRefetch', () => {
                (0, i.J)()
                    .then((e) => this._handleTestRegionsResponse(e.body))
                    .catch((e) => h.warn(e)),
                    (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, f * u.Z.Millis.MINUTE));
            }),
            d(this, '_handleConnectionOpen', () => {
                if (c.isPlatformEmbedded && !__OVERLAY__) {
                    let e = Math.floor(_ + Math.random() * E);
                    null != this.refetchTimeout && clearTimeout(this.refetchTimeout), (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e));
                }
            });
    }
}
t.Z = new p();
