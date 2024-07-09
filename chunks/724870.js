t.d(n, {
    h: function () {
        return p;
    },
    m: function () {
        return _;
    }
}), t(789020);
var i = t(735250);
t(470079);
var a = t(512722), o = t.n(a), r = t(481060), l = t(496929), s = t(171246), c = t(509545), d = t(55563), u = t(987209), f = t(981631);
function p(e) {
    let {
        initialPlanId: n,
        activeSubscription: a,
        analyticsObject: o,
        analyticsLocation: l,
        analyticsLocations: s,
        analyticsSubscriptionType: c,
        renderHeader: d,
        planGroup: p,
        skuId: C,
        guildId: _,
        reviewWarningMessage: b,
        applicationId: I,
        showBenefitsFirst: h,
        eligibleApplicationSubscriptionGuilds: m,
        onComplete: T,
        forcesTransitionToGuild: L
    } = e;
    (0, r.openModalLazy)(async () => {
        let {PaymentContextProvider: e} = await Promise.resolve().then(t.bind(t, 598)), r = (await Promise.all([
                t.e('15972'),
                t.e('6416'),
                t.e('32776'),
                t.e('16083')
            ]).then(t.bind(t, 405083))).default, {getApplicationPaymentSteps: f} = await Promise.all([
                t.e('96427'),
                t.e('77298'),
                t.e('23357'),
                t.e('12013'),
                t.e('29609'),
                t.e('95900'),
                t.e('95854'),
                t.e('75018')
            ]).then(t.bind(t, 759386)), S = f({
                guildId: _,
                showBenefitsFirst: h,
                eligibleApplicationSubscriptionGuilds: m
            });
        return t => (0, i.jsx)(e, {
            applicationId: I,
            activeSubscription: a,
            stepConfigs: S,
            skuIDs: [C],
            children: (0, i.jsx)(u.KB, {
                children: (0, i.jsx)(r, {
                    ...t,
                    initialPlanId: n,
                    skuId: C,
                    analyticsLocations: s,
                    analyticsObject: o,
                    analyticsLocation: l,
                    analyticsSubscriptionType: c,
                    renderHeader: d,
                    planGroup: p,
                    reviewWarningMessage: b,
                    applicationId: I,
                    guildId: null != _ ? _ : void 0,
                    onComplete: T,
                    forcesTransitionToGuild: L
                })
            })
        });
    }, { onCloseRequest: f.dG4 });
}
let C = async (e, n) => {
    let t = (await (0, l.yD)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date()).find(e => e.sku_id === n);
    o()(null == t, 'User already has an active subscription to this SKU');
};
async function _(e) {
    var n;
    let {
            applicationId: t,
            skuId: i,
            initialPlanId: a,
            analyticsLocationObject: r,
            analyticsLocations: l,
            renderHeader: u
        } = e, _ = d.Z.get(i), b = c.Z.getForSKU(i);
    o()(null != _, 'Failed to find SKU');
    let I = (0, s.KW)(_.flags);
    o()(I, 'Guild application subscriptions unsupported!'), await C(t, i), p({
        initialPlanId: null != a ? a : null === (n = b[0]) || void 0 === n ? void 0 : n.id,
        activeSubscription: null,
        analyticsLocations: l,
        analyticsLocationObject: r,
        analyticsSubscriptionType: f.NYc.APPLICATION,
        renderHeader: u,
        planGroup: [],
        skuId: i,
        guildId: null,
        eligibleApplicationSubscriptionGuilds: [],
        showBenefitsFirst: !1,
        applicationId: t
    });
}
