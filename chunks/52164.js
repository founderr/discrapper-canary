t.d(s, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var n = t(735250);
t(470079);
var a = t(512722),
    i = t.n(a),
    r = t(481060),
    o = t(100527),
    l = t(906732),
    c = t(509545),
    d = t(74538),
    _ = t(937615),
    u = t(374649),
    E = t(474936),
    T = t(981631),
    S = t(689938),
    I = t(405766);
function N(e) {
    let s,
        { subscription: t, withOverheadSeparator: a } = e,
        { analyticsLocations: N } = (0, l.ZP)(),
        [m] = (0, u.ED)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: N,
            analyticsLocation: o.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == m) return null;
    let C = a ? I.finePrintWithOverheadSeparator : I.finePrint,
        A = m.invoiceItems.find((e) => {
            let { subscriptionPlanId: s } = e;
            return (0, d.uZ)(s);
        });
    if (null == A) return null;
    let g = A.subscriptionPlanId,
        h = c.Z.get(g);
    i()(null != h, 'Missing plan');
    let O = (0, _.T4)(m.total, m.currency);
    return (
        h.interval === E.rV.YEAR
            ? (s = S.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
                  price: O,
                  termsUrl: T.EYA.TERMS,
                  paidURL: T.EYA.PAID_TERMS,
                  privacyUrl: T.EYA.PRIVACY
              }))
            : h.interval === E.rV.MONTH &&
              (s =
                  1 === h.intervalCount
                      ? S.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
                            price: O,
                            termsUrl: T.EYA.TERMS,
                            paidURL: T.EYA.PAID_TERMS,
                            privacyUrl: T.EYA.PRIVACY
                        })
                      : S.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
                            price: O,
                            termsUrl: T.EYA.TERMS,
                            paidURL: T.EYA.PAID_TERMS,
                            privacyUrl: T.EYA.PRIVACY,
                            intervalCount: h.intervalCount
                        })),
        (0, n.jsx)(r.Text, {
            color: 'text-muted',
            className: C,
            variant: 'text-xs/normal',
            children: s
        })
    );
}
function m(e) {
    let { subscription: s, withOverheadSeparator: t } = e;
    return s.status === T.O0b.CANCELED || s.isPurchasedExternally
        ? null
        : (0, n.jsx)(N, {
              subscription: s,
              withOverheadSeparator: t
          });
}
