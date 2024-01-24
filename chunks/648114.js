"use strict";
n.r(t), n.d(t, {
  ThemeSelectionGroupType: function() {
    return i
  },
  trackClientThemeUpdated: function() {
    return H
  },
  default: function() {
    return Y
  }
}), n("794252"), n("222007");
var i, a, l = n("37983"),
  s = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("506838"),
  d = n("446674"),
  c = n("151426"),
  f = n("819855"),
  m = n("77078"),
  h = n("452804"),
  g = n("206230"),
  _ = n("812204"),
  p = n("685665"),
  S = n("626301"),
  v = n("917247"),
  T = n("956597"),
  E = n("891653"),
  N = n("505093"),
  I = n("161778"),
  y = n("168973"),
  O = n("491605"),
  C = n("476765"),
  M = n("599110"),
  A = n("32531"),
  b = n("714657"),
  P = n("164546"),
  R = n("941719"),
  w = n("49111"),
  D = n("646718"),
  x = n("116319"),
  G = n("397336"),
  L = n("843455"),
  j = n("782340"),
  k = n("809404");
(a = i || (i = {})).EDITOR = "EDITOR", a.SETTINGS = "SETTINGS";
let U = Object.freeze({
    EDITOR: G.UserSettingsDelay.SLOW_USER_ACTION,
    SETTINGS: G.UserSettingsDelay.INFREQUENT_USER_ACTION
  }),
  F = s.createContext({}),
  H = e => {
    let {
      isPersisted: t,
      themeName: n,
      analyticsLocations: i
    } = e;
    M.default.track(w.AnalyticEvents.CLIENT_THEME_UPDATED, {
      feature_name: D.AnalyticsPremiumFeatureNames.CLIENT_THEME,
      theme_name: n,
      is_persisted: t,
      location_stack: i
    })
  },
  B = e => {
    let {
      type: t,
      isPreview: n,
      isCoachmark: i
    } = e, a = (0, u.match)({
      type: t,
      isPreview: n,
      isCoachmark: i
    }).with({
      type: "EDITOR",
      isCoachmark: !0,
      isPreview: !0
    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
      type: "EDITOR",
      isCoachmark: !0
    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => j.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
    return (0, l.jsxs)("div", {
      className: k.title,
      children: [(0, l.jsx)(m.Heading, {
        "aria-label": a,
        variant: "text-md/medium",
        children: a
      }), (0, l.jsx)(E.default, {
        className: k.premiumIcon
      })]
    })
  },
  W = e => {
    var t, n;
    let {
      type: i,
      isPreview: a,
      isCoachmark: s
    } = e, r = (null === (n = (0, v.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
    if (r && a) return null;
    let o = (0, u.match)({
      type: i,
      isPreview: a,
      isCoachmark: s
    }).with({
      type: "EDITOR",
      isPreview: !0
    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
      onPremiumClick: S.navigateToPremiumMarketingPage
    })).with({
      type: "EDITOR",
      isCoachmark: !0
    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
      type: "EDITOR",
      isPreview: !1
    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
      isPreview: !0
    }, () => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
      onPremiumClick: S.navigateToPremiumMarketingPage
    })).otherwise(() => j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
    return (0, l.jsx)(m.Heading, {
      variant: "text-sm/normal",
      children: o
    })
  },
  K = e => {
    let {
      type: t,
      children: n
    } = e, i = (0, C.useUID)(), a = (0, m.useRadioGroup)({
      orientation: "horizontal",
      labelledBy: i
    }), r = s.useMemo(() => ({
      type: t,
      delay: U[t]
    }), [t]);
    return (0, l.jsx)(F.Provider, {
      value: r,
      children: (0, l.jsx)("div", {
        ...a,
        className: k.container,
        children: n
      })
    })
  };
K.Basic = e => {
  let {
    className: t
  } = e, {
    delay: n
  } = s.useContext(F), {
    analyticsLocations: i
  } = (0, p.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [a, r, u] = (0, d.useStateFromStoresArray)([I.default, y.default, b.default], () => [I.default.theme, null == b.default.gradientPreset, y.default.useSystemTheme === x.SystemThemeState.ON]), c = e => {
    (0, A.resetBackgroundGradientPreset)(), H({
      isPersisted: !0,
      analyticsLocations: i,
      themeName: "default ".concat(e)
    }), (0, h.saveClientTheme)({
      theme: e
    }, n)
  };
  return (0, l.jsxs)("section", {
    className: o(k.presets, t),
    children: [(0, l.jsx)(P.DefaultThemeSelection, {
      theme: L.ThemeTypes.LIGHT,
      isSelected: r && !u && (0, f.isThemeLight)(a),
      onSelect: () => c(L.ThemeTypes.LIGHT)
    }), (0, l.jsx)(P.DefaultThemeSelection, {
      theme: L.ThemeTypes.DARK,
      isSelected: r && !u && (0, f.isThemeDark)(a),
      onSelect: () => c(L.ThemeTypes.DARK)
    }), (0, l.jsx)(P.DefaultThemeSelection, {
      theme: "system",
      isSelected: r && u,
      onSelect: () => c("system")
    })]
  })
}, K.Gradient = e => {
  var t, i;
  let {
    className: a,
    renderCTAButtons: r,
    disabled: o = !1
  } = e, {
    type: u,
    delay: f
  } = s.useContext(F), {
    analyticsLocations: m
  } = (0, p.default)(_.default.CLIENT_THEMES_THEME_SELECTOR), [E, I, y] = (0, d.useStateFromStoresArray)([b.default], () => {
    var e;
    return [b.default.isPreview, b.default.isCoachmark, null === (e = b.default.gradientPreset) || void 0 === e ? void 0 : e.id]
  }), [C, M] = s.useState(!1), [w, G] = s.useState(-1), L = (0, d.useStateFromStores)([g.default], () => g.default.useReducedMotion), U = (null === (i = (0, v.usePremiumTrialOffer)()) || void 0 === i ? void 0 : null === (t = i.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === D.PremiumSubscriptionSKUs.TIER_2;
  s.useEffect(() => {
    (w === R.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === u || y === c.BackgroundGradientPresetId.EASTER_EGG) && M(!0)
  }, [w, u, y]);
  let K = (e, t) => {
    if ((0, A.updateBackgroundGradientPreset)(e.id), H({
        isPersisted: !E,
        analyticsLocations: m,
        themeName: c.BackgroundGradientPresetId[e.id]
      }), E) {
      (0, N.setUseSystemTheme)(x.SystemThemeState.OFF);
      return
    }
    if ((0, h.saveClientTheme)({
        backgroundGradientPresetId: e.id,
        theme: e.theme
      }, f), null != t) {
      if (C && M(!1), t <= w || 0 === t) {
        G(0);
        return
      }
      G(e => e + 1)
    }
  };
  return (0, l.jsxs)("section", {
    className: a,
    children: ["EDITOR" === u && E && U ? (0, l.jsx)(T.default, {
      type: D.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
      children: j.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
        onPremiumClick: S.navigateToPremiumMarketingPage
      })
    }) : (0, l.jsxs)("div", {
      className: k.header,
      children: [(0, l.jsxs)("div", {
        className: k.headings,
        children: [(0, l.jsx)(B, {
          type: u,
          isPreview: E,
          isCoachmark: I
        }), (0, l.jsx)(W, {
          type: u,
          isPreview: E,
          isCoachmark: I
        })]
      }), null == r ? void 0 : r()]
    }), (0, l.jsxs)("div", {
      className: k.presets,
      children: [R.BACKGROUND_GRADIENT_PRESETS.filter(e => {
        let {
          id: t
        } = e;
        return t !== c.BackgroundGradientPresetId.EASTER_EGG
      }).map((e, t) => (0, l.jsx)(P.GradientThemeSelection, {
        preset: e,
        isSelected: y === e.id,
        onSelect: () => K(e, t),
        disabled: o,
        tabIndex: 0 !== t || o ? void 0 : 0
      }, e.id)), (() => {
        if (!C) return null;
        let e = R.BACKGROUND_GRADIENT_PRESETS_MAP[c.BackgroundGradientPresetId.EASTER_EGG];
        if (null == e) return null;
        async function t() {
          let {
            default: e
          } = await n.el("922510").then(n.t.bind(n, "922510", 19));
          return e
        }
        return (0, l.jsxs)("div", {
          className: k.easterEggSelection,
          children: [(0, l.jsx)(P.GradientThemeSelection, {
            preset: e,
            isSelected: y === c.BackgroundGradientPresetId.EASTER_EGG,
            onSelect: () => K(e)
          }), (0, l.jsx)(O.default, {
            importData: t,
            shouldAnimate: !L,
            className: k.sparkles
          })]
        })
      })()]
    })]
  })
};
var Y = K