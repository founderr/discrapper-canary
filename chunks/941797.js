"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  r = s("907002"),
  i = s("891722"),
  l = s("704426"),
  u = s("77078"),
  o = s("558566"),
  d = s("821265"),
  c = e => {
    let {
      cards: t,
      className: s,
      cardType: c
    } = e, _ = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [E, I] = n.useState(0), [T, f] = n.useState(_()), [S, R] = n.useState(!1), m = t.length;
    n.useEffect(() => {
      let e = () => {
        f(_())
      };
      return window.addEventListener("resize", e), () => {
        window.removeEventListener("resize", e)
      }
    }, []), n.useEffect(() => {
      m > T && E > m - T ? I(m - T) : m <= T && I(0)
    }, [m, T]);
    let A = n.useCallback(e => ({
        x: (e - E) * 100
      }), [E]),
      [N, p] = (0, r.useSprings)(t.length, A);
    return n.useEffect(() => {
      p(A)
    }, [p, A]), (0, a.jsx)("div", {
      className: s,
      children: (0, a.jsxs)("div", {
        className: d.cardContainer,
        children: [m > T && (0, a.jsx)(u.Clickable, {
          onClick: S ? () => {
            I(e => 0 === e ? m - T : e - 1)
          } : void 0,
          className: d.leftArrow,
          children: (0, a.jsx)(i.ArrowSmallLeftIcon, {
            className: d.arrowIcon,
            colorClass: d.arrowIcon
          })
        }), (0, a.jsx)("div", {
          className: d.cardInnerContainer,
          children: N.map((e, s) => {
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
                cardType: c
              }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
            }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
          })
        }), m > T && (0, a.jsx)(u.Clickable, {
          onClick: () => {
            I(e => (R(!0), e >= m - T) ? 0 : e + 1)
          },
          className: d.rightArrow,
          children: (0, a.jsx)(l.ArrowSmallRightIcon, {
            className: d.arrowIcon,
            colorClass: d.arrowIcon
          })
        }), m > T && (0, a.jsx)("div", {
          className: d.cardProgressBar,
          children: t.map((e, t) => {
            if (!(t > m - T)) return (0, a.jsx)("div", {
              className: t === E ? d.selectedDot : d.dot
            }, "progress_bar_dot_".concat(t))
          })
        })]
      })
    })
  }