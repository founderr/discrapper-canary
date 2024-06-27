var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(920906),
  l = n(399606),
  o = n(607070),
  c = n(104494),
  d = n(639119),
  _ = n(318747),
  E = n(409100),
  u = n(474936),
  T = n(981631),
  I = n(528973);
t.Z = function(e) {
  var t, n;
  let {
    isVisible: a,
    isFullscreen: R,
    subscriptionTier: C
  } = e, g = null === (t = (0, d.N)()) || void 0 === t ? void 0 : t.subscription_trial, p = (0, c.Ng)(), A = (0, c.Wp)(p, u.Si.TIER_2) ? u.Si.TIER_2 : void 0, N = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), m = (0, r.useSpring)({
    transform: a ? "translateY(-100%)" : "translateY(0%)",
    opacity: a ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: N
  }), S = {
    section: T.jXE.MARKETING_FLOATING_CTA
  };
  return (0, s.jsx)(r.animated.div, {
    className: i()(I.wrapper, {
      [I.fullscreenWrapper]: R,
      [I.invisible]: !a
    }),
    style: m,
    children: (0, s.jsxs)("div", {
      className: I.innerWrapper,
      children: [(0, s.jsx)(E.Z, {
        className: I.button,
        subscriptionTier: null !== (n = null != C ? C : null == g ? void 0 : g.sku_id) && void 0 !== n ? n : A,
        premiumModalAnalyticsLocation: S,
        isPersistentCTA: !0
      }), (0, s.jsx)(_.Z, {
        className: I.button,
        premiumModalAnalyticsLocation: S
      })]
    })
  })
}