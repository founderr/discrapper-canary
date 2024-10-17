n.d(t, {
    z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(772848),
    s = n(481060),
    r = n(976255),
    l = n(667),
    o = n(626135),
    c = n(981631);
function u(e) {
    let { guildProductListing: t, guildId: u, sourceAnalyticsLocations: d } = e,
        _ = !1,
        E = (0, a.Z)(),
        I = () => {
            _ = !0;
        };
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await n.e('88806').then(n.bind(n, 578780));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    applicationId: t.application_id,
                    skuId: t.id,
                    sourceAnalyticsLocations: d,
                    guildProductContext: {
                        guildProductListingId: t.id,
                        guildId: u
                    },
                    loadId: E,
                    onComplete: I
                });
        },
        {
            onCloseCallback: () => {
                !_ &&
                    o.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: E,
                        payment_type: c.Zuq[c.GZQ.ONE_TIME],
                        is_gift: !1,
                        location_stack: Array.isArray(d) ? d : [d]
                    }),
                    (0, r.fw)(),
                    (0, l.p)();
            },
            onCloseRequest: c.dG4
        }
    );
}
