n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(442837),
  i = n(846027),
  s = n(314897),
  a = n(131951),
  r = n(981631),
  o = n(65154);

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Yn.DEFAULT,
    n = (0, l.e7)([s.default], () => s.default.getId()),
    c = (0, l.e7)([a.Z], () => a.Z.supports(o.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled()),
    u = (0, l.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]),
    d = null == e || e === n;
  return [d && (c || u), u, e => {
    let l = e ? r.ZUi.DISABLED : r.ZUi.MANUAL_ENABLED;
    i.Z.setDisableLocalVideo(n, l, t)
  }]
}