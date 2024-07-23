n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(442837),
  r = n(846027),
  a = n(314897),
  o = n(131951),
  s = n(981631),
  u = n(65154);

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
n = (0, i.e7)([a.default], () => a.default.getId()),
d = (0, i.e7)([o.Z], () => o.Z.supports(u.AN.DISABLE_VIDEO) && o.Z.isVideoEnabled()),
l = (0, i.e7)([o.Z], () => o.Z.isLocalVideoDisabled(n, t), [
  n,
  t
]),
E = null == e || e === n;
  return [
E && (d || l),
l,
e => {
  let i = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
  r.Z.setDisableLocalVideo(n, i, t);
}
  ];
}