"use strict";
s.r(t), s.d(t, {
  fetchActivityStatistics: function() {
    return u
  }
});
var a = s("544891"),
  n = s("570140"),
  l = s("230307"),
  i = s("70956"),
  r = s("981631");
let o = 6 * i.default.Millis.HOUR;
async function u() {
  let e = l.default.lastFetched;
  if (!(null != e && Date.now() - e < o)) try {
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