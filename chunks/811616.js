"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  a = n("512722"),
  r = n.n(a),
  u = n("442837"),
  o = n("692547"),
  c = n("481060"),
  d = n("987209"),
  m = n("706454"),
  p = n("509545"),
  f = n("669079"),
  S = n("930153"),
  I = n("74538"),
  _ = n("937615"),
  P = n("104494"),
  E = n("474936"),
  T = n("689938"),
  v = n("745167");

function h(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: l,
    selected: a,
    priceOptions: h,
    shouldShowUpdatedPaymentModal: N,
    isEligibleForDiscount: x,
    discountAmountOff: A,
    isEligibleForAnnualDiscount: y,
    annualDiscountAmountOff: C,
    isEligibleForTrial: R
  } = e, b = (0, u.useStateFromStores)([m.default], () => m.default.locale), g = (0, u.useStateFromStores)([p.default], () => p.default.get(n)), {
    isGift: O,
    giftRecipient: M
  } = (0, d.useGiftContext)(), L = O && (0, f.shouldShowCustomGiftExperience)(M);
  r()(null != g, "Missing subscriptionPlan");
  let j = null != t && t.planId === n,
    G = j || n === E.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [E.SubscriptionPlans.PREMIUM_YEAR_TIER_0, E.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
    U = E.DISCOUNTS[n],
    D = (0, I.getPrice)(n, !1, O, h),
    w = (0, I.isPrepaidPaymentSource)(h.paymentSourceId),
    F = null != U && !N,
    B = (0, P.usePremiumDiscountOffer)(),
    H = (0, P.usePremiumAnnualDiscountOffer)(),
    k = y && null != C && g.interval === E.SubscriptionIntervalTypes.YEAR,
    W = g.interval === E.SubscriptionIntervalTypes.YEAR ? T.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : T.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    Y = () => null != U && (0, i.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: v.planOptionDiscount,
      children: T.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, S.formatPercent)(b, U / 100)
      })
    }),
    K = () => g.interval === E.SubscriptionIntervalTypes.YEAR && null != t || F && !j ? g.interval !== E.SubscriptionIntervalTypes.YEAR || null == t || k ? F && !j ? Y() : void 0 : (0, i.jsxs)("span", {
      className: v.planOptionMonthsFree,
      children: ["(", T.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
    }) : null;
  return (0, i.jsxs)(c.Clickable, {
    role: L ? "menuitem" : "radio",
    "aria-checked": a,
    tabIndex: a ? 0 : -1,
    focusProps: {
      offset: {
        left: -4,
        right: -4,
        top: 0,
        bottom: 0
      }
    },
    onClick: G ? void 0 : () => l(n),
    className: s()(v.planOptionClickableContainer, {
      [v.selectedPlan]: L && a,
      [v.selectionBox]: L
    }),
    children: [(0, i.jsxs)("div", {
      className: s()(v.planOption, {
        [v.planOptionDisabled]: G
      }),
      children: [(0, i.jsxs)("div", {
        className: v.planOptionClickable,
        children: [!L && (0, i.jsx)(c.Checkbox, {
          readOnly: !0,
          displayOnly: !0,
          value: a,
          shape: c.Checkbox.Shapes.ROUND,
          color: o.default.unsafe_rawColors.BRAND_500.css,
          type: c.Checkbox.Types.INVERTED,
          className: v.planOptionCheckbox
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsxs)("div", {
            className: s()(v.planOptionInterval, {
              [v.optionSelected]: a || L,
              [v.updatedOptionSelected]: N && (a || L)
            }),
            children: [(0, I.getIntervalString)(g.interval, O, w, g.intervalCount, L, (0, I.getPremiumType)(g.id)), L && K()]
          }), L && (0, i.jsx)("div", {
            className: v.planOneTimeCost,
            children: T.default.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, _.formatPrice)(D.amount, D.currency)
            })
          })]
        }), j && (0, i.jsxs)("span", {
          className: v.planOptionCurrentPlan,
          children: ["(", T.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !L && K()]
      }), N ? (0, i.jsx)("div", {
        className: s()({
          [v.optionPriceSelected]: a
        }),
        children: k ? (() => {
          if (k) {
            var e;
            let t = (0, S.formatPercent)(b, E.ANNUAL_DISCOUNT_IDS_TO_PERCENTAGES[null !== (e = null == H ? void 0 : H.discount_id) && void 0 !== e ? e : "DEFAULT"]);
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
                price: (0, _.formatPrice)(D.amount - C, D.currency)
              })]
            })
          }
          return null
        })() : T.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: x && null != A && g.interval === E.SubscriptionIntervalTypes.MONTH ? (0, _.formatPrice)(D.amount - A, D.currency) : R ? (0, _.formatPrice)(0, D.currency, {
            maximumFractionDigits: 0
          }) : (0, _.formatPrice)(D.amount, D.currency)
        })
      }) : (0, i.jsx)("div", {
        className: s()({
          [v.optionSelected]: a || L
        }),
        children: (0, _.formatPrice)(D.amount, D.currency)
      })]
    }), N && (0, i.jsx)("div", {
      className: v.planOptionSubtextContainer,
      children: (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        color: a ? "text-normal" : "interactive-normal",
        className: s()(v.planOptionSubtext, {
          [v.discountPlanOptionSubtext]: x || y
        }),
        children: (() => {
          if (x && null != A && g.interval === E.SubscriptionIntervalTypes.MONTH) {
            var e;
            return T.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
              numMonths: null !== (e = null == B ? void 0 : B.discount.user_usage_limit) && void 0 !== e ? e : E.DISCOUNT_DURATION_FALLBACK,
              discountedPrice: (0, _.formatPrice)(D.amount - A, D.currency),
              regularPrice: (0, _.formatPrice)(D.amount, D.currency)
            })
          }
          if (y && null != C && g.interval === E.SubscriptionIntervalTypes.YEAR) return T.default.Messages.BILLING_ANNUAL_DISCOUNT_YEARLY_PRICE_SUBTEXT.format({
            regularPrice: (0, _.formatPrice)(D.amount, D.currency)
          });
          if (R) return W.format({
            price: (0, _.formatPrice)(D.amount, D.currency)
          });
          else g.interval === E.SubscriptionIntervalTypes.YEAR && T.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
            percent: U
          });
          return null
        })()
      })
    })]
  })
}