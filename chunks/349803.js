var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(920906),
  l = t(399606),
  o = t(607070),
  _ = t(104494),
  c = t(639119),
  E = t(318747),
  u = t(409100),
  d = t(474936),
  R = t(981631),
  I = t(528973);
s.Z = function(e) {
  var s, t;
  let {
    isVisible: a,
    isFullscreen: T,
    subscriptionTier: A
  } = e, M = null === (s = (0, c.N)()) || void 0 === s ? void 0 : s.subscription_trial, S = (0, _.Ng)(), N = (0, _.Wp)(S, d.Si.TIER_2) ? d.Si.TIER_2 : void 0, p = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), m = (0, i.useSpring)({
    transform: a ? "translateY(-100%)" : "translateY(0%)",
    opacity: a ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: p
  }), g = {
    section: R.jXE.MARKETING_FLOATING_CTA
  };
  return (0, n.jsx)(i.animated.div, {
    className: r()(I.wrapper, {
      [I.fullscreenWrapper]: T,
      [I.invisible]: !a
    }),
    style: m,
    children: (0, n.jsxs)("div", {
      className: I.innerWrapper,
      children: [(0, n.jsx)(u.Z, {
        className: I.button,
        subscriptionTier: null !== (t = null != A ? A : null == M ? void 0 : M.sku_id) && void 0 !== t ? t : N,
        premiumModalAnalyticsLocation: g,
        isPersistentCTA: !0
      }), (0, n.jsx)(E.Z, {
        className: I.button,
        premiumModalAnalyticsLocation: g
      })]
    })
  })
}