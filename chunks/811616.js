"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var i = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  r = n("512722"),
  a = n.n(r),
  u = n("442837"),
  o = n("692547"),
  c = n("481060"),
  d = n("987209"),
  m = n("706454"),
  f = n("509545"),
  p = n("669079"),
  I = n("930153"),
  _ = n("74538"),
  S = n("937615"),
  P = n("104494"),
  E = n("474936"),
  T = n("689938"),
  v = n("571062");

function N(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: s,
    selected: r,
    priceOptions: N,
    shouldShowUpdatedPaymentModal: h,
    isEligibleForDiscount: x,
    discountAmountOff: A,
    isEligibleForAnnualDiscount: y,
    annualDiscountAmountOff: g,
    isEligibleForTrial: C
  } = e, M = (0, u.useStateFromStores)([m.default], () => m.default.locale), R = (0, u.useStateFromStores)([f.default], () => f.default.get(n)), {
    isGift: b,
    giftRecipient: L
  } = (0, d.useGiftContext)(), O = b && (0, p.shouldShowCustomGiftExperience)(L);
  a()(null != R, "Missing subscriptionPlan");
  let j = null != t && t.planId === n,
    G = j || n === E.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [E.SubscriptionPlans.PREMIUM_YEAR_TIER_0, E.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
    D = E.DISCOUNTS[n],
    U = (0, _.getPrice)(n, !1, b, N),
    w = (0, _.isPrepaidPaymentSource)(N.paymentSourceId),
    F = null != D && !h,
    B = (0, P.usePremiumDiscountOffer)(),
    k = (0, P.usePremiumAnnualDiscountOffer)(),
    H = y && null != g && R.interval === E.SubscriptionIntervalTypes.YEAR,
    W = R.interval === E.SubscriptionIntervalTypes.YEAR ? T.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : T.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    Y = () => null != D && (0, i.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: v.planOptionDiscount,
      children: T.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, I.formatPercent)(M, D / 100)
      })
    }),
    K = () => R.interval === E.SubscriptionIntervalTypes.YEAR && null != t || F && !j ? R.interval !== E.SubscriptionIntervalTypes.YEAR || null == t || H ? F && !j ? Y() : void 0 : (0, i.jsxs)("span", {
      className: v.planOptionMonthsFree,
      children: ["(", T.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
    }) : null;
  return (0, i.jsxs)(c.Clickable, {
    role: O ? "menuitem" : "radio",
    "aria-checked": r,
    tabIndex: r ? 0 : -1,
    focusProps: {
      offset: {
        left: -4,
        right: -4,
        top: 0,
        bottom: 0
      }
    },
    onClick: G ? void 0 : () => s(n),
    className: l()(v.planOptionClickableContainer, {
      [v.selectedPlan]: O && r,
      [v.selectionBox]: O
    }),
    children: [(0, i.jsxs)("div", {
      className: l()(v.planOption, {
        [v.planOptionDisabled]: G
      }),
      children: [(0, i.jsxs)("div", {
        className: v.planOptionClickable,
        children: [!O && (0, i.jsx)(c.Checkbox, {
          readOnly: !0,
          displayOnly: !0,
          value: r,
          shape: c.Checkbox.Shapes.ROUND,
          color: o.default.unsafe_rawColors.BRAND_500.css,
          type: c.Checkbox.Types.INVERTED,
          className: v.planOptionCheckbox
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsxs)("div", {
            className: l()(v.planOptionInterval, {
              [v.optionSelected]: r || O,
              [v.updatedOptionSelected]: h && (r || O)
            }),
            children: [(0, _.getIntervalString)(R.interval, b, w, R.intervalCount, O, (0, _.getPremiumType)(R.id)), O && K()]
          }), O && (0, i.jsx)("div", {
            className: v.planOneTimeCost,
            children: T.default.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, S.formatPrice)(U.amount, U.currency)
            })
          })]
        }), j && (0, i.jsxs)("span", {
          className: v.planOptionCurrentPlan,
          children: ["(", T.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !O && K()]
      }), h ? (0, i.jsx)("div", {
        className: l()({
          [v.optionPriceSelected]: r
        }),
        children: H ? (() => {
          if (H) {
            var e;
            let t = (0, I.formatPercent)(M, E.ANNUAL_DISCOUNT_IDS_TO_PERCENTAGES[null !== (e = null == k ? void 0 : k.discount_id) && void 0 !== e ? e : "DEFAULT"]);
            return (0, i.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end"
              },
              children: [(0, i.jsx)(c.Text, {
                variant: "eyebrow",
                color: "always-white",
                className: v.annualPlanOptionDiscount,
                children: T.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                  discount: t
                })
              }), T.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                price: (0, S.formatPrice)(U.amount - g, U.currency)
              })]
            })
          }
          return null
        })() : T.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: x && null != A && R.interval === E.SubscriptionIntervalTypes.MONTH ? (0, S.formatPrice)(U.amount - A, U.currency) : C ? (0, S.formatPrice)(0, U.currency, {
            maximumFractionDigits: 0
          }) : (0, S.formatPrice)(U.amount, U.currency)
        })
      }) : (0, i.jsx)("div", {
        className: l()({
          [v.optionSelected]: r || O
        }),
        children: (0, S.formatPrice)(U.amount, U.currency)
      })]
    }), h && (0, i.jsx)("div", {
      className: v.planOptionSubtextContainer,
      children: (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        color: r ? "text-normal" : "interactive-normal",
        className: l()(v.planOptionSubtext, {
          [v.discountPlanOptionSubtext]: x || y
        }),
        children: (() => {
          if (x && null != A && R.interval === E.SubscriptionIntervalTypes.MONTH) {
            var e;
            return T.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
              numMonths: null !== (e = null == B ? void 0 : B.discount.user_usage_limit) && void 0 !== e ? e : E.DISCOUNT_DURATION_FALLBACK,
              discountedPrice: (0, S.formatPrice)(U.amount - A, U.currency),
              regularPrice: (0, S.formatPrice)(U.amount, U.currency)
            })
          }
          if (y && null != g && R.interval === E.SubscriptionIntervalTypes.YEAR) return T.default.Messages.BILLING_ANNUAL_DISCOUNT_YEARLY_PRICE.format({
            discountedPrice: (0, S.formatPrice)(U.amount - g, U.currency),
            regularPrice: (0, S.formatPrice)(U.amount, U.currency)
          });
          if (C) return W.format({
            price: (0, S.formatPrice)(U.amount, U.currency)
          });
          else R.interval === E.SubscriptionIntervalTypes.YEAR && T.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
            percent: D
          });
          return null
        })()
      })
    })]
  })
}