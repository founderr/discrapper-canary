var a = t(735250);
t(470079);
var s = t(481060),
    r = t(366939),
    i = t(853872),
    l = t(212895),
    o = t(296848);
n.Z = function (e) {
    let { activeSubscription: n, onNext: t, isSubmitting: c, paymentSourceId: u, buttonLabel: d, analyticsLocations: _ } = e,
        I = async () => {
            let e = i.Z.getPaymentSource(u);
            null != e && (await (0, l.i1)(u, (0, o.yb)(n)), await r.tq(n, e, n.currency, _), t());
        };
    return (0, a.jsx)(s.Button, {
        'data-testid': 'purchase',
        onClick: I,
        color: s.Button.Colors.GREEN,
        submitting: c,
        children: d
    });
};
