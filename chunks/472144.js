"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("743294"),
  i = n("956506");
t.default = e => {
  let {
    progressBarRef: t,
    percentComplete: n,
    size: l = 42,
    strokeWidth: r = 3,
    progressBarBackgroundTop: o = s.NO_PROGRESS_COLORS.backgroundTop,
    progressBarBackgroundBottom: u = s.NO_PROGRESS_COLORS.backgroundBottom,
    progressBarForeground: d = s.NO_PROGRESS_COLORS.foreground,
    glowColor: c = s.NO_PROGRESS_COLORS.glow,
    glowBlur: f = .4,
    children: E
  } = e, h = l / 2, _ = l / 2 - r / 2, C = 2 * Math.PI * _, m = C - n * C, p = {
    strokeDasharray: "".concat(C, " ").concat(C),
    strokeDashoffset: m
  };
  return (0, a.jsxs)("div", {
    className: i.outer,
    children: [(0, a.jsx)("div", {
      className: i.inner,
      style: {
        boxShadow: "0 0 30px 0px ".concat(c)
      },
      ref: t,
      children: E
    }), (0, a.jsxs)("svg", {
      className: i.progressBar,
      height: l,
      width: l,
      children: [(0, a.jsxs)("defs", {
        children: [(0, a.jsxs)("filter", {
          id: "glow",
          children: [(0, a.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: f
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
            stopColor: o
          }), (0, a.jsx)("stop", {
            offset: "100%",
            stopColor: u
          })]
        })]
      }), (0, a.jsx)("circle", {
        strokeWidth: r,
        fill: "transparent",
        r: _,
        cx: h,
        cy: h,
        stroke: "url(#linear)"
      }), (0, a.jsx)("circle", {
        className: i.progress,
        strokeWidth: r,
        fill: "transparent",
        r: _,
        cx: h,
        cy: h,
        stroke: d,
        style: p
      })]
    })]
  })
}