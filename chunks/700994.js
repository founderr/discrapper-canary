t.d(n, {
  Z: function() {
    return M
  }
});
var i = t(735250);
t(470079);
var l = t(442837),
  a = t(481060),
  s = t(846027),
  o = t(131951),
  d = t(594174),
  u = t(36703),
  r = t(358085),
  c = t(65154),
  Z = t(689938);

function M(e) {
  var n;
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
    M = (0, l.e7)([o.Z], () => o.Z.getLocalVolume(e, t), [e, t]),
    E = e === (null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
    f = t === c.Yn.STREAM;
  return E ? null : (0, i.jsx)(a.MenuControlItem, {
    id: "user-volume",
    label: f ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
    control: (n, l) => (0, i.jsx)(a.MenuSliderControl, {
      ...n,
      ref: l,
      value: (0, u.P)(M),
      maxValue: r.isPlatformEmbedded ? 200 : 100,
      onChange: n => s.Z.setLocalVolume(e, (0, u.A)(n), t),
      "aria-label": f ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME
    })
  })
}