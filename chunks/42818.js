t.d(n, {
    As: function () {
        return h;
    },
    By: function () {
        return U;
    },
    Lu: function () {
        return y;
    },
    e9: function () {
        return j;
    },
    hG: function () {
        return Z;
    },
    nd: function () {
        return Y;
    },
    yT: function () {
        return k;
    }
}),
    t(411104),
    t(724458),
    t(47120);
var a = t(200651),
    s = t(192379),
    r = t(120356),
    i = t.n(r),
    l = t(512722),
    o = t.n(l),
    c = t(442837),
    u = t(481060),
    d = t(911969),
    _ = t(100527),
    I = t(906732),
    E = t(509545),
    T = t(259580),
    A = t(63063),
    N = t(74538),
    P = t(937615),
    M = t(374649),
    p = t(591548),
    R = t(639119),
    L = t(653798),
    f = t(585602),
    S = t(474936),
    C = t(981631),
    m = t(689938),
    b = t(319012);
let v = (e, n) => {
        var t;
        return !!(null === (t = e.discounts) || void 0 === t ? void 0 : t.some((e) => e.type === n));
    },
    g = (e, n) => {
        var t, a, s;
        return e.subscriptionPlanPrice - (null !== (s = null === (a = e.discounts) || void 0 === a ? void 0 : null === (t = a.find((e) => e.type === n)) || void 0 === t ? void 0 : t.amount) && void 0 !== s ? s : 0);
    };
