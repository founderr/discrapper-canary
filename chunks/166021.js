"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("718017"),
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
  } = e, E = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [T, I] = i.useState(0), [f, R] = i.useState(E()), [S, m] = i.useState(!1), N = t.length;
  i.useEffect(() => {
    let e = () => {
      R(E())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), i.useEffect(() => {
    N > f && T > N - f ? I(N - f) : N <= f && I(0)
  }, [N, f]);
  let A = i.useCallback(e => ({
      x: (e - T) * 100
    }), [T]),
    [p, g] = (0, l.useSprings)(t.length, A);
  return i.useEffect(() => {
    g(A)
  }, [g, A]), (0, a.jsx)("div", {
    className: s,
    children: (0, a.jsxs)("div", {
      className: _.cardContainer,
      children: [N > f && (0, a.jsx)(d.Clickable, {
        onClick: S ? () => {
          I(e => 0 === e ? N - f : e - 1)
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
            x: i
          } = e;
          return (0, a.jsx)(l.animated.div, {
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
      }), N > f && (0, a.jsx)(d.Clickable, {
        onClick: () => {
          I(e => e >= N - f ? (m(!0), 0) : e + 1)
        },
        className: _.rightArrow,
        children: (0, a.jsx)(u.ArrowSmallRightIcon, {
          className: _.arrowIcon,
          colorClass: _.arrowIcon
        })
      }), N > f && (0, a.jsx)("div", {
        className: _.cardProgressBar,
        children: t.map((e, t) => {
          if (!(t > N - f)) return (0, a.jsx)("div", {
            className: t === T ? _.selectedDot : _.dot
          }, "progress_bar_dot_".concat(t))
        })
      })]
    })
  })
}