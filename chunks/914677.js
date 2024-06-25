r(47120);
var n = r(735250),
  s = r(470079),
  i = r(780384),
  l = r(410030),
  a = r(119269),
  o = r(10298);
let c = "url(#gradient)",
  u = (e, t) => {
    switch (e) {
      case a.Q.NITRO_LOGO:
        return t ? "0.3" : "0.2";
      case a.Q.NITRO_GEM:
      default:
        return
    }
  },
  d = e => {
    switch (e) {
      case a.Q.NITRO_GEM:
        return "var(--background-primary)";
      case a.Q.NITRO_LOGO:
        return "var(--premium-tier-2-purple)";
      default:
        return
    }
  },
  _ = (e, t) => {
    switch (t) {
      case a.Q.NITRO_GEM:
        return c;
      case a.Q.NITRO_LOGO:
        return e ? "url(#gradient_nitro_logo)" : c;
      default:
        return
    }
  };
t.Z = e => {
  let {
    percentage: t = 0,
    children: r,
    animationClassName: c,
    initialPercentage: p = 0,
    progressCircleStrokeSize: f = 2,
    progressCircleVariation: C
  } = e, E = 43 + f / 2, x = 2 * Math.PI * E, [h, m] = s.useState(p);
  s.useEffect(() => {
    let e = setTimeout(() => {
      m(t)
    }, 200);
    return () => clearTimeout(e)
  }, [t]);
  let j = (0, l.ZP)(),
    R = (0, i.ap)(j),
    g = d(C),
    O = u(C, R),
    N = _(R, C);
  return (0, n.jsxs)("div", {
    className: o.circleContainer,
    children: [(0, n.jsxs)("svg", {
      viewBox: "0 0 100 100",
      className: o.circleSVG,
      children: [(0, n.jsx)("circle", {
        className: C === a.Q.NITRO_GEM ? o.baseProgressCircle : void 0,
        fill: "transparent",
        strokeWidth: f,
        r: "".concat(E),
        cx: "50%",
        cy: "50%",
        stroke: g,
        strokeOpacity: O
      }), (0, n.jsx)("circle", {
        stroke: N,
        strokeWidth: f,
        strokeLinecap: "round",
        strokeDasharray: "".concat(x, " ").concat(x),
        className: c,
        style: {
          strokeDashoffset: (1 - h / 100) * x
        },
        r: "".concat(E),
        cx: "50%",
        cy: "50%"
      })]
    }), (0, n.jsxs)("svg", {
      width: "0",
      height: "0",
      children: [(0, n.jsxs)("linearGradient", {
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
      }), (0, n.jsxs)("linearGradient", {
        id: "gradient_nitro_logo",
        x1: "2.99995",
        y1: "67.6298",
        x2: "132.55",
        y2: "67.6298",
        gradientUnits: "userSpaceOnUse",
        children: [(0, n.jsx)("stop", {
          stopColor: "#F9A0E8"
        }), (0, n.jsx)("stop", {
          offset: "1",
          stopColor: "#E742E1"
        })]
      })]
    }), (0, n.jsx)("div", {
      className: o.childrenContainer,
      children: r
    })]
  })
}