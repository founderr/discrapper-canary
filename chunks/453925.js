n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(846027),
  r = n(131951),
  o = n(36703),
  c = n(689938);

function u() {
  let e = (0, i.e7)([r.Z], () => (0, o.P)(r.Z.getInputVolume()));
  return (0, l.jsx)(s.MenuControlItem, {
    id: "input",
    label: c.Z.Messages.FORM_LABEL_INPUT_VOLUME,
    control: (t, n) => (0, l.jsx)(s.MenuSliderControl, {
      ...t,
      ref: n,
      value: e,
      onChange: e => a.Z.setInputVolume((0, o.A)(e)),
      "aria-label": c.Z.Messages.FORM_LABEL_INPUT_VOLUME
    })
  })
}