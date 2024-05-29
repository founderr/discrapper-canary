"use strict";
s.r(t), s("653041");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("780384"),
  u = s("481060"),
  d = s("634894"),
  c = s("410030"),
  _ = s("100527"),
  E = s("906732"),
  T = s("15640"),
  I = s("594174"),
  R = s("78839"),
  f = s("74538"),
  S = s("775412"),
  m = s("846363"),
  A = s("104494"),
  p = s("639119"),
  N = s("230916"),
  g = s("248042"),
  C = s("823188"),
  P = s("21023"),
  O = s("318747"),
  M = s("409100"),
  h = s("474936"),
  L = s("689938"),
  x = s("243794"),
  v = s("102655"),
  b = s("768236"),
  D = s("314907"),
  U = s("826701");
let j = e => {
    let {
      isLightTheme: t
    } = e, s = (0, g.getBOGOPillCopy)();
    return (0, a.jsx)(C.PremiumPillWithSparkles, {
      text: s,
      className: x.bogoPillWithSparkles,
      colorOptions: t ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
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
  y = e => {
    let t, {
        premiumType: s
      } = e,
      r = (0, c.default)();
    t = s === h.PremiumTypes.TIER_0 ? (0, o.isThemeDark)(r) ? v : b : (0, o.isThemeDark)(r) ? D : U;
    let i = (0, f.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: x.logo,
      alt: i
    })
  },
  B = e => {
    let {
      label: t,
      column1: s,
      column2: r
    } = e;
    return (0, a.jsxs)("tr", {
      className: n()(x.headerRow, x.rowBottomBorder, x.topBorderRadius),
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
        className: n()(x.headerCell, x.topBorderRadius),
        children: r
      })]
    })
  },
  k = e => {
    let {
      label: t,
      column1: s,
      column2: r,
      withBottomBorder: i = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: u = !1,
      shortRow: d = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: n()(x.row, {
        [x.wideRow]: u,
        [x.topBorderRadius]: l,
        [x.bottomBorderRadius]: o,
        [x.rowBottomBorder]: i,
        [x.shortRow]: d
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: x.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: n()(x.cell, {
          [x.buttonsCell]: u
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: n()(x.cell, {
          [x.topBorderRadius]: l,
          [x.bottomBorderRadius]: o,
          [x.buttonsCell]: u
        }),
        children: r
      })]
    })
  };
t.default = e => {
  var t;
  let s, {
      className: i,
      hideCTAs: v = !1,
      headingOverride: b,
      hidePill: D = !1,
      selectedPlanColumnClassName: U,
      selectedPlanTier: H = h.PremiumTypes.TIER_2
    } = e,
    {
      analyticsLocations: F
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    w = (0, m.useMarketingOptimizationExperiment)({
      autoTrackExposure: !1
    }),
    W = (0, l.useStateFromStores)([R.default], () => R.default.hasFetchedSubscriptions()),
    K = (0, T.useSubscriptionPlansLoaded)(),
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
    X = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentUser()),
    Q = (0, f.isPremiumExactly)(X, h.PremiumTypes.TIER_2),
    J = (0, p.usePremiumTrialOffer)(),
    Z = null == J ? void 0 : null === (t = J.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    q = (0, S.useCurrentPremiumTrialTier)(),
    $ = (0, A.usePremiumDiscountOffer)(),
    ee = null != $ && (0, A.discountOfferHasTier)($, h.PremiumSubscriptionSKUs.TIER_2),
    et = (0, N.useDiscountedPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    es = "".concat(et, "/").concat((0, f.getIntervalStringAsNoun)(h.SubscriptionIntervalTypes.MONTH)),
    ea = (0, f.getDefaultPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    er = (0, f.getDefaultPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    ei = (0, P.useGetPlanComparisonTableRows)(ea, er, ee, es),
    en = (0, g.useIsEligibleForBogoPromotion)();
  if (!W || !K) return null;
  let el = {
    label: (0, a.jsx)(u.Heading, {
      className: x.__invalid_textColor,
      variant: "heading-lg/extrabold",
      children: L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, a.jsx)(y, {
      premiumType: h.PremiumTypes.TIER_0
    }),
    column2: (0, a.jsx)(y, {
      premiumType: h.PremiumTypes.TIER_2
    })
  };
  v ? ei.push({
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
      children: [Z === h.PremiumSubscriptionSKUs.TIER_2 || en ? (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: z ? u.ButtonColors.BRAND : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), q === h.PremiumTypes.TIER_2 || null != Z ? null : (0, a.jsx)(O.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [Z === h.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: z ? u.ButtonColors.BRAND : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: en
      }), q === h.PremiumTypes.TIER_0 || null != Z ? null : (0, a.jsx)(O.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == Z
  }), s = D ? null : null != Z || null != q ? (0, a.jsx)(C.PremiumPillWithSparkles, {
    text: null != Z ? L.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: x.freeTrialPillWithSparkles,
    colorOptions: Z === h.PremiumSubscriptionSKUs.TIER_0 ? z ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : z ? Q ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : en ? (0, a.jsx)(j, {
    isLightTheme: z
  }) : (0, a.jsx)(G, {});
  let eo = Z === h.PremiumSubscriptionSKUs.TIER_0 || q === h.PremiumTypes.TIER_0 || H === h.PremiumTypes.TIER_0;
  return (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: F,
    children: (0, a.jsxs)("div", {
      className: n()(x.root, i),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(u.Heading, {
        className: n()(x.titleText, x.__invalid_textColor),
        variant: "heading-xxl/extrabold",
        children: null != b ? b : L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: x.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: n()(U, {
            [x.tier0ColumnOuter]: eo && !w,
            [x.tier2ColumnOuter]: !eo && !w,
            [x.tier0ColumnOuterBackground]: eo && w,
            [x.tier2ColumnOuterBackground]: !eo && w
          }),
          children: !eo && s
        }), w && eo && (0, a.jsx)("div", {
          className: x.tier2Pill,
          children: s
        }), (0, a.jsxs)("table", {
          className: x.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(B, {
              ...el
            })
          }), (0, a.jsx)("tbody", {
            children: ei.map((e, t) => (0, r.createElement)(k, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}