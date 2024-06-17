"use strict";
s.r(t), s.d(t, {
  fetchUserAffinities: function() {
    return u
  }
});
var a = s("544891"),
  _ = s("570140"),
  n = s("814443"),
  l = s("981631");

function u() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return n.default.needsRefresh() ? (_.default.dispatch({
    type: "LOAD_USER_AFFINITIES"
  }), a.HTTP.get({
    url: l.Endpoints.USER_AFFINITIES,
    retries: e ? 3 : 0,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    _.default.dispatch({
      type: "LOAD_USER_AFFINITIES_SUCCESS",
      affinities: t
    })
  }, () => {
    _.default.dispatch({
      type: "LOAD_USER_AFFINITIES_FAILURE"
    })
  })) : Promise.resolve()
}