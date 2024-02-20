"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return b
  }
});
var r, s = n("446674"),
  a = n("151426"),
  o = n("669491"),
  l = n("819855"),
  u = n("913144"),
  c = n("206230"),
  d = n("253539");
n("21121");
var p = n("228803");
n("831588");
var h = n("922932"),
  f = n("773336"),
  E = n("737292"),
  _ = n("168973"),
  m = n("374363"),
  S = n("116319"),
  g = n("49111"),
  T = n("941719");
let I = null !== (r = (0, p.default)()) && void 0 !== r ? r : g.ThemeTypes.DARK,
  v = I,
  C = null,
  A = !1;

function R() {
  let e = function() {
    var e, t;
    if (__OVERLAY__) return g.ThemeTypes.DARK;
    if (c.default.syncForcedColors && "active" === c.default.systemForcedColors && null != i) return i;
    let n = _.default.useSystemTheme;
    if (n === S.SystemThemeState.ON && null != i) return i;
    let r = null === (e = E.default.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != r) return r;
    let s = null === (t = m.default.settings.appearance) || void 0 === t ? void 0 : t.theme;
    return null == s ? v : s === a.Theme.LIGHT ? g.ThemeTypes.LIGHT : g.ThemeTypes.DARK
  }();
  return e
}

function N() {
  return O()
}

function y() {
  return O()
}

function O() {
  let e = R();
  return e !== v && (v = e, !0)
}
class D extends s.default.PersistedStore {
  initialize(e) {
    (null == e ? void 0 : e.theme) != null && (v = e.theme), this.waitFor(_.default, E.default, m.default, c.default)
  }
  getState() {
    return {
      theme: this.theme
    }
  }
  get darkSidebar() {
    return (0, l.isThemeLight)(this.theme) && _.default.darkSidebar && !A
  }
  get theme() {
    return R()
  }
  get systemTheme() {
    return C
  }
  get systemPrefersColorScheme() {
    return i
  }
  get isSystemThemeAvailable() {
    return null !== C
  }
}
D.displayName = "ThemeStore", D.persistKey = "ThemeStore", D.migrations = [e => {
  let t = e.theme;
  return "amoled" === t && (t = "midnight"), {
    ...e,
    theme: t
  }
}];
var b = new D(u.default, {
  CACHE_LOADED: N,
  CONNECTION_OPEN: N,
  LOGOUT: function(e) {
    return !e.isSwitchingAccount && v !== g.ThemeTypes.DARK && (v = g.ThemeTypes.DARK, function() {
      !__OVERLAY__ && f.isPlatformEmbedded && h.default.setApplicationBackgroundColor((0, l.isThemeDark)(R()) ? o.default.unsafe_rawColors.PRIMARY_700.resolve({
        saturation: c.default.saturation
      }).hsl() : o.default.unsafe_rawColors.WHITE_500.resolve({
        saturation: c.default.saturation
      }).hsl())
    }(), O())
  },
  OVERLAY_INITIALIZE: N,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: y,
  UNSYNCED_USER_SETTINGS_UPDATE: y,
  USER_SETTINGS_PROTO_UPDATE: N,
  UPDATE_BACKGROUND_GRADIENT_PRESET: function(e) {
    var t, n;
    let {
      presetId: i
    } = e;
    v = null != i && null !== (n = null === (t = T.BACKGROUND_GRADIENT_PRESETS_MAP[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : R();
    let r = null != i;
    return A !== r ? (A = r, !0) : function() {
      let e = R();
      return !(0, d.areThemesEqualForGradientThemes)(v, e) && (v = e, !0)
    }()
  },
  RESET_PREVIEW_CLIENT_THEME: N,
  SYSTEM_THEME_CHANGE: function(e) {
    let {
      systemTheme: t
    } = e;
    return C = t, O()
  },
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
    return i = e.systemPrefersColorScheme, O()
  },
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
    return (0, l.isThemeLight)(R())
  }
})