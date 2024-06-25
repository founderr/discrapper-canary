t.d(s, {
  Z: function() {
    return A
  }
});
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(481060),
  l = t(906732),
  c = t(642619),
  d = t(626135),
  _ = t(74538),
  E = t(150039),
  u = t(993413),
  T = t(504983),
  S = t(981631),
  I = t(474936),
  N = t(689938),
  C = t(912768);

function A(e) {
  let {
    user: s,
    guild: t,
    className: i,
    sectionTitle: A,
    forcedDivider: m = !1,
    withTutorial: O = !1,
    showBorder: g = !1,
    isTryItOutFlow: h = !1,
    initialSelectedEffectId: R
  } = e, p = (0, E.Kg)(s, t), x = _.ZP.canUsePremiumProfileCustomization(s), {
    analyticsLocations: M
  } = (0, l.ZP)(), {
    pendingProfileEffectId: D,
    errors: f
  } = (0, E.bd)(t), L = a.useCallback(() => (0, c.H)({
    analyticsLocations: M,
    initialSelectedEffectId: R,
    guild: t
  }), [M, R, t]);
  a.useEffect(() => {
    x && d.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
      type: I.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: M
    })
  }, [x, M]);
  let P = null != t,
    Z = h || void 0 !== D ? null != D : null != p,
    v = O ? o.ShinyButton : o.Button;
  return (0, n.jsx)(u.Z, {
    forcedDivider: m,
    borderType: T.Y.PREMIUM,
    hasBackground: !0,
    title: A,
    showBorder: g,
    errors: f,
    className: i,
    children: (0, n.jsxs)("div", {
      className: C.buttonsContainer,
      children: [(0, n.jsx)(v, {
        size: o.Button.Sizes.SMALL,
        onClick: L,
        className: r()({
          [C.buttonHighlighted]: O
        }),
        children: N.Z.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
      }), Z && (0, n.jsx)(o.Button, {
        className: C.removeButton,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        size: o.Button.Sizes.SMALL,
        onClick: function() {
          (0, E.s6)(null, p, t)
        },
        children: P ? N.Z.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : N.Z.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
      })]
    })
  })
}