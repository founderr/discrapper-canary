"use strict";
t.r(r), t.d(r, {
  default: function() {
    return c
  }
}), t("222007");
var l = t("884691"),
  n = t("509043"),
  i = t("446674"),
  o = t("841098"),
  a = t("206230"),
  s = t("388491"),
  u = t("528438");
let f = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

function d(e, r, t) {
  var l;
  null == e || null === (l = e.current) || void 0 === l || l.style.setProperty(r, null != t ? t : null)
}

function c(e, r) {
  let {
    themeElementRef: t,
    pendingThemeColors: c,
    isPreview: P,
    useDefaultClientTheme: E
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [p, T] = (0, u.default)(e, r, {
    pendingThemeColors: c,
    isPreview: P
  }), [_, O, U] = (0, i.useStateFromStoresArray)([a.default], () => [a.default.desaturateUserColors, a.default.saturation, a.default.syncProfileThemeWithUserTheme]), I = (0, o.default)(), h = l.useCallback(() => U || E ? I : (0, s.getProfileTheme)(p), [E, U, I, p]), [m, y] = l.useState(h()), S = (0, s.useProfileThemeValues)(m), v = (0, s.useDividerColor)(m, p), N = (0, s.useMessageInputBorderColor)(m, T), A = l.useCallback((e, r) => (0, n.int2hsl)(e, _, null, r), [_]);
  l.useEffect(() => {
    y(h())
  }, [p, U, I, E, h]);
  let L = (0, s.useAvatarBorderColor)(m, p, U),
    g = null != L ? (0, n.int2hsl)(L, !1, _ ? O : null) : null,
    R = e => f.forEach(r => {
      e.style.removeProperty(r)
    });
  return l.useEffect(() => {
    if (null != p && null != T && null != m && null != L && null != v && null != N) {
      let e = U && m !== I ? null == S ? void 0 : S.overlaySyncedWithUserTheme : null == S ? void 0 : S.overlay;
      d(t, "--profile-gradient-primary-color", A(p)), d(t, "--profile-gradient-secondary-color", A(T)), d(t, "--profile-gradient-button-color", A((0, s.calculateButtonColor)(p))), d(t, "--profile-gradient-overlay-color", e), d(t, "--profile-body-background-color", null == S ? void 0 : S.sectionBox), d(t, "--profile-body-background-hover", null == S ? void 0 : S.profileBodyBackgroundHover), d(t, "--profile-body-divider-color", A(v, null == S ? void 0 : S.dividerOpacity)), d(t, "--profile-avatar-border-color", A(L)), d(t, "--profile-message-input-border-color", A(N)), d(t, "--profile-note-background-color", null == S ? void 0 : S.noteBackgroundColor), d(t, "--profile-role-pill-background-color", null == S ? void 0 : S.rolePillBackgroundColor), d(t, "--profile-role-pill-border-color", null == S ? void 0 : S.rolePillBorderColor)
    } else(null == t ? void 0 : t.current) != null && R(null == t ? void 0 : t.current)
  }, [p, T, L, m, I, t, A, U, v, null == S ? void 0 : S.overlaySyncedWithUserTheme, null == S ? void 0 : S.overlay, null == S ? void 0 : S.sectionBox, null == S ? void 0 : S.profileBodyBackgroundHover, null == S ? void 0 : S.dividerOpacity, null == S ? void 0 : S.noteBackgroundColor, null == S ? void 0 : S.rolePillBackgroundColor, null == S ? void 0 : S.rolePillBorderColor, N]), {
    profileTheme: null != m ? m : I,
    primaryProfileColor: p,
    avatarBorderColor: g
  }
}