t.d(n, {
    h: function () {
        return m;
    },
    m: function () {
        return f;
    }
}),
    t(789020);
var l = t(735250);
t(470079);
var i = t(512722),
    r = t.n(i),
    o = t(481060),
    a = t(496929),
    s = t(171246),
    u = t(509545),
    c = t(55563),
    d = t(987209),
    p = t(981631);
function m(e) {
    let { initialPlanId: n, activeSubscription: i, analyticsObject: r, analyticsLocation: a, analyticsLocations: s, analyticsSubscriptionType: u, renderHeader: c, planGroup: m, skuId: v, guildId: f, reviewWarningMessage: I, applicationId: h, showBenefitsFirst: S, onComplete: x, forcesTransitionToGuild: g } = e;
    (0, o.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(t.bind(t, 598)),
                o = (await Promise.all([t.e('52249'), t.e('26182'), t.e('32776'), t.e('8573')]).then(t.bind(t, 405083))).default,
                { getApplicationPaymentSteps: p } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('12013'), t.e('99783'), t.e('26182'), t.e('95900'), t.e('31269')]).then(t.bind(t, 759386)),
                T = p({
                    guildId: f,
                    showBenefitsFirst: S
                });
            return (t) =>
                (0, l.jsx)(e, {
                    applicationId: h,
                    activeSubscription: i,
                    stepConfigs: T,
                    skuIDs: [v],
                    children: (0, l.jsx)(d.KB, {
                        children: (0, l.jsx)(o, {
                            ...t,
                            initialPlanId: n,
                            skuId: v,
                            analyticsLocations: s,
                            analyticsObject: r,
                            analyticsLocation: a,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: m,
                            reviewWarningMessage: I,
                            applicationId: h,
                            guildId: null != f ? f : void 0,
                            onComplete: x,
                            forcesTransitionToGuild: g
                        })
                    })
                });
        },
        { onCloseRequest: p.dG4 }
    );
}
let v = async (e, n) => {
    let t = (await (0, a.yD)(e)).filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date()).find((e) => e.sku_id === n);
    r()(null == t, 'User already has an active subscription to this SKU');
};
async function f(e) {
    var n;
    let { applicationId: t, skuId: l, initialPlanId: i, analyticsLocationObject: o, analyticsLocations: a, renderHeader: d } = e,
        f = c.Z.get(l),
        I = u.Z.getForSKU(l);
    r()(null != f, 'Failed to find SKU');
    let h = (0, s.KW)(f.flags);
    r()(h, 'Guild application subscriptions unsupported!'),
        await v(t, l),
        m({
            initialPlanId: null != i ? i : null === (n = I[0]) || void 0 === n ? void 0 : n.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: o,
            analyticsSubscriptionType: p.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t
        });
}