function O(e) {
    var n;
    let { invoiceItem: t, overrideAmount: s, showGuildSubscriptionAdjustmentTooltip: r, currency: i, className: l, isPrepaidPaymentSource: _, referralTrialOfferId: I, inTrialPeriod: T } = e,
        A = (0, c.e7)([E.Z], () => E.Z.get(t.subscriptionPlanId)),
        M = null === (n = (0, R.N)(I)) || void 0 === n ? void 0 : n.subscription_trial;
    o()(null != A, 'Missing subscriptionPlan');
    let p = (function (e, n, t, a) {
        let s = v(e, d.eW.PREMIUM_TRIAL);
        switch (e.subscriptionPlanId) {
            case S.Xh.PREMIUM_MONTH_LEGACY:
            case S.Xh.PREMIUM_YEAR_LEGACY:
            case S.Xh.PREMIUM_MONTH_TIER_0:
            case S.Xh.PREMIUM_YEAR_TIER_0:
            case S.Xh.PREMIUM_MONTH_TIER_1:
            case S.Xh.PREMIUM_YEAR_TIER_1:
            case S.Xh.PREMIUM_MONTH_TIER_2:
            case S.Xh.PREMIUM_YEAR_TIER_2:
            case S.Xh.PREMIUM_3_MONTH_TIER_2:
            case S.Xh.PREMIUM_6_MONTH_TIER_2:
                return (0, N.Gf)(e.subscriptionPlanId, s, t, a);
            case S.Xh.PREMIUM_3_MONTH_GUILD:
            case S.Xh.PREMIUM_6_MONTH_GUILD:
                return m.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                    num: e.quantity,
                    intervalCount: n.intervalCount
                });
            case S.Xh.PREMIUM_MONTH_GUILD:
                return m.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({ num: e.quantity });
            case S.Xh.PREMIUM_YEAR_GUILD:
                return m.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({ num: e.quantity });
        }
        switch (n.interval) {
            case S.rV.MONTH:
                if (1 === n.intervalCount) return m.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({ planName: n.name });
                return m.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                    planName: n.name,
                    intervalCount: n.intervalCount
                });
            case S.rV.YEAR:
                return m.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({ planName: n.name });
        }
        throw Error('Unexpected invoice plan: '.concat(e.subscriptionPlanId));
    })(
        t,
        A,
        _,
        (0, N.if)({
            intervalType: null == M ? void 0 : M.interval,
            intervalCount: null == M ? void 0 : M.interval_count
        })
    );
    !0 === r &&
        (p = (0, a.jsxs)('div', {
            className: b.invoiceItemLabelWithIcon,
            children: [
                (0, a.jsxs)('div', {
                    children: [p, ' ']
                }),
                (0, a.jsx)(u.Tooltip, {
                    text: m.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                    'aria-label': m.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                    tooltipClassName: b.invoiceItemTooltip,
                    children: (e) =>
                        (0, a.jsx)(u.CircleQuestionIcon, {
                            size: 'md',
                            color: 'currentColor',
                            ...e,
                            className: b.invoiceItemLabelIcon
                        })
                })
            ]
        }));
    let f = (0, P.T4)(null != s ? s : t.amount, i),
        C = _ ? f : (0, P.og)(f, A.interval, A.intervalCount);
    return (0, a.jsx)(L.i$, {
        label: p,
        value: C,
        originalAmount: t.subscriptionPlanPrice * t.quantity,
        discounts: t.discounts,
        interval: A.interval,
        intervalCount: A.intervalCount,
        currency: i,
        className: l,
        inTrialPeriod: T
    });
}
function h(e) {
    let { label: n, tooltipText: t, tooltipAriaLabel: s } = e;
    return (0, a.jsxs)('div', {
        className: b.invoiceItemLabelWithIcon,
        children: [
            n,
            (0, a.jsx)(u.Tooltip, {
                clickableOnMobile: !0,
                text: t,
                'aria-label': s,
                tooltipClassName: b.invoiceItemTooltip,
                children: (e) =>
                    (0, a.jsx)(u.CircleQuestionIcon, {
                        size: 'md',
                        color: 'currentColor',
                        ...e,
                        className: b.invoiceItemLabelIcon
                    })
            })
        ]
    });
}
function U(e) {
    let { invoice: n, isPrepaidPaymentSource: t } = e,
        s = (0, p.j)(n.invoiceItems),
        r = s.find((e) => !(0, N.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        i = s.find((e) => (0, N.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        l = (0, c.e7)([E.Z], () => (null != i ? E.Z.get(i.subscriptionPlanId) : null)),
        o = null != i ? i.amount : 0,
        u = (0, P.T4)(o, n.currency),
        d = null != l ? (0, P.og)(u, l.interval, l.intervalCount) : 0;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != r
                ? (0, a.jsx)(O, {
                      invoiceItem: r,
                      currency: n.currency,
                      isPrepaidPaymentSource: t
                  })
                : null,
            0 !== o && null != i && null != l
                ? (0, a.jsx)(L.R$, {
                      label: m.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                          numGuildSubscriptions: i.quantity,
                          planName: (0, N.Gf)(l.id, !1, t)
                      }),
                      value: t ? u : d
                  })
                : null,
            (0, a.jsx)(f.Z, { invoice: n }),
            (0, a.jsx)(L.KU, {}),
            (0, a.jsx)(L.Ji, {
                label: (n.taxInclusive ? (t ? m.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : m.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE) : m.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                value: n.currency === C.pKx.USD ? (0, P.T4)(n.total, n.currency) : ''.concat((0, P.T4)(n.total, n.currency), '*')
            })
        ]
    });
}
function y(e) {
    let { invoice: n, newPlan: t, isPrepaidPaymentSource: s, referralTrialOfferId: r } = e,
        i = (0, p.j)(n.invoiceItems),
        l = i.find((e) => e.subscriptionPlanId === t.id);
    o()(null != l, 'Expected newPlanInvoiceItem');
    let c = i.find((e) => !(0, N.Z8)(e.subscriptionPlanId) && e.amount < 0),
        u = i.find((e) => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((e) => e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
        _ = v(l, d.eW.PREMIUM_TRIAL),
        I = g(l, d.eW.SUBSCRIPTION_PLAN),
        E = l.quantity * I,
        T = l.amount + (null != c ? c.amount : 0) - E + (null != u ? u.amount : 0),
        A = i.filter((e) => e.subscriptionPlanId === S.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_YEAR_GUILD).reduce((e, n) => e + n.amount, 0);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(O, {
                invoiceItem: l,
                currency: n.currency,
                overrideAmount: E,
                isPrepaidPaymentSource: s,
                referralTrialOfferId: r
            }),
            0 === T || _
                ? null
                : (0, a.jsx)(L.R$, {
                      label: (0, a.jsx)(h, {
                          label: m.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({ planName: (0, N.PV)(t.id) ? (0, N.aq)(t.id) : t.name }),
                          tooltipText: m.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                      }),
                      value: (0, P.T4)(T, n.currency)
                  }),
            0 !== A
                ? (0, a.jsx)(L.R$, {
                      label: (0, a.jsx)(h, {
                          label: m.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                          tooltipText: m.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                          tooltipAriaLabel: m.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                      }),
                      value: (0, P.T4)(A, n.currency)
                  })
                : null,
            (0, a.jsx)(f.Z, { invoice: n }),
            (0, a.jsx)(L.KU, {}),
            (0, a.jsx)(L.Ji, {
                label: (n.taxInclusive ? (s ? m.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : m.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE) : m.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                value: n.currency === C.pKx.USD ? (0, P.T4)(n.total, n.currency) : ''.concat((0, P.T4)(n.total, n.currency), '*')
            })
        ]
    });
}
function B(e) {
    let n = e.slice();
    return (
        n.sort((e, n) => {
            let t = (0, N.uZ)(e.subscriptionPlanId),
                a = (0, N.uZ)(n.subscriptionPlanId);
            return t && !a ? -1 : !t && a ? 1 : 0;
        }),
        n
    );
}
function x(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: n } = e;
        return n !== S.Xh.NONE_MONTH && n !== S.Xh.NONE_YEAR;
    });
}
function Z(e) {
    let { proratedInvoice: n, renewalInvoice: t } = e,
        { intervalType: s, intervalCount: r } = (0, N.dn)(n),
        { intervalType: i, intervalCount: l } = (0, N.dn)(t);
    return s !== i || r !== l || n.subscriptionPeriodEnd.getTime() === t.subscriptionPeriodStart.getTime()
        ? null
        : (0, a.jsx)('div', {
              className: b.subscriptionPeriodResetNotice,
              children: m.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({ renewalDate: n.subscriptionPeriodEnd })
          });
}
function G(e) {
    let { isUpdate: n, currentInvoice: t, newInvoice: s, inTrialPeriod: r } = e,
        l = null != t ? (0, p.j)(t.invoiceItems) : null,
        o = null != t ? (0, N.dn)(t) : null,
        { intervalType: c, intervalCount: u } = (0, N.dn)(s),
        d = null != o && (o.intervalType !== c || o.intervalCount !== u);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(L.KU, { extended: !0 }),
            null != t
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(L.q9, { children: m.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL }),
                          x(B((0, p.j)(t.invoiceItems))).map((e) =>
                              (0, a.jsx)(
                                  O,
                                  {
                                      invoiceItem: e,
                                      currency: t.currency,
                                      inTrialPeriod: r
                                  },
                                  e.id
                              )
                          ),
                          (0, a.jsx)(L.KU, { extended: !0 })
                      ]
                  })
                : null,
            (0, a.jsx)(L.q9, { children: m.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL }),
            x(B((0, p.j)(s.invoiceItems))).map((e) => {
                let t = null != l && !l.some((n) => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
                return (0, a.jsx)(
                    O,
                    {
                        invoiceItem: e,
                        currency: s.currency,
                        showGuildSubscriptionAdjustmentTooltip: d && (e.subscriptionPlanId === S.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_6_MONTH_GUILD),
                        className: i()({ [b.subscriptionAddedInvoiceItem]: !n || t })
                    },
                    e.id
                );
            }),
            (0, a.jsx)(f.Z, { invoice: s }),
            (0, a.jsx)(L.KU, {}),
            (0, a.jsx)(L.R$, {
                label: m.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                value: (0, P.og)((0, P.T4)(s.total, s.currency), c, u),
                className: b.subscriptionCostRow
            })
        ]
    });
}
function D(e) {
    var n;
    let { proratedInvoice: t, renewalInvoice: s, isTrial: r, isUpdate: i, overrideRenewalDate: l, trialFooterMessageOverride: o } = e,
        c = null === (n = (0, R.N)()) || void 0 === n ? void 0 : n.subscription_trial,
        { intervalType: u, intervalCount: d } = (0, N.dn)(s);
    if (null == t) return null;
    if (r) {
        let e = (0, N.if)({
                intervalType: null == c ? void 0 : c.interval,
                intervalCount: null == c ? void 0 : c.interval_count
            }),
            n = (null == c ? void 0 : c.interval) === S.rV.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
        return (0, a.jsx)(a.Fragment, {
            children:
                null != o
                    ? o
                    : m.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                          duration: e,
                          days: n,
                          contactLink: C.EYA.CONTACT,
                          helpdeskArticle: A.Z.getArticleURL(C.BhN.PREMIUM_TRIAL)
                      })
        });
    }
    let _ = s.taxInclusive ? m.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : m.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
    return (0, a.jsx)(a.Fragment, {
        children: _.format({
            rate: (0, P.og)((0, P.T4)(s.subtotal, s.currency), u, d),
            renewalDate: null != l ? l : i ? (null != t ? t.subscriptionPeriodEnd : s.subscriptionPeriodStart) : s.subscriptionPeriodEnd,
            contactLink: C.EYA.CONTACT,
            helpdeskArticle: A.Z.getArticleURL(C.BhN.BILLING)
        })
    });
}
function Y(e) {
    let { premiumSubscription: n, proratedInvoice: t, renewalInvoice: r, overrideRenewalDate: i, isUpdate: l = !1, isTrial: o = !1, priceOptions: c, isPrepaidPaymentSource: d = !1, trialFooterMessageOverride: E, hideSubscriptionDetails: A = !1 } = e,
        { analyticsLocations: N } = (0, I.ZP)(),
        P = {
            subscriptionId: null == n ? void 0 : n.id,
            renewal: !0,
            preventFetch: !l,
            analyticsLocatinons: N,
            analyticsLocation: _.Z.SUBSCRIPTION_INVOICE_FOOTER,
            ...c
        },
        [p] = (0, M.ED)(P),
        [R, f] = s.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            d
                ? null
                : (0, a.jsx)(L.HE, {
                      children: (0, a.jsx)(D, {
                          proratedInvoice: t,
                          renewalInvoice: r,
                          isTrial: o,
                          isUpdate: l,
                          overrideRenewalDate: i,
                          trialFooterMessageOverride: E
                      })
                  }),
            !A &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(u.Clickable, {
                            onClick: () => f((e) => !e),
                            className: b.subscriptionDetailsToggle,
                            children: [
                                R ? m.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : m.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS,
                                (0, a.jsx)(T.Z, {
                                    direction: R ? T.Z.Directions.UP : T.Z.Directions.DOWN,
                                    className: b.subscriptionDetailsToggleCaret
                                })
                            ]
                        }),
                        R
                            ? (0, a.jsx)(G, {
                                  isUpdate: l,
                                  currentInvoice: p,
                                  newInvoice: r,
                                  inTrialPeriod: o
                              })
                            : null
                    ]
                })
        ]
    });
}
function j(e) {
    let n,
        { plan: t, className: s, isPrepaidPaymentSource: r = !1, isCustomGift: i = !1, invoicePreview: l } = e,
        { tax: o, taxInclusive: c, currency: d } = l,
        _ = l.total,
        I = _ - o,
        E = (0, P.T4)(I, d),
        T = (0, P.T4)(_, d);
    return (
        (n = i ? (0, N.L7)(t.interval, !0, void 0, void 0, !0, (0, N.Rd)(t.id)) : m.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({ planName: (0, N.Gf)(t.id, !1, r) })),
        (0, a.jsxs)('div', {
            className: s,
            children: [
                (0, a.jsx)(u.FormTitle, { children: m.Z.Messages.PREMIUM_GIFTING_BUTTON }),
                o >= 0 && !1 === c
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(u.Text, {
                                  variant: 'text-md/bold',
                                  className: b.purchaseDetailsHeaderText,
                                  children: n
                              }),
                              (0, a.jsxs)(L.PO, {
                                  className: s,
                                  children: [
                                      (0, a.jsx)(L.q9, { children: m.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL }),
                                      (0, a.jsx)(L.R$, {
                                          label: n,
                                          value: E
                                      }),
                                      (0, a.jsx)(f.Z, { invoice: l }),
                                      (0, a.jsx)(L.KU, {}),
                                      (0, a.jsx)(L.R$, {
                                          label: m.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                          value: T,
                                          className: b.subscriptionCostRow
                                      })
                                  ]
                              })
                          ]
                      })
                    : (0, a.jsx)(u.Heading, {
                          variant: 'text-md/normal',
                          children: ''.concat(n, ' - ').concat(T)
                      })
            ]
        })
    );
}
function k(e) {
    let n,
        { invoice: t, plan: s } = e,
        r = (0, p.j)(t.invoiceItems).find((e) => e.subscriptionPlanId === s.id);
    return (
        o()(null != r, 'newPlanInvoiceItem can not be null'),
        s.interval === S.rV.MONTH ? (n = t.taxInclusive ? m.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL : m.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE) : s.interval === S.rV.YEAR ? (n = t.taxInclusive ? m.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : m.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE) : o()(!1, 'Invalid interval type'),
        (0, a.jsx)(u.Text, {
            variant: 'text-md/normal',
            children: n.format({ price: (0, P.T4)(r.subscriptionPlanPrice, t.currency) })
        })
    );
}
