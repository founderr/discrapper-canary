t.r(n),
    t.d(n, {
        STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return p;
        },
        default: function () {
            return f;
        }
    }),
    t(47120);
var o = t(735250);
t(470079);
var r = t(100527),
    i = t(906732),
    a = t(987209),
    c = t(598),
    d = t(791785),
    l = t(961830),
    s = t(231338);
function u(e) {
    let { onClose: n, onComplete: t, transitionState: r, applicationId: a, analyticsLocationObject: l, skuId: s } = e,
        {} = (0, c.usePaymentContext)(),
        { analyticsLocations: u } = (0, i.ZP)();
    return (0, o.jsx)(d.PaymentModal, {
        onClose: n,
        onComplete: t,
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
    let { loadId: n, applicationId: t, skuId: d, analyticsLocations: l } = e,
        { analyticsLocations: f } = (0, i.ZP)(l, r.Z.PREMIUM_PAYMENT_MODAL);
    return (0, o.jsx)(i.Gt, {
        value: f,
        children: (0, o.jsx)(c.PaymentContextProvider, {
            loadId: n,
            stepConfigs: p,
            applicationId: t,
            skuIDs: [d],
            activeSubscription: null,
            purchaseType: s.GZ.ONE_TIME,
            children: (0, o.jsx)(a.KB, { children: (0, o.jsx)(u, { ...e }) })
        })
    });
}
