e.d(t, {
    Z: function () {
        return c;
    }
});
var l = e(200651);
e(192379);
var i = e(772848),
    r = e(481060),
    u = e(159351),
    a = e(667),
    o = e(626135),
    s = e(981631);
function c(n) {
    let { applicationId: t, skuId: c, onClose: d, onComplete: f, analyticsLocations: p, analyticsLocationObject: v, contextKey: m } = n,
        h = !1,
        I = (0, i.Z)();
    (0, r.openModalLazy)(
        async () => {
            let { default: n } = await Promise.all([e.e('77298'), e.e('23357'), e.e('12013'), e.e('52249'), e.e('68956'), e.e('26182'), e.e('95900'), e.e('32776'), e.e('44387')]).then(e.bind(e, 409600));
            return (e) => {
                let { onClose: i, ...r } = e;
                return (0, l.jsx)(n, {
                    ...r,
                    loadId: I,
                    applicationId: t,
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
                    o.default.track(s.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: I,
                        payment_type: s.Zuq[s.GZQ.ONE_TIME],
                        location: v,
                        is_gift: !1,
                        application_id: t,
                        location_stack: p
                    }),
                    (0, u.fw)(),
                    (0, a.p)(),
                    null == d || d(h);
            },
            onCloseRequest: s.dG4
        }
    );
}
