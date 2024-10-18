t.d(e, {
    h: function () {
        return f;
    },
    m: function () {
        return v;
    }
}),
    t(789020);
var l = t(735250);
t(470079);
var i = t(512722),
    r = t.n(i),
    a = t(481060),
    o = t(496929),
    s = t(171246),
    u = t(509545),
    c = t(55563),
    d = t(987209),
    p = t(981631);
function f(n) {
    let { initialPlanId: e, activeSubscription: i, analyticsObject: r, analyticsLocation: o, analyticsLocations: s, analyticsSubscriptionType: u, renderHeader: c, planGroup: f, skuId: m, guildId: v, reviewWarningMessage: h, applicationId: I, showBenefitsFirst: S, onComplete: x, forcesTransitionToGuild: T } = n;
    (0, a.openModalLazy)(
        async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(t.bind(t, 598)),
                a = (await Promise.all([t.e('52249'), t.e('26182'), t.e('32776'), t.e('8573')]).then(t.bind(t, 405083))).default,
                { getApplicationPaymentSteps: p } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('12013'), t.e('99783'), t.e('26182'), t.e('95900'), t.e('31269')]).then(t.bind(t, 759386)),
                E = p({
                    guildId: v,
                    showBenefitsFirst: S
                });
            return (t) =>
                (0, l.jsx)(n, {
                    applicationId: I,
                    activeSubscription: i,
                    stepConfigs: E,
                    skuIDs: [m],
                    children: (0, l.jsx)(d.KB, {
                        children: (0, l.jsx)(a, {
                            ...t,
                            initialPlanId: e,
                            skuId: m,
                            analyticsLocations: s,
                            analyticsObject: r,
                            analyticsLocation: o,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: f,
                            reviewWarningMessage: h,
                            applicationId: I,
                            guildId: null != v ? v : void 0,
                            onComplete: x,
                            forcesTransitionToGuild: T
                        })
                    })
                });
        },
        { onCloseRequest: p.dG4 }
    );
}
let m = async (n, e) => {
    let t = (await (0, o.yD)(n)).filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date()).find((n) => n.sku_id === e);
    r()(null == t, 'User already has an active subscription to this SKU');
};
async function v(n) {
    var e;
    let { applicationId: t, skuId: l, initialPlanId: i, analyticsLocationObject: a, analyticsLocations: o, renderHeader: d } = n,
        v = c.Z.get(l),
        h = u.Z.getForSKU(l);
    r()(null != v, 'Failed to find SKU');
    let I = (0, s.KW)(v.flags);
    r()(I, 'Guild application subscriptions unsupported!'),
        await m(t, l),
        f({
            initialPlanId: null != i ? i : null === (e = h[0]) || void 0 === e ? void 0 : e.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: a,
            analyticsSubscriptionType: p.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t
        });
}
