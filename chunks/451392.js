"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
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
  I = s("452240");

function m(e) {
  let {
    user: t,
    pendingAvatar: s,
    pendingColors: n,
    onThemeColorsChange: i,
    preventDisabled: m,
    guildId: N,
    className: g,
    showPremiumIcon: h = !0,
    showResetThemeButton: C = !1,
    forcedDivider: A
  } = e, O = (0, c.default)(t.id, N), {
    primaryColor: p,
    secondaryColor: R
  } = (0, S.default)({
    user: t,
    displayProfile: O,
    pendingThemeColors: n,
    isPreview: !0
  }), x = E.default.canUsePremiumProfileCustomization(t), M = null != s ? s : t.getAvatarURL(N, 80), D = (0, d.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), L = (0, u.useAvatarColors)(M, D, !1);
  if (null == p || null == R) return null;
  let v = e => {
    i(r()(e, null == O ? void 0 : O.themeColors) ? void 0 : e)
  };
  return (0, a.jsx)(_.default, {
    title: f.default.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !x && !m,
    className: l()(I.__invalid_profileThemesSection, g),
    showPremiumIcon: h,
    forcedDivider: A,
    children: (0, a.jsxs)("div", {
      className: I.sectionContainer,
      children: [(0, a.jsx)("div", {
        className: I.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => v([e, R]),
          color: p,
          suggestedColors: L,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: I.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: f.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
          })
        })
      }), (0, a.jsx)("div", {
        className: I.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => v([p, e]),
          color: R,
          suggestedColors: L,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: I.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: f.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), C && null != N && (0, a.jsx)(d.Button, {
        className: I.resetButton,
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        size: d.Button.Sizes.SMALL,
        onClick: () => v([null, null]),
        children: f.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}