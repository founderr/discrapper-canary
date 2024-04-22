"use strict";
r.r(t), r("47120");
var s = r("735250"),
  i = r("470079"),
  n = r("780384"),
  l = r("410030"),
  a = r("119269"),
  o = r("163681");
let u = (e, t) => {
    switch (e) {
      case a.ProgressCircleVariation.NITRO_LOGO:
        return t ? "0.3" : "0.2";
      case a.ProgressCircleVariation.NITRO_GEM:
      default:
        return
    }
  },
  d = e => {
    switch (e) {
      case a.ProgressCircleVariation.NITRO_GEM:
      case a.ProgressCircleVariation.NITRO_LOGO:
        return "var(--premium-tier-2-purple)";
      default:
        return
    }
  };
t.default = e => {
  let {
    percentage: t = 0,
    children: r,
    animationClassName: c,
    initialPercentage: _ = 0,
    progressCircleStrokeSize: C = 2,
    progressCircleVariation: f
  } = e, E = 43 + C / 2, p = 2 * Math.PI * E, [R, x] = i.useState(_);
  i.useEffect(() => {
    let e = setTimeout(() => {
      x(t)
    }, 200);
    return () => clearTimeout(e)
  }, [t]);
  let h = (0, l.default)(),
    T = (0, n.isThemeLight)(h),
    S = d(f),
    m = u(f, T);
  return (0, s.jsxs)("div", {
    className: o.circleContainer,
    children: [(0, s.jsxs)("svg", {
      viewBox: "0 0 100 100",
      className: o.circleSVG,
      children: [(0, s.jsx)("circle", {
        className: f === a.ProgressCircleVariation.NITRO_GEM ? o.baseProgressCircle : void 0,
        fill: "transparent",
        strokeWidth: C,
        r: "".concat(E),
        cx: "50%",
        cy: "50%",
        stroke: S,
        "stroke-opacity": m
      }), (0, s.jsx)("circle", {
        stroke: "url(#gradient)",
        strokeWidth: C,
        strokeLinecap: "round",
        strokeDasharray: "".concat(p, " ").concat(p),
        className: c,
        style: {
          strokeDashoffset: (1 - R / 100) * p
        },
        r: "".concat(E),
        cx: "50%",
        cy: "50%"
      })]
    }), (0, s.jsx)("svg", {
      width: "0",
      height: "0",
      children: (0, s.jsxs)("linearGradient", {
        id: "gradient",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
        children: [(0, s.jsx)("stop", {
          offset: "0%",
          style: {
            stopColor: "#FFBDF2"
          }
        }), (0, s.jsx)("stop", {
          offset: "100%",
          style: {
            stopColor: "#E742E1"
          }
        })]
      })
    }), (0, s.jsx)("div", {
      className: o.childrenContainer,
      children: r
    })]
  })
}