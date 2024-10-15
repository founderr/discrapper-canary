t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(735250);
t(470079);
var i = t(772848),
    a = t(481060),
    s = t(976255),
    r = t(667),
    o = t(626135),
    u = t(981631);
function c(e) {
    let { applicationId: n, skuId: c, onClose: d, onComplete: p, analyticsLocations: m, analyticsLocationObject: v, contextKey: f } = e,
        h = !1,
        I = (0, i.Z)();
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('52249'), t.e('54803'), t.e('15685'), t.e('72652'), t.e('32776'), t.e('79915'), t.e('30671'), t.e('52730')]).then(t.bind(t, 409600));
            return (t) => {
                let { onClose: i, ...a } = t;
                return (0, l.jsx)(e, {
                    ...a,
                    loadId: I,
                    applicationId: n,
                    skuId: c,
                    analyticsLocations: m,
                    analyticsLocationObject: v,
                    onClose: (e) => {
                        i(), null == d || d(e);
                    },
                    onComplete: (e) => {
                        (h = !0), null == p || p(e);
                    }
                });
            };
        },
        {
            contextKey: f,
            onCloseCallback: () => {
                !h &&
                    o.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: I,
                        payment_type: u.Zuq[u.GZQ.ONE_TIME],
                        location: v,
                        is_gift: !1,
                        application_id: n,
                        location_stack: m
                    }),
                    (0, s.fw)(),
                    (0, r.p)(),
                    null == d || d(h);
            },
            onCloseRequest: u.dG4
        }
    );
}
