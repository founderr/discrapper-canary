"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
  }
}), s("424973");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  r = s.n(i),
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
  m = s("154889"),
  A = s("917247"),
  N = s("478968"),
  p = s("641078"),
  g = s("400307"),
  C = s("513516"),
  P = s("218435"),
  O = s("881155"),
  M = s("646718"),
  h = s("782340"),
  L = s("962962"),
  x = s("640754"),
  v = s("510407"),
  D = s("657890"),
  U = s("823986");
let b = e => {
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
      n = (0, c.default)();
    t = s === M.PremiumTypes.TIER_0 ? (0, o.isThemeDark)(n) ? x : v : (0, o.isThemeDark)(n) ? D : U;
    let i = (0, S.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: L.logo,
      alt: i
    })
  },
  k = e => {
    let {
      label: t,
      column1: s,
      column2: n
    } = e;
    return (0, a.jsxs)("tr", {
      className: r(L.headerRow, L.rowBottomBorder, L.topBorderRadius),
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
        className: r(L.headerCell, L.topBorderRadius),
        children: n
      })]
    })
  },
  B = e => {
    let {
      label: t,
      column1: s,
      column2: n,
      withBottomBorder: i = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: u = !1,
      shortRow: d = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: r(L.row, {
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
        className: r(L.cell, {
          [L.buttonsCell]: u
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: r(L.cell, {
          [L.topBorderRadius]: l,
          [L.bottomBorderRadius]: o,
          [L.buttonsCell]: u
        }),
        children: n
      })]
    })
  };
var y = e => {
  var t;
  let s, {
      className: i,
      hideCTAs: x = !1,
      headingOverride: v,
      hidePill: D = !1,
      selectedPlanColumnClassName: U,
      selectedPlanTier: y = M.PremiumTypes.TIER_2
    } = e,
    {
      AnalyticsLocationProvider: H
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    K = (0, l.useStateFromStores)([f.default], () => f.default.hasFetchedSubscriptions()),
    F = (0, I.useSubscriptionPlansLoaded)(),
    W = "PlanComparisonTable";
  (0, d.useTriggerDebuggingAA)({
    location: W + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: W + " auto off",
    autoTrackExposure: !1
  });
  let w = (0, c.default)(),
    V = (0, o.isThemeLight)(w),
    Y = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    z = (0, S.isPremiumExactly)(Y, M.PremiumTypes.TIER_2),
    Q = (0, A.usePremiumTrialOffer)(),
    X = null == Q ? void 0 : null === (t = Q.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    Z = (0, R.useCurrentPremiumTrialTier)(),
    J = (0, m.usePremiumDiscountOffer)(),
    q = null != J && (0, m.discountOfferHasTier)(J, M.PremiumSubscriptionSKUs.TIER_2),
    $ = (0, N.useDiscountedPrice)(M.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    ee = "".concat($, "/").concat((0, S.getIntervalStringAsNoun)(M.SubscriptionIntervalTypes.MONTH)),
    et = (0, S.getDefaultPrice)(M.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    es = (0, S.getDefaultPrice)(M.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    ea = (0, C.useGetPlanComparisonTableRows)(et, es, q, ee),
    en = (0, p.useIsEligibleForBogoPromotion)();
  if (!K || !F) return null;
  let ei = {
    label: (0, a.jsx)(u.Heading, {
      className: L.textColor,
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
  return x ? ea.push({
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
      children: [X === M.PremiumSubscriptionSKUs.TIER_2 || en ? (0, a.jsx)(O.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: V ? u.ButtonColors.BRAND_NEW : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(O.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), Z === M.PremiumTypes.TIER_2 || null != X ? null : (0, a.jsx)(P.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [X === M.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(O.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: V ? u.ButtonColors.BRAND_NEW : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(O.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: en
      }), Z === M.PremiumTypes.TIER_0 || null != X ? null : (0, a.jsx)(P.default, {
        className: L.button,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == X
  }), s = D ? null : null != X || null != Z ? (0, a.jsx)(g.PremiumPillWithSparkles, {
    text: null != X ? h.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : h.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: L.freeTrialPillWithSparkles,
    colorOptions: X === M.PremiumSubscriptionSKUs.TIER_0 ? V ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : V ? z ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : en ? (0, a.jsx)(b, {
    isLightTheme: V
  }) : (0, a.jsx)(j, {}), (0, a.jsx)(H, {
    children: (0, a.jsxs)("div", {
      className: r(L.root, i),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(u.Heading, {
        className: r(L.titleText, L.textColor),
        variant: "heading-xxl/extrabold",
        children: null != v ? v : h.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: L.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: X === M.PremiumSubscriptionSKUs.TIER_0 || Z === M.PremiumTypes.TIER_0 || y === M.PremiumTypes.TIER_0 ? r(U, L.tier0ColumnOuter) : r(U, L.tier2ColumnOuter),
          children: s
        }), (0, a.jsxs)("table", {
          className: L.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(k, {
              ...ei
            })
          }), (0, a.jsx)("tbody", {
            children: ea.map((e, t) => (0, n.createElement)(B, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}