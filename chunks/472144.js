"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("743294"),
  l = s("956506");
t.default = e => {
  let {
    progressBarRef: t,
    percentComplete: s,
    size: i = 42,
    strokeWidth: r = 3,
    progressBarBackgroundTop: u = n.NO_PROGRESS_COLORS.backgroundTop,
    progressBarBackgroundBottom: o = n.NO_PROGRESS_COLORS.backgroundBottom,
    progressBarForeground: d = n.NO_PROGRESS_COLORS.foreground,
    glowColor: c = n.NO_PROGRESS_COLORS.glow,
    glowBlur: E = .4,
    children: _
  } = e, f = i / 2, h = i / 2 - r / 2, m = 2 * Math.PI * h, T = m - s * m, C = {
    strokeDasharray: "".concat(m, " ").concat(m),
    strokeDashoffset: T
  };
  return (0, a.jsxs)("div", {
    className: l.outer,
    children: [(0, a.jsx)("div", {
      className: l.inner,
      style: {
        boxShadow: "0 0 30px 0px ".concat(c)
      },
      ref: t,
      children: _
    }), (0, a.jsxs)("svg", {
      className: l.progressBar,
      height: i,
      width: i,
      children: [(0, a.jsxs)("defs", {
        children: [(0, a.jsxs)("filter", {
          id: "glow",
          children: [(0, a.jsx)("feGaussianBlur", {
            result: "coloredBlur",
            stdDeviation: E
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
            stopColor: u
          }), (0, a.jsx)("stop", {
            offset: "100%",
            stopColor: o
          })]
        })]
      }), (0, a.jsx)("circle", {
        strokeWidth: r,
        fill: "transparent",
        r: h,
        cx: f,
        cy: f,
        stroke: "url(#linear)"
      }), (0, a.jsx)("circle", {
        className: l.progress,
        strokeWidth: r,
        fill: "transparent",
        r: h,
        cx: f,
        cy: f,
        stroke: d,
        style: C
      })]
    })]
  })
}