"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
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
    className: i,
    sectionTitle: m,
    forcedDivider: A = !1,
    withTutorial: C = !1,
    showBorder: O = !1,
    isTryItOutFlow: h = !1,
    initialSelectedEffectId: R
  } = e, p = (0, E.useGlobalOrGuildIdentityProfileEffect)(t, s), M = S.default.canUsePremiumProfileCustomization(t), {
    analyticsLocations: D
  } = (0, o.default)(), {
    pendingProfileEffectId: x,
    errors: L
  } = (0, E.useGlobalOrGuildIdentityPendingProfileEffect)(s), P = n.useCallback(() => (0, d.openProfileEffectModal)({
    analyticsLocations: D,
    initialSelectedEffectId: R,
    guild: s
  }), [D, R, s]);
  n.useEffect(() => {
    M && c.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: N.PremiumUpsellTypes.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: D
    })
  }, [M, D]);
  let b = null != s,
    v = h || void 0 !== x ? null != x : null != p,
    U = C ? u.default : r.Button;
  return (0, a.jsx)(T.default, {
    forcedDivider: A,
    borderType: _.FeatureBorderTypes.PREMIUM,
    hasBackground: !0,
    title: m,
    showBorder: O,
    errors: L,
    className: i,
    children: (0, a.jsxs)("div", {
      className: f.buttonsContainer,
      children: [(0, a.jsx)(U, {
        size: r.Button.Sizes.SMALL,
        onClick: P,
        className: l()({
          [f.buttonHighlighted]: C
        }),
        children: g.default.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
      }), v && (0, a.jsx)(r.Button, {
        className: f.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, E.setNewPendingProfileEffectId)(null, p, s)
        },
        children: b ? g.default.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : g.default.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
      })]
    })
  })
}