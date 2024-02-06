"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var u = n("37983");
n("884691");
var i = n("446674"),
  a = n("77078"),
  l = n("629109"),
  r = n("42887"),
  d = n("697218"),
  o = n("829536"),
  s = n("773336"),
  c = n("353927"),
  f = n("782340");

function E(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
    E = (0, i.useStateFromStores)([r.default], () => r.default.getLocalVolume(e, n), [e, n]),
    _ = e === (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    S = n === c.MediaEngineContextTypes.STREAM;
  return _ ? null : (0, u.jsx)(a.MenuControlItem, {
    id: "user-volume",
    label: S ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
    control: (t, i) => (0, u.jsx)(a.MenuSliderControl, {
      ...t,
      ref: i,
      value: (0, o.amplitudeToPerceptual)(E),
      maxValue: s.isPlatformEmbedded ? 200 : 100,
      onChange: t => l.default.setLocalVolume(e, (0, o.perceptualToAmplitude)(t), n),
      "aria-label": S ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
    })
  })
}