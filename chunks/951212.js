"use strict";
n.r(t), n.d(t, {
  canEnableForcedColors: function() {
    return m
  },
  default: function() {
    return T
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  s = n("913144"),
  i = n("697218"),
  l = n("599110"),
  u = n("773336"),
  o = n("180748"),
  d = n("206230"),
  c = n("49111");
let f = window.matchMedia("(prefers-reduced-motion: reduce)"),
  E = window.matchMedia("(prefers-contrast: more)"),
  S = window.matchMedia("(prefers-contrast: less)"),
  h = window.matchMedia("(prefers-color-scheme: dark)"),
  _ = window.matchMedia("(prefers-color-scheme: light)"),
  C = window.matchMedia("(forced-colors: active)"),
  p = 5;

function m() {
  return "windows" === (0, u.getOS)()
}
var T = {
  initBasic() {
    f.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(f), h.addListener(this.handleSystemColorPreferencesChanged), _.addListener(this.handleSystemColorPreferencesChanged), C.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), E.addListener(this.handleSystemPrefersContrastChanged), S.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
  },
  init() {
    this.initBasic(), s.default.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      l.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
        colorblind_enabled: d.default.colorblindMode
      })
    }), s.default.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
      l.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
        saturation_level: e.saturation
      })
    })
  },
  maybeShowKeyboardNavigationExplainerModal() {
    p = Math.max(p - 1, 0), ! function() {
      let e = i.default.getCurrentUser();
      return null == e || Date.now() - +e.createdAt < 864e5
    }() && !d.default.keyboardNavigationExplainerModalSeen && 0 === p && (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("856584").then(n.bind(n, "856584"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  },
  handleSystemPrefersReducedMotionChanged(e) {
    s.default.wait(() => {
      o.systemPrefersReducedMotionChanged(e.matches ? "reduce" : "no-preference")
    })
  },
  handleSystemColorPreferencesChanged() {
    let e;
    h.matches ? e = c.ThemeTypes.DARK : _.matches && (e = c.ThemeTypes.LIGHT);
    let t = !u.isPlatformEmbedded || m(),
      n = t && C.matches ? "active" : "none";
    s.default.wait(() => {
      o.systemColorPreferencesChanged(e, n)
    })
  },
  handleSystemPrefersContrastChanged() {
    let e = "no-preference";
    E.matches ? e = "more" : S.matches && (e = "less"), s.default.wait(() => {
      o.systemPrefersContrastChanged(e)
    })
  }
}