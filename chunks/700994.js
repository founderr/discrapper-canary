i.d(n, {
  Z: function() {
return M;
  }
});
var t = i(735250);
i(470079);
var l = i(442837),
  s = i(481060),
  o = i(846027),
  a = i(131951),
  u = i(594174),
  d = i(36703),
  r = i(358085),
  c = i(65154),
  Z = i(689938);

function M(e) {
  var n;
  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
M = (0, l.e7)([a.Z], () => a.Z.getLocalVolume(e, i), [
  e,
  i
]),
E = e === (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
f = i === c.Yn.STREAM;
  return E ? null : (0, t.jsx)(s.MenuControlItem, {
id: 'user-volume',
label: f ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
control: (n, l) => (0, t.jsx)(s.MenuSliderControl, {
  ...n,
  ref: l,
  value: (0, d.P)(M),
  maxValue: r.isPlatformEmbedded ? 200 : 100,
  onChange: n => o.Z.setLocalVolume(e, (0, d.A)(n), i),
  'aria-label': f ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME
})
  });
}