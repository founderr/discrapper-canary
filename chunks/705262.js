"use strict";
n.r(t), n.d(t, {
  ThemeSelectionGroupType: function() {
    return i
  },
  trackClientThemeUpdated: function() {
    return Y
  }
}), n("627341"), n("47120");
var i, r, s = n("735250"),
  a = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("278074"),
  d = n("442837"),
  _ = n("524437"),
  c = n("481060"),
  E = n("153867"),
  I = n("607070"),
  T = n("100527"),
  f = n("906732"),
  S = n("540059"),
  h = n("605236"),
  A = n("837741"),
  m = n("98278"),
  N = n("639119"),
  p = n("165583"),
  O = n("587446"),
  C = n("781391"),
  R = n("210887"),
  g = n("740492"),
  L = n("153124"),
  v = n("626135"),
  D = n("238302"),
  M = n("514361"),
  y = n("110577"),
  P = n("469115"),
  U = n("981631"),
  b = n("921944"),
  G = n("474936"),
  w = n("874893"),
  k = n("526761"),
  B = n("231338"),
  x = n("689938"),
  V = n("737679");
(r = i || (i = {})).EDITOR = "EDITOR", r.SETTINGS = "SETTINGS";
let F = Object.freeze({
    EDITOR: k.UserSettingsDelay.SLOW_USER_ACTION,
    SETTINGS: k.UserSettingsDelay.INFREQUENT_USER_ACTION
  }),
  H = a.createContext({}),
  Y = e => {
    let {
      isPersisted: t,
      themeName: n,
      analyticsLocations: i
    } = e;
    v.default.track(U.AnalyticEvents.CLIENT_THEME_UPDATED, {
      feature_name: G.AnalyticsPremiumFeatureNames.CLIENT_THEME,
      theme_name: n,
      is_persisted: t,
      location_stack: i
    })
  },
  j = e => {
    let {
      type: t,
      isPreview: n,
      isCoachmark: i
    } = e, r = (0, u.match)({
      type: t,
      isPreview: n,
      isCoachmark: i
    }).with({
      type: "EDITOR",
      isCoachmark: !0,
      isPreview: !0
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
      type: "EDITOR",
      isCoachmark: !0
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => x.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
    return (0, s.jsxs)("div", {
      className: V.title,
      children: [(0, s.jsx)(c.Heading, {
        "aria-label": r,
        variant: "text-md/medium",
        children: r
      }), (0, s.jsx)(O.default, {
        className: V.premiumIcon
      })]
    })
  },
  W = e => {
    var t, n;
    let {
      type: i,
      isPreview: r,
      isCoachmark: a
    } = e;
    if ((null === (n = (0, N.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === G.PremiumSubscriptionSKUs.TIER_2 && r) return null;
    let o = (0, u.match)({
      type: i,
      isPreview: r,
      isCoachmark: a
    }).with({
      type: "EDITOR",
      isPreview: !0
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
      onPremiumClick: m.navigateToPremiumMarketingPage
    })).with({
      type: "EDITOR",
      isCoachmark: !0
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
      type: "EDITOR",
      isPreview: !1
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
      isPreview: !0
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
      onPremiumClick: m.navigateToPremiumMarketingPage
    })).otherwise(() => x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
    return (0, s.jsx)(c.Heading, {
      variant: "text-sm/normal",
      children: o
    })
  },
  K = e => {
    let {
      type: t,
      children: n
    } = e, i = (0, L.useUID)(), r = (0, c.useRadioGroup)({
      orientation: "horizontal",
      labelledBy: i
    }), o = a.useMemo(() => ({
      type: t,
      delay: F[t]
    }), [t]);
    return (0, s.jsx)(H.Provider, {
      value: o,
      children: (0, s.jsx)("div", {
        ...r,
        className: V.__invalid_container,
        children: n
      })
    })
  };
K.Basic = e => {
  let {
    className: t
  } = e, {
    delay: n
  } = a.useContext(H), {
    analyticsLocations: i
  } = (0, f.default)(T.default.CLIENT_THEMES_THEME_SELECTOR), [r, o, u] = (0, d.useStateFromStoresArray)([R.default, g.default, M.default], () => [R.default.theme, null == M.default.gradientPreset, g.default.useSystemTheme === w.SystemThemeState.ON]), _ = e => {
    (0, D.resetBackgroundGradientPreset)(), Y({
      isPersisted: !0,
      analyticsLocations: i,
      themeName: "default ".concat(e)
    }), (0, E.saveClientTheme)({
      theme: e
    }, n)
  }, c = (0, S.useIsDesktopVisualRefreshEnabled)("appearance_settings");
  return (0, s.jsxs)("section", {
    className: l()(V.presets, t),
    children: [(0, s.jsx)(y.DefaultThemeSelection, {
      theme: B.ThemeTypes.LIGHT,
      isSelected: o && !u && r === B.ThemeTypes.LIGHT,
      onSelect: () => _(B.ThemeTypes.LIGHT)
    }), (0, s.jsx)(y.DefaultThemeSelection, {
      theme: B.ThemeTypes.DARK,
      isSelected: o && !u && r === B.ThemeTypes.DARK,
      onSelect: () => _(B.ThemeTypes.DARK)
    }), c && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(y.DefaultThemeSelection, {
        theme: B.ThemeTypes.DARKER,
        isSelected: o && !u && r === B.ThemeTypes.DARKER,
        onSelect: () => _(B.ThemeTypes.DARKER)
      }), (0, s.jsx)(y.DefaultThemeSelection, {
        theme: B.ThemeTypes.MIDNIGHT,
        isSelected: o && !u && r === B.ThemeTypes.MIDNIGHT,
        onSelect: () => _(B.ThemeTypes.MIDNIGHT)
      })]
    }), (0, s.jsx)(y.DefaultThemeSelection, {
      theme: "system",
      isSelected: o && u,
      onSelect: () => _("system")
    })]
  })
}, K.Gradient = e => {
  var t, i;
  let {
    className: r,
    renderCTAButtons: o,
    disabled: l = !1
  } = e, {
    type: u,
    delay: S
  } = a.useContext(H), {
    analyticsLocations: O
  } = (0, f.default)(T.default.CLIENT_THEMES_THEME_SELECTOR), [R, g, L] = (0, d.useStateFromStoresArray)([M.default], () => {
    var e;
    return [M.default.isPreview, M.default.isCoachmark, null === (e = M.default.gradientPreset) || void 0 === e ? void 0 : e.id]
  }), [v, U] = a.useState(!1), [k, B] = a.useState(-1), F = (0, d.useStateFromStores)([I.default], () => I.default.useReducedMotion), {
    enabled: K
  } = (0, A.useBrandRefreshPerksExperiment)({
    location: "GradientSelectors"
  }), z = (null === (i = (0, N.usePremiumTrialOffer)()) || void 0 === i ? void 0 : null === (t = i.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === G.PremiumSubscriptionSKUs.TIER_2, Z = a.useMemo(() => e => {
    let t = P.CLIENT_THEME_DC_MAP.get(e.id),
      n = null != t && !(0, h.isDismissibleContentDismissed)(t);
    return l && n && setTimeout(() => (0, h.markDismissibleContentAsDismissed)(t, {
      dismissAction: b.ContentDismissActionType.AUTO_DISMISS
    }), 5e3), n
  }, [l]);
  a.useEffect(() => {
    (k === P.BACKGROUND_GRADIENT_PRESETS.length - (K ? 2 : 3) && "EDITOR" === u || L === _.BackgroundGradientPresetId.EASTER_EGG) && U(!0)
  }, [k, u, L, K]);
  let Q = (e, t) => {
    (0, D.updateBackgroundGradientPreset)(e.id), Y({
      isPersisted: !R,
      analyticsLocations: O,
      themeName: _.BackgroundGradientPresetId[e.id]
    });
    let n = P.CLIENT_THEME_DC_MAP.get(e.id);
    if (null != n && !(0, h.isDismissibleContentDismissed)(n) && (0, h.markDismissibleContentAsDismissed)(n, {
        dismissAction: b.ContentDismissActionType.TAKE_ACTION
      }), R) {
      (0, C.setUseSystemTheme)(w.SystemThemeState.OFF);
      return
    }
    if ((0, E.saveClientTheme)({
        backgroundGradientPresetId: e.id,
        theme: e.theme
      }, S), null != t) {
      if (v && U(!1), t <= k || 0 === t) {
        B(0);
        return
      }
      B(e => e + 1)
    }
  };
  return (0, s.jsxs)("section", {
    className: r,
    children: ["EDITOR" === u && R && z ? (0, s.jsx)(p.default, {
      type: G.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
      children: x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
        onPremiumClick: m.navigateToPremiumMarketingPage
      })
    }) : (0, s.jsxs)("div", {
      className: V.header,
      children: [(0, s.jsxs)("div", {
        className: V.headings,
        children: [(0, s.jsx)(j, {
          type: u,
          isPreview: R,
          isCoachmark: g
        }), (0, s.jsx)(W, {
          type: u,
          isPreview: R,
          isCoachmark: g
        })]
      }), null == o ? void 0 : o()]
    }), (0, s.jsxs)("div", {
      className: V.presets,
      children: [P.BACKGROUND_GRADIENT_PRESETS.filter(e => {
        let {
          id: t
        } = e;
        return t !== _.BackgroundGradientPresetId.EASTER_EGG && (t !== _.BackgroundGradientPresetId.BLURPLE_TWILIGHT || K)
      }).map((e, t) => (0, s.jsx)(y.GradientThemeSelection, {
        preset: e,
        isSelected: L === e.id,
        onSelect: () => Q(e, t),
        disabled: l,
        tabIndex: 0 !== t || l ? void 0 : 0,
        showBadge: Z(e)
      }, e.id)), (() => {
        if (!v) return null;
        let e = P.BACKGROUND_GRADIENT_PRESETS_MAP[_.BackgroundGradientPresetId.EASTER_EGG];
        if (null == e) return null;
        async function t() {
          let {
            default: e
          } = await n.e("5217").then(n.t.bind(n, "801048", 19));
          return e
        }
        return (0, s.jsxs)("div", {
          className: V.easterEggSelection,
          children: [(0, s.jsx)(y.GradientThemeSelection, {
            preset: e,
            isSelected: L === _.BackgroundGradientPresetId.EASTER_EGG,
            onSelect: () => Q(e)
          }), (0, s.jsx)(c.LottieAnimation, {
            importData: t,
            shouldAnimate: !F,
            className: V.sparkles
          })]
        })
      })()]
    })]
  })
}, t.default = K