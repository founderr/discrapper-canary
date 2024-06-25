var o = n(735250),
  s = n(470079),
  r = n(569379),
  a = n(581292);
t.Z = s.forwardRef((e, t) => {
  let {
    percentComplete: n,
    size: s = 42,
    strokeWidth: i = 3,
    glowBlur: l = .4,
    children: c
  } = e, d = (0, r.EK)(n > 0), u = s / 2, p = s / 2 - i / 2, m = 2 * Math.PI * p, x = m - n * m, g = {
    strokeDasharray: "".concat(m, " ").concat(m),
    strokeDashoffset: x
  }, f = {
    strokeDasharray: "".concat(m, " ").concat(m),
    strokeDashoffset: -n * m
  }, C = {
    boxShadow: "0 0 30px 0px ".concat(d.glow)
  };
  return (0, o.jsxs)("div", {
    className: a.outer,
    ref: t,
    children: [(0, o.jsx)("div", {
      className: a.inner,
      style: C,
      children: c
    }), (0, o.jsxs)("svg", {
      className: a.progressBar,
      height: s,
      width: s,
      children: [(0, o.jsxs)("defs", {
        children: [(0, o.jsxs)("filter", {
          id: "glow",
          children: [(0, o.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: l
          }), (0, o.jsxs)("feMerge", {
            children: [(0, o.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, o.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, o.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, o.jsx)("feMergeNode", {
              in: "SourceGraphic"
            })]
          })]
        }), (0, o.jsxs)("linearGradient", {
          id: "linear",
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%",
          children: [(0, o.jsx)("stop", {
            offset: "0%",
            stopColor: d.backgroundTop
          }), (0, o.jsx)("stop", {
            offset: "100%",
            stopColor: d.backgroundBottom
          })]
        })]
      }), (0, o.jsx)("circle", {
        className: a.progress,
        strokeWidth: i,
        fill: "transparent",
        r: p,
        cx: u,
        cy: u,
        stroke: "url(#linear)",
        style: f
      }), (0, o.jsx)("circle", {
        className: a.progress,
        strokeWidth: i,
        fill: "transparent",
        r: p,
        cx: u,
        cy: u,
        stroke: d.foreground,
        style: g
      })]
    })]
  })
})