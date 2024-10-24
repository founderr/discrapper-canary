t.d(e, {
    Z: function () {
        return c;
    }
});
var l = t(200651);
t(192379);
var i = t(772848),
    r = t(481060),
    s = t(976255),
    a = t(667),
    o = t(626135),
    u = t(981631);
function c(n) {
    let { applicationId: e, skuId: c, onClose: d, onComplete: f, analyticsLocations: p, analyticsLocationObject: v, contextKey: m } = n,
        h = !1,
        I = (0, i.Z)();
    (0, r.openModalLazy)(
        async () => {
            let { default: n } = await Promise.all([t.e('63288'), t.e('77298'), t.e('23357'), t.e('12013'), t.e('52249'), t.e('99783'), t.e('26182'), t.e('95900'), t.e('32776'), t.e('57308')]).then(t.bind(t, 409600));
            return (t) => {
                let { onClose: i, ...r } = t;
                return (0, l.jsx)(n, {
                    ...r,
                    loadId: I,
                    applicationId: e,
                    skuId: c,
                    analyticsLocations: p,
                    analyticsLocationObject: v,
                    onClose: (n) => {
                        i(), null == d || d(n);
                    },
                    onComplete: (n) => {
                        (h = !0), null == f || f(n);
                    }
                });
            };
        },
        {
            contextKey: m,
            onCloseCallback: () => {
                !h &&
                    o.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: I,
                        payment_type: u.Zuq[u.GZQ.ONE_TIME],
                        location: v,
                        is_gift: !1,
                        application_id: e,
                        location_stack: p
                    }),
                    (0, s.fw)(),
                    (0, a.p)(),
                    null == d || d(h);
            },
            onCloseRequest: u.dG4
        }
    );
}
