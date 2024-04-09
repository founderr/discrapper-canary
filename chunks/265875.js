"use strict";
r.r(t), r.d(t, {
  fetchUserAffinities: function() {
    return p
  }
});
var s = r("544891"),
  i = r("570140"),
  d = r("800599"),
  n = r("981631");

function p() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return d.default.needsRefresh() ? (i.default.dispatch({
    type: "LOAD_USER_AFFINITIES"
  }), s.HTTP.get({
    url: n.Endpoints.USER_AFFINITIES,
    retries: e ? 3 : 0,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    i.default.dispatch({
      type: "LOAD_USER_AFFINITIES_SUCCESS",
      affinities: t
    })
  }, () => {
    i.default.dispatch({
      type: "LOAD_USER_AFFINITIES_FAILURE"
    })
  })) : Promise.resolve()
}