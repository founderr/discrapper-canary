t.d(s, {
  Z: function() {
    return A
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(498607),
  r = t.n(l),
  o = t(692547),
  c = t(481060),
  E = t(220082),
  d = t(318661),
  _ = t(721987),
  T = t(74538),
  S = t(193528),
  u = t(993413),
  I = t(689938),
  N = t(983138);

function A(e) {
  let {
    user: s,
    pendingAvatar: t,
    pendingColors: i,
    onThemeColorsChange: l,
    preventDisabled: A,
    guildId: C,
    className: O,
    showPremiumIcon: m = !0,
    showResetThemeButton: h = !1,
    forcedDivider: g
  } = e, R = (0, d.ZP)(s.id, C), {
    primaryColor: M,
    secondaryColor: x
  } = (0, _.Z)({
    user: s,
    displayProfile: R,
    pendingThemeColors: i,
    isPreview: !0
  }), p = T.ZP.canUsePremiumProfileCustomization(s), D = null != t ? t : s.getAvatarURL(C, 80), L = (0, c.useToken)(o.Z.unsafe_rawColors.PRIMARY_530).hex(), P = (0, E.Cf)(D, L, !1);
  if (null == M || null == x) return null;
  let Z = e => {
    l(r()(e, null == R ? void 0 : R.themeColors) ? void 0 : e)
  };
  return (0, n.jsx)(u.Z, {
    title: I.Z.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !p && !A,
    className: a()(N.__invalid_profileThemesSection, O),
    showPremiumIcon: m,
    forcedDivider: g,
    children: (0, n.jsxs)("div", {
      className: N.sectionContainer,
      children: [(0, n.jsx)("div", {
        className: N.sparkleContainer,
        children: (0, n.jsx)(S.Z, {
          onChange: e => Z([e, x]),
          color: M,
          suggestedColors: P,
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
        children: (0, n.jsx)(S.Z, {
          onChange: e => Z([M, e]),
          color: x,
          suggestedColors: P,
          showEyeDropper: !0,
          label: (0, n.jsx)(c.Text, {
            className: N.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: I.Z.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), h && null != C && (0, n.jsx)(c.Button, {
        className: N.resetButton,
        color: c.Button.Colors.PRIMARY,
        look: c.Button.Looks.LINK,
        size: c.Button.Sizes.SMALL,
        onClick: () => Z([null, null]),
        children: I.Z.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}