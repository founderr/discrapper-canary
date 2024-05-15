"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
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
  f = s("504983"),
  m = s("981631"),
  _ = s("474936"),
  g = s("689938"),
  I = s("484589");

function h(e) {
  let {
    user: t,
    guild: s,
    className: l,
    sectionTitle: h,
    forcedDivider: N = !1,
    withTutorial: p = !1,
    showBorder: C = !1,
    isTryItOutFlow: A = !1,
    initialSelectedEffectId: O
  } = e, x = (0, E.useGlobalOrGuildIdentityProfileEffect)(t, s), R = S.default.canUsePremiumProfileCustomization(t), {
    analyticsLocations: M
  } = (0, o.default)(), {
    pendingProfileEffectId: v,
    errors: L
  } = (0, E.useGlobalOrGuildIdentityPendingProfileEffect)(s), D = n.useCallback(() => (0, d.openProfileEffectModal)({
    analyticsLocations: M,
    initialSelectedEffectId: O,
    guild: s
  }), [M, O, s]);
  n.useEffect(() => {
    R && c.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: _.PremiumUpsellTypes.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: M
    })
  }, [R, M]);
  let P = null != s,
    j = A || void 0 !== v ? null != v : null != x,
    b = p ? u.default : r.Button;
  return (0, a.jsx)(T.default, {
    forcedDivider: N,
    borderType: f.FeatureBorderTypes.PREMIUM,
    hasBackground: !0,
    title: h,
    showBorder: C,
    errors: L,
    className: l,
    children: (0, a.jsxs)("div", {
      className: I.buttonsContainer,
      children: [(0, a.jsx)(b, {
        size: r.Button.Sizes.SMALL,
        onClick: D,
        className: i()({
          [I.buttonHighlighted]: p
        }),
        children: g.default.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
      }), j && (0, a.jsx)(r.Button, {
        className: I.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, E.setNewPendingProfileEffectId)(null, x, s)
        },
        children: P ? g.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : g.default.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
      })]
    })
  })
}