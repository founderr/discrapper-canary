"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("907002"),
  i = s("891722"),
  l = s("704426"),
  u = s("77078"),
  o = s("558566"),
  d = s("821265");
let c = u.tokens.colors.INTERACTIVE_NORMAL;
var _ = e => {
  let {
    cards: t,
    className: s,
    cardType: _
  } = e, E = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [I, T] = r.useState(0), [f, S] = r.useState(E()), R = t.length;
  r.useEffect(() => {
    let e = () => {
      S(E())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), r.useEffect(() => {
    R > f && I > R - f ? T(R - f) : R <= f && T(0)
  }, [R, f]);
  let m = r.useCallback(e => ({
      x: (e - I) * 100
    }), [I]),
    [A, N] = (0, n.useSprings)(t.length, m);
  return r.useEffect(() => {
    N(m)
  }, [N, m]), (0, a.jsx)("div", {
    className: s,
    children: (0, a.jsxs)("div", {
      className: d.cardContainer,
      children: [R > f && (0, a.jsx)(u.Clickable, {
        onClick: () => {
          T(e => 0 === e ? R - f : e - 1)
        },
        className: d.leftArrow,
        children: (0, a.jsx)(i.ArrowSmallLeftIcon, {
          className: d.arrowIcon,
          width: 24,
          color: c
        })
      }), (0, a.jsx)("div", {
        className: d.cardInnerContainer,
        children: A.map((e, s) => {
          let {
            x: r
          } = e;
          return (0, a.jsx)(n.animated.div, {
            className: d.card,
            style: {
              transform: null == r ? void 0 : r.to(e => "translate3d(".concat(e, "%,0,0)"))
            },
            children: (0, a.jsx)(o.default, {
              ...t[s],
              cardType: _
            }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
          }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
        })
      }), R > f && (0, a.jsx)(u.Clickable, {
        onClick: () => {
          T(e => e >= R - f ? 0 : e + 1)
        },
        className: d.rightArrow,
        children: (0, a.jsx)(l.ArrowSmallRightIcon, {
          className: d.arrowIcon,
          width: 24,
          color: c
        })
      }), R > f && (0, a.jsx)("div", {
        className: d.cardProgressBar,
        children: t.map((e, t) => {
          if (!(t > R - f)) return (0, a.jsx)("div", {
            className: t === I ? d.selectedDot : d.dot
          }, "progress_bar_dot_".concat(t))
        })
      })]
    })
  })
}