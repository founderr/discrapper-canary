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
  p = n("719923"),
  I = n("153160"),
  S = n("646718"),
  P = n("782340"),
  N = n("419063");

function T(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: r,
    selected: l,
    priceOptions: T,
    shouldShowUpdatedPaymentModal: C,
    isEligibleForDiscount: A,
    discountAmountOff: O
  } = e, h = (0, u.useStateFromStores)([f.default], () => f.default.locale), R = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
    isGift: g,
    giftRecipient: M
  } = (0, d.useGiftContext)(), x = g && (0, _.shouldShowCustomGiftExperience)(M, !0, "PremiumSwitchPlanSelectOption");
  i(null != R, "Missing subscriptionPlan");
  let v = null != t && t.planId === n,
    y = v || n === S.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [S.SubscriptionPlans.PREMIUM_YEAR_TIER_0, S.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
    L = S.DISCOUNTS[n],
    b = (0, p.getPrice)(n, !1, g, T),
    j = (0, p.isPrepaidPaymentSource)(T.paymentSourceId),
    G = null != L && !C,
    D = R.interval === S.SubscriptionIntervalTypes.YEAR ? P.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : P.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    U = () => null != L && (0, s.jsx)(o.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: N.planOptionDiscount,
      children: P.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, E.formatPercent)(h, L / 100)
      })
    }),
    B = () => R.interval === S.SubscriptionIntervalTypes.YEAR && null != t || G && !v ? R.interval === S.SubscriptionIntervalTypes.YEAR && null != t ? (0, s.jsxs)("span", {
      className: N.planOptionMonthsFree,
      children: ["(", P.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
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
    className: a(N.planOptionClickableContainer, {
      [N.selectedPlan]: x && l,
      [N.selectionBox]: x
    }),
    children: [(0, s.jsxs)("div", {
      className: a(N.planOption, {
        [N.planOptionDisabled]: y
      }),
      children: [(0, s.jsxs)("div", {
        className: N.planOptionClickable,
        children: [!x && (0, s.jsx)(o.Checkbox, {
          readOnly: !0,
          displayOnly: !0,
          value: l,
          shape: o.Checkbox.Shapes.ROUND,
          color: c.default.unsafe_rawColors.BRAND_500.css,
          type: o.Checkbox.Types.INVERTED,
          className: N.planOptionCheckbox
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: a(N.planOptionInterval, {
              [N.optionSelected]: l || x,
              [N.updatedOptionSelected]: C && (l || x)
            }),
            children: [(0, p.getIntervalString)(R.interval, g, j, R.intervalCount, x, (0, p.getPremiumType)(R.id)), x && B()]
          }), x && (0, s.jsx)("div", {
            className: N.planOneTimeCost,
            children: P.default.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, I.formatPrice)(b.amount, b.currency)
            })
          })]
        }), v && (0, s.jsxs)("span", {
          className: N.planOptionCurrentPlan,
          children: ["(", P.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !x && B()]
      }), C ? (0, s.jsx)("div", {
        className: a({
          [N.optionPriceSelected]: l
        }),
        children: P.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: (() => {
            if (A && null != O) return R.interval === S.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(b.amount - O, b.currency) : (0, I.formatPrice)(b.amount, b.currency);
            return (0, I.formatPrice)(0, b.currency, {
              maximumFractionDigits: 0
            })
          })()
        })
      }) : (0, s.jsx)("div", {
        className: a({
          [N.optionSelected]: l || x
        }),
        children: (0, I.formatPrice)(b.amount, b.currency)
      })]
    }), C && (0, s.jsx)("div", {
      className: N.planOptionSubtextContainer,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        color: l ? "text-normal" : "interactive-normal",
        className: a(N.planOptionSubtext, {
          [N.discountPlanOptionSubtext]: A
        }),
        children: A && null != O ? R.interval === S.SubscriptionIntervalTypes.MONTH ? P.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
          discountedPrice: (0, I.formatPrice)(b.amount - O, b.currency),
          regularPrice: (0, I.formatPrice)(b.amount, b.currency)
        }) : P.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
          percent: L
        }) : D.format({
          price: (0, I.formatPrice)(b.amount, b.currency)
        })
      })
    })]
  })
}