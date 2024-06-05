"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("920906"),
  o = s("329800"),
  u = s("280389"),
  d = s("481060"),
  c = s("320319"),
  _ = s("540935");
t.default = e => {
  let {
    cards: t,
    className: s,
    cardType: i
  } = e, E = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [T, I] = r.useState(0), [R, f] = r.useState(E()), [S, A] = r.useState(!1), m = t.length;
  r.useEffect(() => {
    let e = () => {
      f(E())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), r.useEffect(() => {
    m > R && T > m - R ? I(m - R) : m <= R && I(0)
  }, [m, R]);
  let N = r.useCallback(e => ({
      x: (e - T) * 100
    }), [T]),
    [p, g] = (0, l.useSprings)(t.length, N);
  return r.useEffect(() => {
    g(N)
  }, [g, N]), (0, a.jsx)("div", {
    className: s,
    children: (0, a.jsxs)("div", {
      className: _.cardContainer,
      children: [m > R && (0, a.jsx)(d.Clickable, {
        onClick: S ? () => {
          I(e => 0 === e ? m - R : e - 1)
        } : void 0,
        className: n()({
          [_.leftArrow]: S,
          [_.inactiveArrow]: !S
        }),
        children: (0, a.jsx)(o.ArrowSmallLeftIcon, {
          className: _.arrowIcon,
          colorClass: _.arrowIcon
        })
      }), (0, a.jsx)("div", {
        className: _.cardInnerContainer,
        children: p.map((e, s) => {
          let {
            x: r
          } = e;
          return (0, a.jsx)(l.animated.div, {
            className: _.card,
            style: {
              transform: null == r ? void 0 : r.to(e => "translate3d(".concat(e, "%,0,0)"))
            },
            children: (0, a.jsx)(c.default, {
              ...t[s],
              cardType: i
            }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
          }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
        })
      }), m > R && (0, a.jsx)(d.Clickable, {
        onClick: () => {
          I(e => e >= m - R ? (A(!0), 0) : e + 1)
        },
        className: _.rightArrow,
        children: (0, a.jsx)(u.ArrowSmallRightIcon, {
          className: _.arrowIcon,
          colorClass: _.arrowIcon
        })
      }), m > R && (0, a.jsx)("div", {
        className: _.cardProgressBar,
        children: t.map((e, t) => {
          if (!(t > m - R)) return (0, a.jsx)("div", {
            className: t === T ? _.selectedDot : _.dot
          }, "progress_bar_dot_".concat(t))
        })
      })]
    })
  })
}