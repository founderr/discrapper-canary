t.r(n),
    t.d(n, {
        STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return f;
        },
        default: function () {
            return p;
        }
    }),
    t(47120);
var o = t(200651);
t(192379);
var i = t(100527),
    r = t(906732),
    a = t(987209),
    c = t(563132),
    d = t(791785),
    l = t(961830),
    s = t(231338);
function u(e) {
    let { onClose: n, onComplete: t, transitionState: i, applicationId: a, analyticsLocationObject: l, skuId: s } = e,
        {} = (0, c.usePaymentContext)(),
        { analyticsLocations: u } = (0, r.ZP)();
    return (0, o.jsx)(d.PaymentModal, {
        onClose: n,
        onComplete: t,
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
    let { loadId: n, applicationId: t, skuId: d, analyticsLocations: l } = e,
        { analyticsLocations: p } = (0, r.ZP)(l, i.Z.PREMIUM_PAYMENT_MODAL);
    return (0, o.jsx)(r.Gt, {
        value: p,
        children: (0, o.jsx)(c.PaymentContextProvider, {
            loadId: n,
            stepConfigs: f,
            applicationId: t,
            skuIDs: [d],
            activeSubscription: null,
            purchaseType: s.GZ.ONE_TIME,
            children: (0, o.jsx)(a.KB, { children: (0, o.jsx)(u, { ...e }) })
        })
    });
}
