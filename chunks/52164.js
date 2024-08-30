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
    u = t(937615),
    _ = t(374649),
    E = t(474936),
    T = t(981631),
    I = t(689938),
    S = t(642140);
function N(e) {
    let { subscription: s, withOverheadSeparator: t } = e,
        { analyticsLocations: a } = (0, l.ZP)(),
        [N] = (0, _.ED)({
            subscriptionId: s.id,
            renewal: !0,
            analyticsLocations: a,
            analyticsLocation: o.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == N) return null;
    let m = t ? S.finePrintWithOverheadSeparator : S.finePrint,
        C = N.invoiceItems.find((e) => {
            let { subscriptionPlanId: s } = e;
            return (0, d.uZ)(s);
        });
    if (null == C) return null;
    let g = C.subscriptionPlanId,
        A = c.Z.get(g);
    i()(null != A, 'Missing plan');
    let h = (0, u.T4)(N.total, N.currency),
        O = '';
    return (
        A.interval === E.rV.YEAR
            ? (O = I.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
                  price: h,
                  termsUrl: T.EYA.TERMS,
                  paidURL: T.EYA.PAID_TERMS,
                  privacyUrl: T.EYA.PRIVACY
              }))
            : A.interval === E.rV.MONTH &&
              (O =
                  1 === A.intervalCount
                      ? I.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
                            price: h,
                            termsUrl: T.EYA.TERMS,
                            paidURL: T.EYA.PAID_TERMS,
                            privacyUrl: T.EYA.PRIVACY
                        })
                      : I.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
                            price: h,
                            termsUrl: T.EYA.TERMS,
                            paidURL: T.EYA.PAID_TERMS,
                            privacyUrl: T.EYA.PRIVACY,
                            intervalCount: A.intervalCount
                        })),
        (0, n.jsx)(r.Text, {
            color: 'text-muted',
            className: m,
            variant: 'text-xs/normal',
            children: O
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
