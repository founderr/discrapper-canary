"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  a = n("866442"),
  o = n("442837"),
  l = n("780384"),
  u = n("607070"),
  d = n("629935"),
  _ = n("168551"),
  c = n("792125"),
  E = n("168631");
let I = Object.freeze({
  "--profile-gradient-primary-color": "var(--background-secondary-alt)",
  "--profile-gradient-secondary-color": "var(--background-secondary-alt)",
  "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
  "--profile-gradient-button-color": "var(--button-secondary-background)",
  "--profile-avatar-border-color": "var(--background-secondary-alt)",
  "--profile-body-background-color": "var(--background-floating)",
  "--profile-body-background-hover": "var(--background-modifier-hover)",
  "--profile-body-divider-color": "var(--background-modifier-accent)",
  "--profile-body-border-color": "var(--border-faint)",
  "--profile-message-input-border-color": "var(--background-modifier-accent)",
  "--profile-note-background-color": "var(--background-tertiary)",
  "--profile-role-pill-background-color": "var(--background-secondary-alt)",
  "--profile-role-pill-border-color": "var(--interactive-normal)"
});

function T(e) {
  let {
    theme: t,
    primaryColor: n,
    secondaryColor: r
  } = e, [T, f] = (0, o.useStateFromStoresArray)([u.default], () => [u.default.desaturateUserColors, u.default.syncProfileThemeWithUserTheme]), S = (0, E.useProfileThemeValues)(t), h = (0, E.useAvatarBorderColor)(t, n, f), A = (0, E.useDividerColor)(t, n), m = (0, E.useMessageInputBorderColor)(t, r), N = f ? null == S ? void 0 : S.overlaySyncedWithUserTheme : null == S ? void 0 : S.overlay;
  return {
    profileThemeStyle: (0, i.useMemo)(() => {
      if (null == n || null == r || null == S || null == h || null == A || null == m || null == N) return I;
      let e = (e, t) => (0, a.int2hsl)(e, T, null, t);
      return {
        "--profile-gradient-primary-color": e(n),
        "--profile-gradient-secondary-color": e(r),
        "--profile-gradient-overlay-color": N,
        "--profile-gradient-button-color": e((0, E.calculateButtonColor)(n)),
        "--profile-avatar-border-color": e(h),
        "--profile-body-background-color": S.sectionBox,
        "--profile-body-background-hover": S.profileBodyBackgroundHover,
        "--profile-body-divider-color": e(A, S.dividerOpacity),
        "--profile-body-border-color": e(A, .12),
        "--profile-message-input-border-color": e(m),
        "--profile-note-background-color": S.noteBackgroundColor,
        "--profile-role-pill-background-color": S.rolePillBackgroundColor,
        "--profile-role-pill-border-color": S.rolePillBorderColor,
        ...(0, d.getThemeColorMixValues)({
          enabled: !0,
          primaryColor: n,
          secondaryColor: r,
          isDarkTheme: (0, l.isThemeDark)(t),
          textMixAmount: 70
        })
      }
    }, [n, r, S, h, A, m, N, t, T]),
    profileThemeClassName: s()((0, c.getThemeClass)(t), {
      [_.CUSTOM_THEME_BACKGROUND_CLASS_NAME]: null != n,
      "custom-profile-theme": null != n
    })
  }
}