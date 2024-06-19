s.d(n, {
  Z: function() {
    return P
  }
});
var l = s(735250);
s(470079);
var t = s(120356),
  i = s.n(t),
  r = s(512722),
  a = s.n(r),
  c = s(442837),
  o = s(692547),
  u = s(481060),
  d = s(987209),
  _ = s(706454),
  m = s(509545),
  I = s(669079),
  E = s(930153),
  p = s(74538),
  N = s(937615),
  T = s(104494),
  S = s(474936),
  x = s(689938),
  h = s(24812);

function P(e) {
  let {
    premiumSubscription: n,
    planId: s,
    selectPlan: t,
    selected: r,
    priceOptions: P,
    shouldShowUpdatedPaymentModal: v,
    isEligibleForDiscount: A,
    discountAmountOff: f,
    isEligibleForAnnualDiscount: M,
    annualDiscountAmountOff: g,
    isEligibleForTrial: C
  } = e, L = (0, c.e7)([_.default], () => _.default.locale), R = (0, c.e7)([m.Z], () => m.Z.get(s)), {
    isGift: O,
    giftRecipient: j
  } = (0, d.wD)(), y = O && (0, I.pO)(j);
  a()(null != R, "Missing subscriptionPlan");
  let Z = null != n && n.planId === s,
    b = Z || s === S.Xh.PREMIUM_MONTH_TIER_2 && null != n && [S.Xh.PREMIUM_YEAR_TIER_0, S.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId),
    D = S.nH[s],
    G = (0, p.aS)(s, !1, O, P),
    U = (0, p.Ap)(P.paymentSourceId),
    w = null != D && !v,
    F = (0, T.Ng)(),
    B = (0, T.z1)(),
    H = M && null != g && R.interval === S.rV.YEAR,
    k = R.interval === S.rV.YEAR ? x.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : x.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    W = () => null != D && (0, l.jsx)(u.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: h.planOptionDiscount,
      children: x.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, E.T3)(L, D / 100)
      })
    }),
    Y = () => R.interval === S.rV.YEAR && null != n || w && !Z ? R.interval !== S.rV.YEAR || null == n || H ? w && !Z ? W() : void 0 : (0, l.jsxs)("span", {
      className: h.planOptionMonthsFree,
      children: ["(", x.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
    }) : null;
  return (0, l.jsxs)(u.Clickable, {
    role: y ? "menuitem" : "radio",
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
    onClick: b ? void 0 : () => t(s),
    className: i()(h.planOptionClickableContainer, {
      [h.selectedPlan]: y && r,
      [h.selectionBox]: y
    }),
    children: [(0, l.jsxs)("div", {
      className: i()(h.planOption, {
        [h.planOptionDisabled]: b
      }),
      children: [(0, l.jsxs)("div", {
        className: h.planOptionClickable,
        children: [!y && (0, l.jsx)(u.Checkbox, {
          readOnly: !0,
          displayOnly: !0,
          value: r,
          shape: u.Checkbox.Shapes.ROUND,
          color: o.Z.unsafe_rawColors.BRAND_500.css,
          type: u.Checkbox.Types.INVERTED,
          className: h.planOptionCheckbox
        }), (0, l.jsxs)("div", {
          children: [(0, l.jsxs)("div", {
            className: i()(h.planOptionInterval, {
              [h.optionSelected]: r || y,
              [h.updatedOptionSelected]: v && (r || y)
            }),
            children: [(0, p.L7)(R.interval, O, U, R.intervalCount, y, (0, p.Rd)(R.id)), y && Y()]
          }), y && (0, l.jsx)("div", {
            className: h.planOneTimeCost,
            children: x.Z.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, N.T4)(G.amount, G.currency)
            })
          })]
        }), Z && (0, l.jsxs)("span", {
          className: h.planOptionCurrentPlan,
          children: ["(", x.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !y && Y()]
      }), v ? (0, l.jsx)("div", {
        className: i()({
          [h.optionPriceSelected]: r
        }),
        children: H ? (() => {
          if (H) {
            var e;
            let n = (0, E.T3)(L, S.sK[null !== (e = null == B ? void 0 : B.discount_id) && void 0 !== e ? e : "DEFAULT"]);
            return (0, l.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end"
              },
              children: [(0, l.jsx)(u.Text, {
                variant: "eyebrow",
                color: "always-white",
                className: h.annualPlanOptionDiscount,
                children: x.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                  discount: n
                })
              }), x.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                price: (0, N.T4)(G.amount - g, G.currency)
              })]
            })
          }
          return null
        })() : x.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: A && null != f && R.interval === S.rV.MONTH ? (0, N.T4)(G.amount - f, G.currency) : C ? (0, N.T4)(0, G.currency, {
            maximumFractionDigits: 0
          }) : (0, N.T4)(G.amount, G.currency)
        })
      }) : (0, l.jsx)("div", {
        className: i()({
          [h.optionSelected]: r || y
        }),
        children: (0, N.T4)(G.amount, G.currency)
      })]
    }), v && (0, l.jsx)("div", {
      className: h.planOptionSubtextContainer,
      children: (0, l.jsx)(u.Text, {
        variant: "text-md/normal",
        color: r ? "text-normal" : "interactive-normal",
        className: i()(h.planOptionSubtext, {
          [h.discountPlanOptionSubtext]: A || M
        }),
        children: (() => {
          if (A && null != f && R.interval === S.rV.MONTH) {
            var e;
            return x.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
              numMonths: null !== (e = null == F ? void 0 : F.discount.user_usage_limit) && void 0 !== e ? e : S.rt,
              discountedPrice: (0, N.T4)(G.amount - f, G.currency),
              regularPrice: (0, N.T4)(G.amount, G.currency)
            })
          }
          if (M && null != g && R.interval === S.rV.YEAR) return x.Z.Messages.BILLING_ANNUAL_DISCOUNT_YEARLY_PRICE_SUBTEXT.format({
            regularPrice: (0, N.T4)(G.amount, G.currency)
          });
          if (C) return k.format({
            price: (0, N.T4)(G.amount, G.currency)
          });
          else R.interval === S.rV.YEAR && x.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
            percent: D
          });
          return null
        })()
      })
    })]
  })
}