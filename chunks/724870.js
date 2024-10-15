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
    a = t.n(i),
    s = t(481060),
    r = t(496929),
    o = t(171246),
    u = t(509545),
    c = t(55563),
    d = t(987209),
    p = t(981631);
function m(e) {
    let { initialPlanId: n, activeSubscription: i, analyticsObject: a, analyticsLocation: r, analyticsLocations: o, analyticsSubscriptionType: u, renderHeader: c, planGroup: m, skuId: v, guildId: f, reviewWarningMessage: h, applicationId: I, showBenefitsFirst: x, onComplete: S, forcesTransitionToGuild: T } = e;
    (0, s.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(t.bind(t, 598)),
                s = (await Promise.all([t.e('52249'), t.e('72652'), t.e('32776'), t.e('68845')]).then(t.bind(t, 405083))).default,
                { getApplicationPaymentSteps: p } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('54803'), t.e('15685'), t.e('79915'), t.e('30671'), t.e('59329')]).then(t.bind(t, 759386)),
                N = p({
                    guildId: f,
                    showBenefitsFirst: x
                });
            return (t) =>
                (0, l.jsx)(e, {
                    applicationId: I,
                    activeSubscription: i,
                    stepConfigs: N,
                    skuIDs: [v],
                    children: (0, l.jsx)(d.KB, {
                        children: (0, l.jsx)(s, {
                            ...t,
                            initialPlanId: n,
                            skuId: v,
                            analyticsLocations: o,
                            analyticsObject: a,
                            analyticsLocation: r,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: m,
                            reviewWarningMessage: h,
                            applicationId: I,
                            guildId: null != f ? f : void 0,
                            onComplete: S,
                            forcesTransitionToGuild: T
                        })
                    })
                });
        },
        { onCloseRequest: p.dG4 }
    );
}
let v = async (e, n) => {
    let t = (await (0, r.yD)(e)).filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date()).find((e) => e.sku_id === n);
    a()(null == t, 'User already has an active subscription to this SKU');
};
async function f(e) {
    var n;
    let { applicationId: t, skuId: l, initialPlanId: i, analyticsLocationObject: s, analyticsLocations: r, renderHeader: d } = e,
        f = c.Z.get(l),
        h = u.Z.getForSKU(l);
    a()(null != f, 'Failed to find SKU');
    let I = (0, o.KW)(f.flags);
    a()(I, 'Guild application subscriptions unsupported!'),
        await v(t, l),
        m({
            initialPlanId: null != i ? i : null === (n = h[0]) || void 0 === n ? void 0 : n.id,
            activeSubscription: null,
            analyticsLocations: r,
            analyticsLocationObject: s,
            analyticsSubscriptionType: p.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t
        });
}
