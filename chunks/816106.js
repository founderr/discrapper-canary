"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  i = n("629109"),
  d = n("42887"),
  r = n("697218"),
  s = n("829536"),
  o = n("773336"),
  c = n("353927"),
  f = n("782340");

function E(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
    E = (0, l.useStateFromStores)([d.default], () => d.default.getLocalVolume(e, n), [e, n]),
    S = e === (null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    _ = n === c.MediaEngineContextTypes.STREAM;
  return S ? null : (0, a.jsx)(u.MenuControlItem, {
    id: "user-volume",
    label: _ ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
    control: (t, l) => (0, a.jsx)(u.MenuSliderControl, {
      ...t,
      ref: l,
      value: (0, s.amplitudeToPerceptual)(E),
      maxValue: o.isPlatformEmbedded ? 200 : 100,
      onChange: t => i.default.setLocalVolume(e, (0, s.perceptualToAmplitude)(t), n),
      "aria-label": _ ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
    })
  })
}