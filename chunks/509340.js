t.d(n, {
  Z: function() {
    return c
  }
});
var o = t(735250);
t(470079);
var s = t(159277),
  r = t(585183),
  i = t(981631),
  a = t(927923);

function c(e) {
  let {
    authToken: n,
    onContinue: t,
    onError: c,
    onClose: l
  } = e;
  return (0, o.jsx)(r.h, {
    platformType: i.ABu.XBOX,
    clientId: s.t.XBOX_APPLICATION_ID,
    scopes: a.tA,
    authToken: n,
    onContinue: t,
    onError: c,
    onClose: l
  })
}