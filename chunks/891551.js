var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  r = n(846027),
  o = n(131951),
  c = n(80618),
  u = n(36703),
  d = n(358085),
  h = n(618158),
  m = n(162736);
t.Z = a.ZP.connectStores([o.Z], e => {
  let {
    userId: t,
    context: n
  } = e;
  return {
    currentVolume: o.Z.getLocalVolume(t, n),
    muted: o.Z.isLocalMute(t, n)
  }
})(function(e) {
  let {
    className: t,
    iconClassName: n,
    sliderClassName: i,
    userId: a,
    currentVolume: o,
    muted: E,
    context: p,
    currentWindow: g = window
  } = e;
  return (0, l.jsx)(h.Z, {
    children: (0, l.jsx)(c.Z, {
      currentWindow: g,
      iconClassName: s()(n, m.controlIcon),
      sliderClassName: i,
      className: t,
      value: (0, u.P)(o),
      muted: E,
      maxValue: d.isPlatformEmbedded ? 200 : 100,
      onValueChange: e => {
        var t, n, l, i;
        return t = e, n = a, l = E, i = p, void(t > 0 && l && r.Z.toggleLocalMute(n, i), r.Z.setLocalVolume(n, (0, u.A)(t), i))
      },
      onToggleMute: () => {
        var e, t;
        return e = a, t = p, void r.Z.toggleLocalMute(e, t)
      }
    })
  })
})