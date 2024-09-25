n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(772848),
    a = n(481060),
    o = n(976255),
    s = n(667),
    l = n(626135),
    u = n(981631);
function c(e) {
    let { applicationId: t, skuId: c, onClose: d, onComplete: _, analyticsLocations: E, analyticsLocationObject: f, contextKey: h } = e,
        p = !1,
        m = (0, i.Z)();
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('96427'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('72652'), n.e('32776'), n.e('79915'), n.e('1816')]).then(n.bind(n, 409600));
            return (n) => {
                let { onClose: i, ...a } = n;
                return (0, r.jsx)(e, {
                    ...a,
                    loadId: m,
                    applicationId: t,
                    skuId: c,
                    analyticsLocations: E,
                    analyticsLocationObject: f,
                    onClose: (e) => {
                        i(), null == d || d(e);
                    },
                    onComplete: (e) => {
                        (p = !0), null == _ || _(e);
                    }
                });
            };
        },
        {
            contextKey: h,
            onCloseCallback: () => {
                !p &&
                    l.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: m,
                        payment_type: u.Zuq[u.GZQ.ONE_TIME],
                        location: f,
                        is_gift: !1,
                        application_id: t,
                        location_stack: E
                    }),
                    (0, o.fw)(),
                    (0, s.p)(),
                    null == d || d(p);
            },
            onCloseRequest: u.dG4
        }
    );
}
