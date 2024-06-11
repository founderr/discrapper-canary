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
  I = s("78839"),
  f = s("74538"),
  S = s("775412"),
  m = s("104494"),
  p = s("639119"),
  A = s("230916"),
  M = s("248042"),
  C = s("823188"),
  g = s("21023"),
  N = s("318747"),
  P = s("409100"),
  O = s("474936"),
  x = s("689938"),
  b = s("243794"),
  h = s("102655"),
  D = s("768236"),
  L = s("314907"),
  v = s("826701");
let U = e => {
    let {
      isLightTheme: t
    } = e, s = (0, M.getBOGOPillCopy)();
    return (0, a.jsx)(C.PremiumPillWithSparkles, {
      text: s,
      className: b.bogoPillWithSparkles,
      colorOptions: t ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  B = () => (0, a.jsx)("div", {
    className: b.mostPopularPill,
    children: (0, a.jsx)(u.Heading, {
      className: b.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: x.default.Messages.MOST_POPULAR
    })
  }),
  j = e => {
    let t, {
        premiumType: s
      } = e,
      r = (0, d.default)();
    t = s === O.PremiumTypes.TIER_0 ? (0, o.isThemeDark)(r) ? h : D : (0, o.isThemeDark)(r) ? L : v;
    let i = (0, f.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: b.logo,
      alt: i
    })
  },
  k = e => {
    let {
      label: t,
      column1: s,
      column2: r
    } = e;
    return (0, a.jsxs)("tr", {
      className: n()(b.headerRow, b.rowBottomBorder, b.topBorderRadius),
      children: [(0, a.jsx)("th", {
        scope: "col",
        className: b.headerLabelCell,
        children: t
      }), (0, a.jsx)("th", {
        scope: "col",
        className: b.headerCell,
        children: s
      }), (0, a.jsx)("th", {
        scope: "col",
        className: n()(b.headerCell, b.topBorderRadius),
        children: r
      })]
    })
  },
  G = e => {
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
      className: n()(b.row, {
        [b.wideRow]: u,
        [b.topBorderRadius]: l,
        [b.bottomBorderRadius]: o,
        [b.rowBottomBorder]: i,
        [b.shortRow]: c
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: b.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: n()(b.cell, {
          [b.buttonsCell]: u
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: n()(b.cell, {
          [b.topBorderRadius]: l,
          [b.bottomBorderRadius]: o,
          [b.buttonsCell]: u
        }),
        children: r
      })]
    })
  };
t.default = e => {
  var t;
  let s, {
      className: i,
      hideCTAs: h = !1,
      headingOverride: D,
      hidePill: L = !1,
      selectedPlanColumnClassName: v,
      selectedPlanTier: H = O.PremiumTypes.TIER_2
    } = e,
    {
      analyticsLocations: W
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    y = (0, l.useStateFromStores)([I.default], () => I.default.hasFetchedSubscriptions()),
    F = (0, R.useSubscriptionPlansLoaded)(),
    w = "PlanComparisonTable";
  (0, c.useTriggerDebuggingAA)({
    location: w + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: w + " auto off",
    autoTrackExposure: !1
  });
  let K = (0, d.default)(),
    V = (0, o.isThemeLight)(K),
    Y = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    z = (0, f.isPremiumExactly)(Y, O.PremiumTypes.TIER_2),
    Q = (0, p.usePremiumTrialOffer)(),
    X = null == Q ? void 0 : null === (t = Q.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    J = (0, S.useCurrentPremiumTrialTier)(),
    Z = (0, m.usePremiumDiscountOffer)(),
    q = null != Z && (0, m.discountOfferHasTier)(Z, O.PremiumSubscriptionSKUs.TIER_2),
    $ = (0, A.useDiscountedPrice)(O.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    ee = "".concat($, "/").concat((0, f.getIntervalStringAsNoun)(O.SubscriptionIntervalTypes.MONTH)),
    et = (0, f.getDefaultPrice)(O.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    es = (0, f.getDefaultPrice)(O.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    ea = (0, g.useGetPlanComparisonTableRows)(et, es, q, ee),
    er = (0, M.useIsEligibleForBogoPromotion)();
  if (!y || !F) return null;
  let ei = {
    label: (0, a.jsx)(u.Heading, {
      className: b.__invalid_textColor,
      variant: "heading-lg/extrabold",
      children: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, a.jsx)(j, {
      premiumType: O.PremiumTypes.TIER_0
    }),
    column2: (0, a.jsx)(j, {
      premiumType: O.PremiumTypes.TIER_2
    })
  };
  h ? ea.push({
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
      children: [X === O.PremiumSubscriptionSKUs.TIER_2 || er ? (0, a.jsx)(P.default, {
        className: b.button,
        subscriptionTier: O.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: V ? u.ButtonColors.BRAND : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(P.default, {
        className: b.button,
        subscriptionTier: O.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), J === O.PremiumTypes.TIER_2 || null != X ? null : (0, a.jsx)(N.default, {
        className: b.button,
        subscriptionTier: O.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [X === O.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(P.default, {
        className: b.button,
        subscriptionTier: O.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: V ? u.ButtonColors.BRAND : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(P.default, {
        className: b.button,
        subscriptionTier: O.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: er
      }), J === O.PremiumTypes.TIER_0 || null != X ? null : (0, a.jsx)(N.default, {
        className: b.button,
        subscriptionTier: O.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == X
  }), s = L ? null : null != X || null != J ? (0, a.jsx)(C.PremiumPillWithSparkles, {
    text: null != X ? x.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: b.freeTrialPillWithSparkles,
    colorOptions: X === O.PremiumSubscriptionSKUs.TIER_0 ? V ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : V ? z ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : er ? (0, a.jsx)(U, {
    isLightTheme: V
  }) : (0, a.jsx)(B, {});
  let en = X === O.PremiumSubscriptionSKUs.TIER_0 || J === O.PremiumTypes.TIER_0 || H === O.PremiumTypes.TIER_0;
  return (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: W,
    children: (0, a.jsxs)("div", {
      className: n()(b.root, i),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(u.Heading, {
        className: n()(b.titleText, b.__invalid_textColor),
        variant: "heading-xxl/extrabold",
        children: null != D ? D : x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: b.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: n()(v, {
            [b.tier0ColumnOuter]: en,
            [b.tier2ColumnOuter]: !en
          }),
          children: !en && s
        }), (0, a.jsxs)("table", {
          className: b.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(k, {
              ...ei
            })
          }), (0, a.jsx)("tbody", {
            children: ea.map((e, t) => (0, r.createElement)(G, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}