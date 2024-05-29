"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
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

function g(e) {
  let {
    user: t,
    pendingAvatar: s,
    pendingColors: n,
    onThemeColorsChange: i,
    preventDisabled: g,
    guildId: I,
    className: N,
    showPremiumIcon: h = !0,
    showResetThemeButton: C = !1,
    forcedDivider: A
  } = e, p = (0, c.default)(t.id, I), {
    primaryColor: O,
    secondaryColor: R
  } = (0, S.default)({
    user: t,
    displayProfile: p,
    pendingThemeColors: n,
    isPreview: !0
  }), x = E.default.canUsePremiumProfileCustomization(t), M = null != s ? s : t.getAvatarURL(I, 80), v = (0, d.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), L = (0, u.useAvatarColors)(M, v, !1);
  if (null == O || null == R) return null;
  let D = e => {
    i(r()(e, null == p ? void 0 : p.themeColors) ? void 0 : e)
  };
  return (0, a.jsx)(_.default, {
    title: f.default.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !x && !g,
    className: l()(m.__invalid_profileThemesSection, N),
    showPremiumIcon: h,
    forcedDivider: A,
    children: (0, a.jsxs)("div", {
      className: m.sectionContainer,
      children: [(0, a.jsx)("div", {
        className: m.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => D([e, R]),
          color: O,
          suggestedColors: L,
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
          onChange: e => D([O, e]),
          color: R,
          suggestedColors: L,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: m.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: f.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), C && null != I && (0, a.jsx)(d.Button, {
        className: m.resetButton,
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        size: d.Button.Sizes.SMALL,
        onClick: () => D([null, null]),
        children: f.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}