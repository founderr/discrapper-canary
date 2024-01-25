"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  r = s("907002"),
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
  } = e, [E, I] = n.useState(0), T = t.length, f = T - 2, S = n.useCallback(e => ({
    x: (e - E) * 100
  }), [E]), [R, A] = (0, r.useSprings)(t.length, S);
  return n.useEffect(() => {
    A(S)
  }, [A, S]), (0, a.jsx)("div", {
    className: s,
    children: (0, a.jsxs)("div", {
      className: d.cardContainer,
      children: [f > 1 && (0, a.jsx)(u.Clickable, {
        onClick: () => {
          I(e => 0 === e ? T - 3 : e - 1)
        },
        className: d.leftArrow,
        children: (0, a.jsx)(i.ArrowSmallLeftIcon, {
          className: d.arrowIcon,
          width: 24,
          color: c
        })
      }), (0, a.jsx)("div", {
        className: d.cardInnerContainer,
        children: R.map((e, s) => {
          let {
            x: n
          } = e;
          return (0, a.jsx)(r.animated.div, {
            className: d.card,
            style: {
              transform: null == n ? void 0 : n.to(e => "translate3d(".concat(e, "%,0,0)"))
            },
            children: (0, a.jsx)(o.default, {
              ...t[s],
              cardType: _
            }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
          }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
        })
      }), f > 1 && (0, a.jsx)(u.Clickable, {
        onClick: () => {
          I(e => e >= T - 3 ? 0 : e + 1)
        },
        className: d.rightArrow,
        children: (0, a.jsx)(l.ArrowSmallRightIcon, {
          className: d.arrowIcon,
          width: 24,
          color: c
        })
      }), f > 1 && (0, a.jsx)("div", {
        className: d.cardProgressBar,
        children: t.map((e, t) => {
          if (!(t >= T - 2)) return (0, a.jsx)("div", {
            className: t === E ? d.selectedDot : d.dot
          }, "progress_bar_dot_".concat(t))
        })
      })]
    })
  })
}