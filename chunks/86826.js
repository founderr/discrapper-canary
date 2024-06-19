var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  a = n(44315),
  r = n(285952),
  o = n(441996),
  c = n(353042),
  u = n(689938),
  d = n(124923);
t.Z = function(e) {
  var t;
  let {
    title: n,
    className: s,
    color: E,
    animate: h,
    gradientStopColor: _,
    getHistoricalTotalBytes: I
  } = e, m = (0, a.Sl)(E).hex, g = null === (t = (0, a.Sl)(_)) || void 0 === t ? void 0 : t.hex;
  return (0, i.jsx)(c.Z, {
    getHistoricalTotalBytes: I,
    children: (e, t, a) => {
      var c;
      return (0, i.jsx)("div", {
        className: l()(d.monitor, s),
        children: (0, i.jsxs)(r.Z, {
          align: r.Z.Align.CENTER,
          children: [(0, i.jsxs)(r.Z, {
            className: d.text,
            direction: r.Z.Direction.VERTICAL,
            children: [(0, i.jsx)("div", {
              className: d.title,
              children: n
            }), (0, i.jsx)("div", {
              className: d.rate,
              children: (c = e[e.length - 1] / t * 1e3) > 1e3 ? u.Z.Messages.FILE_RATE_MB.format({
                size: Math.round(c / 1e3)
              }) : u.Z.Messages.FILE_RATE_KB.format({
                size: Math.round(c)
              })
            })]
          }), (0, i.jsx)("div", {
            className: d.overflowContainer,
            children: (0, i.jsx)(o.Z, {
              data: e,
              maxValue: Math.max(Math.max.apply(null, e), 1e3),
              className: d.sparkChart,
              updateInterval: t,
              color: m,
              gradientStopColor: g,
              numUpdatesToShow: a,
              animate: h,
              pixelWidth: 600,
              pixelHeight: 48,
              lineWidth: 4
            })
          })]
        })
      })
    }
  })
}