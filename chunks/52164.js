t.d(s, {
    Z: function () {
        return A;
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
    let { subscription: s, withOverheadSeparator: t } = e,
        { analyticsLocations: a } = (0, l.ZP)(),
        [N] = (0, u.ED)({
            subscriptionId: s.id,
            renewal: !0,
            analyticsLocations: a,
            analyticsLocation: o.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == N) return null;
    let A = t ? I.finePrintWithOverheadSeparator : I.finePrint,
        C = N.invoiceItems.find((e) => {
            let { subscriptionPlanId: s } = e;
            return (0, d.uZ)(s);
        });
    if (null == C) return null;
    let m = C.subscriptionPlanId,
        g = c.Z.get(m);
    i()(null != g, 'Missing plan');
    let h = (0, _.T4)(N.total, N.currency),
        O = '';
    return (
        g.interval === E.rV.YEAR
            ? (O = S.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
                  price: h,
                  termsUrl: T.EYA.TERMS,
                  paidURL: T.EYA.PAID_TERMS,
                  privacyUrl: T.EYA.PRIVACY
              }))
            : g.interval === E.rV.MONTH &&
              (O =
                  1 === g.intervalCount
                      ? S.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
                            price: h,
                            termsUrl: T.EYA.TERMS,
                            paidURL: T.EYA.PAID_TERMS,
                            privacyUrl: T.EYA.PRIVACY
                        })
                      : S.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
                            price: h,
                            termsUrl: T.EYA.TERMS,
                            paidURL: T.EYA.PAID_TERMS,
                            privacyUrl: T.EYA.PRIVACY,
                            intervalCount: g.intervalCount
                        })),
        (0, n.jsx)(r.Text, {
            color: 'text-muted',
            className: A,
            variant: 'text-xs/normal',
            children: O
        })
    );
}
function A(e) {
    let { subscription: s, withOverheadSeparator: t } = e;
    return s.status === T.O0b.CANCELED || s.isPurchasedExternally
        ? null
        : (0, n.jsx)(N, {
              subscription: s,
              withOverheadSeparator: t
          });
}
