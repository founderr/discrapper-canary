"use strict";
n.r(t), n.d(t, {
  useResetClientThemePreview: function() {
    return _
  },
  useTrackClientThemePreviewEvent: function() {
    return C
  }
}), n("222007");
var i = n("884691"),
  a = n("446674"),
  l = n("151426"),
  s = n("505093"),
  r = n("168973"),
  o = n("374363"),
  u = n("599110"),
  d = n("32531"),
  c = n("714657"),
  f = n("49111"),
  E = n("646718"),
  h = n("116319");
let _ = () => {
    let e = (0, a.useStateFromStores)([c.default], () => c.default.gradientPreset),
      t = (0, a.useStateFromStores)([r.default], () => r.default.useSystemTheme === h.SystemThemeState.ON),
      [n, l] = (0, i.useState)(t);
    return (0, i.useEffect)(() => {
      null == e && l(t)
    }, [e, t]), (0, i.useCallback)(() => {
      if (null != e)(0, d.resetPreviewClientTheme)(), n && (0, s.setUseSystemTheme)(h.SystemThemeState.ON)
    }, [e, n])
  },
  C = () => {
    let {
      previewPaneVariant: e
    } = (0, a.useStateFromStoresObject)([c.default], () => ({
      previewPaneVariant: c.default.isPreview ? E.AnalyticsPremiumFeatureTiers.FREE : E.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
    })), t = (0, a.useStateFromStores)([o.default], () => {
      var e;
      let t = null === (e = o.default.settings.appearance) || void 0 === e ? void 0 : e.theme;
      return "default ".concat(t === l.Theme.LIGHT ? f.ThemeTypes.LIGHT : f.ThemeTypes.DARK)
    });
    return (0, i.useCallback)(n => {
      u.default.track(n, {
        preview_pane_variant: e,
        original_theme: t
      })
    }, [e, t])
  }