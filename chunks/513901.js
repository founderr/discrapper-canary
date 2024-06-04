"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("481060"),
  o = s("906732"),
  d = s("642619"),
  u = s("976644"),
  c = s("626135"),
  S = s("74538"),
  E = s("150039"),
  T = s("993413"),
  _ = s("504983"),
  f = s("981631"),
  I = s("474936"),
  m = s("689938"),
  N = s("484589");

function g(e) {
  let {
    user: t,
    guild: s,
    className: l,
    sectionTitle: g,
    forcedDivider: h = !1,
    withTutorial: C = !1,
    showBorder: A = !1,
    isTryItOutFlow: O = !1,
    initialSelectedEffectId: p
  } = e, R = (0, E.useGlobalOrGuildIdentityProfileEffect)(t, s), x = S.default.canUsePremiumProfileCustomization(t), {
    analyticsLocations: M
  } = (0, o.default)(), {
    pendingProfileEffectId: D,
    errors: L
  } = (0, E.useGlobalOrGuildIdentityPendingProfileEffect)(s), v = n.useCallback(() => (0, d.openProfileEffectModal)({
    analyticsLocations: M,
    initialSelectedEffectId: p,
    guild: s
  }), [M, p, s]);
  n.useEffect(() => {
    x && c.default.track(f.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: I.PremiumUpsellTypes.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: M
    })
  }, [x, M]);
  let P = null != s,
    b = O || void 0 !== D ? null != D : null != R,
    U = C ? u.default : r.Button;
  return (0, a.jsx)(T.default, {
    forcedDivider: h,
    borderType: _.FeatureBorderTypes.PREMIUM,
    hasBackground: !0,
    title: g,
    showBorder: A,
    errors: L,
    className: l,
    children: (0, a.jsxs)("div", {
      className: N.buttonsContainer,
      children: [(0, a.jsx)(U, {
        size: r.Button.Sizes.SMALL,
        onClick: v,
        className: i()({
          [N.buttonHighlighted]: C
        }),
        children: m.default.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
      }), b && (0, a.jsx)(r.Button, {
        className: N.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, E.setNewPendingProfileEffectId)(null, R, s)
        },
        children: P ? m.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : m.default.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
      })]
    })
  })
}