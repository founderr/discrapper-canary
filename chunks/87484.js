t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var l = t(772848),
    r = t(481060),
    o = t(976255),
    s = t(667),
    a = t(626135),
    c = t(981631);
function d(e) {
    let { applicationId: n, skuId: d, onClose: u, onComplete: S, analyticsLocations: m, analyticsLocationObject: I, contextKey: f } = e,
        x = !1,
        _ = (0, l.Z)();
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('52249'), t.e('54803'), t.e('15685'), t.e('47006'), t.e('32776'), t.e('18209'), t.e('30671'), t.e('78189')]).then(t.bind(t, 409600));
            return (t) => {
                let { onClose: l, ...r } = t;
                return (0, i.jsx)(e, {
                    ...r,
                    loadId: _,
                    applicationId: n,
                    skuId: d,
                    analyticsLocations: m,
                    analyticsLocationObject: I,
                    onClose: (e) => {
                        l(), null == u || u(e);
                    },
                    onComplete: (e) => {
                        (x = !0), null == S || S(e);
                    }
                });
            };
        },
        {
            contextKey: f,
            onCloseCallback: () => {
                !x &&
                    a.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: _,
                        payment_type: c.Zuq[c.GZQ.ONE_TIME],
                        location: I,
                        is_gift: !1,
                        application_id: n,
                        location_stack: m
                    }),
                    (0, o.fw)(),
                    (0, s.p)(),
                    null == u || u(x);
            },
            onCloseRequest: c.dG4
        }
    );
}
