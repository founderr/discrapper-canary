var s = n(735250),
  a = n(470079),
  i = n(569379),
  l = n(581292);
t.Z = a.forwardRef((e, t) => {
  let {
    percentComplete: n,
    size: a = 42,
    strokeWidth: r = 3,
    glowBlur: o = .4,
    children: c
  } = e, d = (0, i.EK)(n > 0), u = a / 2, E = a / 2 - r / 2, _ = 2 * Math.PI * E, h = _ - n * _, m = {
    strokeDasharray: "".concat(_, " ").concat(_),
    strokeDashoffset: h
  }, T = {
    strokeDasharray: "".concat(_, " ").concat(_),
    strokeDashoffset: -n * _
  }, C = {
    boxShadow: "0 0 30px 0px ".concat(d.glow)
  };
  return (0, s.jsxs)("div", {
    className: l.outer,
    ref: t,
    children: [(0, s.jsx)("div", {
      className: l.inner,
      style: C,
      children: c
    }), (0, s.jsxs)("svg", {
      className: l.progressBar,
      height: a,
      width: a,
      children: [(0, s.jsxs)("defs", {
        children: [(0, s.jsxs)("filter", {
          id: "glow",
          children: [(0, s.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: o
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
            stopColor: d.backgroundTop
          }), (0, s.jsx)("stop", {
            offset: "100%",
            stopColor: d.backgroundBottom
          })]
        })]
      }), (0, s.jsx)("circle", {
        className: l.progress,
        strokeWidth: r,
        fill: "transparent",
        r: E,
        cx: u,
        cy: u,
        stroke: "url(#linear)",
        style: T
      }), (0, s.jsx)("circle", {
        className: l.progress,
        strokeWidth: r,
        fill: "transparent",
        r: E,
        cx: u,
        cy: u,
        stroke: d.foreground,
        style: m
      })]
    })]
  })
})