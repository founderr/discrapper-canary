t.d(n, {
  Z: function() {
return E;
  }
});
var s = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(846027),
  o = t(131951),
  u = t(594174),
  d = t(36703),
  r = t(358085),
  c = t(65154),
  Z = t(689938);

function E(e) {
  var n;
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
E = (0, i.e7)([o.Z], () => o.Z.getLocalVolume(e, t), [
  e,
  t
]),
M = e === (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
_ = t === c.Yn.STREAM;
  return M ? null : (0, s.jsx)(l.MenuControlItem, {
id: 'user-volume',
label: _ ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
control: (n, i) => (0, s.jsx)(l.MenuSliderControl, {
  ...n,
  ref: i,
  value: (0, d.P)(E),
  maxValue: r.isPlatformEmbedded ? 200 : 100,
  onChange: n => a.Z.setLocalVolume(e, (0, d.A)(n), t),
  'aria-label': _ ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME
})
  });
}