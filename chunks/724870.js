e.d(t, {
    h: function () {
        return p;
    },
    m: function () {
        return m;
    }
}),
    e(789020);
var l = e(200651);
e(192379);
var i = e(512722),
    r = e.n(i),
    u = e(481060),
    a = e(496929),
    o = e(171246),
    s = e(509545),
    c = e(55563),
    d = e(987209),
    f = e(981631);
function p(n) {
    let { initialPlanId: t, activeSubscription: i, analyticsObject: r, analyticsLocation: a, analyticsLocations: o, analyticsSubscriptionType: s, renderHeader: c, planGroup: p, skuId: v, guildId: m, reviewWarningMessage: h, applicationId: I, showBenefitsFirst: S, onComplete: g, forcesTransitionToGuild: E } = n;
    (0, u.openModalLazy)(
        async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(e.bind(e, 563132)),
                u = (await Promise.all([e.e('52249'), e.e('26182'), e.e('32776'), e.e('8573')]).then(e.bind(e, 405083))).default,
                { getApplicationPaymentSteps: f } = await Promise.all([e.e('63288'), e.e('77298'), e.e('23357'), e.e('12013'), e.e('99783'), e.e('26182'), e.e('95900'), e.e('4674')]).then(e.bind(e, 759386)),
                A = f({
                    guildId: m,
                    showBenefitsFirst: S
                });
            return (e) =>
                (0, l.jsx)(n, {
                    applicationId: I,
                    activeSubscription: i,
                    stepConfigs: A,
                    skuIDs: [v],
                    children: (0, l.jsx)(d.KB, {
                        children: (0, l.jsx)(u, {
                            ...e,
                            initialPlanId: t,
                            skuId: v,
                            analyticsLocations: o,
                            analyticsObject: r,
                            analyticsLocation: a,
                            analyticsSubscriptionType: s,
                            renderHeader: c,
                            planGroup: p,
                            reviewWarningMessage: h,
                            applicationId: I,
                            guildId: null != m ? m : void 0,
                            onComplete: g,
                            forcesTransitionToGuild: E
                        })
                    })
                });
        },
        { onCloseRequest: f.dG4 }
    );
}
let v = async (n, t) => {
    let e = (await (0, a.yD)(n)).filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date()).find((n) => n.sku_id === t);
    r()(null == e, 'User already has an active subscription to this SKU');
};
async function m(n) {
    var t;
    let { applicationId: e, skuId: l, initialPlanId: i, analyticsLocationObject: u, analyticsLocations: a, renderHeader: d } = n,
        m = c.Z.get(l),
        h = s.Z.getForSKU(l);
    r()(null != m, 'Failed to find SKU');
    let I = (0, o.KW)(m.flags);
    r()(I, 'Guild application subscriptions unsupported!'),
        await v(e, l),
        p({
            initialPlanId: null != i ? i : null === (t = h[0]) || void 0 === t ? void 0 : t.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: u,
            analyticsSubscriptionType: f.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e
        });
}
