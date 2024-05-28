"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
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
  m = s("474936"),
  I = s("689938"),
  g = s("484589");

function N(e) {
  let {
    user: t,
    guild: s,
    className: l,
    sectionTitle: N,
    forcedDivider: h = !1,
    withTutorial: C = !1,
    showBorder: O = !1,
    isTryItOutFlow: A = !1,
    initialSelectedEffectId: p
  } = e, R = (0, E.useGlobalOrGuildIdentityProfileEffect)(t, s), x = S.default.canUsePremiumProfileCustomization(t), {
    analyticsLocations: M
  } = (0, o.default)(), {
    pendingProfileEffectId: L,
    errors: D
  } = (0, E.useGlobalOrGuildIdentityPendingProfileEffect)(s), P = n.useCallback(() => (0, d.openProfileEffectModal)({
    analyticsLocations: M,
    initialSelectedEffectId: p,
    guild: s
  }), [M, p, s]);
  n.useEffect(() => {
    x && c.default.track(f.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: m.PremiumUpsellTypes.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: M
    })
  }, [x, M]);
  let v = null != s,
    b = A || void 0 !== L ? null != L : null != R,
    j = C ? u.default : r.Button;
  return (0, a.jsx)(T.default, {
    forcedDivider: h,
    borderType: _.FeatureBorderTypes.PREMIUM,
    hasBackground: !0,
    title: N,
    showBorder: O,
    errors: D,
    className: l,
    children: (0, a.jsxs)("div", {
      className: g.buttonsContainer,
      children: [(0, a.jsx)(j, {
        size: r.Button.Sizes.SMALL,
        onClick: P,
        className: i()({
          [g.buttonHighlighted]: C
        }),
        children: I.default.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
      }), b && (0, a.jsx)(r.Button, {
        className: g.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, E.setNewPendingProfileEffectId)(null, R, s)
        },
        children: v ? I.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : I.default.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
      })]
    })
  })
}