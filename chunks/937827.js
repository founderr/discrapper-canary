"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("920842"),
  a = n("689988"),
  l = n("605250"),
  s = n("42887"),
  r = n("590401"),
  o = n("718517"),
  u = n("773336");
let d = 1 * o.default.Millis.SECOND,
  c = 30 * o.default.Millis.SECOND,
  f = new l.default("RTCLatencyTestManager");
class E extends a.default {
  _terminate() {
    null != this.refetchTimeout && clearTimeout(this.refetchTimeout)
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => this._handleConnectionOpen()
    }, this._handleTestRegionsResponse = e => {
      let t = e.map(e => e.region);
      if (r.default.shouldPerformLatencyTest(t)) {
        let n = s.default.getMediaEngine();
        n.rankRtcRegions(e).then(e => {
          f.verbose("RTC region latency test completed: ", e), (0, i.completeRTCLatencyTest)(e, t)
        }).catch(e => f.warn(e))
      } else f.verbose("RTC cached preferred region is ".concat(r.default.getPreferredRegion()))
    }, this._fetchAndScheduleRefetch = () => {
      (0, i.fetchRTCLatencyTestRegions)().then(e => this._handleTestRegionsResponse(e.body)).catch(e => f.warn(e)), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, 360 * o.default.Millis.MINUTE)
    }, this._handleConnectionOpen = () => {
      u.isPlatformEmbedded && !__OVERLAY__ && (null != this.refetchTimeout && clearTimeout(this.refetchTimeout), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, Math.floor(d + Math.random() * c)))
    }
  }
}
var h = new E