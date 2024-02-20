"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  r = s.n(i),
  l = s("907002"),
  o = s("891722"),
  u = s("704426"),
  d = s("77078"),
  c = s("558566"),
  _ = s("559695"),
  E = e => {
    let {
      cards: t,
      className: s,
      cardType: i
    } = e, E = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [I, T] = n.useState(0), [f, S] = n.useState(E()), [R, m] = n.useState(!1), A = t.length;
    n.useEffect(() => {
      let e = () => {
        S(E())
      };
      return window.addEventListener("resize", e), () => {
        window.removeEventListener("resize", e)
      }
    }, []), n.useEffect(() => {
      A > f && I > A - f ? T(A - f) : A <= f && T(0)
    }, [A, f]);
    let N = n.useCallback(e => ({
        x: (e - I) * 100
      }), [I]),
      [p, g] = (0, l.useSprings)(t.length, N);
    return n.useEffect(() => {
      g(N)
    }, [g, N]), (0, a.jsx)("div", {
      className: s,
      children: (0, a.jsxs)("div", {
        className: _.cardContainer,
        children: [A > f && (0, a.jsx)(d.Clickable, {
          onClick: R ? () => {
            T(e => 0 === e ? A - f : e - 1)
          } : void 0,
          className: r({
            [_.leftArrow]: R,
            [_.inactiveArrow]: !R
          }),
          children: (0, a.jsx)(o.ArrowSmallLeftIcon, {
            className: _.arrowIcon,
            colorClass: _.arrowIcon
          })
        }), (0, a.jsx)("div", {
          className: _.cardInnerContainer,
          children: p.map((e, s) => {
            let {
              x: n
            } = e;
            return (0, a.jsx)(l.animated.div, {
              className: _.card,
              style: {
                transform: null == n ? void 0 : n.to(e => "translate3d(".concat(e, "%,0,0)"))
              },
              children: (0, a.jsx)(c.default, {
                ...t[s],
                cardType: i
              }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
            }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
          })
        }), A > f && (0, a.jsx)(d.Clickable, {
          onClick: () => {
            T(e => e >= A - f ? (m(!0), 0) : e + 1)
          },
          className: _.rightArrow,
          children: (0, a.jsx)(u.ArrowSmallRightIcon, {
            className: _.arrowIcon,
            colorClass: _.arrowIcon
          })
        }), A > f && (0, a.jsx)("div", {
          className: _.cardProgressBar,
          children: t.map((e, t) => {
            if (!(t > A - f)) return (0, a.jsx)("div", {
              className: t === I ? _.selectedDot : _.dot
            }, "progress_bar_dot_".concat(t))
          })
        })]
      })
    })
  }