"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("446674"),
  r = n("629109"),
  o = n("42887"),
  u = n("316680"),
  d = n("829536"),
  c = n("773336"),
  f = n("550410"),
  h = n("4536"),
  m = i.default.connectStores([o.default], e => {
    let {
      userId: t,
      context: n
    } = e;
    return {
      currentVolume: o.default.getLocalVolume(t, n),
      muted: o.default.isLocalMute(t, n)
    }
  })(function(e) {
    let {
      className: t,
      iconClassName: n,
      sliderClassName: a,
      userId: i,
      currentVolume: o,
      muted: m,
      context: p,
      currentWindow: E = window
    } = e;
    return (0, l.jsx)(f.default, {
      children: (0, l.jsx)(u.default, {
        currentWindow: E,
        iconClassName: s(n, h.controlIcon),
        sliderClassName: a,
        className: t,
        value: (0, d.amplitudeToPerceptual)(o),
        muted: m,
        maxValue: c.isPlatformEmbedded ? 200 : 100,
        onValueChange: e => {
          var t, n, l, a;
          return t = e, n = i, l = m, a = p, void(t > 0 && l && r.default.toggleLocalMute(n, a), r.default.setLocalVolume(n, (0, d.perceptualToAmplitude)(t), a))
        },
        onToggleMute: () => {
          var e, t;
          return e = i, t = p, void r.default.toggleLocalMute(e, t)
        }
      })
    })
  })