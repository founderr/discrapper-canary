"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("44315"),
  r = a("285952"),
  o = a("441996"),
  u = a("353042"),
  d = a("689938"),
  c = a("325349");
t.default = function(e) {
  var t;
  let {
    title: a,
    className: s,
    color: f,
    animate: E,
    gradientStopColor: h,
    getHistoricalTotalBytes: _
  } = e, C = (0, i.useColorValue)(f).hex, m = null === (t = (0, i.useColorValue)(h)) || void 0 === t ? void 0 : t.hex;
  return (0, n.jsx)(u.default, {
    getHistoricalTotalBytes: _,
    children: (e, t, i) => {
      var u;
      return (0, n.jsx)("div", {
        className: l()(c.monitor, s),
        children: (0, n.jsxs)(r.default, {
          align: r.default.Align.CENTER,
          children: [(0, n.jsxs)(r.default, {
            className: c.text,
            direction: r.default.Direction.VERTICAL,
            children: [(0, n.jsx)("div", {
              className: c.title,
              children: a
            }), (0, n.jsx)("div", {
              className: c.rate,
              children: (u = e[e.length - 1] / t * 1e3) > 1e3 ? d.default.Messages.FILE_RATE_MB.format({
                size: Math.round(u / 1e3)
              }) : d.default.Messages.FILE_RATE_KB.format({
                size: Math.round(u)
              })
            })]
          }), (0, n.jsx)("div", {
            className: c.overflowContainer,
            children: (0, n.jsx)(o.default, {
              data: e,
              maxValue: Math.max(Math.max.apply(null, e), 1e3),
              className: c.sparkChart,
              updateInterval: t,
              color: C,
              gradientStopColor: m,
              numUpdatesToShow: i,
              animate: E,
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