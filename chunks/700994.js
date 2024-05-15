"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var l = a("735250");
a("470079");
var u = a("442837"),
  d = a("481060"),
  s = a("846027"),
  n = a("131951"),
  o = a("594174"),
  i = a("36703"),
  r = a("358085"),
  f = a("65154"),
  c = a("689938");

function E(e) {
  var t;
  let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.MediaEngineContextTypes.DEFAULT,
    E = (0, u.useStateFromStores)([n.default], () => n.default.getLocalVolume(e, a), [e, a]),
    S = e === (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    _ = a === f.MediaEngineContextTypes.STREAM;
  return S ? null : (0, l.jsx)(d.MenuControlItem, {
    id: "user-volume",
    label: _ ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME,
    control: (t, u) => (0, l.jsx)(d.MenuSliderControl, {
      ...t,
      ref: u,
      value: (0, i.amplitudeToPerceptual)(E),
      maxValue: r.isPlatformEmbedded ? 200 : 100,
      onChange: t => s.default.setLocalVolume(e, (0, i.perceptualToAmplitude)(t), a),
      "aria-label": _ ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME
    })
  })
}