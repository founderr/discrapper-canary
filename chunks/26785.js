"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  l = n("627445"),
  i = n.n(l),
  u = n("446674"),
  c = n("669491"),
  o = n("77078"),
  d = n("635357"),
  f = n("915639"),
  m = n("10514"),
  _ = n("659632"),
  E = n("719923"),
  I = n("153160"),
  p = n("646718"),
  S = n("782340"),
  P = n("419063");

function N(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: r,
    selected: l,
    priceOptions: N,
    shouldShowUpdatedPaymentModal: T,
    isEligibleForDiscount: C,
    discountAmountOff: A
  } = e, O = (0, u.useStateFromStores)([f.default], () => f.default.locale), h = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
    isGift: R,
    giftRecipient: g
  } = (0, d.useGiftContext)(), M = R && (0, _.shouldShowCustomGiftExperience)(g, !0, "PremiumSwitchPlanSelectOption");
  i(null != h, "Missing subscriptionPlan");
  let x = null != t && t.planId === n,
    v = x || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
    y = p.DISCOUNTS[n],
    L = (0, E.getPrice)(n, !1, R, N),
    b = (0, E.isPrepaidPaymentSource)(N.paymentSourceId),
    j = null != y && !T,
    G = h.interval === p.SubscriptionIntervalTypes.YEAR ? S.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : S.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    D = () => null != y && (0, s.jsx)(o.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: P.planOptionDiscount,
      children: S.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, I.formatPercent)(O, y / 100)
      })
    }),
    U = () => h.interval === p.SubscriptionIntervalTypes.YEAR && null != t || j && !x ? h.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, s.jsxs)("span", {
      className: P.planOptionMonthsFree,
      children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
    }) : j && !x ? D() : void 0 : null;
  return (0, s.jsxs)(o.Clickable, {
    role: M ? "menuitem" : "radio",
    "aria-checked": l,
    tabIndex: l ? 0 : -1,
    focusProps: {
      offset: {
        left: -4,
        right: -4,
        top: 0,
        bottom: 0
      }
    },
    onClick: v ? void 0 : () => r(n),
    className: a(P.planOptionClickableContainer, {
      [P.selectedPlan]: M && l,
      [P.selectionBox]: M
    }),
    children: [(0, s.jsxs)("div", {
      className: a(P.planOption, {
        [P.planOptionDisabled]: v
      }),
      children: [(0, s.jsxs)("div", {
        className: P.planOptionClickable,
        children: [!M && (0, s.jsx)(o.Checkbox, {
          readOnly: !0,
          displayOnly: !0,
          value: l,
          shape: o.Checkbox.Shapes.ROUND,
          color: c.default.unsafe_rawColors.BRAND_500.css,
          type: o.Checkbox.Types.INVERTED,
          className: P.planOptionCheckbox
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: a(P.planOptionInterval, {
              [P.optionSelected]: l || M,
              [P.updatedOptionSelected]: T && (l || M)
            }),
            children: [(0, E.getIntervalString)(h.interval, R, b, h.intervalCount, M, (0, E.getPremiumType)(h.id)), M && U()]
          }), M && (0, s.jsx)("div", {
            className: P.planOneTimeCost,
            children: S.default.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, I.formatPrice)(L.amount, L.currency)
            })
          })]
        }), x && (0, s.jsxs)("span", {
          className: P.planOptionCurrentPlan,
          children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !M && U()]
      }), T ? (0, s.jsx)("div", {
        className: a({
          [P.optionPriceSelected]: l
        }),
        children: S.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: (() => {
            if (C && null != A) return h.interval === p.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(L.amount - A, L.currency) : (0, I.formatPrice)(L.amount, L.currency);
            return (0, I.formatPrice)(0, L.currency, {
              maximumFractionDigits: 0
            })
          })()
        })
      }) : (0, s.jsx)("div", {
        className: a({
          [P.optionSelected]: l || M
        }),
        children: (0, I.formatPrice)(L.amount, L.currency)
      })]
    }), T && (0, s.jsx)("div", {
      className: P.planOptionSubtextContainer,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        color: l ? "text-normal" : "interactive-normal",
        className: a(P.planOptionSubtext, {
          [P.discountPlanOptionSubtext]: C
        }),
        children: C && null != A ? h.interval === p.SubscriptionIntervalTypes.MONTH ? S.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
          discountedPrice: (0, I.formatPrice)(L.amount - A, L.currency),
          regularPrice: (0, I.formatPrice)(L.amount, L.currency)
        }) : S.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
          percent: y
        }) : G.format({
          price: (0, I.formatPrice)(L.amount, L.currency)
        })
      })
    })]
  })
}