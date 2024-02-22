"use strict";
s.r(t), s.d(t, {
  default: function() {
    return H
  }
}), s("424973");
var a = s("37983"),
  i = s("884691"),
  n = s("414456"),
  r = s.n(n),
  l = s("446674"),
  o = s("819855"),
  u = s("77078"),
  d = s("875212"),
  c = s("841098"),
  _ = s("812204"),
  E = s("685665"),
  I = s("308592"),
  T = s("697218"),
  f = s("521012"),
  S = s("719923"),
  R = s("324878"),
  m = s("527715"),
  A = s("154889"),
  p = s("917247"),
  N = s("478968"),
  g = s("641078"),
  P = s("400307"),
  C = s("513516"),
  O = s("218435"),
  M = s("881155"),
  h = s("646718"),
  L = s("782340"),
  x = s("962962"),
  v = s("640754"),
  D = s("510407"),
  b = s("657890"),
  U = s("823986");
let j = e => {
    let {
      isLightTheme: t
    } = e, s = (0, g.getBOGOPillCopy)();
    return (0, a.jsx)(P.PremiumPillWithSparkles, {
      text: s,
      className: x.bogoPillWithSparkles,
      colorOptions: t ? P.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : P.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  G = () => (0, a.jsx)("div", {
    className: x.mostPopularPill,
    children: (0, a.jsx)(u.Heading, {
      className: x.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: L.default.Messages.MOST_POPULAR
    })
  }),
  k = e => {
    let t, {
        premiumType: s
      } = e,
      i = (0, c.default)();
    t = s === h.PremiumTypes.TIER_0 ? (0, o.isThemeDark)(i) ? v : D : (0, o.isThemeDark)(i) ? b : U;
    let n = (0, S.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: x.logo,
      alt: n
    })
  },
  y = e => {
    let {
      label: t,
      column1: s,
      column2: i
    } = e;
    return (0, a.jsxs)("tr", {
      className: r(x.headerRow, x.rowBottomBorder, x.topBorderRadius),
      children: [(0, a.jsx)("th", {
        scope: "col",
        className: x.headerLabelCell,
        children: t
      }), (0, a.jsx)("th", {
        scope: "col",
        className: x.headerCell,
        children: s
      }), (0, a.jsx)("th", {
        scope: "col",
        className: r(x.headerCell, x.topBorderRadius),
        children: i
      })]
    })
  },
  B = e => {
    let {
      label: t,
      column1: s,
      column2: i,
      withBottomBorder: n = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: u = !1,
      shortRow: d = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: r(x.row, {
        [x.wideRow]: u,
        [x.topBorderRadius]: l,
        [x.bottomBorderRadius]: o,
        [x.rowBottomBorder]: n,
        [x.shortRow]: d
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: x.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: r(x.cell, {
          [x.buttonsCell]: u
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: r(x.cell, {
          [x.topBorderRadius]: l,
          [x.bottomBorderRadius]: o,
          [x.buttonsCell]: u
        }),
        children: i
      })]
    })
  };
var H = e => {
  var t;
  let s, {
      className: n,
      hideCTAs: v = !1,
      headingOverride: D,
      hidePill: b = !1,
      selectedPlanColumnClassName: U,
      selectedPlanTier: H = h.PremiumTypes.TIER_2
    } = e,
    {
      AnalyticsLocationProvider: K
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    F = (0, m.useMarketingOptimizationExperiment)({
      autoTrackExposure: !1
    }),
    W = (0, l.useStateFromStores)([f.default], () => f.default.hasFetchedSubscriptions()),
    w = (0, I.useSubscriptionPlansLoaded)(),
    V = "PlanComparisonTable";
  (0, d.useTriggerDebuggingAA)({
    location: V + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: V + " auto off",
    autoTrackExposure: !1
  });
  let Y = (0, c.default)(),
    z = (0, o.isThemeLight)(Y),
    Q = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    X = (0, S.isPremiumExactly)(Q, h.PremiumTypes.TIER_2),
    Z = (0, p.usePremiumTrialOffer)(),
    J = null == Z ? void 0 : null === (t = Z.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    q = (0, R.useCurrentPremiumTrialTier)(),
    $ = (0, A.usePremiumDiscountOffer)(),
    ee = null != $ && (0, A.discountOfferHasTier)($, h.PremiumSubscriptionSKUs.TIER_2),
    et = (0, N.useDiscountedPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    es = "".concat(et, "/").concat((0, S.getIntervalStringAsNoun)(h.SubscriptionIntervalTypes.MONTH)),
    ea = (0, S.getDefaultPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    ei = (0, S.getDefaultPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    en = (0, C.useGetPlanComparisonTableRows)(ea, ei, ee, es),
    er = (0, g.useIsEligibleForBogoPromotion)();
  if (!W || !w) return null;
  let el = {
    label: (0, a.jsx)(u.Heading, {
      className: x.textColor,
      variant: "heading-lg/extrabold",
      children: L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, a.jsx)(k, {
      premiumType: h.PremiumTypes.TIER_0
    }),
    column2: (0, a.jsx)(k, {
      premiumType: h.PremiumTypes.TIER_2
    })
  };
  v ? en.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : en.push({
    label: null,
    column1: (0, a.jsxs)(a.Fragment, {
      children: [J === h.PremiumSubscriptionSKUs.TIER_2 || er ? (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: z ? u.ButtonColors.BRAND_NEW : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), q === h.PremiumTypes.TIER_2 || null != J ? null : (0, a.jsx)(O.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [J === h.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: z ? u.ButtonColors.BRAND_NEW : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: er
      }), q === h.PremiumTypes.TIER_0 || null != J ? null : (0, a.jsx)(O.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == J
  }), s = b ? null : null != J || null != q ? (0, a.jsx)(P.PremiumPillWithSparkles, {
    text: null != J ? L.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: x.freeTrialPillWithSparkles,
    colorOptions: J === h.PremiumSubscriptionSKUs.TIER_0 ? z ? P.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : P.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : z ? X ? P.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : P.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : P.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : er ? (0, a.jsx)(j, {
    isLightTheme: z
  }) : (0, a.jsx)(G, {});
  let eo = J === h.PremiumSubscriptionSKUs.TIER_0 || q === h.PremiumTypes.TIER_0 || H === h.PremiumTypes.TIER_0;
  return (0, a.jsx)(K, {
    children: (0, a.jsxs)("div", {
      className: r(x.root, n),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(u.Heading, {
        className: r(x.titleText, x.textColor),
        variant: "heading-xxl/extrabold",
        children: null != D ? D : L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: x.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: r(U, {
            [x.tier0ColumnOuter]: eo && !F,
            [x.tier2ColumnOuter]: !eo && !F,
            [x.tier0ColumnOuterBackground]: eo && F,
            [x.tier2ColumnOuterBackground]: !eo && F
          }),
          children: !eo && s
        }), F && eo && (0, a.jsx)("div", {
          className: x.tier2Pill,
          children: s
        }), (0, a.jsxs)("table", {
          className: x.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(y, {
              ...el
            })
          }), (0, a.jsx)("tbody", {
            children: en.map((e, t) => (0, i.createElement)(B, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}