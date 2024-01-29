"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  s = n("969176"),
  a = n.n(s),
  o = n("669491"),
  u = n("77078"),
  d = n("462274"),
  c = n("217513"),
  f = n("528438"),
  E = n("719923"),
  h = n("409214"),
  _ = n("570697"),
  C = n("782340"),
  p = n("431416");

function S(e) {
  let {
    user: t,
    pendingAvatar: n,
    pendingColors: l,
    onThemeColorsChange: s,
    preventDisabled: S,
    guildId: I,
    className: R,
    showPremiumIcon: m = !0,
    showResetThemeButton: g = !1,
    forcedDivider: v
  } = e, L = (0, c.default)(t.id, I), [T, N] = (0, f.default)(t, L, {
    pendingThemeColors: l,
    isPreview: !0
  }), A = E.default.canUsePremiumProfileCustomization(t), M = null != n ? n : t.getAvatarURL(I, 80), x = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), y = (0, d.useAvatarColors)(M, x, !1);
  if (null == T || null == N) return null;
  let P = e => {
    let t = a(e, null == L ? void 0 : L.themeColors);
    s(t ? void 0 : e)
  };
  return (0, i.jsx)(_.default, {
    title: C.default.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !A && !S,
    className: r(p.profileThemesSection, R),
    showPremiumIcon: m,
    forcedDivider: v,
    children: (0, i.jsxs)("div", {
      className: p.sectionContainer,
      children: [(0, i.jsx)("div", {
        className: p.sparkleContainer,
        children: (0, i.jsx)(h.default, {
          onChange: e => P([e, N]),
          color: T,
          suggestedColors: y,
          showEyeDropper: !0,
          label: (0, i.jsx)(u.Text, {
            className: p.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: C.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
          })
        })
      }), (0, i.jsx)("div", {
        className: p.sparkleContainer,
        children: (0, i.jsx)(h.default, {
          onChange: e => P([T, e]),
          color: N,
          suggestedColors: y,
          showEyeDropper: !0,
          label: (0, i.jsx)(u.Text, {
            className: p.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: C.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), g && null != I && (0, i.jsx)(u.Button, {
        className: p.resetButton,
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        size: u.Button.Sizes.SMALL,
        onClick: () => P([null, null]),
        children: C.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}