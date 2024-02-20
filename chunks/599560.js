"use strict";
s.r(t), s.d(t, {
  fetchStatisticsForApplication: function() {
    return l
  }
});
var a = s("872717"),
  n = s("913144"),
  i = s("333805"),
  r = s("49111");
async function l(e) {
  n.default.dispatch({
    type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
    applicationId: e
  });
  try {
    let t = await a.default.get({
        url: r.Endpoints.APPLICATION_ACTIVITY_STATISTICS(e),
        oldFormErrors: !0
      }),
      s = t.body;
    return n.default.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: s,
      applicationId: e
    }), s
  } catch (t) {
    throw n.default.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL",
      applicationId: e
    }), new i.default(t)
  }
}