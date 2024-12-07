e.d(t, {
    h: function () {
        return p;
    },
    m: function () {
        return v;
    }
}),
    e(789020);
var i = e(200651);
e(192379);
var l = e(512722),
    r = e.n(l),
    u = e(481060),
    a = e(496929),
    o = e(171246),
    s = e(509545),
    c = e(55563),
    d = e(987209),
    f = e(981631);
function p(n) {
    let { initialPlanId: t, activeSubscription: l, analyticsObject: r, analyticsLocation: a, analyticsLocations: o, analyticsSubscriptionType: s, renderHeader: c, planGroup: p, skuId: m, guildId: v, reviewWarningMessage: S, applicationId: h, showBenefitsFirst: I, onComplete: g, forcesTransitionToGuild: E } = n;
    (0, u.openModalLazy)(
        async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(e.bind(e, 563132)),
                u = (await Promise.all([e.e('52249'), e.e('26182'), e.e('32776'), e.e('62347')]).then(e.bind(e, 405083))).default,
                { getApplicationPaymentSteps: f } = await Promise.all([e.e('77298'), e.e('23357'), e.e('12013'), e.e('68956'), e.e('26182'), e.e('95900'), e.e('52808')]).then(e.bind(e, 759386)),
                Z = f({
                    guildId: v,
                    showBenefitsFirst: I
                });
            return (e) =>
                (0, i.jsx)(n, {
                    applicationId: h,
                    activeSubscription: l,
                    stepConfigs: Z,
                    skuIDs: [m],
                    children: (0, i.jsx)(d.KB, {
                        children: (0, i.jsx)(u, {
                            ...e,
                            initialPlanId: t,
                            skuId: m,
                            analyticsLocations: o,
                            analyticsObject: r,
                            analyticsLocation: a,
                            analyticsSubscriptionType: s,
                            renderHeader: c,
                            planGroup: p,
                            reviewWarningMessage: S,
                            applicationId: h,
                            guildId: null != v ? v : void 0,
                            onComplete: g,
                            forcesTransitionToGuild: E
                        })
                    })
                });
        },
        { onCloseRequest: f.dG4 }
    );
}
let m = async (n, t) => {
    let e = (await (0, a.yD)(n)).filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date()).find((n) => n.sku_id === t);
    r()(null == e, 'User already has an active subscription to this SKU');
};
async function v(n) {
    var t;
    let { applicationId: e, skuId: i, initialPlanId: l, analyticsLocationObject: u, analyticsLocations: a, renderHeader: d } = n,
        v = c.Z.get(i),
        S = s.Z.getForSKU(i);
    r()(null != v, 'Failed to find SKU');
    let h = (0, o.KW)(v.flags);
    r()(h, 'Guild application subscriptions unsupported!'),
        await m(e, i),
        p({
            initialPlanId: null != l ? l : null === (t = S[0]) || void 0 === t ? void 0 : t.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: u,
            analyticsSubscriptionType: f.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: i,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e
        });
}
