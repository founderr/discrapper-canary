t.d(e, {
    h: function () {
        return p;
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
    f = t(981631);
function p(n) {
    let { initialPlanId: e, activeSubscription: i, analyticsObject: r, analyticsLocation: o, analyticsLocations: s, analyticsSubscriptionType: u, renderHeader: c, planGroup: p, skuId: m, guildId: v, reviewWarningMessage: I, applicationId: S, showBenefitsFirst: h, eligibleApplicationSubscriptionGuilds: x, onComplete: N, forcesTransitionToGuild: g } = n;
    (0, a.openModalLazy)(
        async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(t.bind(t, 598)),
                a = (await Promise.all([t.e('52249'), t.e('72652'), t.e('32776'), t.e('42400')]).then(t.bind(t, 405083))).default,
                { getApplicationPaymentSteps: f } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('54803'), t.e('15685'), t.e('79915'), t.e('30671'), t.e('59329')]).then(t.bind(t, 759386)),
                T = f({
                    guildId: v,
                    showBenefitsFirst: h,
                    eligibleApplicationSubscriptionGuilds: x
                });
            return (t) =>
                (0, l.jsx)(n, {
                    applicationId: S,
                    activeSubscription: i,
                    stepConfigs: T,
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
                            planGroup: p,
                            reviewWarningMessage: I,
                            applicationId: S,
                            guildId: null != v ? v : void 0,
                            onComplete: N,
                            forcesTransitionToGuild: g
                        })
                    })
                });
        },
        { onCloseRequest: f.dG4 }
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
        I = u.Z.getForSKU(l);
    r()(null != v, 'Failed to find SKU');
    let S = (0, s.KW)(v.flags);
    r()(S, 'Guild application subscriptions unsupported!'),
        await m(t, l),
        p({
            initialPlanId: null != i ? i : null === (e = I[0]) || void 0 === e ? void 0 : e.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: a,
            analyticsSubscriptionType: f.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: t
        });
}
