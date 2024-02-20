"use strict";
n.r(t), n.d(t, {
  canEnableForcedColors: function() {
    return S
  },
  default: function() {
    return v
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  s = n("913144"),
  i = n("697218"),
  l = n("599110"),
  o = n("773336"),
  u = n("180748"),
  d = n("206230"),
  c = n("49111");
let f = window.matchMedia("(prefers-reduced-motion: reduce)"),
  h = window.matchMedia("(prefers-contrast: more)"),
  p = window.matchMedia("(prefers-contrast: less)"),
  m = window.matchMedia("(prefers-color-scheme: dark)"),
  C = window.matchMedia("(prefers-color-scheme: light)"),
  E = window.matchMedia("(forced-colors: active)"),
  g = 5;

function S() {
  return "windows" === (0, o.getOS)()
}
var v = {
  initBasic() {
    f.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(f), m.addListener(this.handleSystemColorPreferencesChanged), C.addListener(this.handleSystemColorPreferencesChanged), E.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), h.addListener(this.handleSystemPrefersContrastChanged), p.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
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
    g = Math.max(g - 1, 0), ! function() {
      let e = i.default.getCurrentUser();
      return null == e || Date.now() - +e.createdAt < 864e5
    }() && !d.default.keyboardNavigationExplainerModalSeen && 0 === g && (0, r.openModalLazy)(async () => {
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
      u.systemPrefersReducedMotionChanged(e.matches ? "reduce" : "no-preference")
    })
  },
  handleSystemColorPreferencesChanged() {
    let e;
    m.matches ? e = c.ThemeTypes.DARK : C.matches && (e = c.ThemeTypes.LIGHT);
    let t = !o.isPlatformEmbedded || S(),
      n = t && E.matches ? "active" : "none";
    s.default.wait(() => {
      u.systemColorPreferencesChanged(e, n)
    })
  },
  handleSystemPrefersContrastChanged() {
    let e = "no-preference";
    h.matches ? e = "more" : p.matches && (e = "less"), s.default.wait(() => {
      u.systemPrefersContrastChanged(e)
    })
  }
}