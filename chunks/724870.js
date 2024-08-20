t.d(n, {
    h: function () {
        return p;
    },
    m: function () {
        return I;
    }
}),
    t(789020);
var i = t(735250);
t(470079);
var a = t(512722),
    r = t.n(a),
    o = t(481060),
    l = t(496929),
    s = t(171246),
    c = t(509545),
    d = t(55563),
    u = t(987209),
    _ = t(981631);
function p(e) {
    let { initialPlanId: n, activeSubscription: a, analyticsObject: r, analyticsLocation: l, analyticsLocations: s, analyticsSubscriptionType: c, renderHeader: d, planGroup: p, skuId: m, guildId: I, reviewWarningMessage: f, applicationId: g, showBenefitsFirst: h, eligibleApplicationSubscriptionGuilds: C, onComplete: v, forcesTransitionToGuild: E } = e;
    (0, o.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(t.bind(t, 598)),
                o = (await Promise.all([t.e('52249'), t.e('47006'), t.e('32776'), t.e('66517')]).then(t.bind(t, 405083))).default,
                { getApplicationPaymentSteps: _ } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('54803'), t.e('15685'), t.e('18209'), t.e('30671'), t.e('86751')]).then(t.bind(t, 759386)),
                x = _({
                    guildId: I,
                    showBenefitsFirst: h,
                    eligibleApplicationSubscriptionGuilds: C
                });
            return (t) =>
                (0, i.jsx)(e, {
                    applicationId: g,
                    activeSubscription: a,
                    stepConfigs: x,
                    skuIDs: [m],
                    children: (0, i.jsx)(u.KB, {
                        children: (0, i.jsx)(o, {
                            ...t,
                            initialPlanId: n,
                            skuId: m,
                            analyticsLocations: s,
                            analyticsObject: r,
                            analyticsLocation: l,
                            analyticsSubscriptionType: c,
                            renderHeader: d,
                            planGroup: p,
                            reviewWarningMessage: f,
                            applicationId: g,
                            guildId: null != I ? I : void 0,
                            onComplete: v,
                            forcesTransitionToGuild: E
                        })
                    })
                });
        },
        { onCloseRequest: _.dG4 }
    );
}
let m = async (e, n) => {
    let t = (await (0, l.yD)(e)).filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date()).find((e) => e.sku_id === n);
    r()(null == t, 'User already has an active subscription to this SKU');
};
async function I(e) {
    var n;
    let { applicationId: t, skuId: i, initialPlanId: a, analyticsLocationObject: o, analyticsLocations: l, renderHeader: u } = e,
        I = d.Z.get(i),
        f = c.Z.getForSKU(i);
    r()(null != I, 'Failed to find SKU');
    let g = (0, s.KW)(I.flags);
    r()(g, 'Guild application subscriptions unsupported!'),
        await m(t, i),
        p({
            initialPlanId: null != a ? a : null === (n = f[0]) || void 0 === n ? void 0 : n.id,
            activeSubscription: null,
            analyticsLocations: l,
            analyticsLocationObject: o,
            analyticsSubscriptionType: _.NYc.APPLICATION,
            renderHeader: u,
            planGroup: [],
            skuId: i,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: t
        });
}
