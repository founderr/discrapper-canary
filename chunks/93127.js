s.d(_, {
  W: function() {
    return a
  }
});
var n = s(544891),
  I = s(570140),
  t = s(814443),
  l = s(981631);

function a() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return t.Z.needsRefresh() ? (I.Z.dispatch({
    type: "LOAD_USER_AFFINITIES"
  }), n.tn.get({
    url: l.ANM.USER_AFFINITIES,
    retries: e ? 3 : 0,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: _
    } = e;
    I.Z.dispatch({
      type: "LOAD_USER_AFFINITIES_SUCCESS",
      affinities: _
    })
  }, () => {
    I.Z.dispatch({
      type: "LOAD_USER_AFFINITIES_FAILURE"
    })
  })) : Promise.resolve()
}