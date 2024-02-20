"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007"), n("794252");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  r = n("506838"),
  o = n("446674"),
  u = n("151426"),
  d = n("77078"),
  c = n("452804"),
  f = n("79112"),
  E = n("206625"),
  h = n("206230"),
  _ = n("812204"),
  C = n("685665"),
  S = n("917247"),
  g = n("635956"),
  T = n("891653"),
  m = n("697218"),
  p = n("381546"),
  I = n("599110"),
  A = n("719923"),
  N = n("32531"),
  O = n("714657"),
  v = n("770867"),
  R = n("648114"),
  M = n("49111"),
  L = n("994428"),
  y = n("646718"),
  D = n("782340"),
  P = n("537167");
let w = () => (0, i.jsx)("div", {
    className: P.editorHeader,
    children: (0, i.jsxs)("div", {
      className: P.bannerUpsell,
      children: [(0, i.jsx)(T.default, {
        className: P.premiumIcon
      }), (0, i.jsx)(d.Heading, {
        variant: "heading-md/bold",
        color: "always-white",
        children: D.default.Messages.CLIENT_THEMES_EDITOR_UPSELL_HEADER
      })]
    })
  }),
  b = e => {
    let {
      markAsDismissed: t
    } = e, n = (0, v.useTrackClientThemePreviewEvent)();
    return (0, i.jsxs)("div", {
      className: P.editorHeader,
      children: [(0, i.jsx)(d.Clickable, {
        className: P.closeCircleButton,
        onClick: () => {
          null != t && t(L.ContentDismissActionType.DISMISS), n(M.AnalyticEvents.CLIENT_THEME_PREVIEW_CLOSED), (0, N.closeEditor)()
        },
        children: (0, i.jsx)(p.default, {
          className: P.closeCircle
        })
      }), (0, i.jsx)(d.Heading, {
        variant: "heading-lg/extrabold",
        children: D.default.Messages.CLIENT_THEMES_EDITOR_HEADER
      })]
    })
  },
  U = e => {
    var t, n, a;
    let {
      onSubscribeSuccess: l,
      markAsDismissed: s
    } = e, {
      analyticsLocations: r
    } = (0, C.default)(_.default.CLIENT_THEMES_EDITOR), [f, E] = (0, o.useStateFromStoresArray)([m.default, O.default], () => [O.default.gradientPreset, A.default.isPremium(m.default.getCurrentUser())]), h = (0, S.usePremiumTrialOffer)(), T = (0, A.formatTrialCtaIntervalDuration)({
      intervalType: null == h ? void 0 : null === (t = h.subscription_trial) || void 0 === t ? void 0 : t.interval,
      intervalCount: null == h ? void 0 : null === (n = h.subscription_trial) || void 0 === n ? void 0 : n.interval_count
    });
    return (0, i.jsx)(g.default, {
      size: d.Button.Sizes.MEDIUM,
      buttonText: E ? D.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : (null == h ? void 0 : null === (a = h.subscription_trial) || void 0 === a ? void 0 : a.sku_id) === y.PremiumSubscriptionSKUs.TIER_2 ? T : D.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
      subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
      onSubscribeModalClose: e => {
        if (!!e) null == l || l(), null != s && s(L.ContentDismissActionType.PRIMARY), null != f && ((0, R.trackClientThemeUpdated)({
          isPersisted: !0,
          themeName: u.BackgroundGradientPresetId[f.id],
          analyticsLocations: r
        }), (0, c.saveClientTheme)({
          backgroundGradientPresetId: f.id,
          theme: f.theme
        }))
      }
    })
  },
  F = e => {
    let {
      markAsDismissed: t
    } = e, {
      isPreview: n,
      isCoachmark: l
    } = (0, o.useStateFromStoresObject)([O.default], () => ({
      isPreview: O.default.isPreview,
      isCoachmark: O.default.isCoachmark
    })), [s, u] = a.useState(!1), c = (0, v.useTrackClientThemePreviewEvent)(), E = (0, r.match)({
      isPreview: n,
      isCoachmark: l,
      forceShowCloseButton: s
    }).with({
      isCoachmark: !0
    }, {
      forceShowCloseButton: !0
    }, () => D.default.Messages.CLOSE).with({
      isPreview: !0
    }, () => D.default.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW).otherwise(() => D.default.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS);
    return (0, i.jsxs)("div", {
      className: P.editorFooter,
      children: [n && (0, i.jsx)(U, {
        onSubscribeSuccess: () => {
          u(!0)
        },
        markAsDismissed: t
      }), (0, i.jsx)(d.Button, {
        className: P.footerButton,
        onClick: () => {
          null != t && t(L.ContentDismissActionType.DISMISS), c(M.AnalyticEvents.CLIENT_THEME_PREVIEW_CLOSED), (0, N.closeEditor)(), !l && f.default.open()
        },
        color: d.Button.Colors.PRIMARY,
        size: d.Button.Sizes.MEDIUM,
        children: E
      })]
    })
  };

function G(e) {
  let {
    markAsDismissed: t
  } = e, {
    analyticsLocations: n,
    AnalyticsLocationProvider: l
  } = (0, C.default)(_.default.CLIENT_THEMES_EDITOR), {
    isPreview: r,
    isCoachmark: u,
    isEditorOpen: c,
    shouldEditorAnimate: f
  } = (0, o.useStateFromStoresObject)([O.default, h.default], () => ({
    isPreview: O.default.isPreview,
    isCoachmark: O.default.isCoachmark,
    isEditorOpen: O.default.isEditorOpen,
    shouldEditorAnimate: O.default.isCoachmark && !h.default.useReducedMotion
  })), S = (0, v.useTrackClientThemePreviewEvent)();
  a.useEffect(() => S(M.AnalyticEvents.CLIENT_THEME_PREVIEW_VIEWED), [S]), a.useEffect(() => {
    r && I.default.track(M.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: y.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      location_stack: n
    })
  }, [r, n]);
  let g = (0, v.useResetClientThemePreview)(),
    T = (0, E.default)(null, r ? g : M.NOOP);
  return a.useEffect(() => {
    if (r && !c) return g
  }, [r, c, g]), (0, i.jsx)(l, {
    children: (0, i.jsx)("div", {
      ref: T,
      className: s(P.themeEditor, f ? P.editorAnimate : null),
      children: (0, i.jsxs)(d.HeadingLevel, {
        children: [u ? (0, i.jsx)(w, {}) : (0, i.jsx)(b, {
          markAsDismissed: t
        }), (0, i.jsx)(d.Scroller, {
          className: P.editorBody,
          children: (0, i.jsxs)(R.default, {
            type: R.ThemeSelectionGroupType.EDITOR,
            children: [!r && (0, i.jsx)(R.default.Basic, {
              className: P.selectionGroup
            }), (0, i.jsx)(R.default.Gradient, {
              className: P.selectionGroup
            })]
          })
        }), (0, i.jsx)(F, {
          markAsDismissed: t
        })]
      })
    })
  })
}