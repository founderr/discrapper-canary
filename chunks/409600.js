n.r(t),
    n.d(t, {
        STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return f;
        },
        default: function () {
            return p;
        }
    }),
    n(47120);
var o = n(200651);
n(192379);
var i = n(100527),
    r = n(906732),
    a = n(987209),
    d = n(563132),
    c = n(791785),
    l = n(961830),
    s = n(231338);
function u(e) {
    let { onClose: t, onComplete: n, transitionState: i, applicationId: a, analyticsLocationObject: l, skuId: s } = e,
        {} = (0, d.usePaymentContext)(),
        { analyticsLocations: u } = (0, r.ZP)();
    return (0, o.jsx)(c.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: a,
        skuId: s,
        initialPlanId: null,
        analyticsObject: l,
        analyticsLocations: u,
        transitionState: i
    });
}
let f = [l.WA, l.s2, ...l.yp, l.wo, l.F7];
function p(e) {
    let { loadId: t, applicationId: n, skuId: c, analyticsLocations: l } = e,
        { analyticsLocations: p } = (0, r.ZP)(l, i.Z.PREMIUM_PAYMENT_MODAL);
    return (0, o.jsx)(r.Gt, {
        value: p,
        children: (0, o.jsx)(d.PaymentContextProvider, {
            loadId: t,
            stepConfigs: f,
            applicationId: n,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: s.GZ.ONE_TIME,
            children: (0, o.jsx)(a.KB, { children: (0, o.jsx)(u, { ...e }) })
        })
    });
}
