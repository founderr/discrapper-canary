t.d(n, {
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
    a = t.n(i),
    r = t(481060),
    o = t(496929),
    s = t(171246),
    u = t(509545),
    c = t(55563),
    d = t(987209),
    p = t(981631);
function f(e) {
    let { initialPlanId: n, activeSubscription: i, analyticsObject: a, analyticsLocation: o, analyticsLocations: s, analyticsSubscriptionType: u, renderHeader: c, planGroup: f, skuId: m, guildId: v, reviewWarningMessage: I, applicationId: h, showBenefitsFirst: S, eligibleApplicationSubscriptionGuilds: x, onComplete: N, forcesTransitionToGuild: T } = e;
    (0, r.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(t.bind(t, 598)),
                r = (await Promise.all([t.e('52249'), t.e('72652'), t.e('32776'), t.e('68845')]).then(t.bind(t, 405083))).default,
                { getApplicationPaymentSteps: p } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('54803'), t.e('15685'), t.e('79915'), t.e('30671'), t.e('59329')]).then(t.bind(t, 759386)),
                Z = p({
                    guildId: v,
                    showBenefitsFirst: S,
                    eligibleApplicationSubscriptionGuilds: x
                });
            return (t) =>
                (0, l.jsx)(e, {
                    applicationId: h,
                    activeSubscription: i,
                    stepConfigs: Z,
                    skuIDs: [m],
                    children: (0, l.jsx)(d.KB, {
                        children: (0, l.jsx)(r, {
                            ...t,
                            initialPlanId: n,
                            skuId: m,
                            analyticsLocations: s,
                            analyticsObject: a,
                            analyticsLocation: o,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: f,
                            reviewWarningMessage: I,
                            applicationId: h,
                            guildId: null != v ? v : void 0,
                            onComplete: N,
                            forcesTransitionToGuild: T
                        })
                    })
                });
        },
        { onCloseRequest: p.dG4 }
    );
}
let m = async (e, n) => {
    let t = (await (0, o.yD)(e)).filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date()).find((e) => e.sku_id === n);
    a()(null == t, 'User already has an active subscription to this SKU');
};
async function v(e) {
    var n;
    let { applicationId: t, skuId: l, initialPlanId: i, analyticsLocationObject: r, analyticsLocations: o, renderHeader: d } = e,
        v = c.Z.get(l),
        I = u.Z.getForSKU(l);
    a()(null != v, 'Failed to find SKU');
    let h = (0, s.KW)(v.flags);
    a()(h, 'Guild application subscriptions unsupported!'),
        await m(t, l),
        f({
            initialPlanId: null != i ? i : null === (n = I[0]) || void 0 === n ? void 0 : n.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: r,
            analyticsSubscriptionType: p.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: t
        });
}
