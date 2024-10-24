t.d(e, {
    h: function () {
        return p;
    },
    m: function () {
        return m;
    }
}),
    t(789020);
var l = t(200651);
t(192379);
var i = t(512722),
    r = t.n(i),
    s = t(481060),
    a = t(496929),
    o = t(171246),
    u = t(509545),
    c = t(55563),
    d = t(987209),
    f = t(981631);
function p(n) {
    let { initialPlanId: e, activeSubscription: i, analyticsObject: r, analyticsLocation: a, analyticsLocations: o, analyticsSubscriptionType: u, renderHeader: c, planGroup: p, skuId: v, guildId: m, reviewWarningMessage: h, applicationId: I, showBenefitsFirst: S, onComplete: x, forcesTransitionToGuild: E } = n;
    (0, s.openModalLazy)(
        async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(t.bind(t, 598)),
                s = (await Promise.all([t.e('52249'), t.e('26182'), t.e('32776'), t.e('8573')]).then(t.bind(t, 405083))).default,
                { getApplicationPaymentSteps: f } = await Promise.all([t.e('63288'), t.e('77298'), t.e('23357'), t.e('12013'), t.e('99783'), t.e('26182'), t.e('95900'), t.e('31269')]).then(t.bind(t, 759386)),
                T = f({
                    guildId: m,
                    showBenefitsFirst: S
                });
            return (t) =>
                (0, l.jsx)(n, {
                    applicationId: I,
                    activeSubscription: i,
                    stepConfigs: T,
                    skuIDs: [v],
                    children: (0, l.jsx)(d.KB, {
                        children: (0, l.jsx)(s, {
                            ...t,
                            initialPlanId: e,
                            skuId: v,
                            analyticsLocations: o,
                            analyticsObject: r,
                            analyticsLocation: a,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: p,
                            reviewWarningMessage: h,
                            applicationId: I,
                            guildId: null != m ? m : void 0,
                            onComplete: x,
                            forcesTransitionToGuild: E
                        })
                    })
                });
        },
        { onCloseRequest: f.dG4 }
    );
}
let v = async (n, e) => {
    let t = (await (0, a.yD)(n)).filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date()).find((n) => n.sku_id === e);
    r()(null == t, 'User already has an active subscription to this SKU');
};
async function m(n) {
    var e;
    let { applicationId: t, skuId: l, initialPlanId: i, analyticsLocationObject: s, analyticsLocations: a, renderHeader: d } = n,
        m = c.Z.get(l),
        h = u.Z.getForSKU(l);
    r()(null != m, 'Failed to find SKU');
    let I = (0, o.KW)(m.flags);
    r()(I, 'Guild application subscriptions unsupported!'),
        await v(t, l),
        p({
            initialPlanId: null != i ? i : null === (e = h[0]) || void 0 === e ? void 0 : e.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: s,
            analyticsSubscriptionType: f.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t
        });
}
