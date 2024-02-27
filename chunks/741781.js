"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("685665"),
  d = s("493390"),
  u = s("181114"),
  c = s("599110"),
  S = s("719923"),
  E = s("906932"),
  T = s("570697"),
  f = s("632892"),
  m = s("49111"),
  _ = s("646718"),
  g = s("782340"),
  h = s("535031");

function I(e) {
  let {
    user: t,
    guild: s,
    className: l,
    forcedDivider: I = !1,
    withTutorial: N = !1,
    showBorder: p = !1,
    isTryItOutFlow: C = !1,
    initialSelectedEffectId: A
  } = e, O = (0, E.useGlobalOrGuildIdentityProfileEffect)(t, s), x = S.default.canUsePremiumProfileCustomization(t), {
    analyticsLocations: R
  } = (0, o.default)(), {
    pendingProfileEffectId: M,
    errors: D
  } = (0, E.useGlobalOrGuildIdentityPendingProfileEffect)(s), v = n.useCallback(() => (0, d.openProfileEffectModal)({
    analyticsLocations: R,
    initialSelectedEffectId: A,
    guild: s
  }), [R, A, s]);
  n.useEffect(() => {
    x && c.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: _.PremiumUpsellTypes.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: R
    })
  }, [x, R]);
  let L = null != s,
    P = C || void 0 !== M ? null != M : null != O,
    j = N ? u.default : r.Button;
  return (0, a.jsx)(T.default, {
    forcedDivider: I,
    borderType: f.FeatureBorderTypes.PREMIUM,
    hasBackground: !0,
    title: g.default.Messages.USER_SETTINGS_PROFILE_EFFECT,
    showBorder: p,
    errors: D,
    className: l,
    children: (0, a.jsxs)("div", {
      className: h.buttonsContainer,
      children: [(0, a.jsx)(j, {
        size: r.Button.Sizes.SMALL,
        onClick: v,
        className: i({
          [h.buttonHighlighted]: N
        }),
        children: g.default.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
      }), P && (0, a.jsx)(r.Button, {
        className: h.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, E.setNewPendingProfileEffectId)(null, O, s)
        },
        children: L ? g.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : g.default.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
      })]
    })
  })
}