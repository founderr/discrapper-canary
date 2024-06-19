n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(846027),
  r = n(131951),
  o = n(36703),
  c = n(358085),
  u = n(689938);

function d() {
  let e = (0, i.e7)([r.Z], () => (0, o.P)(r.Z.getOutputVolume()));
  return (0, l.jsx)(s.MenuControlItem, {
    id: "output",
    label: u.Z.Messages.FORM_LABEL_OUTPUT_VOLUME,
    control: (t, n) => (0, l.jsx)(s.MenuSliderControl, {
      ...t,
      ref: n,
      value: e,
      maxValue: c.isPlatformEmbedded ? 200 : 100,
      onChange: e => a.Z.setOutputVolume((0, o.A)(e)),
      "aria-label": u.Z.Messages.FORM_LABEL_OUTPUT_VOLUME
    })
  })
}