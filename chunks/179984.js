"use strict";
s.r(t), s("653041");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("442837"),
  o = s("780384"),
  u = s("481060"),
  d = s("634894"),
  c = s("410030"),
  _ = s("100527"),
  E = s("906732"),
  C = s("15640"),
  f = s("594174"),
  T = s("78839"),
  I = s("74538"),
  R = s("775412"),
  S = s("846363"),
  p = s("104494"),
  m = s("639119"),
  A = s("230916"),
  N = s("248042"),
  g = s("823188"),
  O = s("21023"),
  P = s("318747"),
  M = s("409100"),
  h = s("474936"),
  x = s("689938"),
  L = s("116511"),
  v = s("102655"),
  j = s("768236"),
  D = s("314907"),
  b = s("826701");
let U = e => {
    let {
      isLightTheme: t
    } = e, s = (0, N.getBOGOPillCopy)();
    return (0, a.jsx)(g.PremiumPillWithSparkles, {
      text: s,
      className: L.bogoPillWithSparkles,
      colorOptions: t ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  y = () => (0, a.jsx)("div", {
    className: L.mostPopularPill,
    children: (0, a.jsx)(u.Heading, {
      className: L.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: x.default.Messages.MOST_POPULAR
    })
  }),
  B = e => {
    let t, {
        premiumType: s
      } = e,
      i = (0, c.default)();
    t = s === h.PremiumTypes.TIER_0 ? (0, o.isThemeDark)(i) ? v : j : (0, o.isThemeDark)(i) ? D : b;
    let r = (0, I.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: L.logo,
      alt: r
    })
  },
  G = e => {
    let {
      label: t,
      column1: s,
      column2: i
    } = e;
    return (0, a.jsxs)("tr", {
      className: l()(L.headerRow, L.rowBottomBorder, L.topBorderRadius),
      children: [(0, a.jsx)("th", {
        scope: "col",
        className: L.headerLabelCell,
        children: t
      }), (0, a.jsx)("th", {
        scope: "col",
        className: L.headerCell,
        children: s
      }), (0, a.jsx)("th", {
        scope: "col",
        className: l()(L.headerCell, L.topBorderRadius),
        children: i
      })]
    })
  },
  k = e => {
    let {
      label: t,
      column1: s,
      column2: i,
      withBottomBorder: r = !0,
      withTopBorderRadius: n = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: u = !1,
      shortRow: d = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: l()(L.row, {
        [L.wideRow]: u,
        [L.topBorderRadius]: n,
        [L.bottomBorderRadius]: o,
        [L.rowBottomBorder]: r,
        [L.shortRow]: d
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: L.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: l()(L.cell, {
          [L.buttonsCell]: u
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: l()(L.cell, {
          [L.topBorderRadius]: n,
          [L.bottomBorderRadius]: o,
          [L.buttonsCell]: u
        }),
        children: i
      })]
    })
  };
t.default = e => {
  var t;
  let s, {
      className: r,
      hideCTAs: v = !1,
      headingOverride: j,
      hidePill: D = !1,
      selectedPlanColumnClassName: b,
      selectedPlanTier: H = h.PremiumTypes.TIER_2
    } = e,
    {
      analyticsLocations: F
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    w = (0, S.useMarketingOptimizationExperiment)({
      autoTrackExposure: !1
    }),
    W = (0, n.useStateFromStores)([T.default], () => T.default.hasFetchedSubscriptions()),
    K = (0, C.useSubscriptionPlansLoaded)(),
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
    Z = (0, n.useStateFromStores)([f.default], () => f.default.getCurrentUser()),
    X = (0, I.isPremiumExactly)(Z, h.PremiumTypes.TIER_2),
    Q = (0, m.usePremiumTrialOffer)(),
    J = null == Q ? void 0 : null === (t = Q.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    q = (0, R.useCurrentPremiumTrialTier)(),
    $ = (0, p.usePremiumDiscountOffer)(),
    ee = null != $ && (0, p.discountOfferHasTier)($, h.PremiumSubscriptionSKUs.TIER_2),
    et = (0, A.useDiscountedPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    es = "".concat(et, "/").concat((0, I.getIntervalStringAsNoun)(h.SubscriptionIntervalTypes.MONTH)),
    ea = (0, I.getDefaultPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    ei = (0, I.getDefaultPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    er = (0, O.useGetPlanComparisonTableRows)(ea, ei, ee, es),
    el = (0, N.useIsEligibleForBogoPromotion)();
  if (!W || !K) return null;
  let en = {
    label: (0, a.jsx)(u.Heading, {
      className: L.__invalid_textColor,
      variant: "heading-lg/extrabold",
      children: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, a.jsx)(B, {
      premiumType: h.PremiumTypes.TIER_0
    }),
    column2: (0, a.jsx)(B, {
      premiumType: h.PremiumTypes.TIER_2
    })
  };
  v ? er.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : er.push({
    label: null,
    column1: (0, a.jsxs)(a.Fragment, {
      children: [J === h.PremiumSubscriptionSKUs.TIER_2 || el ? (0, a.jsx)(M.default, {
        className: L.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: z ? u.ButtonColors.BRAND_NEW : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(M.default, {
        className: L.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), q === h.PremiumTypes.TIER_2 || null != J ? null : (0, a.jsx)(P.default, {
        className: L.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [J === h.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(M.default, {
        className: L.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: z ? u.ButtonColors.BRAND_NEW : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(M.default, {
        className: L.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: el
      }), q === h.PremiumTypes.TIER_0 || null != J ? null : (0, a.jsx)(P.default, {
        className: L.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == J
  }), s = D ? null : null != J || null != q ? (0, a.jsx)(g.PremiumPillWithSparkles, {
    text: null != J ? x.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: L.freeTrialPillWithSparkles,
    colorOptions: J === h.PremiumSubscriptionSKUs.TIER_0 ? z ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : z ? X ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : el ? (0, a.jsx)(U, {
    isLightTheme: z
  }) : (0, a.jsx)(y, {});
  let eo = J === h.PremiumSubscriptionSKUs.TIER_0 || q === h.PremiumTypes.TIER_0 || H === h.PremiumTypes.TIER_0;
  return (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: F,
    children: (0, a.jsxs)("div", {
      className: l()(L.root, r),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(u.Heading, {
        className: l()(L.titleText, L.__invalid_textColor),
        variant: "heading-xxl/extrabold",
        children: null != j ? j : x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: L.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: l()(b, {
            [L.tier0ColumnOuter]: eo && !w,
            [L.tier2ColumnOuter]: !eo && !w,
            [L.tier0ColumnOuterBackground]: eo && w,
            [L.tier2ColumnOuterBackground]: !eo && w
          }),
          children: !eo && s
        }), w && eo && (0, a.jsx)("div", {
          className: L.tier2Pill,
          children: s
        }), (0, a.jsxs)("table", {
          className: L.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(G, {
              ...en
            })
          }), (0, a.jsx)("tbody", {
            children: er.map((e, t) => (0, i.createElement)(k, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}