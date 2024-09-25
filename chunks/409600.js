r.r(n),
    r.d(n, {
        STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return f;
        },
        default: function () {
            return p;
        }
    }),
    r(47120);
var t = r(735250);
r(470079);
var a = r(100527),
    o = r(906732),
    i = r(987209),
    s = r(598),
    l = r(791785),
    c = r(961830),
    d = r(231338);
function u(e) {
    let { onClose: n, onComplete: r, transitionState: a, applicationId: i, analyticsLocationObject: c, skuId: d } = e,
        {} = (0, s.usePaymentContext)(),
        { analyticsLocations: u } = (0, o.ZP)();
    return (0, t.jsx)(l.PaymentModal, {
        onClose: n,
        onComplete: r,
        applicationId: i,
        skuId: d,
        initialPlanId: null,
        analyticsObject: c,
        analyticsLocations: u,
        transitionState: a
    });
}
let f = [c.WA, c.s2, ...c.yp, c.wo, c.F7];
function p(e) {
    let { loadId: n, applicationId: r, skuId: l, analyticsLocations: c } = e,
        { analyticsLocations: p } = (0, o.ZP)(c, a.Z.PREMIUM_PAYMENT_MODAL);
    return (0, t.jsx)(o.Gt, {
        value: p,
        children: (0, t.jsx)(s.PaymentContextProvider, {
            loadId: n,
            stepConfigs: f,
            applicationId: r,
            skuIDs: [l],
            activeSubscription: null,
            purchaseType: d.GZ.ONE_TIME,
            children: (0, t.jsx)(i.KB, { children: (0, t.jsx)(u, { ...e }) })
        })
    });
}
