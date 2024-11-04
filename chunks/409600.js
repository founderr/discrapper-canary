n.r(t),
    n.d(t, {
        STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return p;
        },
        default: function () {
            return f;
        }
    }),
    n(47120);
var o = n(200651);
n(192379);
var r = n(100527),
    i = n(906732),
    a = n(987209),
    c = n(563132),
    d = n(791785),
    l = n(961830),
    s = n(231338);
function u(e) {
    let { onClose: t, onComplete: n, transitionState: r, applicationId: a, analyticsLocationObject: l, skuId: s } = e,
        {} = (0, c.usePaymentContext)(),
        { analyticsLocations: u } = (0, i.ZP)();
    return (0, o.jsx)(d.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: a,
        skuId: s,
        initialPlanId: null,
        analyticsObject: l,
        analyticsLocations: u,
        transitionState: r
    });
}
let p = [l.WA, l.s2, ...l.yp, l.wo, l.F7];
function f(e) {
    let { loadId: t, applicationId: n, skuId: d, analyticsLocations: l } = e,
        { analyticsLocations: f } = (0, i.ZP)(l, r.Z.PREMIUM_PAYMENT_MODAL);
    return (0, o.jsx)(i.Gt, {
        value: f,
        children: (0, o.jsx)(c.PaymentContextProvider, {
            loadId: t,
            stepConfigs: p,
            applicationId: n,
            skuIDs: [d],
            activeSubscription: null,
            purchaseType: s.GZ.ONE_TIME,
            children: (0, o.jsx)(a.KB, { children: (0, o.jsx)(u, { ...e }) })
        })
    });
}
