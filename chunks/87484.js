t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(735250);
t(470079);
var i = t(772848),
    r = t(481060),
    s = t(976255),
    o = t(667),
    a = t(626135),
    u = t(981631);
function c(e) {
    let { applicationId: n, skuId: c, onClose: d, onComplete: f, analyticsLocations: p, analyticsLocationObject: m, contextKey: v } = e,
        I = !1,
        S = (0, i.Z)();
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('52249'), t.e('54803'), t.e('15685'), t.e('72652'), t.e('32776'), t.e('79915'), t.e('30671'), t.e('49288')]).then(t.bind(t, 409600));
            return (t) => {
                let { onClose: i, ...r } = t;
                return (0, l.jsx)(e, {
                    ...r,
                    loadId: S,
                    applicationId: n,
                    skuId: c,
                    analyticsLocations: p,
                    analyticsLocationObject: m,
                    onClose: (e) => {
                        i(), null == d || d(e);
                    },
                    onComplete: (e) => {
                        (I = !0), null == f || f(e);
                    }
                });
            };
        },
        {
            contextKey: v,
            onCloseCallback: () => {
                !I &&
                    a.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: S,
                        payment_type: u.Zuq[u.GZQ.ONE_TIME],
                        location: m,
                        is_gift: !1,
                        application_id: n,
                        location_stack: p
                    }),
                    (0, s.fw)(),
                    (0, o.p)(),
                    null == d || d(I);
            },
            onCloseRequest: u.dG4
        }
    );
}
