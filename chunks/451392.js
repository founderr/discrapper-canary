"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  l = s("498607"),
  r = s.n(l),
  o = s("692547"),
  d = s("481060"),
  u = s("220082"),
  c = s("318661"),
  S = s("721987"),
  E = s("74538"),
  T = s("193528"),
  _ = s("993413"),
  I = s("689938"),
  N = s("452240");

function g(e) {
  let {
    user: t,
    pendingAvatar: s,
    pendingColors: n,
    onThemeColorsChange: l,
    preventDisabled: g,
    guildId: f,
    className: m,
    showPremiumIcon: A = !0,
    showResetThemeButton: C = !1,
    forcedDivider: O
  } = e, h = (0, c.default)(t.id, f), {
    primaryColor: R,
    secondaryColor: p
  } = (0, S.default)({
    user: t,
    displayProfile: h,
    pendingThemeColors: n,
    isPreview: !0
  }), M = E.default.canUsePremiumProfileCustomization(t), D = null != s ? s : t.getAvatarURL(f, 80), x = (0, d.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), L = (0, u.useAvatarColors)(D, x, !1);
  if (null == R || null == p) return null;
  let P = e => {
    l(r()(e, null == h ? void 0 : h.themeColors) ? void 0 : e)
  };
  return (0, a.jsx)(_.default, {
    title: I.default.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !M && !g,
    className: i()(N.__invalid_profileThemesSection, m),
    showPremiumIcon: A,
    forcedDivider: O,
    children: (0, a.jsxs)("div", {
      className: N.sectionContainer,
      children: [(0, a.jsx)("div", {
        className: N.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => P([e, p]),
          color: R,
          suggestedColors: L,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: N.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: I.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
          })
        })
      }), (0, a.jsx)("div", {
        className: N.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => P([R, e]),
          color: p,
          suggestedColors: L,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: N.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: I.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), C && null != f && (0, a.jsx)(d.Button, {
        className: N.resetButton,
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        size: d.Button.Sizes.SMALL,
        onClick: () => P([null, null]),
        children: I.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}