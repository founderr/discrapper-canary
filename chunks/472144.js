var s = n(735250),
  o = n(470079),
  a = n(569379),
  r = n(581292);
t.Z = o.forwardRef((e, t) => {
  let {
    percentComplete: n,
    size: o = 42,
    strokeWidth: l = 3,
    glowBlur: i = .4,
    children: c
  } = e, u = (0, a.EK)(n > 0), d = o / 2, p = o / 2 - l / 2, x = 2 * Math.PI * p, m = x - n * x, g = {
    strokeDasharray: "".concat(x, " ").concat(x),
    strokeDashoffset: m
  }, C = {
    strokeDasharray: "".concat(x, " ").concat(x),
    strokeDashoffset: -n * x
  }, h = {
    boxShadow: "0 0 30px 0px ".concat(u.glow)
  };
  return (0, s.jsxs)("div", {
    className: r.outer,
    ref: t,
    children: [(0, s.jsx)("div", {
      className: r.inner,
      style: h,
      children: c
    }), (0, s.jsxs)("svg", {
      className: r.progressBar,
      height: o,
      width: o,
      children: [(0, s.jsxs)("defs", {
        children: [(0, s.jsxs)("filter", {
          id: "glow",
          children: [(0, s.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: i
          }), (0, s.jsxs)("feMerge", {
            children: [(0, s.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, s.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, s.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, s.jsx)("feMergeNode", {
              in: "SourceGraphic"
            })]
          })]
        }), (0, s.jsxs)("linearGradient", {
          id: "linear",
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%",
          children: [(0, s.jsx)("stop", {
            offset: "0%",
            stopColor: u.backgroundTop
          }), (0, s.jsx)("stop", {
            offset: "100%",
            stopColor: u.backgroundBottom
          })]
        })]
      }), (0, s.jsx)("circle", {
        className: r.progress,
        strokeWidth: l,
        fill: "transparent",
        r: p,
        cx: d,
        cy: d,
        stroke: "url(#linear)",
        style: C
      }), (0, s.jsx)("circle", {
        className: r.progress,
        strokeWidth: l,
        fill: "transparent",
        r: p,
        cx: d,
        cy: d,
        stroke: u.foreground,
        style: g
      })]
    })]
  })
})