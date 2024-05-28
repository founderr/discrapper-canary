"use strict";
s.r(t), s.d(t, {
  fetchActivityStatistics: function() {
    return o
  }
});
var a = s("544891"),
  n = s("570140"),
  l = s("230307"),
  i = s("70956"),
  r = s("981631");
let u = 6 * i.default.Millis.HOUR;
async function o() {
  let e = l.default.lastFetched;
  if (!(null != e && Date.now() - e < u)) try {
    let e = await a.HTTP.get({
      url: r.Endpoints.USER_ACTIVITY_STATISTICS,
      oldFormErrors: !0
    });
    n.default.dispatch({
      type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: e.body
    })
  } catch (e) {
    return e
  }
}