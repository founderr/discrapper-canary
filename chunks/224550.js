t(411104);
var a = t(735250);
t(470079);
var s = t(442837),
    r = t(858987),
    i = t(78839),
    l = t(122289),
    o = t(63063),
    c = t(74538),
    u = t(937615),
    d = t(296848),
    _ = t(981631),
    I = t(474936),
    E = t(689938),
    T = t(930543);
n.Z = function (e) {
    let n, t, A, N;
    let { subscriptionPlan: P, isGift: M, isEmbeddedIAP: p, renewalInvoice: R, paymentSourceType: L, hide: f, purchaseType: S, productLine: C, basePrice: m, currentSubscription: b } = e,
        v = (0, s.e7)([i.ZP], () => i.ZP.inReverseTrial());
    if (f) return null;
    let g = null == e.planGroup ? [] : e.planGroup;
    if (null != R) {
        let e = c.ZP.getIntervalForInvoice(R);
        (n = e.intervalType), (t = e.intervalCount), (A = (0, u.og)((0, u.T4)(R.total, R.currency), n, t)), (N = (0, u.og)((0, u.T4)(R.subtotal, R.currency), n, t));
    } else null != P && ((n = P.interval), (t = P.intervalCount));
    let O = (0, r.K)({
            purchaseType: S || _.GZQ.SUBSCRIPTION,
            plan: P,
            premiumSubscription: null == b ? null : b,
            isGift: !!M,
            planGroup: g,
            isPrepaidPaymentSource: !1
        }),
        h = '',
        U = '';
    if (p) {
        if (null != A && (null == R ? void 0 : R.subscriptionPeriodEnd) != null) h = E.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL_V2.format({ subtotalRate: N });
        else
            switch (n) {
                case I.rV.MONTH:
                    h = 1 === t ? E.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY_V2.format({}) : E.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH_V2.format({ intervalCount: t });
                    break;
                case I.rV.YEAR:
                    h = E.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY_V2.format({});
                    break;
                case void 0:
                    (U = E.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                        primaryText: O,
                        paidURL: _.EYA.PAID_TERMS
                    })),
                        (h = E.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({}));
                    break;
                default:
                    throw Error('Unexpected interval: '.concat(n));
            }
    } else if (S === _.GZQ.ONE_TIME)
        (U = E.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V3.format({
            primaryText: O,
            paidURL: _.EYA.PAID_TERMS
        })),
            (h = C === _.POd.COLLECTIBLES ? (M ? E.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : E.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT) : E.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT);
    else if (null == P || M)
        switch (
            (M &&
                (U = E.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                    primaryText: O,
                    paidURL: _.EYA.PAID_TERMS
                })),
            n)
        ) {
            case I.rV.MONTH:
                (h = M ? E.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY), (h = M ? E.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === t ? E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({ intervalCount: t }));
                break;
            case I.rV.YEAR:
                h = M ? E.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                break;
            case void 0:
                h = '';
                break;
            default:
                throw Error('Unexpected interval: '.concat(n));
        }
    else {
        let e;
        let a = (0, r.K)({
            purchaseType: _.GZQ.SUBSCRIPTION,
            plan: P,
            premiumSubscription: null == b ? null : b,
            isGift: !1,
            planGroup: g,
            isPrepaidPaymentSource: !1
        });
        if ((null != m && null != n && null != t && (e = (0, u.og)((0, u.T4)(m.amount, m.currency), n, t)), null == e)) {
            let e = Error('Missing base rate for legal fine print');
            (0, l.q2)(e, { tags: { planId: P.id } });
        }
        h = (null == b ? void 0 : b.isPaused)
            ? E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_RESUME.format({
                  primaryText: a,
                  rate: e,
                  paidURL: _.EYA.PAID_TERMS,
                  contactLink: _.EYA.CONTACT,
                  helpdeskArticle: o.Z.getArticleURL(_.BhN.BILLING)
              })
            : null != b && (0, d.GY)(b, P.id, g)
              ? E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
                    primaryText: a,
                    rate: e,
                    paidURL: _.EYA.PAID_TERMS,
                    contactLink: _.EYA.CONTACT,
                    helpdeskArticle: o.Z.getArticleURL(_.BhN.BILLING)
                })
              : v && C === _.POd.BOOST && null != m
                ? E.Z.Messages.BILLING_BOOST_PURCHASE_IN_REVERSE_TRIAL_LEGAL_COPY.format({
                      price: (0, u.T4)(m.amount, m.currency),
                      paidServiceTermsArticle: _.EYA.PAID_TERMS,
                      contactUsArticle: _.EYA.CONTACT,
                      subscriptionFAQArticle: o.Z.getArticleURL(_.BhN.BILLING)
                  })
                : E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
                      primaryText: a,
                      rate: e,
                      paidURL: _.EYA.PAID_TERMS,
                      contactLink: _.EYA.CONTACT,
                      helpdeskArticle: o.Z.getArticleURL(_.BhN.BILLING)
                  });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            '' !== U &&
                (0, a.jsxs)('div', {
                    children: [(0, a.jsx)('div', { children: U }), (0, a.jsx)('div', { className: T.divider })]
                }),
            '' !== h && (0, a.jsx)('div', { children: h }),
            L === _.HeQ.PAYSAFE_CARD &&
                (0, a.jsx)('div', {
                    className: T.paymentSourceNoticeCopy,
                    children: E.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                }),
            L === _.HeQ.SOFORT &&
                (0, a.jsxs)('div', {
                    className: T.paymentSourceNoticeCopy,
                    children: [E.Z.Messages.SOFORT_MANDATE_AGREEMENT, ' ']
                })
        ]
    });
};
