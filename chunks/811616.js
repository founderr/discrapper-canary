s.d(n, {
    Z: function () {
        return P;
    }
});
var t = s(735250);
s(470079);
var l = s(120356),
    i = s.n(l),
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
    h = s(703236);
function P(e) {
    let { premiumSubscription: n, planId: s, selectPlan: l, selected: r, priceOptions: P, shouldShowUpdatedPaymentModal: f, isEligibleForDiscount: A, discountAmountOff: v, isEligibleForTrial: M } = e,
        g = (0, c.e7)([_.default], () => _.default.locale),
        R = (0, c.e7)([m.Z], () => m.Z.get(s)),
        { isGift: L, giftRecipient: O } = (0, d.wD)(),
        C = L && (0, I.pO)(O);
    a()(null != R, 'Missing subscriptionPlan');
    let j = null != n && n.planId === s,
        Z = j || (s === S.Xh.PREMIUM_MONTH_TIER_2 && null != n && [S.Xh.PREMIUM_YEAR_TIER_0, S.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId)),
        y = S.nH[s],
        b = (0, p.aS)(s, !1, L, P),
        D = (0, p.Ap)(P.paymentSourceId),
        G = null != y && !f,
        U = (0, T.Ng)(),
        F = R.interval === S.rV.YEAR ? x.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : x.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
        B = () =>
            null != y &&
            (0, t.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: h.planOptionDiscount,
                children: x.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({ discount: (0, E.T3)(g, y / 100) })
            }),
        w = () =>
            (R.interval === S.rV.YEAR && null != n) || (G && !j)
                ? R.interval === S.rV.YEAR && null != n
                    ? (0, t.jsxs)('span', {
                          className: h.planOptionMonthsFree,
                          children: ['(', x.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ')']
                      })
                    : G && !j
                      ? B()
                      : void 0
                : null;
    return (0, t.jsxs)(u.Clickable, {
        role: C ? 'menuitem' : 'radio',
        'aria-checked': r,
        tabIndex: r ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0
            }
        },
        onClick: Z ? void 0 : () => l(s),
        className: i()(h.planOptionClickableContainer, {
            [h.selectedPlan]: C && r,
            [h.selectionBox]: C
        }),
        children: [
            (0, t.jsxs)('div', {
                className: i()(h.planOption, { [h.planOptionDisabled]: Z }),
                children: [
                    (0, t.jsxs)('div', {
                        className: h.planOptionClickable,
                        children: [
                            !C &&
                                (0, t.jsx)(u.Checkbox, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: r,
                                    shape: u.Checkbox.Shapes.ROUND,
                                    color: o.Z.unsafe_rawColors.BRAND_500.css,
                                    type: u.Checkbox.Types.INVERTED,
                                    className: h.planOptionCheckbox
                                }),
                            (0, t.jsxs)('div', {
                                children: [
                                    (0, t.jsxs)('div', {
                                        className: i()(h.planOptionInterval, {
                                            [h.optionSelected]: r || C,
                                            [h.updatedOptionSelected]: f && (r || C)
                                        }),
                                        children: [(0, p.L7)(R.interval, L, D, R.intervalCount, C, (0, p.Rd)(R.id)), C && w()]
                                    }),
                                    C &&
                                        (0, t.jsx)('div', {
                                            className: h.planOneTimeCost,
                                            children: x.Z.Messages.ONE_TIME_CHARGE.format({ currencyAmount: (0, N.T4)(b.amount, b.currency) })
                                        })
                                ]
                            }),
                            j &&
                                (0, t.jsxs)('span', {
                                    className: h.planOptionCurrentPlan,
                                    children: ['(', x.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ')']
                                }),
                            !C && w()
                        ]
                    }),
                    f
                        ? (0, t.jsx)('div', {
                              className: i()({ [h.optionPriceSelected]: r }),
                              children: x.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                  price:
                                      A && null != v && R.interval === S.rV.MONTH
                                          ? (0, N.T4)(b.amount - v, b.currency)
                                          : M
                                            ? (0, N.T4)(0, b.currency, {
                                                  minimumFractionDigits: 0,
                                                  maximumFractionDigits: 0
                                              })
                                            : (0, N.T4)(b.amount, b.currency)
                              })
                          })
                        : (0, t.jsx)('div', {
                              className: i()({ [h.optionSelected]: r || C }),
                              children: (0, N.T4)(b.amount, b.currency)
                          })
                ]
            }),
            f &&
                (0, t.jsx)('div', {
                    className: h.planOptionSubtextContainer,
                    children: (0, t.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: r ? 'text-normal' : 'interactive-normal',
                        className: i()(h.planOptionSubtext, { [h.discountPlanOptionSubtext]: A }),
                        children: (() => {
                            if (A && null != v && R.interval === S.rV.MONTH) {
                                var e;
                                return x.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
                                    numMonths: null !== (e = null == U ? void 0 : U.discount.user_usage_limit) && void 0 !== e ? e : S.rt,
                                    discountedPrice: (0, N.T4)(b.amount - v, b.currency),
                                    regularPrice: (0, N.T4)(b.amount, b.currency)
                                });
                            }
                            if (M) return F.format({ price: (0, N.T4)(b.amount, b.currency) });
                            if (R.interval === S.rV.YEAR) return x.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({ percent: y });
                            return null;
                        })()
                    })
                })
        ]
    });
}
