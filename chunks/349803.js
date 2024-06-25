var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(920906),
  l = s(399606),
  o = s(607070),
  c = s(104494),
  E = s(639119),
  _ = s(318747),
  u = s(409100),
  d = s(474936),
  T = s(981631),
  I = s(528973);
t.Z = function(e) {
  var t, s;
  let {
    isVisible: a,
    isFullscreen: R,
    subscriptionTier: A
  } = e, N = null === (t = (0, E.N)()) || void 0 === t ? void 0 : t.subscription_trial, C = (0, c.Ng)(), g = (0, c.Wp)(C, d.Si.TIER_2) ? d.Si.TIER_2 : void 0, m = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), M = (0, r.useSpring)({
    transform: a ? "translateY(-100%)" : "translateY(0%)",
    opacity: a ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: m
  }), S = {
    section: T.jXE.MARKETING_FLOATING_CTA
  };
  return (0, n.jsx)(r.animated.div, {
    className: i()(I.wrapper, {
      [I.fullscreenWrapper]: R,
      [I.invisible]: !a
    }),
    style: M,
    children: (0, n.jsxs)("div", {
      className: I.innerWrapper,
      children: [(0, n.jsx)(u.Z, {
        className: I.button,
        subscriptionTier: null !== (s = null != A ? A : null == N ? void 0 : N.sku_id) && void 0 !== s ? s : g,
        premiumModalAnalyticsLocation: S,
        isPersistentCTA: !0
      }), (0, n.jsx)(_.Z, {
        className: I.button,
        premiumModalAnalyticsLocation: S
      })]
    })
  })
}