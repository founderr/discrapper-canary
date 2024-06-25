n(47120), n(177593);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(920906),
  o = n(442837),
  c = n(481060),
  u = n(393238),
  d = n(607070),
  h = n(44315),
  m = n(314897),
  E = n(111583),
  p = n(889901),
  g = n(64078),
  f = n(351780),
  C = n(843693),
  _ = n(641033),
  I = n(989830),
  x = n(689938),
  T = n(587954);
let N = i.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, s = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), a = (0, o.e7)([C.ZP], () => C.ZP.getMostRecentMessageCombo(t), [t]), [u, h] = i.useState(!1);
    i.useEffect(() => {
      if (null == a ? void 0 : a.displayed) return;
      h(!1), setImmediate(() => {
        h((null != a ? (0, _.Eo)(a.combo) : 0) > 0)
      });
      let e = setTimeout(() => {
        h(!1), null != a && (0, g.ew)(a)
      }, 2e3);
      return () => clearTimeout(e)
    }, [a]);
    let m = null != a ? "100%" : "200%",
      E = (0, r.useSpring)({
        opacity: u ? 1 : 0,
        translateY: u ? "0" : m,
        pointerEvents: "none",
        width: n,
        config: s ? r.config.stiff : r.config.slow
      });
    return (0, l.jsx)(l.Fragment, {
      children: null != a && (0, l.jsx)(r.animated.div, {
        className: T.messageComboScore,
        style: E,
        children: (0, l.jsx)(c.Text, {
          className: T.comboScore,
          variant: "text-sm/bold",
          children: (0, _.Eo)(a.combo)
        })
      })
    })
  }),
  Z = i.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: s,
      square: r,
      flair: o
    } = i.useMemo(() => (0, _.yz)(n), [n]), u = (0, h.Lq)(s);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(c.Text, {
        className: T.comboValue,
        variant: "text-sm/bold",
        children: t
      }), (0, l.jsxs)("div", {
        className: T.comboNameplate,
        style: {
          color: u
        },
        children: [(0, l.jsx)(c.Text, {
          className: T.comboMultiplier,
          style: {
            color: u
          },
          variant: "text-sm/bold",
          children: x.Z.Messages.POGGERMODE_COMBO.format({
            multiplier: n
          })
        }), r && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("div", {
            className: a()(T.comboSquare, T.left),
            style: {
              backgroundColor: u
            }
          }), (0, l.jsx)("div", {
            className: a()(T.comboSquare, T.right),
            style: {
              backgroundColor: u
            }
          })]
        }), o && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("div", {
            className: a()(T.confettiIcon, T.left),
            children: (0, l.jsx)(p.Z, {
              width: 24,
              height: 24
            })
          }), (0, l.jsx)("div", {
            className: a()(T.confettiIcon, T.right),
            children: (0, l.jsx)(p.Z, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, l.jsx)(c.Text, {
          className: T.tip,
          variant: "text-sm/bold",
          children: x.Z.Messages.POGGERMODE_COMBO_TIP
        })]
      })]
    })
  });
t.Z = i.memo(function(e) {
  let {
    channelId: t
  } = e, n = (0, o.e7)([m.default], () => m.default.getId()), s = (0, o.e7)([E.Z], () => E.Z.isTyping(t, n), [t, n]), a = (0, o.e7)([f.Z], () => f.Z.isEnabled()), c = (0, o.e7)([C.ZP], () => C.ZP.isComboing(n, t), [t, n]), {
    ref: h,
    width: p = 0
  } = (0, u.Z)(), g = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [_, x] = i.useState(!1), S = (0, I.Z)(t), v = a && c && s;
  i.useEffect(() => {
    v && x(!0);
    let e = setTimeout(() => x(v), 1e3);
    return () => clearTimeout(e)
  }, [v]);
  let A = (0, r.useSpring)({
      opacity: _ ? 1 : 0,
      transform: _ ? "translateY(0)" : "translateY(100%)",
      pointerEvents: "none",
      config: r.config.stiff,
      immediate: g
    }),
    M = i.useMemo(() => null != S ? S : {
      value: 0,
      multiplier: 1
    }, [S]),
    R = i.useRef(M);
  i.useEffect(() => {
    (M.multiplier > 1 || M.value > 0) && (R.current = M)
  }, [M]);
  let {
    multiplier: j,
    value: L
  } = i.useMemo(() => ({
    value: v ? M.value : R.current.value,
    multiplier: v ? M.multiplier : R.current.multiplier
  }), [v, M, R]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(N, {
      channelId: t,
      width: p
    }), (0, l.jsx)(r.animated.div, {
      ref: h,
      className: T.combo,
      style: A,
      children: (0, l.jsx)(Z, {
        value: L,
        multiplier: j
      })
    })]
  })
})