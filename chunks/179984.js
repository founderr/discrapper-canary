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
  A = s("104494"),
  m = s("639119"),
  N = s("230916"),
  p = s("248042"),
  g = s("823188"),
  C = s("21023"),
  P = s("318747"),
  O = s("409100"),
  M = s("474936"),
  h = s("689938"),
  L = s("243794"),
  x = s("102655"),
  v = s("768236"),
  D = s("314907"),
  b = s("826701");
let U = e => {
    let {
      isLightTheme: t
    } = e, s = (0, p.getBOGOPillCopy)();
    return (0, a.jsx)(g.PremiumPillWithSparkles, {
      text: s,
      className: L.bogoPillWithSparkles,
      colorOptions: t ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  j = () => (0, a.jsx)("div", {
    className: L.mostPopularPill,
    children: (0, a.jsx)(u.Heading, {
      className: L.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: h.default.Messages.MOST_POPULAR
    })
  }),
  G = e => {
    let t, {
        premiumType: s
      } = e,
      r = (0, c.default)();
    t = s === M.PremiumTypes.TIER_0 ? (0, o.isThemeDark)(r) ? x : v : (0, o.isThemeDark)(r) ? D : b;
    let i = (0, f.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: L.logo,
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
      className: n()(L.headerRow, L.rowBottomBorder, L.topBorderRadius),
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
        className: n()(L.headerCell, L.topBorderRadius),
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
      shortRow: d = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: n()(L.row, {
        [L.wideRow]: u,
        [L.topBorderRadius]: l,
        [L.bottomBorderRadius]: o,
        [L.rowBottomBorder]: i,
        [L.shortRow]: d
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: L.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: n()(L.cell, {
          [L.buttonsCell]: u
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: n()(L.cell, {
          [L.topBorderRadius]: l,
          [L.bottomBorderRadius]: o,
          [L.buttonsCell]: u
        }),
        children: r
      })]
    })
  };
t.default = e => {
  var t;
  let s, {
      className: i,
      hideCTAs: x = !1,
      headingOverride: v,
      hidePill: D = !1,
      selectedPlanColumnClassName: b,
      selectedPlanTier: k = M.PremiumTypes.TIER_2
    } = e,
    {
      analyticsLocations: H
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    F = (0, l.useStateFromStores)([R.default], () => R.default.hasFetchedSubscriptions()),
    w = (0, T.useSubscriptionPlansLoaded)(),
    W = "PlanComparisonTable";
  (0, d.useTriggerDebuggingAA)({
    location: W + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: W + " auto off",
    autoTrackExposure: !1
  });
  let K = (0, c.default)(),
    V = (0, o.isThemeLight)(K),
    Y = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentUser()),
    z = (0, f.isPremiumExactly)(Y, M.PremiumTypes.TIER_2),
    X = (0, m.usePremiumTrialOffer)(),
    Q = null == X ? void 0 : null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    J = (0, S.useCurrentPremiumTrialTier)(),
    Z = (0, A.usePremiumDiscountOffer)(),
    q = null != Z && (0, A.discountOfferHasTier)(Z, M.PremiumSubscriptionSKUs.TIER_2),
    $ = (0, N.useDiscountedPrice)(M.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    ee = "".concat($, "/").concat((0, f.getIntervalStringAsNoun)(M.SubscriptionIntervalTypes.MONTH)),
    et = (0, f.getDefaultPrice)(M.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    es = (0, f.getDefaultPrice)(M.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    ea = (0, C.useGetPlanComparisonTableRows)(et, es, q, ee),
    er = (0, p.useIsEligibleForBogoPromotion)();
  if (!F || !w) return null;
  let ei = {
    label: (0, a.jsx)(u.Heading, {
      className: L.__invalid_textColor,
      variant: "heading-lg/extrabold",
      children: h.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, a.jsx)(G, {
      premiumType: M.PremiumTypes.TIER_0
    }),
    column2: (0, a.jsx)(G, {
      premiumType: M.PremiumTypes.TIER_2
    })
  };
  x ? ea.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : ea.push({
    label: null,
    column1: (0, a.jsxs)(a.Fragment, {
      children: [Q === M.PremiumSubscriptionSKUs.TIER_2 || er ? (0, a.jsx)(O.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: V ? u.ButtonColors.BRAND : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(O.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), J === M.PremiumTypes.TIER_2 || null != Q ? null : (0, a.jsx)(P.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [Q === M.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(O.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: V ? u.ButtonColors.BRAND : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(O.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: er
      }), J === M.PremiumTypes.TIER_0 || null != Q ? null : (0, a.jsx)(P.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == Q
  }), s = D ? null : null != Q || null != J ? (0, a.jsx)(g.PremiumPillWithSparkles, {
    text: null != Q ? h.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : h.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: L.freeTrialPillWithSparkles,
    colorOptions: Q === M.PremiumSubscriptionSKUs.TIER_0 ? V ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : V ? z ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : er ? (0, a.jsx)(U, {
    isLightTheme: V
  }) : (0, a.jsx)(j, {});
  let en = Q === M.PremiumSubscriptionSKUs.TIER_0 || J === M.PremiumTypes.TIER_0 || k === M.PremiumTypes.TIER_0;
  return (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: H,
    children: (0, a.jsxs)("div", {
      className: n()(L.root, i),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(u.Heading, {
        className: n()(L.titleText, L.__invalid_textColor),
        variant: "heading-xxl/extrabold",
        children: null != v ? v : h.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: L.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: n()(b, {
            [L.tier0ColumnOuter]: en,
            [L.tier2ColumnOuter]: !en
          }),
          children: !en && s
        }), (0, a.jsxs)("table", {
          className: L.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(B, {
              ...ei
            })
          }), (0, a.jsx)("tbody", {
            children: ea.map((e, t) => (0, r.createElement)(y, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}