"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
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
  I = s("981631"),
  N = s("474936"),
  g = s("689938"),
  f = s("484589");

function m(e) {
  let {
    user: t,
    guild: s,
    className: l,
    sectionTitle: m,
    forcedDivider: C = !1,
    withTutorial: A = !1,
    showBorder: h = !1,
    isTryItOutFlow: O = !1,
    initialSelectedEffectId: p
  } = e, R = (0, E.useGlobalOrGuildIdentityProfileEffect)(t, s), M = S.default.canUsePremiumProfileCustomization(t), {
    analyticsLocations: x
  } = (0, o.default)(), {
    pendingProfileEffectId: D,
    errors: L
  } = (0, E.useGlobalOrGuildIdentityPendingProfileEffect)(s), P = n.useCallback(() => (0, d.openProfileEffectModal)({
    analyticsLocations: x,
    initialSelectedEffectId: p,
    guild: s
  }), [x, p, s]);
  n.useEffect(() => {
    M && c.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: N.PremiumUpsellTypes.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: x
    })
  }, [M, x]);
  let b = null != s,
    v = O || void 0 !== D ? null != D : null != R,
    U = A ? u.default : r.Button;
  return (0, a.jsx)(T.default, {
    forcedDivider: C,
    borderType: _.FeatureBorderTypes.PREMIUM,
    hasBackground: !0,
    title: m,
    showBorder: h,
    errors: L,
    className: l,
    children: (0, a.jsxs)("div", {
      className: f.buttonsContainer,
      children: [(0, a.jsx)(U, {
        size: r.Button.Sizes.SMALL,
        onClick: P,
        className: i()({
          [f.buttonHighlighted]: A
        }),
        children: g.default.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
      }), v && (0, a.jsx)(r.Button, {
        className: f.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, E.setNewPendingProfileEffectId)(null, R, s)
        },
        children: b ? g.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : g.default.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
      })]
    })
  })
}