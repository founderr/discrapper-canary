t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(920906),
  o = t(481060),
  _ = t(320319),
  c = t(846280);
s.Z = e => {
  let {
    cards: s,
    className: t,
    cardType: r
  } = e, E = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [u, R] = a.useState(0), [d, I] = a.useState(E()), [T, A] = a.useState(!1), M = s.length;
  a.useEffect(() => {
    let e = () => {
      I(E())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), a.useEffect(() => {
    M > d && u > M - d ? R(M - d) : M <= d && R(0)
  }, [M, d]);
  let S = a.useCallback(e => ({
      x: (e - u) * 100
    }), [u]),
    [N, p] = (0, l.useSprings)(s.length, S);
  return a.useEffect(() => {
    p(S)
  }, [p, S]), (0, n.jsx)("div", {
    className: t,
    children: (0, n.jsxs)("div", {
      className: c.cardContainer,
      children: [M > d && (0, n.jsx)(o.Clickable, {
        onClick: T ? () => {
          R(e => 0 === e ? M - d : e - 1)
        } : void 0,
        className: i()({
          [c.leftArrow]: T,
          [c.inactiveArrow]: !T
        }),
        children: (0, n.jsx)(o.ArrowSmallLeftIcon, {
          className: c.arrowIcon,
          colorClass: c.arrowIcon
        })
      }), (0, n.jsx)("div", {
        className: c.cardInnerContainer,
        children: N.map((e, t) => {
          let {
            x: a
          } = e;
          return (0, n.jsx)(l.animated.div, {
            className: c.card,
            style: {
              transform: null == a ? void 0 : a.to(e => "translate3d(".concat(e, "%,0,0)"))
            },
            children: (0, n.jsx)(_.Z, {
              ...s[t],
              cardType: r
            }, "".concat(s[t].name, "_").concat(t, "_perks_card"))
          }, "".concat(s[t].name, "_").concat(t, "_animated_div"))
        })
      }), M > d && (0, n.jsx)(o.Clickable, {
        onClick: () => {
          R(e => e >= M - d ? (A(!0), 0) : e + 1)
        },
        className: c.rightArrow,
        children: (0, n.jsx)(o.ArrowSmallRightIcon, {
          className: c.arrowIcon,
          colorClass: c.arrowIcon
        })
      }), M > d && (0, n.jsx)("div", {
        className: c.cardProgressBar,
        children: s.map((e, s) => {
          if (!(s > M - d)) return (0, n.jsx)("div", {
            className: s === u ? c.selectedDot : c.dot
          }, "progress_bar_dot_".concat(s))
        })
      })]
    })
  })
}