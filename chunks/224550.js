t(411104);
var r = t(200651);
t(192379);
var i = t(442837),
    a = t(858987),
    l = t(78839),
    s = t(122289),
    o = t(63063),
    c = t(74538),
    u = t(937615),
    d = t(296848),
    p = t(981631),
    f = t(474936),
    m = t(388032),
    b = t(930543);
n.Z = function (e) {
    let n, t, v, h;
    let { subscriptionPlan: P, isGift: A, isEmbeddedIAP: T, renewalInvoice: g, paymentSourceType: y, hide: E, purchaseType: I, productLine: x, basePrice: N, currentSubscription: _ } = e,
        C = (0, i.e7)([l.ZP], () => l.ZP.inReverseTrial());
    if (E) return null;
    let R = null == e.planGroup ? [] : e.planGroup;
    if (null != g) {
        let e = c.ZP.getIntervalForInvoice(g);
        (n = e.intervalType), (t = e.intervalCount), (v = (0, u.og)((0, u.T4)(g.total, g.currency), n, t)), (h = (0, u.og)((0, u.T4)(g.subtotal, g.currency), n, t));
    } else null != P && ((n = P.interval), (t = P.intervalCount));
    let S = (0, a.K)({
            purchaseType: I || p.GZQ.SUBSCRIPTION,
            plan: P,
            premiumSubscription: null == _ ? null : _,
            isGift: !!A,
            planGroup: R,
            isPrepaidPaymentSource: !1
        }),
        M = '',
        j = '';
    if (T) {
        if (null != v && (null == g ? void 0 : g.subscriptionPeriodEnd) != null) M = m.intl.format(m.t['2VPTa2'], { subtotalRate: h });
        else
            switch (n) {
                case f.rV.MONTH:
                    M = 1 === t ? m.intl.format(m.t['+ywPmZ'], {}) : m.intl.format(m.t.oBwZfn, { intervalCount: t });
                    break;
                case f.rV.YEAR:
                    M = m.intl.format(m.t.y9gsX1, {});
                    break;
                case void 0:
                    (j = m.intl.format(m.t.Y2Rkqa, {
                        primaryText: S,
                        paidURL: p.EYA.PAID_TERMS
                    })),
                        (M = m.intl.format(m.t.UxGFHx, {}));
                    break;
                default:
                    throw Error('Unexpected interval: '.concat(n));
            }
    } else if (I === p.GZQ.ONE_TIME)
        (j = m.intl.format(m.t.H2uH5e, {
            primaryText: S,
            paidURL: p.EYA.PAID_TERMS
        })),
            (M = x === p.POd.COLLECTIBLES ? (A ? m.intl.string(m.t.ofqyUl) : m.intl.string(m.t.G3l0s7)) : m.intl.string(m.t['9/siSU']));
    else if (null == P || A)
        switch (
            (A &&
                (j = m.intl.format(m.t.Y2Rkqa, {
                    primaryText: S,
                    paidURL: p.EYA.PAID_TERMS
                })),
            n)
        ) {
            case f.rV.MONTH:
                (M = A ? m.intl.string(m.t.IjNapq) : m.intl.string(m.t['/sGXPj'])), (M = A ? m.intl.string(m.t.IjNapq) : 1 === t ? m.intl.string(m.t['/sGXPj']) : m.intl.formatToPlainString(m.t.Fqjiho, { intervalCount: t }));
                break;
            case f.rV.YEAR:
                M = A ? m.intl.string(m.t.vAfbGx) : m.intl.string(m.t.IGzFc3);
                break;
            case void 0:
                M = '';
                break;
            default:
                throw Error('Unexpected interval: '.concat(n));
        }
    else {
        let e;
        let r = (0, a.K)({
            purchaseType: p.GZQ.SUBSCRIPTION,
            plan: P,
            premiumSubscription: null == _ ? null : _,
            isGift: !1,
            planGroup: R,
            isPrepaidPaymentSource: !1
        });
        if ((null != N && null != n && null != t && (e = (0, u.og)((0, u.T4)(N.amount, N.currency), n, t)), null == e)) {
            let e = Error('Missing base rate for legal fine print');
            (0, s.q2)(e, { tags: { planId: P.id } });
        }
        M = (null == _ ? void 0 : _.isPaused)
            ? m.intl.format(m.t.B6oNwM, {
                  primaryText: r,
                  rate: e,
                  paidURL: p.EYA.PAID_TERMS,
                  contactLink: p.EYA.CONTACT,
                  helpdeskArticle: o.Z.getArticleURL(p.BhN.BILLING)
              })
            : null != _ && (0, d.GY)(_, P.id, R)
              ? m.intl.format(m.t.LyBQUV, {
                    primaryText: r,
                    rate: e,
                    paidURL: p.EYA.PAID_TERMS,
                    contactLink: p.EYA.CONTACT,
                    helpdeskArticle: o.Z.getArticleURL(p.BhN.BILLING)
                })
              : C && x === p.POd.BOOST && null != N
                ? m.intl.format(m.t['2nKy//'], {
                      price: (0, u.T4)(N.amount, N.currency),
                      paidServiceTermsArticle: p.EYA.PAID_TERMS,
                      contactUsArticle: p.EYA.CONTACT,
                      subscriptionFAQArticle: o.Z.getArticleURL(p.BhN.BILLING)
                  })
                : m.intl.format(m.t.anJ7OT, {
                      primaryText: r,
                      rate: e,
                      paidURL: p.EYA.PAID_TERMS,
                      contactLink: p.EYA.CONTACT,
                      helpdeskArticle: o.Z.getArticleURL(p.BhN.BILLING)
                  });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            '' !== j &&
                (0, r.jsxs)('div', {
                    children: [(0, r.jsx)('div', { children: j }), (0, r.jsx)('div', { className: b.divider })]
                }),
            '' !== M && (0, r.jsx)('div', { children: M }),
            y === p.HeQ.PAYSAFE_CARD &&
                (0, r.jsx)('div', {
                    className: b.paymentSourceNoticeCopy,
                    children: m.intl.string(m.t.kj9VLC)
                }),
            y === p.HeQ.SOFORT &&
                (0, r.jsxs)('div', {
                    className: b.paymentSourceNoticeCopy,
                    children: [m.intl.string(m.t['UYy1/v']), ' ']
                })
        ]
    });
};
