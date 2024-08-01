n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(442837),
  r = n(846027),
  a = n(314897),
  s = n(131951),
  o = n(981631),
  d = n(65154);

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
n = (0, i.e7)([a.default], () => a.default.getId()),
I = (0, i.e7)([s.Z], () => s.Z.supports(d.AN.DISABLE_VIDEO) && s.Z.isVideoEnabled()),
c = (0, i.e7)([s.Z], () => s.Z.isLocalVideoDisabled(n, t), [
  n,
  t
]),
l = null == e || e === n;
  return [
l && (I || c),
c,
e => {
  let i = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
  r.Z.setDisableLocalVideo(n, i, t);
}
  ];
}