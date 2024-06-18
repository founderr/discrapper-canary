"use strict";
var i, r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(70956);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
    preferredRegions: null,
    lastTestTimestamp: null,
    lastGeoRankedOrder: null
  },
  c = _,
  d = 1 * l.Z.Millis.HOUR;
class E extends(i = o.ZP.DeviceSettingsStore) {
  initialize(e) {
    c = null != e ? e : _
  }
  shouldIncludePreferredRegion() {
    return null != c.preferredRegions
  }
  getPreferredRegion() {
    var e, t;
    return null !== (t = null === (e = c.preferredRegions) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : null
  }
  getPreferredRegions() {
    return c.preferredRegions
  }
  getRegion(e) {
    if (null != e) return e.substr(0, e.search(/\d/))
  }
  getUserAgnosticState() {
    return c
  }
  shouldPerformLatencyTest(e) {
    var t, n;
    return null === c.preferredRegions || !s().isEqual(e, null !== (t = c.lastGeoRankedOrder) && void 0 !== t ? t : []) || Date.now() - (null !== (n = c.lastTestTimestamp) && void 0 !== n ? n : 0) >= d
  }
}
u(E, "displayName", "RTCRegionStore"), u(E, "persistKey", "RTCRegionStore"), u(E, "migrations", [e => (e.preferredRegion ? e.preferredRegions = [e.preferredRegion] : e.preferredRegions = null, delete e.preferredRegion, e)]), t.Z = new E(a.Z, {
  RTC_LATENCY_TEST_COMPLETE: function(e) {
    e.latencyRankedRegions.length > 0 && (c.lastGeoRankedOrder = e.geoRankedRegions, c.preferredRegions = e.latencyRankedRegions), c.lastTestTimestamp = Date.now()
  }
})