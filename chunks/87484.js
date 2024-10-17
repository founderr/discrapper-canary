t.d(e, {
    Z: function () {
        return c;
    }
});
var l = t(735250);
t(470079);
var i = t(772848),
    o = t(481060),
    r = t(976255),
    a = t(667),
    s = t(626135),
    u = t(981631);
function c(n) {
    let { applicationId: e, skuId: c, onClose: d, onComplete: p, analyticsLocations: v, analyticsLocationObject: m, contextKey: f } = n,
        I = !1,
        h = (0, i.Z)();
    (0, o.openModalLazy)(
        async () => {
            let { default: n } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('12013'), t.e('52249'), t.e('99783'), t.e('26182'), t.e('95900'), t.e('32776'), t.e('57308')]).then(t.bind(t, 409600));
            return (t) => {
                let { onClose: i, ...o } = t;
                return (0, l.jsx)(n, {
                    ...o,
                    loadId: h,
                    applicationId: e,
                    skuId: c,
                    analyticsLocations: v,
                    analyticsLocationObject: m,
                    onClose: (n) => {
                        i(), null == d || d(n);
                    },
                    onComplete: (n) => {
                        (I = !0), null == p || p(n);
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
                        location: m,
                        is_gift: !1,
                        application_id: e,
                        location_stack: v
                    }),
                    (0, r.fw)(),
                    (0, a.p)(),
                    null == d || d(I);
            },
            onCloseRequest: u.dG4
        }
    );
}
