var o = n(735250),
  s = n(470079),
  r = n(569379),
  a = n(581292);
t.Z = s.forwardRef((e, t) => {
  let {
    quest: n,
    percentComplete: s,
    size: i = 42,
    strokeWidth: l = 3,
    glowBlur: c = .4,
    children: d
  } = e, u = (0, r.EK)(n, s > 0), p = i / 2, m = i / 2 - l / 2, x = 2 * Math.PI * m, g = x - s * x, C = {
    strokeDasharray: "".concat(x, " ").concat(x),
    strokeDashoffset: g
  }, f = {
    strokeDasharray: "".concat(x, " ").concat(x),
    strokeDashoffset: -s * x
  }, h = {
    boxShadow: "0 0 30px 0px ".concat(u.glow)
  };
  return (0, o.jsxs)("div", {
    className: a.outer,
    ref: t,
    children: [(0, o.jsx)("div", {
      className: a.inner,
      style: h,
      children: d
    }), (0, o.jsxs)("svg", {
      className: a.progressBar,
      height: i,
      width: i,
      children: [(0, o.jsxs)("defs", {
        children: [(0, o.jsxs)("filter", {
          id: "glow",
          children: [(0, o.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: c
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
            stopColor: u.backgroundTop
          }), (0, o.jsx)("stop", {
            offset: "100%",
            stopColor: u.backgroundBottom
          })]
        })]
      }), (0, o.jsx)("circle", {
        className: a.progress,
        strokeWidth: l,
        fill: "transparent",
        r: m,
        cx: p,
        cy: p,
        stroke: "url(#linear)",
        style: f
      }), (0, o.jsx)("circle", {
        className: a.progress,
        strokeWidth: l,
        fill: "transparent",
        r: m,
        cx: p,
        cy: p,
        stroke: u.foreground,
        style: C
      })]
    })]
  })
})