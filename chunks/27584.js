t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(442837),
  l = t(846027),
  r = t(314897),
  a = t(131951),
  u = t(981631),
  o = t(65154);

function s(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Yn.DEFAULT,
    t = (0, i.e7)([r.default], () => r.default.getId()),
    s = (0, i.e7)([a.Z], () => a.Z.supports(o.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled()),
    d = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(t, n), [t, n]),
    E = null == e || e === t;
  return [E && (s || d), d, e => {
    let i = e ? u.ZUi.DISABLED : u.ZUi.MANUAL_ENABLED;
    l.Z.setDisableLocalVideo(t, i, n)
  }]
}