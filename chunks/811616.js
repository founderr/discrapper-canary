t.d(n, {
    Z: function () {
        return y;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    s = t(512722),
    a = t.n(s),
    c = t(442837),
    o = t(692547),
    u = t(481060),
    d = t(987209),
    m = t(706454),
    p = t(509545),
    x = t(669079),
    h = t(930153),
    f = t(74538),
    v = t(937615),
    g = t(104494),
    S = t(474936),
    j = t(388032),
    E = t(589242);
function y(e) {
    let { premiumSubscription: n, planId: t, selectPlan: l, selected: s, priceOptions: y, shouldShowUpdatedPaymentModal: I, isEligibleForDiscount: P, discountAmountOff: T, isEligibleForTrial: N } = e,
        b = (0, c.e7)([m.default], () => m.default.locale),
        C = (0, c.e7)([p.Z], () => p.Z.get(t)),
        { isGift: _, giftRecipient: O } = (0, d.wD)(),
        A = _ && (0, x.pO)(O);
    a()(null != C, 'Missing subscriptionPlan');
    let Z = null != n && n.planId === t,
        R = Z || (t === S.Xh.PREMIUM_MONTH_TIER_2 && null != n && [S.Xh.PREMIUM_YEAR_TIER_0, S.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId)),
        M = S.nH[t],
        w = (0, f.aS)(t, !1, _, y),
        L = (0, f.Ap)(y.paymentSourceId),
        k = null != M && !I,
        D = (0, g.Ng)(),
        F = C.interval === S.rV.YEAR ? j.t.ECT4Aw : j.t.v9QeOD,
        U = () =>
            null != M &&
            (0, i.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: E.planOptionDiscount,
                children: j.intl.format(j.t.IAybsL, { discount: (0, h.T3)(b, M / 100) })
            }),
        B = () =>
            (C.interval === S.rV.YEAR && null != n) || (k && !Z)
                ? C.interval === S.rV.YEAR && null != n
                    ? (0, i.jsxs)('span', {
                          className: E.planOptionMonthsFree,
                          children: ['(', j.intl.string(j.t['122kWF']), ')']
                      })
                    : k && !Z
                      ? U()
                      : void 0
                : null;
    return (0, i.jsxs)(u.Clickable, {
        role: A ? 'menuitem' : 'radio',
        'aria-checked': s,
        tabIndex: s ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0
            }
        },
        onClick: R ? void 0 : () => l(t),
        className: r()(E.planOptionClickableContainer, {
            [E.selectedPlan]: A && s,
            [E.selectionBox]: A
        }),
        children: [
            (0, i.jsxs)('div', {
                className: r()(E.planOption, { [E.planOptionDisabled]: R }),
                children: [
                    (0, i.jsxs)('div', {
                        className: E.planOptionClickable,
                        children: [
                            !A &&
                                (0, i.jsx)(u.Checkbox, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: s,
                                    shape: u.Checkbox.Shapes.ROUND,
                                    color: o.Z.unsafe_rawColors.BRAND_500.css,
                                    type: u.Checkbox.Types.INVERTED,
                                    className: E.planOptionCheckbox
                                }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: r()(E.planOptionInterval, {
                                            [E.optionSelected]: s || A,
                                            [E.updatedOptionSelected]: I && (s || A)
                                        }),
                                        children: [(0, f.L7)(C.interval, _, L, C.intervalCount, A, (0, f.Rd)(C.id)), A && B()]
                                    }),
                                    A &&
                                        (0, i.jsx)('div', {
                                            className: E.planOneTimeCost,
                                            children: j.intl.format(j.t.ori2Ji, { currencyAmount: (0, v.T4)(w.amount, w.currency) })
                                        })
                                ]
                            }),
                            Z &&
                                (0, i.jsxs)('span', {
                                    className: E.planOptionCurrentPlan,
                                    children: ['(', j.intl.string(j.t.ymSxh4), ')']
                                }),
                            !A && B()
                        ]
                    }),
                    I
                        ? (0, i.jsx)('div', {
                              className: r()({ [E.optionPriceSelected]: s }),
                              children: j.intl.format(j.t.hXcaLS, {
                                  price:
                                      P && null != T && C.interval === S.rV.MONTH
                                          ? (0, v.T4)(w.amount - T, w.currency)
                                          : N
                                            ? (0, v.T4)(0, w.currency, {
                                                  minimumFractionDigits: 0,
                                                  maximumFractionDigits: 0
                                              })
                                            : (0, v.T4)(w.amount, w.currency)
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: r()({ [E.optionSelected]: s || A }),
                              children: (0, v.T4)(w.amount, w.currency)
                          })
                ]
            }),
            I &&
                (0, i.jsx)('div', {
                    className: E.planOptionSubtextContainer,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: s ? 'text-normal' : 'interactive-normal',
                        className: r()(E.planOptionSubtext, { [E.discountPlanOptionSubtext]: P }),
                        children: (() => {
                            if (P && null != T && C.interval === S.rV.MONTH) {
                                var e;
                                return j.intl.format(j.t['VeE/4O'], {
                                    numMonths: null !== (e = null == D ? void 0 : D.discount.user_usage_limit) && void 0 !== e ? e : S.rt,
                                    discountedPrice: (0, v.T4)(w.amount - T, w.currency),
                                    regularPrice: (0, v.T4)(w.amount, w.currency)
                                });
                            }
                            if (N) return j.intl.format(F, { price: (0, v.T4)(w.amount, w.currency) });
                            if (C.interval === S.rV.YEAR) return j.intl.formatToPlainString(j.t.rtLTJC, { percent: M });
                            return null;
                        })()
                    })
                })
        ]
    });
}
