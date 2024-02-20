"use strict";
n.r(t), n.d(t, {
  fetchRTCLatencyTestRegions: function() {
    return l
  },
  completeRTCLatencyTest: function() {
    return s
  }
});
var i = n("872717"),
  a = n("913144");

function l() {
  var e;
  return i.default.get("".concat((e = "https:", "https:")).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT))
}

function s(e, t) {
  a.default.dispatch({
    type: "RTC_LATENCY_TEST_COMPLETE",
    latencyRankedRegions: e,
    geoRankedRegions: t
  })
}