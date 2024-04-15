"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("718017"),
  o = s("329800"),
  u = s("280389"),
  d = s("481060"),
  c = s("320319"),
  _ = s("112986");
t.default = e => {
  let {
    cards: t,
    className: s,
    cardType: r
  } = e, E = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [C, f] = i.useState(0), [T, I] = i.useState(E()), [R, S] = i.useState(!1), p = t.length;
  i.useEffect(() => {
    let e = () => {
      I(E())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), i.useEffect(() => {
    p > T && C > p - T ? f(p - T) : p <= T && f(0)
  }, [p, T]);
  let m = i.useCallback(e => ({
      x: (e - C) * 100
    }), [C]),
    [A, g] = (0, n.useSprings)(t.length, m);
  return i.useEffect(() => {
    g(m)
  }, [g, m]), (0, a.jsx)("div", {
    className: s,
    children: (0, a.jsxs)("div", {
      className: _.cardContainer,
      children: [p > T && (0, a.jsx)(d.Clickable, {
        onClick: R ? () => {
          f(e => 0 === e ? p - T : e - 1)
        } : void 0,
        className: l()({
          [_.leftArrow]: R,
          [_.inactiveArrow]: !R
        }),
        children: (0, a.jsx)(o.ArrowSmallLeftIcon, {
          className: _.arrowIcon,
          colorClass: _.arrowIcon
        })
      }), (0, a.jsx)("div", {
        className: _.cardInnerContainer,
        children: A.map((e, s) => {
          let {
            x: i
          } = e;
          return (0, a.jsx)(n.animated.div, {
            className: _.card,
            style: {
              transform: null == i ? void 0 : i.to(e => "translate3d(".concat(e, "%,0,0)"))
            },
            children: (0, a.jsx)(c.default, {
              ...t[s],
              cardType: r
            }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
          }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
        })
      }), p > T && (0, a.jsx)(d.Clickable, {
        onClick: () => {
          f(e => e >= p - T ? (S(!0), 0) : e + 1)
        },
        className: _.rightArrow,
        children: (0, a.jsx)(u.ArrowSmallRightIcon, {
          className: _.arrowIcon,
          colorClass: _.arrowIcon
        })
      }), p > T && (0, a.jsx)("div", {
        className: _.cardProgressBar,
        children: t.map((e, t) => {
          if (!(t > p - T)) return (0, a.jsx)("div", {
            className: t === C ? _.selectedDot : _.dot
          }, "progress_bar_dot_".concat(t))
        })
      })]
    })
  })
}