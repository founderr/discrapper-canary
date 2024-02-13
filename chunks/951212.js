"use strict";
n.r(t), n.d(t, {
  canEnableForcedColors: function() {
    return g
  },
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  i = n("913144"),
  s = n("697218"),
  l = n("599110"),
  u = n("773336"),
  o = n("180748"),
  d = n("206230"),
  c = n("49111");
let f = window.matchMedia("(prefers-reduced-motion: reduce)"),
  h = window.matchMedia("(prefers-contrast: more)"),
  p = window.matchMedia("(prefers-contrast: less)"),
  E = window.matchMedia("(prefers-color-scheme: dark)"),
  C = window.matchMedia("(prefers-color-scheme: light)"),
  m = window.matchMedia("(forced-colors: active)"),
  S = 5;

function g() {
  return "windows" === (0, u.getOS)()
}
var _ = {
  initBasic() {
    f.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(f), E.addListener(this.handleSystemColorPreferencesChanged), C.addListener(this.handleSystemColorPreferencesChanged), m.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), h.addListener(this.handleSystemPrefersContrastChanged), p.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
  },
  init() {
    this.initBasic(), i.default.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      l.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
        colorblind_enabled: d.default.colorblindMode
      })
    }), i.default.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
      l.default.track(c.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
        saturation_level: e.saturation
      })
    })
  },
  maybeShowKeyboardNavigationExplainerModal() {
    S = Math.max(S - 1, 0), ! function() {
      let e = s.default.getCurrentUser();
      return null == e || Date.now() - +e.createdAt < 864e5
    }() && !d.default.keyboardNavigationExplainerModalSeen && 0 === S && (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("856584").then(n.bind(n, "856584"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  },
  handleSystemPrefersReducedMotionChanged(e) {
    i.default.wait(() => {
      o.systemPrefersReducedMotionChanged(e.matches ? "reduce" : "no-preference")
    })
  },
  handleSystemColorPreferencesChanged() {
    let e;
    E.matches ? e = c.ThemeTypes.DARK : C.matches && (e = c.ThemeTypes.LIGHT);
    let t = !u.isPlatformEmbedded || g(),
      n = t && m.matches ? "active" : "none";
    i.default.wait(() => {
      o.systemColorPreferencesChanged(e, n)
    })
  },
  handleSystemPrefersContrastChanged() {
    let e = "no-preference";
    h.matches ? e = "more" : p.matches && (e = "less"), i.default.wait(() => {
      o.systemPrefersContrastChanged(e)
    })
  }
}