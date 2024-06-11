"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("481060"),
  o = s("906732"),
  d = s("642619"),
  u = s("626135"),
  c = s("74538"),
  S = s("150039"),
  E = s("993413"),
  T = s("504983"),
  _ = s("981631"),
  I = s("474936"),
  N = s("689938"),
  g = s("484589");

function f(e) {
  let {
    user: t,
    guild: s,
    className: i,
    sectionTitle: f,
    forcedDivider: m = !1,
    withTutorial: A = !1,
    showBorder: C = !1,
    isTryItOutFlow: O = !1,
    initialSelectedEffectId: h
  } = e, R = (0, S.useGlobalOrGuildIdentityProfileEffect)(t, s), p = c.default.canUsePremiumProfileCustomization(t), {
    analyticsLocations: M
  } = (0, o.default)(), {
    pendingProfileEffectId: D,
    errors: x
  } = (0, S.useGlobalOrGuildIdentityPendingProfileEffect)(s), L = n.useCallback(() => (0, d.openProfileEffectModal)({
    analyticsLocations: M,
    initialSelectedEffectId: h,
    guild: s
  }), [M, h, s]);
  n.useEffect(() => {
    p && u.default.track(_.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: I.PremiumUpsellTypes.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: M
    })
  }, [p, M]);
  let P = null != s,
    b = O || void 0 !== D ? null != D : null != R,
    v = A ? r.ShinyButton : r.Button;
  return (0, a.jsx)(E.default, {
    forcedDivider: m,
    borderType: T.FeatureBorderTypes.PREMIUM,
    hasBackground: !0,
    title: f,
    showBorder: C,
    errors: x,
    className: i,
    children: (0, a.jsxs)("div", {
      className: g.buttonsContainer,
      children: [(0, a.jsx)(v, {
        size: r.Button.Sizes.SMALL,
        onClick: L,
        className: l()({
          [g.buttonHighlighted]: A
        }),
        children: N.default.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
      }), b && (0, a.jsx)(r.Button, {
        className: g.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, S.setNewPendingProfileEffectId)(null, R, s)
        },
        children: P ? N.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : N.default.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
      })]
    })
  })
}