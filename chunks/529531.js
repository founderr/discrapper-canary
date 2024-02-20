"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("913144"),
  d = n("79112"),
  c = n("206625"),
  f = n("206230"),
  E = n("812204"),
  h = n("685665"),
  _ = n("917247"),
  C = n("635956"),
  S = n("891653"),
  g = n("697218"),
  T = n("381546"),
  m = n("599110"),
  p = n("719923"),
  I = n("805199"),
  A = n("433724"),
  N = n("49111"),
  O = n("994428"),
  v = n("646718"),
  R = n("782340"),
  M = n("739471");
let L = () => {
    u.default.dispatch({
      type: "APP_ICON_EDITOR_CLOSE"
    })
  },
  y = () => {
    var e, t, n;
    let a = (0, r.useStateFromStores)([g.default], () => p.default.isPremium(g.default.getCurrentUser())),
      l = (0, _.usePremiumTrialOffer)(),
      s = (null == l ? void 0 : null === (e = l.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === v.PremiumSubscriptionSKUs.TIER_2;
    return (0, i.jsx)(C.default, {
      size: o.Button.Sizes.MEDIUM,
      buttonText: a ? R.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : s ? (0, p.formatTrialCtaIntervalDuration)({
        intervalType: null == l ? void 0 : null === (t = l.subscription_trial) || void 0 === t ? void 0 : t.interval,
        intervalCount: null == l ? void 0 : null === (n = l.subscription_trial) || void 0 === n ? void 0 : n.interval_count
      }) : R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
      subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2
    })
  },
  D = e => {
    let {
      markAsDismissed: t
    } = e, n = () => {
      null == t || t(O.ContentDismissActionType.DISMISS), L()
    };
    return (0, i.jsxs)("div", {
      className: M.editorHeader,
      children: [(0, i.jsx)(o.Clickable, {
        className: M.closeCircleButton,
        onClick: () => n(),
        children: (0, i.jsx)(T.default, {
          className: M.closeCircle
        })
      }), (0, i.jsxs)("div", {
        className: M.title,
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-lg/extrabold",
          children: R.default.Messages.APP_ICON_PREVIEW_TITLE
        }), (0, i.jsx)(S.default, {
          className: M.premiumIcon
        })]
      })]
    })
  },
  P = e => {
    let {
      isCoachmark: t,
      markAsDismissed: n
    } = e, a = (0, r.useStateFromStores)([I.default], () => I.default.isUpsellPreview);
    return (0, i.jsxs)("div", {
      className: M.editorFooter,
      children: [a && (0, i.jsx)(y, {}), (0, i.jsx)(o.Button, {
        className: M.footerButton,
        onClick: () => {
          null == n || n(O.ContentDismissActionType.DISMISS), L(), !t && d.default.open()
        },
        color: o.Button.Colors.PRIMARY,
        size: o.Button.Sizes.MEDIUM,
        children: a || t ? R.default.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW : R.default.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS
      })]
    })
  };

function w(e) {
  let {
    isCoachmark: t,
    markAsDismissed: n
  } = e, {
    analyticsLocations: l,
    AnalyticsLocationProvider: u
  } = (0, h.default)(E.default.APP_ICON_EDITOR), d = (0, r.useStateFromStores)([g.default], () => g.default.getCurrentUser()), {
    isUpsellPreview: _,
    isEditorOpen: C,
    shouldEditorAnimate: S
  } = (0, r.useStateFromStoresObject)([I.default, f.default], () => ({
    isUpsellPreview: I.default.isUpsellPreview,
    isEditorOpen: I.default.isEditorOpen,
    shouldEditorAnimate: t && !f.default.useReducedMotion
  }));
  a.useEffect(() => {
    _ && m.default.track(N.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: v.PremiumUpsellTypes.APP_ICON_UPSELL,
      location_stack: l
    })
  }, [_, l]);
  let T = (0, c.default)(null, _ ? L : N.NOOP);
  return (a.useEffect(() => {
    if (_ && !C) return L
  }, [_, C]), null == d) ? null : (0, i.jsx)(u, {
    children: (0, i.jsx)("div", {
      ref: T,
      className: s(M.editor, S ? M.editorAnimate : null),
      children: (0, i.jsxs)(o.HeadingLevel, {
        children: [(0, i.jsx)(D, {
          markAsDismissed: n
        }), (0, i.jsx)(o.Scroller, {
          className: M.editorBody,
          children: (0, i.jsx)(A.default, {
            className: M.selectionGroup
          })
        }), (0, i.jsx)(P, {
          markAsDismissed: n,
          isCoachmark: t
        })]
      })
    })
  })
}