"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("743294"),
  l = n("956506");
t.default = e => {
  let {
    percentComplete: t,
    size: n = 42,
    strokeWidth: i = 3,
    progressBarBackgroundTop: r = s.NO_PROGRESS_COLORS.backgroundTop,
    progressBarBackgroundBottom: o = s.NO_PROGRESS_COLORS.backgroundBottom,
    progressBarForeground: u = s.NO_PROGRESS_COLORS.foreground,
    glowColor: d = s.NO_PROGRESS_COLORS.glow,
    glowBlur: c = .4,
    children: f
  } = e, E = n / 2, h = n / 2 - i / 2, _ = 2 * Math.PI * h, C = _ - t * _, m = {
    strokeDasharray: "".concat(_, " ").concat(_),
    strokeDashoffset: C
  };
  return (0, a.jsxs)("div", {
    className: l.outer,
    children: [(0, a.jsx)("div", {
      className: l.inner,
      style: {
        boxShadow: "0 0 30px 0px ".concat(d)
      },
      children: f
    }), (0, a.jsxs)("svg", {
      className: l.progressBar,
      height: n,
      width: n,
      children: [(0, a.jsxs)("defs", {
        children: [(0, a.jsxs)("filter", {
          id: "glow",
          children: [(0, a.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: c
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
            stopColor: r
          }), (0, a.jsx)("stop", {
            offset: "100%",
            stopColor: o
          })]
        })]
      }), (0, a.jsx)("circle", {
        strokeWidth: i,
        fill: "transparent",
        r: h,
        cx: E,
        cy: E,
        stroke: "url(#linear)"
      }), (0, a.jsx)("circle", {
        className: l.progress,
        strokeWidth: i,
        fill: "transparent",
        r: h,
        cx: E,
        cy: E,
        stroke: u,
        style: m
      })]
    })]
  })
}