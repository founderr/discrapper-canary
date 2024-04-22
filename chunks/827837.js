"use strict";
a.r(t), a.d(t, {
  fetchActivityStatistics: function() {
    return u
  }
});
var n = a("544891"),
  s = a("570140"),
  l = a("230307"),
  i = a("70956"),
  r = a("981631");
let o = 6 * i.default.Millis.HOUR;
async function u() {
  let e = l.default.lastFetched;
  if (!(null != e && Date.now() - e < o)) try {
    let e = await n.HTTP.get({
      url: r.Endpoints.USER_ACTIVITY_STATISTICS,
      oldFormErrors: !0
    });
    s.default.dispatch({
      type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: e.body
    })
  } catch (e) {
    return e
  }
}