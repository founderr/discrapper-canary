"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007"), n("860677");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("907002"),
  o = n("446674"),
  u = n("77078"),
  d = n("731898"),
  c = n("206230"),
  f = n("449918"),
  h = n("271938"),
  C = n("191542"),
  p = n("451166"),
  m = n("28007"),
  E = n("880731"),
  g = n("943551"),
  S = n("119035"),
  _ = n("65626"),
  T = n("782340"),
  A = n("365715");
let M = a.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, l = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), i = (0, o.useStateFromStores)([g.default], () => g.default.getMostRecentMessageCombo(t), [t]), [d, f] = a.useState(!1);
    a.useEffect(() => {
      if (null == i ? void 0 : i.displayed) return;
      f(!1), setImmediate(() => {
        let e = null != i ? (0, S.getComboScore)(i.combo) : 0;
        f(e > 0)
      });
      let e = setTimeout(() => {
        f(!1), null != i && (0, m.clearMessageCombo)(i)
      }, 2e3);
      return () => clearTimeout(e)
    }, [i]);
    let h = (0, r.useSpring)({
      opacity: d ? 1 : 0,
      translateY: d ? "0" : null != i ? "100%" : "200%",
      pointerEvents: "none",
      width: n,
      config: l ? r.config.stiff : r.config.slow
    });
    return (0, s.jsx)(s.Fragment, {
      children: null != i && (0, s.jsx)(r.animated.div, {
        className: A.messageComboScore,
        style: h,
        children: (0, s.jsx)(u.Text, {
          className: A.comboScore,
          variant: "text-sm/bold",
          children: (0, S.getComboScore)(i.combo)
        })
      })
    })
  }),
  I = a.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: l,
      square: r,
      flair: o
    } = a.useMemo(() => (0, S.getComboStyles)(n), [n]), d = (0, f.getColor)(l);
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(u.Text, {
        className: A.comboValue,
        variant: "text-sm/bold",
        children: t
      }), (0, s.jsxs)("div", {
        className: A.comboNameplate,
        style: {
          color: d
        },
        children: [(0, s.jsx)(u.Text, {
          className: A.comboMultiplier,
          style: {
            color: d
          },
          variant: "text-sm/bold",
          children: T.default.Messages.POGGERMODE_COMBO.format({
            multiplier: n
          })
        }), r && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: i(A.comboSquare, A.left),
            style: {
              backgroundColor: d
            }
          }), (0, s.jsx)("div", {
            className: i(A.comboSquare, A.right),
            style: {
              backgroundColor: d
            }
          })]
        }), o && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: i(A.confettiIcon, A.left),
            children: (0, s.jsx)(p.default, {
              width: 24,
              height: 24
            })
          }), (0, s.jsx)("div", {
            className: i(A.confettiIcon, A.right),
            children: (0, s.jsx)(p.default, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, s.jsx)(u.Text, {
          className: A.tip,
          variant: "text-sm/bold",
          children: T.default.Messages.POGGERMODE_COMBO_TIP
        })]
      })]
    })
  });
var N = a.memo(function(e) {
  let {
    channelId: t
  } = e, n = (0, o.useStateFromStores)([h.default], () => h.default.getId()), l = (0, o.useStateFromStores)([C.default], () => C.default.isTyping(t, n), [t, n]), i = (0, o.useStateFromStores)([E.default], () => E.default.isEnabled()), u = (0, o.useStateFromStores)([g.default], () => g.default.isComboing(n, t), [t, n]), {
    ref: f,
    width: p = 0
  } = (0, d.default)(), m = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [S, T] = a.useState(!1), N = (0, _.default)(t), v = i && u && l;
  a.useEffect(() => {
    v && T(!0);
    let e = setTimeout(() => T(v), 1e3);
    return () => clearTimeout(e)
  }, [v]);
  let L = (0, r.useSpring)({
      opacity: S ? 1 : 0,
      transform: S ? "translateY(0)" : "translateY(100%)",
      pointerEvents: "none",
      config: r.config.stiff,
      immediate: m
    }),
    R = a.useMemo(() => null != N ? N : {
      value: 0,
      multiplier: 1
    }, [N]),
    x = a.useRef(R);
  a.useEffect(() => {
    (R.multiplier > 1 || R.value > 0) && (x.current = R)
  }, [R]);
  let {
    multiplier: y,
    value: O
  } = a.useMemo(() => ({
    value: v ? R.value : x.current.value,
    multiplier: v ? R.multiplier : x.current.multiplier
  }), [v, R, x]);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(M, {
      channelId: t,
      width: p
    }), (0, s.jsx)(r.animated.div, {
      ref: f,
      className: A.combo,
      style: L,
      children: (0, s.jsx)(I, {
        value: O,
        multiplier: y
      })
    })]
  })
})