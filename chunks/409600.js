n.r(t),
    n.d(t, {
        STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return u;
        },
        default: function () {
            return p;
        }
    }),
    n(47120);
var i = n(200651);
n(192379);
var o = n(100527),
    a = n(906732),
    r = n(987209),
    c = n(563132),
    d = n(791785),
    s = n(961830),
    l = n(231338);
function f(e) {
    let { onClose: t, onComplete: n, transitionState: o, applicationId: r, analyticsLocationObject: s, skuId: l } = e,
        {} = (0, c.usePaymentContext)(),
        { analyticsLocations: f } = (0, a.ZP)();
    return (0, i.jsx)(d.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: r,
        skuId: l,
        initialPlanId: null,
        analyticsObject: s,
        analyticsLocations: f,
        transitionState: o
    });
}
let u = [s.WA, s.s2, ...s.yp, s.wo, s.F7];
function p(e) {
    let { loadId: t, applicationId: n, skuId: d, analyticsLocations: s } = e,
        { analyticsLocations: p } = (0, a.ZP)(s, o.Z.PREMIUM_PAYMENT_MODAL);
    return (0, i.jsx)(a.Gt, {
        value: p,
        children: (0, i.jsx)(c.PaymentContextProvider, {
            loadId: t,
            stepConfigs: u,
            applicationId: n,
            skuIDs: [d],
            activeSubscription: null,
            purchaseType: l.GZ.ONE_TIME,
            children: (0, i.jsx)(r.KB, { children: (0, i.jsx)(f, { ...e }) })
        })
    });
}
