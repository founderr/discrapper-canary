"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("569379"),
  i = s("956506");
t.default = a.forwardRef((e, t) => {
  let {
    progressBarRef: s,
    percentComplete: a,
    size: r = 42,
    strokeWidth: o = 3,
    glowBlur: u = .4,
    children: d
  } = e, c = (0, l.useProgressBarColors)(a > 0), E = r / 2, f = r / 2 - o / 2, _ = 2 * Math.PI * f, h = _ - a * _, C = {
    strokeDasharray: "".concat(_, " ").concat(_),
    strokeDashoffset: h
  }, m = {
    boxShadow: "0 0 30px 0px ".concat(c.glow)
  };
  return (0, n.jsxs)("div", {
    className: i.outer,
    ref: t,
    children: [(0, n.jsx)("div", {
      className: i.inner,
      style: m,
      ref: s,
      children: d
    }), (0, n.jsxs)("svg", {
      className: i.progressBar,
      height: r,
      width: r,
      children: [(0, n.jsxs)("defs", {
        children: [(0, n.jsxs)("filter", {
          id: "glow",
          children: [(0, n.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: u
          }), (0, n.jsxs)("feMerge", {
            children: [(0, n.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, n.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, n.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, n.jsx)("feMergeNode", {
              in: "SourceGraphic"
            })]
          })]
        }), (0, n.jsxs)("linearGradient", {
          id: "linear",
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%",
          children: [(0, n.jsx)("stop", {
            offset: "0%",
            stopColor: c.backgroundTop
          }), (0, n.jsx)("stop", {
            offset: "100%",
            stopColor: c.backgroundBottom
          })]
        })]
      }), (0, n.jsx)("circle", {
        strokeWidth: o,
        fill: "transparent",
        r: f,
        cx: E,
        cy: E,
        stroke: "url(#linear)"
      }), (0, n.jsx)("circle", {
        className: i.progress,
        strokeWidth: o,
        fill: "transparent",
        r: f,
        cx: E,
        cy: E,
        stroke: c.foreground,
        style: C
      })]
    })]
  })
})