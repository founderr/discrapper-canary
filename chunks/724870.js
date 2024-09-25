n.d(t, {
    h: function () {
        return f;
    },
    m: function () {
        return p;
    }
});
var r = n(789020);
var i = n(735250);
n(470079);
var a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(496929),
    u = n(171246),
    c = n(509545),
    d = n(55563),
    _ = n(987209),
    E = n(981631);
function f(e) {
    let { initialPlanId: t, activeSubscription: r, analyticsObject: a, analyticsLocation: o, analyticsLocations: l, analyticsSubscriptionType: u, renderHeader: c, planGroup: d, skuId: f, guildId: h, reviewWarningMessage: p, applicationId: m, showBenefitsFirst: I, eligibleApplicationSubscriptionGuilds: T, onComplete: g, forcesTransitionToGuild: S } = e;
    (0, s.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 598)),
                s = (await Promise.all([n.e('52249'), n.e('72652'), n.e('32776'), n.e('8573')]).then(n.bind(n, 405083))).default,
                { getApplicationPaymentSteps: E } = await Promise.all([n.e('96427'), n.e('54803'), n.e('15685'), n.e('79915'), n.e('61429')]).then(n.bind(n, 759386)),
                A = E({
                    guildId: h,
                    showBenefitsFirst: I,
                    eligibleApplicationSubscriptionGuilds: T
                });
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: m,
                    activeSubscription: r,
                    stepConfigs: A,
                    skuIDs: [f],
                    children: (0, i.jsx)(_.KB, {
                        children: (0, i.jsx)(s, {
                            ...n,
                            initialPlanId: t,
                            skuId: f,
                            analyticsLocations: l,
                            analyticsObject: a,
                            analyticsLocation: o,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: d,
                            reviewWarningMessage: p,
                            applicationId: m,
                            guildId: null != h ? h : void 0,
                            onComplete: g,
                            forcesTransitionToGuild: S
                        })
                    })
                });
        },
        { onCloseRequest: E.dG4 }
    );
}
let h = async (e, t) => {
    let n = (await (0, l.yD)(e)).filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date()).find((e) => e.sku_id === t);
    o()(null == n, 'User already has an active subscription to this SKU');
};
async function p(e) {
    var t;
    let { applicationId: n, skuId: r, initialPlanId: i, analyticsLocationObject: a, analyticsLocations: s, renderHeader: l } = e,
        _ = d.Z.get(r),
        p = c.Z.getForSKU(r);
    o()(null != _, 'Failed to find SKU');
    let m = (0, u.KW)(_.flags);
    o()(m, 'Guild application subscriptions unsupported!'),
        await h(n, r),
        f({
            initialPlanId: null != i ? i : null === (t = p[0]) || void 0 === t ? void 0 : t.id,
            activeSubscription: null,
            analyticsLocations: s,
            analyticsLocationObject: a,
            analyticsSubscriptionType: E.NYc.APPLICATION,
            renderHeader: l,
            planGroup: [],
            skuId: r,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: n
        });
}
