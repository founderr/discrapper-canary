t.d(s, {
  Z: function() {
    return C
  }
});
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(481060),
  o = t(906732),
  c = t(642619),
  E = t(626135),
  d = t(74538),
  _ = t(150039),
  T = t(993413),
  S = t(504983),
  u = t(981631),
  I = t(474936),
  N = t(689938),
  A = t(912768);

function C(e) {
  let {
    user: s,
    guild: t,
    className: a,
    sectionTitle: C,
    forcedDivider: O = !1,
    withTutorial: m = !1,
    showBorder: h = !1,
    isTryItOutFlow: g = !1,
    initialSelectedEffectId: R
  } = e, M = (0, _.Kg)(s, t), x = d.ZP.canUsePremiumProfileCustomization(s), {
    analyticsLocations: D
  } = (0, o.ZP)(), {
    pendingProfileEffectId: p,
    errors: L
  } = (0, _.bd)(t), P = i.useCallback(() => (0, c.H)({
    analyticsLocations: D,
    initialSelectedEffectId: R,
    guild: t
  }), [D, R, t]);
  i.useEffect(() => {
    x && E.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
      type: I.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: D
    })
  }, [x, D]);
  let Z = null != t,
    f = g || void 0 !== p ? null != p : null != M,
    v = m ? r.ShinyButton : r.Button;
  return (0, n.jsx)(T.Z, {
    forcedDivider: O,
    borderType: S.Y.PREMIUM,
    hasBackground: !0,
    title: C,
    showBorder: h,
    errors: L,
    className: a,
    children: (0, n.jsxs)("div", {
      className: A.buttonsContainer,
      children: [(0, n.jsx)(v, {
        size: r.Button.Sizes.SMALL,
        onClick: P,
        className: l()({
          [A.buttonHighlighted]: m
        }),
        children: N.Z.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
      }), f && (0, n.jsx)(r.Button, {
        className: A.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, _.s6)(null, M, t)
        },
        children: Z ? N.Z.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : N.Z.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
      })]
    })
  })
}