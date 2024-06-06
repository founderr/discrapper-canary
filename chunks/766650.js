"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var s = n("735250"),
  r = n("470079"),
  a = n("120356"),
  o = n.n(a),
  i = n("920906"),
  l = n("442837"),
  u = n("481060"),
  c = n("607070"),
  d = n("144114"),
  h = n("317175"),
  f = n("111631");

function p(e) {
  let {
    show: t,
    alpha2: n,
    countryCode: a
  } = e, p = (0, l.useStateFromStores)([c.default], () => c.default.useReducedMotion), C = r.useRef(null), [m, x] = r.useState(0), [N, g] = r.useState(!1);
  r.useEffect(() => {
    function e() {
      var e, n;
      x(t && null !== (n = null === (e = C.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : 0)
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [t, n, a]);
  let v = (0, i.useSpring)({
      width: "".concat(m, "px"),
      immediate: p,
      onStart: () => {
        g(!0)
      },
      onRest: () => {
        g(!1)
      }
    }),
    y = e => {
      d.default.setCountryCode(e)
    };
  return (0, s.jsx)(u.Popout, {
    position: "top",
    renderPopout: e => (0, s.jsx)(h.default, {
      className: f.popout,
      onClick: t => {
        y(t), e.closePopout()
      }
    }),
    children: e => (0, s.jsx)("div", {
      className: o()(f.outerContainer, {
        [f.hidden]: !(t || N)
      }),
      children: (0, s.jsx)(i.animated.div, {
        className: f.container,
        style: v,
        children: (0, s.jsxs)("div", {
          className: f.innerContainer,
          ref: C,
          children: [(0, s.jsxs)(u.Clickable, {
            ...e,
            className: f.countryCode,
            children: [n, " ", a]
          }), (0, s.jsx)("div", {
            className: f.separator
          })]
        })
      })
    })
  })
}