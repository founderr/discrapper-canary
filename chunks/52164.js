n.d(t, {
    Z: function () {
        return T;
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
    h = n(474936),
    g = n(981631),
    p = n(388032),
    x = n(405766);
function S(e) {
    let t,
        { subscription: n, withOverheadSeparator: s } = e,
        { analyticsLocations: S } = (0, o.ZP)(),
        [T] = (0, m.ED)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: S,
            analyticsLocation: a.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
        });
    if (null == T) return null;
    let C = s ? x.finePrintWithOverheadSeparator : x.finePrint,
        _ = T.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, d.uZ)(t);
        });
    if (null == _) return null;
    let E = _.subscriptionPlanId,
        f = c.Z.get(E);
    r()(null != f, 'Missing plan');
    let I = (0, u.T4)(T.total, T.currency);
    return (
        f.interval === h.rV.YEAR
            ? (t = p.intl.format(p.t['jPz/39'], {
                  price: I,
                  termsUrl: g.EYA.TERMS,
                  paidURL: g.EYA.PAID_TERMS,
                  privacyUrl: g.EYA.PRIVACY
              }))
            : f.interval === h.rV.MONTH &&
              (t =
                  1 === f.intervalCount
                      ? p.intl.format(p.t.m27GpK, {
                            price: I,
                            termsUrl: g.EYA.TERMS,
                            paidURL: g.EYA.PAID_TERMS,
                            privacyUrl: g.EYA.PRIVACY
                        })
                      : p.intl.format(p.t['9xf5V1'], {
                            price: I,
                            termsUrl: g.EYA.TERMS,
                            paidURL: g.EYA.PAID_TERMS,
                            privacyUrl: g.EYA.PRIVACY,
                            intervalCount: f.intervalCount
                        })),
        (0, i.jsx)(l.Text, {
            color: 'text-muted',
            className: C,
            variant: 'text-xs/normal',
            children: t
        })
    );
}
function T(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === g.O0b.CANCELED || t.isPurchasedExternally
        ? null
        : (0, i.jsx)(S, {
              subscription: t,
              withOverheadSeparator: n
          });
}
