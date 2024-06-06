"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("569379"),
  l = s("956506");
t.default = e => {
  let {
    progressBarRef: t,
    percentComplete: s,
    size: i = 42,
    strokeWidth: r = 3,
    glowBlur: o = .4,
    children: u
  } = e, d = (0, n.useProgressBarColors)(s > 0), c = i / 2, E = i / 2 - r / 2, _ = 2 * Math.PI * E, f = _ - s * _, h = {
    strokeDasharray: "".concat(_, " ").concat(_),
    strokeDashoffset: f
  }, m = {
    boxShadow: "0 0 30px 0px ".concat(d.glow)
  };
  return (0, a.jsxs)("div", {
    className: l.outer,
    children: [(0, a.jsx)("div", {
      className: l.inner,
      style: m,
      ref: t,
      children: u
    }), (0, a.jsxs)("svg", {
      className: l.progressBar,
      height: i,
      width: i,
      children: [(0, a.jsxs)("defs", {
        children: [(0, a.jsxs)("filter", {
          id: "glow",
          children: [(0, a.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: o
          }), (0, a.jsxs)("feMerge", {
            children: [(0, a.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, a.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, a.jsx)("feMergeNode", {
              in: "coloredBlur"
            }), (0, a.jsx)("feMergeNode", {
              in: "SourceGraphic"
            })]
          })]
        }), (0, a.jsxs)("linearGradient", {
          id: "linear",
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%",
          children: [(0, a.jsx)("stop", {
            offset: "0%",
            stopColor: d.backgroundTop
          }), (0, a.jsx)("stop", {
            offset: "100%",
            stopColor: d.backgroundBottom
          })]
        })]
      }), (0, a.jsx)("circle", {
        strokeWidth: r,
        fill: "transparent",
        r: E,
        cx: c,
        cy: c,
        stroke: "url(#linear)"
      }), (0, a.jsx)("circle", {
        className: l.progress,
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
}