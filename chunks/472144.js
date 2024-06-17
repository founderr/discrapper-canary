"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("569379"),
  i = s("956506");
t.default = a.forwardRef((e, t) => {
  let {
    percentComplete: s,
    size: a = 42,
    strokeWidth: r = 3,
    glowBlur: o = .4,
    children: u
  } = e, d = (0, l.useProgressBarColors)(s > 0), c = a / 2, E = a / 2 - r / 2, f = 2 * Math.PI * E, _ = f - s * f, h = {
    strokeDasharray: "".concat(f, " ").concat(f),
    strokeDashoffset: _
  }, m = {
    strokeDasharray: "".concat(f, " ").concat(f),
    strokeDashoffset: -s * f
  }, C = {
    boxShadow: "0 0 30px 0px ".concat(d.glow)
  };
  return (0, n.jsxs)("div", {
    className: i.outer,
    ref: t,
    children: [(0, n.jsx)("div", {
      className: i.inner,
      style: C,
      children: u
    }), (0, n.jsxs)("svg", {
      className: i.progressBar,
      height: a,
      width: a,
      children: [(0, n.jsxs)("defs", {
        children: [(0, n.jsxs)("filter", {
          id: "glow",
          children: [(0, n.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: o
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
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%",
          children: [(0, n.jsx)("stop", {
            offset: "0%",
            stopColor: d.backgroundTop
          }), (0, n.jsx)("stop", {
            offset: "100%",
            stopColor: d.backgroundBottom
          })]
        })]
      }), (0, n.jsx)("circle", {
        className: i.progress,
        strokeWidth: r,
        fill: "transparent",
        r: E,
        cx: c,
        cy: c,
        stroke: "url(#linear)",
        style: m
      }), (0, n.jsx)("circle", {
        className: i.progress,
        strokeWidth: r,
        fill: "transparent",
        r: E,
        cx: c,
        cy: c,
        stroke: d.foreground,
        style: h
      })]
    })]
  })
})