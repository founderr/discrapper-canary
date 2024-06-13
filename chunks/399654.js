"use strict";
n.r(t), n.d(t, {
  getRecommendations: function() {
    return d
  }
});
var i = n("544891"),
  r = n("570140"),
  s = n("706454"),
  a = n("70956"),
  o = n("844439"),
  l = n("981631");
let u = 10 * a.default.Millis.MINUTE;
async function d(e) {
  let {
    channelId: t,
    location: n
  } = e, a = Date.now(), d = o.default.getFetchState({
    location: n,
    channelId: t
  }), _ = o.default.getLastFetchTimeMs({
    location: n,
    channelId: t
  });
  if (d !== o.FetchState.FETCHING) {
    if (null == _ || !(_ + u > a)) {
      r.default.dispatch({
        type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
        location: n,
        channelId: t
      });
      try {
        let e = await i.HTTP.get({
          url: l.Endpoints.APP_RECOMMENDATIONS,
          query: {
            locale: s.default.locale,
            channel_id: t,
            location: n
          }
        });
        r.default.dispatch({
          type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
          location: n,
          channelId: t,
          recommendations: e.body
        })
      } catch (e) {
        r.default.dispatch({
          type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE",
          location: n,
          channelId: t
        })
      }
    }
  }
}