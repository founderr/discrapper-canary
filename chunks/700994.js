"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var n = l("735250");
l("470079");
var a = l("442837"),
  u = l("481060"),
  d = l("846027"),
  o = l("131951"),
  s = l("594174"),
  r = l("36703"),
  i = l("358085"),
  c = l("65154"),
  f = l("689938");

function S(e) {
  var t;
  let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
    S = (0, a.useStateFromStores)([o.default], () => o.default.getLocalVolume(e, l), [e, l]),
    M = e === (null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    g = l === c.MediaEngineContextTypes.STREAM;
  return M ? null : (0, n.jsx)(u.MenuControlItem, {
    id: "user-volume",
    label: g ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
    control: (t, a) => (0, n.jsx)(u.MenuSliderControl, {
      ...t,
      ref: a,
      value: (0, r.amplitudeToPerceptual)(S),
      maxValue: i.isPlatformEmbedded ? 200 : 100,
      onChange: t => d.default.setLocalVolume(e, (0, r.perceptualToAmplitude)(t), l),
      "aria-label": g ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
    })
  })
}