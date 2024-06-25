s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(920906),
  o = s(481060),
  c = s(320319),
  E = s(846280);
t.Z = e => {
  let {
    cards: t,
    className: s,
    cardType: i
  } = e, _ = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [u, d] = a.useState(0), [T, I] = a.useState(_()), [R, A] = a.useState(!1), N = t.length;
  a.useEffect(() => {
    let e = () => {
      I(_())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), a.useEffect(() => {
    N > T && u > N - T ? d(N - T) : N <= T && d(0)
  }, [N, T]);
  let C = a.useCallback(e => ({
      x: (e - u) * 100
    }), [u]),
    [g, m] = (0, l.useSprings)(t.length, C);
  return a.useEffect(() => {
    m(C)
  }, [m, C]), (0, n.jsx)("div", {
    className: s,
    children: (0, n.jsxs)("div", {
      className: E.cardContainer,
      children: [N > T && (0, n.jsx)(o.Clickable, {
        onClick: R ? () => {
          d(e => 0 === e ? N - T : e - 1)
        } : void 0,
        className: r()({
          [E.leftArrow]: R,
          [E.inactiveArrow]: !R
        }),
        children: (0, n.jsx)(o.ArrowSmallLeftIcon, {
          className: E.arrowIcon,
          colorClass: E.arrowIcon
        })
      }), (0, n.jsx)("div", {
        className: E.cardInnerContainer,
        children: g.map((e, s) => {
          let {
            x: a
          } = e;
          return (0, n.jsx)(l.animated.div, {
            className: E.card,
            style: {
              transform: null == a ? void 0 : a.to(e => "translate3d(".concat(e, "%,0,0)"))
            },
            children: (0, n.jsx)(c.Z, {
              ...t[s],
              cardType: i
            }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
          }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
        })
      }), N > T && (0, n.jsx)(o.Clickable, {
        onClick: () => {
          d(e => e >= N - T ? (A(!0), 0) : e + 1)
        },
        className: E.rightArrow,
        children: (0, n.jsx)(o.ArrowSmallRightIcon, {
          className: E.arrowIcon,
          colorClass: E.arrowIcon
        })
      }), N > T && (0, n.jsx)("div", {
        className: E.cardProgressBar,
        children: t.map((e, t) => {
          if (!(t > N - T)) return (0, n.jsx)("div", {
            className: t === u ? E.selectedDot : E.dot
          }, "progress_bar_dot_".concat(t))
        })
      })]
    })
  })
}