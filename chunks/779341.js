t.d(e, {
  Z: function() {
    return C
  }
});
var o = t(735250);
t(470079);
var i = t(585183),
  r = t(728151),
  s = t(981631);

function C(n) {
  let {
    authToken: e,
    onContinue: t,
    onError: C,
    onClose: c
  } = n;
  return (0, o.jsx)(i.h, {
    platformType: s.ABu.CRUNCHYROLL,
    clientId: r.sp,
    scopes: r.Ii,
    authToken: e,
    onContinue: t,
    onError: C,
    onClose: c
  })
}