n.d(t, {
  Z: function() {
    return C
  }
}), n(47120);
var r = n(735250),
  s = n(470079),
  i = n(120356),
  o = n.n(i),
  a = n(920906),
  l = n(442837),
  c = n(481060),
  u = n(607070),
  d = n(144114),
  h = n(317175),
  p = n(410248);

function C(e) {
  let {
    show: t,
    alpha2: n,
    countryCode: i
  } = e, C = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), f = s.useRef(null), [m, x] = s.useState(0), [N, g] = s.useState(!1);
  s.useEffect(() => {
    function e() {
      var e, n;
      x(t && null !== (n = null === (e = f.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : 0)
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [t, n, i]);
  let v = (0, a.useSpring)({
      width: "".concat(m, "px"),
      immediate: C,
      onStart: () => {
        g(!0)
      },
      onRest: () => {
        g(!1)
      }
    }),
    y = e => {
      d.Z.setCountryCode(e)
    };
  return (0, r.jsx)(c.Popout, {
    position: "top",
    renderPopout: e => (0, r.jsx)(h.Z, {
      className: p.popout,
      onClick: t => {
        y(t), e.closePopout()
      }
    }),
    children: e => (0, r.jsx)("div", {
      className: o()(p.outerContainer, {
        [p.hidden]: !(t || N)
      }),
      children: (0, r.jsx)(a.animated.div, {
        className: p.container,
        style: v,
        children: (0, r.jsxs)("div", {
          className: p.innerContainer,
          ref: f,
          children: [(0, r.jsxs)(c.Clickable, {
            ...e,
            className: p.countryCode,
            children: [n, " ", i]
          }), (0, r.jsx)("div", {
            className: p.separator
          })]
        })
      })
    })
  })
}