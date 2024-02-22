"use strict";
l.r(t), l.d(t, {
  useProfileThemeValues: function() {
    return h
  },
  getProfileTheme: function() {
    return E
  },
  getValueInColorGradientByPercentage: function() {
    return R
  },
  useAvatarBorderColor: function() {
    return _
  },
  calculateButtonColor: function() {
    return O
  },
  useMessageInputBorderColor: function() {
    return T
  },
  useDividerColor: function() {
    return C
  }
}), l("222007");
var r = l("884691"),
  n = l("917351"),
  o = l("509043"),
  u = l("65597"),
  a = l("669491"),
  i = l("819855"),
  s = l("206230"),
  c = l("449918"),
  f = l("172182"),
  d = l("49111");

function h(e) {
  let t = (0, u.default)([s.default], () => s.default.saturation);
  return (0, r.useMemo)(() => null == e ? null : {
    overlaySyncedWithUserTheme: a.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    overlay: a.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    sectionBox: a.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    messageInputBorder: a.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    dividerOpacity: e === a.default.themes.DARK ? .24 : .12,
    noteBackgroundColor: a.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    profileBodyBackgroundHover: a.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    rolePillBackgroundColor: a.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    rolePillBorderColor: a.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
      theme: e,
      saturation: t
    }).hsl(),
    icon: a.default.colors.INTERACTIVE_NORMAL.resolve({
      theme: e,
      saturation: t
    }).hsl()
  }, [e, t])
}

function E(e) {
  if (null == e) return null;
  let t = (0, o.getDarkness)(e);
  return t > .5 ? d.ThemeTypes.DARK : d.ThemeTypes.LIGHT
}

function R(e, t, l) {
  let r = l / 100,
    n = 1 - r;
  return [Math.round(e[0] * n + t[0] * r), Math.round(e[1] * n + t[1] * r), Math.round(e[2] * n + t[2] * r)]
}

function I(e, t) {
  let l = (0, o.int2rgbArray)(e);
  if (null == t) return 0;
  let r = f.default.parseString(t);
  if (null == r) return 0;
  let n = [r.red, r.green, r.blue],
    u = [l[0], l[1], l[2]],
    a = r.alpha,
    [i, s, c] = n.map((e, t) => Math.floor(a * e + (1 - a) * u[t]));
  return (0, o.rgb2int)("rgba(".concat(i, ", ").concat(s, ", ").concat(c, ")"))
}

function _(e, t, l) {
  let r = h(e);
  return null == r || null == t ? null : I(t, l ? r.overlaySyncedWithUserTheme : r.overlay)
}
let O = (0, n.memoize)(e => {
  let t = (0, i.getContrastingColor)(e, {
    base: "#ffffff",
    contrastRatio: i.WCAGContrastRatios.HighContrastText
  });
  return (0, o.hex2int)(t)
}, e => e);

function T(e, t) {
  let l = h(e);
  return null != l && null != t ? I(t, null == l ? void 0 : l.messageInputBorder) : null
}

function C(e, t) {
  let l = (0, c.useColorValue)(d.Color.WHITE_500).hex;
  return (0, i.isThemeDark)(e) ? (0, o.hex2int)(l) : null != t ? O(t) : null
}