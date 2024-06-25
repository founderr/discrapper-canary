t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(442837),
  r = t(846027),
  l = t(314897),
  u = t(131951),
  a = t(981631),
  o = t(65154);

function s(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Yn.DEFAULT,
    t = (0, i.e7)([l.default], () => l.default.getId()),
    s = (0, i.e7)([u.Z], () => u.Z.supports(o.AN.DISABLE_VIDEO) && u.Z.isVideoEnabled()),
    d = (0, i.e7)([u.Z], () => u.Z.isLocalVideoDisabled(t, n), [t, n]),
    c = null == e || e === t;
  return [c && (s || d), d, e => {
    let i = e ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
    r.Z.setDisableLocalVideo(t, i, n)
  }]
}