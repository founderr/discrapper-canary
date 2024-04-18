"use strict";
r.r(t), r("47120");
var n = r("735250"),
  s = r("470079"),
  i = r("163681");
t.default = e => {
  let {
    percentage: t = 0,
    children: r,
    animationClassName: u,
    initialPercentage: a = 0,
    progressCircleStrokeSize: l = 2
  } = e, o = 43 + l / 2, d = 2 * Math.PI * o, [c, _] = s.useState(a);
  return s.useEffect(() => {
    let e = setTimeout(() => {
      _(t)
    }, 200);
    return () => clearTimeout(e)
  }, [t]), (0, n.jsxs)("div", {
    className: i.circleContainer,
    children: [(0, n.jsxs)("svg", {
      viewBox: "0 0 100 100",
      className: i.circleSVG,
      children: [(0, n.jsx)("circle", {
        className: i.baseProgressCircle,
        fill: "transparent",
        strokeWidth: l,
        r: "".concat(o),
        cx: "50%",
        cy: "50%"
      }), (0, n.jsx)("circle", {
        stroke: "url(#gradient)",
        strokeWidth: l,
        strokeLinecap: "round",
        strokeDasharray: "".concat(d, " ").concat(d),
        className: u,
        style: {
          strokeDashoffset: (1 - c / 100) * d
        },
        r: "".concat(o),
        cx: "50%",
        cy: "50%"
      })]
    }), (0, n.jsx)("svg", {
      width: "0",
      height: "0",
      children: (0, n.jsxs)("linearGradient", {
        id: "gradient",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
        children: [(0, n.jsx)("stop", {
          offset: "0%",
          style: {
            stopColor: "#FFBDF2"
          }
        }), (0, n.jsx)("stop", {
          offset: "100%",
          style: {
            stopColor: "#E742E1"
          }
        })]
      })
    }), (0, n.jsx)("div", {
      className: i.childrenContainer,
      children: r
    })]
  })
}