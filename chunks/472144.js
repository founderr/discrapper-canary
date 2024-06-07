"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("569379"),
  l = n("956506");
t.default = e => {
  let {
    progressBarRef: t,
    percentComplete: n,
    size: i = 42,
    strokeWidth: r = 3,
    glowBlur: o = .4,
    children: u
  } = e, d = (0, s.useProgressBarColors)(n > 0), c = i / 2, f = i / 2 - r / 2, E = 2 * Math.PI * f, h = E - n * E, _ = {
    strokeDasharray: "".concat(E, " ").concat(E),
    strokeDashoffset: h
  }, C = {
    boxShadow: "0 0 30px 0px ".concat(d.glow)
  };
  return (0, a.jsxs)("div", {
    className: l.outer,
    children: [(0, a.jsx)("div", {
      className: l.inner,
      style: C,
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
        r: f,
        cx: c,
        cy: c,
        stroke: "url(#linear)"
      }), (0, a.jsx)("circle", {
        className: l.progress,
        strokeWidth: r,
        fill: "transparent",
        r: f,
        cx: c,
        cy: c,
        stroke: d.foreground,
        style: _
      })]
    })]
  })
}