"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("920906"),
  o = s("329800"),
  u = s("280389"),
  c = s("481060"),
  d = s("320319"),
  _ = s("540935");
t.default = e => {
  let {
    cards: t,
    className: s,
    cardType: i
  } = e, E = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [R, T] = r.useState(0), [I, f] = r.useState(E()), [S, m] = r.useState(!1), p = t.length;
  r.useEffect(() => {
    let e = () => {
      f(E())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), r.useEffect(() => {
    p > I && R > p - I ? T(p - I) : p <= I && T(0)
  }, [p, I]);
  let A = r.useCallback(e => ({
      x: (e - R) * 100
    }), [R]),
    [M, C] = (0, l.useSprings)(t.length, A);
  return r.useEffect(() => {
    C(A)
  }, [C, A]), (0, a.jsx)("div", {
    className: s,
    children: (0, a.jsxs)("div", {
      className: _.cardContainer,
      children: [p > I && (0, a.jsx)(c.Clickable, {
        onClick: S ? () => {
          T(e => 0 === e ? p - I : e - 1)
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
        children: M.map((e, s) => {
          let {
            x: r
          } = e;
          return (0, a.jsx)(l.animated.div, {
            className: _.card,
            style: {
              transform: null == r ? void 0 : r.to(e => "translate3d(".concat(e, "%,0,0)"))
            },
            children: (0, a.jsx)(d.default, {
              ...t[s],
              cardType: i
            }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
          }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
        })
      }), p > I && (0, a.jsx)(c.Clickable, {
        onClick: () => {
          T(e => e >= p - I ? (m(!0), 0) : e + 1)
        },
        className: _.rightArrow,
        children: (0, a.jsx)(u.ArrowSmallRightIcon, {
          className: _.arrowIcon,
          colorClass: _.arrowIcon
        })
      }), p > I && (0, a.jsx)("div", {
        className: _.cardProgressBar,
        children: t.map((e, t) => {
          if (!(t > p - I)) return (0, a.jsx)("div", {
            className: t === R ? _.selectedDot : _.dot
          }, "progress_bar_dot_".concat(t))
        })
      })]
    })
  })
}