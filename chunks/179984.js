"use strict";
s.r(t), s("653041");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("780384"),
  u = s("481060"),
  c = s("634894"),
  d = s("410030"),
  _ = s("100527"),
  E = s("906732"),
  R = s("15640"),
  T = s("594174"),
  f = s("78839"),
  m = s("74538"),
  I = s("775412"),
  S = s("846363"),
  p = s("104494"),
  A = s("639119"),
  g = s("230916"),
  N = s("248042"),
  M = s("823188"),
  C = s("21023"),
  P = s("318747"),
  O = s("409100"),
  x = s("474936"),
  b = s("689938"),
  h = s("243794"),
  D = s("102655"),
  v = s("768236"),
  L = s("314907"),
  U = s("826701");
let B = e => {
    let {
      isLightTheme: t
    } = e, s = (0, N.getBOGOPillCopy)();
    return (0, a.jsx)(M.PremiumPillWithSparkles, {
      text: s,
      className: h.bogoPillWithSparkles,
      colorOptions: t ? M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  k = () => (0, a.jsx)("div", {
    className: h.mostPopularPill,
    children: (0, a.jsx)(u.Heading, {
      className: h.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: b.default.Messages.MOST_POPULAR
    })
  }),
  j = e => {
    let t, {
        premiumType: s
      } = e,
      r = (0, d.default)();
    t = s === x.PremiumTypes.TIER_0 ? (0, o.isThemeDark)(r) ? D : v : (0, o.isThemeDark)(r) ? L : U;
    let i = (0, m.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: h.logo,
      alt: i
    })
  },
  G = e => {
    let {
      label: t,
      column1: s,
      column2: r
    } = e;
    return (0, a.jsxs)("tr", {
      className: n()(h.headerRow, h.rowBottomBorder, h.topBorderRadius),
      children: [(0, a.jsx)("th", {
        scope: "col",
        className: h.headerLabelCell,
        children: t
      }), (0, a.jsx)("th", {
        scope: "col",
        className: h.headerCell,
        children: s
      }), (0, a.jsx)("th", {
        scope: "col",
        className: n()(h.headerCell, h.topBorderRadius),
        children: r
      })]
    })
  },
  y = e => {
    let {
      label: t,
      column1: s,
      column2: r,
      withBottomBorder: i = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: u = !1,
      shortRow: c = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: n()(h.row, {
        [h.wideRow]: u,
        [h.topBorderRadius]: l,
        [h.bottomBorderRadius]: o,
        [h.rowBottomBorder]: i,
        [h.shortRow]: c
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: h.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: n()(h.cell, {
          [h.buttonsCell]: u
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: n()(h.cell, {
          [h.topBorderRadius]: l,
          [h.bottomBorderRadius]: o,
          [h.buttonsCell]: u
        }),
        children: r
      })]
    })
  };
t.default = e => {
  var t;
  let s, {
      className: i,
      hideCTAs: D = !1,
      headingOverride: v,
      hidePill: L = !1,
      selectedPlanColumnClassName: U,
      selectedPlanTier: H = x.PremiumTypes.TIER_2
    } = e,
    {
      analyticsLocations: F
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    W = (0, S.useMarketingOptimizationExperiment)({
      autoTrackExposure: !1
    }),
    w = (0, l.useStateFromStores)([f.default], () => f.default.hasFetchedSubscriptions()),
    K = (0, R.useSubscriptionPlansLoaded)(),
    V = "PlanComparisonTable";
  (0, c.useTriggerDebuggingAA)({
    location: V + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: V + " auto off",
    autoTrackExposure: !1
  });
  let Y = (0, d.default)(),
    z = (0, o.isThemeLight)(Y),
    Q = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    J = (0, m.isPremiumExactly)(Q, x.PremiumTypes.TIER_2),
    X = (0, A.usePremiumTrialOffer)(),
    Z = null == X ? void 0 : null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    q = (0, I.useCurrentPremiumTrialTier)(),
    $ = (0, p.usePremiumDiscountOffer)(),
    ee = null != $ && (0, p.discountOfferHasTier)($, x.PremiumSubscriptionSKUs.TIER_2),
    et = (0, g.useDiscountedPrice)(x.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    es = "".concat(et, "/").concat((0, m.getIntervalStringAsNoun)(x.SubscriptionIntervalTypes.MONTH)),
    ea = (0, m.getDefaultPrice)(x.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    er = (0, m.getDefaultPrice)(x.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    ei = (0, C.useGetPlanComparisonTableRows)(ea, er, ee, es),
    en = (0, N.useIsEligibleForBogoPromotion)();
  if (!w || !K) return null;
  let el = {
    label: (0, a.jsx)(u.Heading, {
      className: h.__invalid_textColor,
      variant: "heading-lg/extrabold",
      children: b.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, a.jsx)(j, {
      premiumType: x.PremiumTypes.TIER_0
    }),
    column2: (0, a.jsx)(j, {
      premiumType: x.PremiumTypes.TIER_2
    })
  };
  D ? ei.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : ei.push({
    label: null,
    column1: (0, a.jsxs)(a.Fragment, {
      children: [Z === x.PremiumSubscriptionSKUs.TIER_2 || en ? (0, a.jsx)(O.default, {
        className: h.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: z ? u.ButtonColors.BRAND : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(O.default, {
        className: h.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), q === x.PremiumTypes.TIER_2 || null != Z ? null : (0, a.jsx)(P.default, {
        className: h.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [Z === x.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(O.default, {
        className: h.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: z ? u.ButtonColors.BRAND : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(O.default, {
        className: h.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: en
      }), q === x.PremiumTypes.TIER_0 || null != Z ? null : (0, a.jsx)(P.default, {
        className: h.button,
        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == Z
  }), s = L ? null : null != Z || null != q ? (0, a.jsx)(M.PremiumPillWithSparkles, {
    text: null != Z ? b.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : b.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: h.freeTrialPillWithSparkles,
    colorOptions: Z === x.PremiumSubscriptionSKUs.TIER_0 ? z ? M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : z ? J ? M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : M.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : en ? (0, a.jsx)(B, {
    isLightTheme: z
  }) : (0, a.jsx)(k, {});
  let eo = Z === x.PremiumSubscriptionSKUs.TIER_0 || q === x.PremiumTypes.TIER_0 || H === x.PremiumTypes.TIER_0;
  return (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: F,
    children: (0, a.jsxs)("div", {
      className: n()(h.root, i),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(u.Heading, {
        className: n()(h.titleText, h.__invalid_textColor),
        variant: "heading-xxl/extrabold",
        children: null != v ? v : b.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: h.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: n()(U, {
            [h.tier0ColumnOuter]: eo && !W,
            [h.tier2ColumnOuter]: !eo && !W,
            [h.tier0ColumnOuterBackground]: eo && W,
            [h.tier2ColumnOuterBackground]: !eo && W
          }),
          children: !eo && s
        }), W && eo && (0, a.jsx)("div", {
          className: h.tier2Pill,
          children: s
        }), (0, a.jsxs)("table", {
          className: h.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(G, {
              ...el
            })
          }), (0, a.jsx)("tbody", {
            children: ei.map((e, t) => (0, r.createElement)(y, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}