"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("498607"),
  r = s.n(i),
  o = s("692547"),
  d = s("481060"),
  u = s("220082"),
  c = s("318661"),
  S = s("721987"),
  E = s("74538"),
  T = s("193528"),
  _ = s("993413"),
  f = s("689938"),
  m = s("452240");

function I(e) {
  let {
    user: t,
    pendingAvatar: s,
    pendingColors: n,
    onThemeColorsChange: i,
    preventDisabled: I,
    guildId: g,
    className: N,
    showPremiumIcon: h = !0,
    showResetThemeButton: C = !1,
    forcedDivider: O
  } = e, A = (0, c.default)(t.id, g), {
    primaryColor: p,
    secondaryColor: R
  } = (0, S.default)({
    user: t,
    displayProfile: A,
    pendingThemeColors: n,
    isPreview: !0
  }), x = E.default.canUsePremiumProfileCustomization(t), M = null != s ? s : t.getAvatarURL(g, 80), L = (0, d.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), D = (0, u.useAvatarColors)(M, L, !1);
  if (null == p || null == R) return null;
  let P = e => {
    i(r()(e, null == A ? void 0 : A.themeColors) ? void 0 : e)
  };
  return (0, a.jsx)(_.default, {
    title: f.default.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !x && !I,
    className: l()(m.__invalid_profileThemesSection, N),
    showPremiumIcon: h,
    forcedDivider: O,
    children: (0, a.jsxs)("div", {
      className: m.sectionContainer,
      children: [(0, a.jsx)("div", {
        className: m.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => P([e, R]),
          color: p,
          suggestedColors: D,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: m.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: f.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
          })
        })
      }), (0, a.jsx)("div", {
        className: m.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => P([p, e]),
          color: R,
          suggestedColors: D,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: m.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: f.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), C && null != g && (0, a.jsx)(d.Button, {
        className: m.resetButton,
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        size: d.Button.Sizes.SMALL,
        onClick: () => P([null, null]),
        children: f.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}