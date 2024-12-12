var i = r(47120);
var a = r(70780),
    s = r(147913),
    o = r(710845),
    l = r(131951),
    u = r(936349),
    c = r(70956),
    d = r(358085);
function f(e, n, r) {
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
let _ = 1 * c.Z.Millis.SECOND,
    h = 30 * c.Z.Millis.SECOND,
    p = 360,
    m = new o.Z('RTCLatencyTestManager');
m.enableNativeLogger(!0);
class g extends s.Z {
    _terminate() {
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout);
    }
    constructor(...e) {
        super(...e),
            f(this, 'refetchTimeout', void 0),
            f(this, 'actions', { POST_CONNECTION_OPEN: () => this._handleConnectionOpen() }),
            f(this, '_handleTestRegionsResponse', (e) => {
                let n = e.map((e) => e.region);
                u.Z.shouldPerformLatencyTest(n)
                    ? l.Z.getMediaEngine()
                          .rankRtcRegions(e)
                          .then((e) => {
                              m.verbose('RTC region latency test completed, ranked regions are: ', e), (0, a.o)(e, n);
                          })
                          .catch((e) => m.warn(e))
                    : m.verbose('RTC cached ranked preferred regions are '.concat(u.Z.getPreferredRegions()));
            }),
            f(this, '_fetchAndScheduleRefetch', () => {
                (0, a.J)()
                    .then((e) => this._handleTestRegionsResponse(e.body))
                    .catch((e) => m.warn(e)),
                    (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, p * c.Z.Millis.MINUTE));
            }),
            f(this, '_handleConnectionOpen', () => {
                if (d.isPlatformEmbedded && !__OVERLAY__) {
                    let e = Math.floor(_ + Math.random() * h);
                    null != this.refetchTimeout && clearTimeout(this.refetchTimeout), (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e));
                }
            });
    }
}
n.Z = new g();
