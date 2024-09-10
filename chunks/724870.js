t.d(n, {
    h: function () {
        return p;
    },
    m: function () {
        return v;
    }
}),
    t(789020);
var i = t(735250);
t(470079);
var l = t(512722),
    r = t.n(l),
    s = t(481060),
    o = t(496929),
    a = t(171246),
    u = t(509545),
    c = t(55563),
    d = t(987209),
    f = t(981631);
function p(e) {
    let { initialPlanId: n, activeSubscription: l, analyticsObject: r, analyticsLocation: o, analyticsLocations: a, analyticsSubscriptionType: u, renderHeader: c, planGroup: p, skuId: m, guildId: v, reviewWarningMessage: I, applicationId: S, showBenefitsFirst: g, eligibleApplicationSubscriptionGuilds: h, onComplete: x, forcesTransitionToGuild: E } = e;
    (0, s.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(t.bind(t, 598)),
                s = (await Promise.all([t.e('52249'), t.e('47006'), t.e('32776'), t.e('42400')]).then(t.bind(t, 405083))).default,
                { getApplicationPaymentSteps: f } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('54803'), t.e('15685'), t.e('79915'), t.e('30671'), t.e('86751')]).then(t.bind(t, 759386)),
                _ = f({
                    guildId: v,
                    showBenefitsFirst: g,
                    eligibleApplicationSubscriptionGuilds: h
                });
            return (t) =>
                (0, i.jsx)(e, {
                    applicationId: S,
                    activeSubscription: l,
                    stepConfigs: _,
                    skuIDs: [m],
                    children: (0, i.jsx)(d.KB, {
                        children: (0, i.jsx)(s, {
                            ...t,
                            initialPlanId: n,
                            skuId: m,
                            analyticsLocations: a,
                            analyticsObject: r,
                            analyticsLocation: o,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: p,
                            reviewWarningMessage: I,
                            applicationId: S,
                            guildId: null != v ? v : void 0,
                            onComplete: x,
                            forcesTransitionToGuild: E
                        })
                    })
                });
        },
        { onCloseRequest: f.dG4 }
    );
}
let m = async (e, n) => {
    let t = (await (0, o.yD)(e)).filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date()).find((e) => e.sku_id === n);
    r()(null == t, 'User already has an active subscription to this SKU');
};
async function v(e) {
    var n;
    let { applicationId: t, skuId: i, initialPlanId: l, analyticsLocationObject: s, analyticsLocations: o, renderHeader: d } = e,
        v = c.Z.get(i),
        I = u.Z.getForSKU(i);
    r()(null != v, 'Failed to find SKU');
    let S = (0, a.KW)(v.flags);
    r()(S, 'Guild application subscriptions unsupported!'),
        await m(t, i),
        p({
            initialPlanId: null != l ? l : null === (n = I[0]) || void 0 === n ? void 0 : n.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: s,
            analyticsSubscriptionType: f.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: i,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: t
        });
}
