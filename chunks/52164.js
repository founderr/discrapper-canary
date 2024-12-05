n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(509545),
    d = n(74538),
    u = n(937615),
    m = n(374649),
    g = n(474936),
    h = n(981631),
    p = n(388032),
    x = n(168910);
function T(e) {
    let t,
        { subscription: n, withOverheadSeparator: s } = e,
        { analyticsLocations: T } = (0, o.ZP)(),
        [S] = (0, m.ED)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: T,
            analyticsLocation: a.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == S) return null;
    let _ = s ? x.finePrintWithOverheadSeparator : x.finePrint,
        E = S.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.uZ)(t);
        });
    if (null == E) return null;
    let C = E.subscriptionPlanId,
        f = c.Z.get(C);
    r()(null != f, 'Missing plan');
    let I = (0, u.T4)(S.total, S.currency);
    return (
        f.interval === g.rV.YEAR
            ? (t = p.intl.format(p.t['jPz/39'], {
                  price: I,
                  termsUrl: h.EYA.TERMS,
                  paidURL: h.EYA.PAID_TERMS,
                  privacyUrl: h.EYA.PRIVACY
              }))
            : f.interval === g.rV.MONTH &&
              (t =
                  1 === f.intervalCount
                      ? p.intl.format(p.t.m27GpK, {
                            price: I,
                            termsUrl: h.EYA.TERMS,
                            paidURL: h.EYA.PAID_TERMS,
                            privacyUrl: h.EYA.PRIVACY
                        })
                      : p.intl.format(p.t['9xf5V1'], {
                            price: I,
                            termsUrl: h.EYA.TERMS,
                            paidURL: h.EYA.PAID_TERMS,
                            privacyUrl: h.EYA.PRIVACY,
                            intervalCount: f.intervalCount
                        })),
        (0, i.jsx)(l.Text, {
            color: 'text-muted',
            className: _,
            variant: 'text-xs/normal',
            children: t
        })
    );
}
function S(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === h.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(T, {
              subscription: t,
              withOverheadSeparator: n
          });
}
