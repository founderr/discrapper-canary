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
    E = t(703236);
function y(e) {
    let { premiumSubscription: n, planId: t, selectPlan: l, selected: s, priceOptions: y, shouldShowUpdatedPaymentModal: I, isEligibleForDiscount: P, discountAmountOff: T, isEligibleForTrial: N } = e,
        b = (0, c.e7)([m.default], () => m.default.locale),
        _ = (0, c.e7)([p.Z], () => p.Z.get(t)),
        { isGift: C, giftRecipient: A } = (0, d.wD)(),
        O = C && (0, x.pO)(A);
    a()(null != _, 'Missing subscriptionPlan');
    let Z = null != n && n.planId === t,
        R = Z || (t === S.Xh.PREMIUM_MONTH_TIER_2 && null != n && [S.Xh.PREMIUM_YEAR_TIER_0, S.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId)),
        M = S.nH[t],
        w = (0, f.aS)(t, !1, C, y),
        D = (0, f.Ap)(y.paymentSourceId),
        F = null != M && !I,
        L = (0, g.Ng)(),
        k = _.interval === S.rV.YEAR ? j.t.ECT4Aw : j.t.v9QeOD,
        G = () =>
            null != M &&
            (0, i.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: E.planOptionDiscount,
                children: j.intl.format(j.t.IAybsL, { discount: (0, h.T3)(b, M / 100) })
            }),
        U = () =>
            (_.interval === S.rV.YEAR && null != n) || (F && !Z)
                ? _.interval === S.rV.YEAR && null != n
                    ? (0, i.jsxs)('span', {
                          className: E.planOptionMonthsFree,
                          children: ['(', j.intl.string(j.t['122kWF']), ')']
                      })
                    : F && !Z
                      ? G()
                      : void 0
                : null;
    return (0, i.jsxs)(u.Clickable, {
        role: O ? 'menuitem' : 'radio',
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
            [E.selectedPlan]: O && s,
            [E.selectionBox]: O
        }),
        children: [
            (0, i.jsxs)('div', {
                className: r()(E.planOption, { [E.planOptionDisabled]: R }),
                children: [
                    (0, i.jsxs)('div', {
                        className: E.planOptionClickable,
                        children: [
                            !O &&
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
                                            [E.optionSelected]: s || O,
                                            [E.updatedOptionSelected]: I && (s || O)
                                        }),
                                        children: [(0, f.L7)(_.interval, C, D, _.intervalCount, O, (0, f.Rd)(_.id)), O && U()]
                                    }),
                                    O &&
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
                            !O && U()
                        ]
                    }),
                    I
                        ? (0, i.jsx)('div', {
                              className: r()({ [E.optionPriceSelected]: s }),
                              children: j.intl.format(j.t.hXcaLS, {
                                  price:
                                      P && null != T && _.interval === S.rV.MONTH
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
                              className: r()({ [E.optionSelected]: s || O }),
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
                            if (P && null != T && _.interval === S.rV.MONTH) {
                                var e;
                                return j.intl.format(j.t['VeE/4O'], {
                                    numMonths: null !== (e = null == L ? void 0 : L.discount.user_usage_limit) && void 0 !== e ? e : S.rt,
                                    discountedPrice: (0, v.T4)(w.amount - T, w.currency),
                                    regularPrice: (0, v.T4)(w.amount, w.currency)
                                });
                            }
                            if (N) return j.intl.format(k, { price: (0, v.T4)(w.amount, w.currency) });
                            if (_.interval === S.rV.YEAR) return j.intl.formatToPlainString(j.t.rtLTJC, { percent: M });
                            return null;
                        })()
                    })
                })
        ]
    });
}
