t.d(n, {
  E: function() {
    return a
  }
});
var i = t(735250);
t(470079);
var o = t(421580),
  s = t(159277),
  r = t(585183),
  C = t(981631),
  l = t(927923);

function a(e) {
  let {
    platformType: n,
    authToken: t,
    onContinue: a,
    onError: d,
    onClose: c
  } = e, u = n === C.ABu.PLAYSTATION_STAGING ? s.t.PLAYSTATION_STAGING_APPLICATION_ID : s.t.PLAYSTATION_APPLICATION_ID, T = n === C.ABu.PLAYSTATION_STAGING ? o.x.PLAYSTATION_STAGING : o.x.PLAYSTATION;
  return (0, i.jsx)(r.h, {
    platformType: n,
    clientId: u,
    scopes: l.KL,
    authToken: t,
    onContinue: a,
    onError: d,
    onClose: c,
    redirectUri: T
  })
}