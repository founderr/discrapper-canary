"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("222007");
var r = l("884691"),
  a = l("509043"),
  n = l("446674"),
  s = l("841098"),
  i = l("206230"),
  o = l("388491"),
  u = l("528438");
let d = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

function c(e, t, l) {
  var r;
  null == e || null === (r = e.current) || void 0 === r || r.style.setProperty(t, null != l ? l : null)
}

function f(e, t) {
  let {
    themeElementRef: l,
    pendingThemeColors: f,
    isPreview: T,
    useDefaultClientTheme: p
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [m, E] = (0, u.default)(e, t, {
    pendingThemeColors: f,
    isPreview: T
  }), [P, S, v] = (0, n.useStateFromStoresArray)([i.default], () => [i.default.desaturateUserColors, i.default.saturation, i.default.syncProfileThemeWithUserTheme]), h = (0, s.default)(), g = r.useCallback(() => v || p ? h : (0, o.getProfileTheme)(m), [p, v, h, m]), [_, N] = r.useState(g()), O = (0, o.useProfileThemeValues)(_), U = (0, o.useDividerColor)(_, m), A = (0, o.useMessageInputBorderColor)(_, E), C = r.useCallback((e, t) => (0, a.int2hsl)(e, P, null, t), [P]);
  r.useEffect(() => {
    N(g())
  }, [m, v, h, p, g]);
  let I = (0, o.useAvatarBorderColor)(_, m, v),
    y = null != I ? (0, a.int2hsl)(I, !1, P ? S : null) : null,
    M = e => d.forEach(t => {
      e.style.removeProperty(t)
    });
  return r.useEffect(() => {
    if (null != m && null != E && null != _ && null != I && null != U && null != A) {
      let e = v && _ !== h ? null == O ? void 0 : O.overlaySyncedWithUserTheme : null == O ? void 0 : O.overlay;
      c(l, "--profile-gradient-primary-color", C(m)), c(l, "--profile-gradient-secondary-color", C(E)), c(l, "--profile-gradient-button-color", C((0, o.calculateButtonColor)(m))), c(l, "--profile-gradient-overlay-color", e), c(l, "--profile-body-background-color", null == O ? void 0 : O.sectionBox), c(l, "--profile-body-background-hover", null == O ? void 0 : O.profileBodyBackgroundHover), c(l, "--profile-body-divider-color", C(U, null == O ? void 0 : O.dividerOpacity)), c(l, "--profile-avatar-border-color", C(I)), c(l, "--profile-message-input-border-color", C(A)), c(l, "--profile-note-background-color", null == O ? void 0 : O.noteBackgroundColor), c(l, "--profile-role-pill-background-color", null == O ? void 0 : O.rolePillBackgroundColor), c(l, "--profile-role-pill-border-color", null == O ? void 0 : O.rolePillBorderColor)
    } else(null == l ? void 0 : l.current) != null && M(null == l ? void 0 : l.current)
  }, [m, E, I, _, h, l, C, v, U, null == O ? void 0 : O.overlaySyncedWithUserTheme, null == O ? void 0 : O.overlay, null == O ? void 0 : O.sectionBox, null == O ? void 0 : O.profileBodyBackgroundHover, null == O ? void 0 : O.dividerOpacity, null == O ? void 0 : O.noteBackgroundColor, null == O ? void 0 : O.rolePillBackgroundColor, null == O ? void 0 : O.rolePillBorderColor, A]), {
    profileTheme: null != _ ? _ : h,
    primaryProfileColor: m,
    avatarBorderColor: y
  }
}