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
  } = e, E = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [R, T] = r.useState(0), [f, m] = r.useState(E()), [I, S] = r.useState(!1), p = t.length;
  r.useEffect(() => {
    let e = () => {
      m(E())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), r.useEffect(() => {
    p > f && R > p - f ? T(p - f) : p <= f && T(0)
  }, [p, f]);
  let A = r.useCallback(e => ({
      x: (e - R) * 100
    }), [R]),
    [g, N] = (0, l.useSprings)(t.length, A);
  return r.useEffect(() => {
    N(A)
  }, [N, A]), (0, a.jsx)("div", {
    className: s,
    children: (0, a.jsxs)("div", {
      className: _.cardContainer,
      children: [p > f && (0, a.jsx)(c.Clickable, {
        onClick: I ? () => {
          T(e => 0 === e ? p - f : e - 1)
        } : void 0,
        className: n()({
          [_.leftArrow]: I,
          [_.inactiveArrow]: !I
        }),
        children: (0, a.jsx)(o.ArrowSmallLeftIcon, {
          className: _.arrowIcon,
          colorClass: _.arrowIcon
        })
      }), (0, a.jsx)("div", {
        className: _.cardInnerContainer,
        children: g.map((e, s) => {
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
      }), p > f && (0, a.jsx)(c.Clickable, {
        onClick: () => {
          T(e => e >= p - f ? (S(!0), 0) : e + 1)
        },
        className: _.rightArrow,
        children: (0, a.jsx)(u.ArrowSmallRightIcon, {
          className: _.arrowIcon,
          colorClass: _.arrowIcon
        })
      }), p > f && (0, a.jsx)("div", {
        className: _.cardProgressBar,
        children: t.map((e, t) => {
          if (!(t > p - f)) return (0, a.jsx)("div", {
            className: t === R ? _.selectedDot : _.dot
          }, "progress_bar_dot_".concat(t))
        })
      })]
    })
  })
}