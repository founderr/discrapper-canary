"use strict";
n.r(t), n.d(t, {
  fetchActivityStatistics: function() {
    return u
  }
});
var a = n("544891"),
  s = n("570140"),
  i = n("230307"),
  l = n("70956"),
  r = n("981631");
let o = 6 * l.default.Millis.HOUR;
async function u() {
  let e = i.default.lastFetched;
  if (!(null != e && Date.now() - e < o)) try {
    let e = await a.HTTP.get({
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