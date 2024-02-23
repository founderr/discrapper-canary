"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("629109"),
  r = n("42887"),
  o = n("829536"),
  u = n("782340");

function d() {
  let e = (0, a.useStateFromStores)([r.default], () => (0, o.amplitudeToPerceptual)(r.default.getInputVolume()));
  return (0, l.jsx)(s.MenuControlItem, {
    id: "input",
    label: u.default.Messages.FORM_LABEL_INPUT_VOLUME,
    control: (t, n) => (0, l.jsx)(s.MenuSliderControl, {
      ...t,
      ref: n,
      value: e,
      onChange: e => i.default.setInputVolume((0, o.perceptualToAmplitude)(e)),
      "aria-label": u.default.Messages.FORM_LABEL_INPUT_VOLUME
    })
  })
}