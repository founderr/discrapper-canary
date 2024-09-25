n.d(t, {
    z: function () {
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
    let { guildProductListing: t, guildId: c, sourceAnalyticsLocations: d } = e,
        _ = !1,
        E = (0, i.Z)(),
        f = () => {
            _ = !0;
        };
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('96427'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('72652'), n.e('32776'), n.e('79915'), n.e('40460')]).then(n.bind(n, 578780));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    applicationId: t.application_id,
                    skuId: t.id,
                    sourceAnalyticsLocations: d,
                    guildProductContext: {
                        guildProductListingId: t.id,
                        guildId: c
                    },
                    loadId: E,
                    onComplete: f
                });
        },
        {
            onCloseCallback: () => {
                !_ &&
                    l.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: E,
                        payment_type: u.Zuq[u.GZQ.ONE_TIME],
                        is_gift: !1,
                        location_stack: Array.isArray(d) ? d : [d]
                    }),
                    (0, o.fw)(),
                    (0, s.p)();
            },
            onCloseRequest: u.dG4
        }
    );
}
