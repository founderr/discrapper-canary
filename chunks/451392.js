t.d(s, {
  Z: function() {
    return C
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  r = t(498607),
  o = t.n(r),
  l = t(692547),
  c = t(481060),
  d = t(220082),
  _ = t(318661),
  E = t(721987),
  u = t(74538),
  T = t(193528),
  S = t(993413),
  I = t(689938),
  N = t(983138);

function C(e) {
  let {
    user: s,
    pendingAvatar: t,
    pendingColors: a,
    onThemeColorsChange: r,
    preventDisabled: C,
    guildId: A,
    className: m,
    showPremiumIcon: O = !0,
    showResetThemeButton: g = !1,
    forcedDivider: h
  } = e, R = (0, _.ZP)(s.id, A), {
    primaryColor: p,
    secondaryColor: x
  } = (0, E.Z)({
    user: s,
    displayProfile: R,
    pendingThemeColors: a,
    isPreview: !0
  }), M = u.ZP.canUsePremiumProfileCustomization(s), D = null != t ? t : s.getAvatarURL(A, 80), f = (0, c.useToken)(l.Z.unsafe_rawColors.PRIMARY_530).hex(), L = (0, d.Cf)(D, f, !1);
  if (null == p || null == x) return null;
  let P = e => {
    r(o()(e, null == R ? void 0 : R.themeColors) ? void 0 : e)
  };
  return (0, n.jsx)(S.Z, {
    title: I.Z.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !M && !C,
    className: i()(N.__invalid_profileThemesSection, m),
    showPremiumIcon: O,
    forcedDivider: h,
    children: (0, n.jsxs)("div", {
      className: N.sectionContainer,
      children: [(0, n.jsx)("div", {
        className: N.sparkleContainer,
        children: (0, n.jsx)(T.Z, {
          onChange: e => P([e, x]),
          color: p,
          suggestedColors: L,
          showEyeDropper: !0,
          label: (0, n.jsx)(c.Text, {
            className: N.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: I.Z.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
          })
        })
      }), (0, n.jsx)("div", {
        className: N.sparkleContainer,
        children: (0, n.jsx)(T.Z, {
          onChange: e => P([p, e]),
          color: x,
          suggestedColors: L,
          showEyeDropper: !0,
          label: (0, n.jsx)(c.Text, {
            className: N.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: I.Z.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), g && null != A && (0, n.jsx)(c.Button, {
        className: N.resetButton,
        color: c.Button.Colors.PRIMARY,
        look: c.Button.Looks.LINK,
        size: c.Button.Sizes.SMALL,
        onClick: () => P([null, null]),
        children: I.Z.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}