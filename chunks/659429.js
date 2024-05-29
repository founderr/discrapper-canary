"use strict";
s.r(t), s.d(t, {
  fetchStatisticsForApplication: function() {
    return l
  }
});
var a = s("544891"),
  r = s("570140"),
  i = s("34756"),
  n = s("981631");
async function l(e) {
  r.default.dispatch({
    type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
    applicationId: e
  });
  try {
    let t = (await a.HTTP.get({
      url: n.Endpoints.APPLICATION_ACTIVITY_STATISTICS(e),
      oldFormErrors: !0
    })).body;
    return r.default.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: t,
      applicationId: e
    }), t
  } catch (t) {
    throw r.default.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL",
      applicationId: e
    }), new i.default(t)
  }
}