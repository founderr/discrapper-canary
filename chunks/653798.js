t.d(n, {
    HE: function () {
        return N;
    },
    Ji: function () {
        return A;
    },
    KU: function () {
        return T;
    },
    PO: function () {
        return d;
    },
    R$: function () {
        return I;
    },
    i$: function () {
        return E;
    },
    q9: function () {
        return _;
    }
});
var a = t(200651);
t(192379);
var s = t(120356),
    r = t.n(s),
    i = t(481060),
    l = t(911969),
    o = t(937615),
    c = t(689938),
    u = t(490884);
function d(e) {
    let { children: n, className: t } = e;
    return (0, a.jsx)('div', {
        className: r()(u.table, t),
        children: n
    });
}
function _(e) {
    let { children: n } = e;
    return (0, a.jsx)('div', {
        className: u.header,
        children: n
    });
}
function I(e) {
    let { label: n, value: t, className: s } = e;
    return (0, a.jsxs)('div', {
        className: r()(u.row, s),
        children: [
            (0, a.jsx)('div', {
                className: u.rowLabel,
                children: n
            }),
            (0, a.jsx)('div', {
                className: u.rowAmount,
                children: t
            })
        ]
    });
}
function E(e) {
    let { label: n, value: t, discounts: s, originalAmount: r, interval: d, currency: _, className: E, intervalCount: T, inTrialPeriod: A } = e,
        N = (e) => (null != s ? s.find((n) => n.type === e) : null),
        P = N(l.eW.SUBSCRIPTION_PLAN),
        M = N(l.eW.ENTITLEMENT),
        p = null != P ? Math.floor((P.amount / r) * 100) : null,
        R = (0, o.T4)(r, _);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(I, {
                label: n,
                value: (0, a.jsxs)(a.Fragment, {
                    children: [
                        A ? c.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({ price: (0, o.T4)(0, _) }) : t,
                        null != p
                            ? (0, a.jsxs)('div', {
                                  className: u.rowPercentDiscount,
                                  children: ['-', p, '%']
                              })
                            : null
                    ]
                }),
                className: E
            }),
            A &&
                (0, a.jsx)(i.Text, {
                    variant: 'text-md/medium',
                    className: u.trialEndPrice,
                    children: c.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({ price: R })
                }),
            null != p
                ? (0, a.jsxs)('div', {
                      className: u.rowDiscountOriginalPrice,
                      children: ['(', null != d && null != T ? (0, o.og)(R, d, T) : R, ')']
                  })
                : null,
            null != M
                ? (0, a.jsx)('div', {
                      className: u.entitlementDiscountRow,
                      children: c.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                  })
                : null
        ]
    });
}
function T(e) {
    let { extended: n = !1, negativeMarginTop: t = !1, negativeMarginBottom: s = !1 } = e;
    return (0, a.jsx)('div', {
        className: r()(u.divider, {
            [u.dividerExtended]: n,
            [u.negativeMarginTop]: t,
            [u.negativeMarginBottom]: s
        })
    });
}
function A(e) {
    let { label: n, value: t, className: s } = e;
    return (0, a.jsxs)('div', {
        className: r()(u.totalRow, s),
        children: [
            (0, a.jsx)('div', {
                className: u.totalLabel,
                children: n
            }),
            (0, a.jsx)('div', {
                className: u.totalAmount,
                children: t
            })
        ]
    });
}
function N(e) {
    let { children: n, className: t } = e;
    return (0, a.jsx)('div', {
        className: r()(u.finePrint, t),
        children: n
    });
}
