"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  u = n("77078"),
  i = n("629109"),
  d = n("42887"),
  s = n("697218"),
  r = n("829536"),
  o = n("773336"),
  c = n("353927"),
  f = n("782340");

function S(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
    S = (0, a.useStateFromStores)([d.default], () => d.default.getLocalVolume(e, n), [e, n]),
    E = e === (null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    _ = n === c.MediaEngineContextTypes.STREAM;
  return E ? null : (0, l.jsx)(u.MenuControlItem, {
    id: "user-volume",
    label: _ ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
    control: (t, a) => (0, l.jsx)(u.MenuSliderControl, {
      ...t,
      ref: a,
      value: (0, r.amplitudeToPerceptual)(S),
      maxValue: o.isPlatformEmbedded ? 200 : 100,
      onChange: t => i.default.setLocalVolume(e, (0, r.perceptualToAmplitude)(t), n),
      "aria-label": _ ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
    })
  })
}