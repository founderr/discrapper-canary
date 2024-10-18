t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(735250);
t(470079);
var i = t(772848),
    r = t(481060),
    o = t(976255),
    a = t(667),
    s = t(626135),
    u = t(981631);
function c(e) {
    let { applicationId: n, skuId: c, onClose: d, onComplete: p, analyticsLocations: m, analyticsLocationObject: v, contextKey: f } = e,
        I = !1,
        h = (0, i.Z)();
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('12013'), t.e('52249'), t.e('99783'), t.e('26182'), t.e('95900'), t.e('32776'), t.e('57308')]).then(t.bind(t, 409600));
            return (t) => {
                let { onClose: i, ...r } = t;
                return (0, l.jsx)(e, {
                    ...r,
                    loadId: h,
                    applicationId: n,
                    skuId: c,
                    analyticsLocations: m,
                    analyticsLocationObject: v,
                    onClose: (e) => {
                        i(), null == d || d(e);
                    },
                    onComplete: (e) => {
                        (I = !0), null == p || p(e);
                    }
                });
            };
        },
        {
            contextKey: f,
            onCloseCallback: () => {
                !I &&
                    s.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: h,
                        payment_type: u.Zuq[u.GZQ.ONE_TIME],
                        location: v,
                        is_gift: !1,
                        application_id: n,
                        location_stack: m
                    }),
                    (0, o.fw)(),
                    (0, a.p)(),
                    null == d || d(I);
            },
            onCloseRequest: u.dG4
        }
    );
}
