"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
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
  E = n("240481"),
  I = n("719923"),
  p = n("153160"),
  N = n("646718"),
  S = n("782340"),
  P = n("902839");

function T(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: r,
    selected: l,
    priceOptions: T,
    shouldShowUpdatedPaymentModal: A,
    isEligibleForDiscount: C,
    discountAmountOff: O
  } = e, h = (0, u.useStateFromStores)([f.default], () => f.default.locale), R = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
    isGift: M,
    giftRecipient: g
  } = (0, d.useGiftContext)(), x = M && (0, _.shouldShowCustomGiftExperience)(g);
  i(null != R, "Missing subscriptionPlan");
  let v = null != t && t.planId === n,
    y = v || n === N.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [N.SubscriptionPlans.PREMIUM_YEAR_TIER_0, N.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
    L = N.DISCOUNTS[n],
    b = (0, I.getPrice)(n, !1, M, T),
    j = (0, I.isPrepaidPaymentSource)(T.paymentSourceId),
    G = null != L && !A,
    D = R.interval === N.SubscriptionIntervalTypes.YEAR ? S.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : S.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    U = () => null != L && (0, s.jsx)(o.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: P.planOptionDiscount,
      children: S.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, E.formatPercent)(h, L / 100)
      })
    }),
    B = () => R.interval === N.SubscriptionIntervalTypes.YEAR && null != t || G && !v ? R.interval === N.SubscriptionIntervalTypes.YEAR && null != t ? (0, s.jsxs)("span", {
      className: P.planOptionMonthsFree,
      children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
    }) : G && !v ? U() : void 0 : null;
  return (0, s.jsxs)(o.Clickable, {
    role: x ? "menuitem" : "radio",
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
    onClick: y ? void 0 : () => r(n),
    className: a(P.planOptionClickableContainer, {
      [P.selectedPlan]: x && l,
      [P.selectionBox]: x
    }),
    children: [(0, s.jsxs)("div", {
      className: a(P.planOption, {
        [P.planOptionDisabled]: y
      }),
      children: [(0, s.jsxs)("div", {
        className: P.planOptionClickable,
        children: [!x && (0, s.jsx)(o.Checkbox, {
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
              [P.optionSelected]: l || x,
              [P.updatedOptionSelected]: A && (l || x)
            }),
            children: [(0, I.getIntervalString)(R.interval, M, j, R.intervalCount, x, (0, I.getPremiumType)(R.id)), x && B()]
          }), x && (0, s.jsx)("div", {
            className: P.planOneTimeCost,
            children: S.default.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, p.formatPrice)(b.amount, b.currency)
            })
          })]
        }), v && (0, s.jsxs)("span", {
          className: P.planOptionCurrentPlan,
          children: ["(", S.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !x && B()]
      }), A ? (0, s.jsx)("div", {
        className: a({
          [P.optionPriceSelected]: l
        }),
        children: S.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: (() => {
            if (C && null != O) return R.interval === N.SubscriptionIntervalTypes.MONTH ? (0, p.formatPrice)(b.amount - O, b.currency) : (0, p.formatPrice)(b.amount, b.currency);
            return (0, p.formatPrice)(0, b.currency, {
              maximumFractionDigits: 0
            })
          })()
        })
      }) : (0, s.jsx)("div", {
        className: a({
          [P.optionSelected]: l || x
        }),
        children: (0, p.formatPrice)(b.amount, b.currency)
      })]
    }), A && (0, s.jsx)("div", {
      className: P.planOptionSubtextContainer,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        color: l ? "text-normal" : "interactive-normal",
        className: a(P.planOptionSubtext, {
          [P.discountPlanOptionSubtext]: C
        }),
        children: C && null != O ? R.interval === N.SubscriptionIntervalTypes.MONTH ? S.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
          discountedPrice: (0, p.formatPrice)(b.amount - O, b.currency),
          regularPrice: (0, p.formatPrice)(b.amount, b.currency)
        }) : S.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
          percent: L
        }) : D.format({
          price: (0, p.formatPrice)(b.amount, b.currency)
        })
      })
    })]
  })
}