"use strict";
s.r(t), s.d(t, {
  fetchStatisticsForApplication: function() {
    return n
  }
});
var a = s("544891"),
  i = s("570140"),
  r = s("34756"),
  l = s("981631");
async function n(e) {
  i.default.dispatch({
    type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
    applicationId: e
  });
  try {
    let t = (await a.HTTP.get({
      url: l.Endpoints.APPLICATION_ACTIVITY_STATISTICS(e),
      oldFormErrors: !0
    })).body;
    return i.default.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: t,
      applicationId: e
    }), t
  } catch (t) {
    throw i.default.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL",
      applicationId: e
    }), new r.default(t)
  }
}