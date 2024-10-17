t.d(e, {
    h: function () {
        return v;
    },
    m: function () {
        return f;
    }
}),
    t(789020);
var l = t(735250);
t(470079);
var i = t(512722),
    o = t.n(i),
    r = t(481060),
    a = t(496929),
    s = t(171246),
    u = t(509545),
    c = t(55563),
    d = t(987209),
    p = t(981631);
function v(n) {
    let { initialPlanId: e, activeSubscription: i, analyticsObject: o, analyticsLocation: a, analyticsLocations: s, analyticsSubscriptionType: u, renderHeader: c, planGroup: v, skuId: m, guildId: f, reviewWarningMessage: I, applicationId: h, showBenefitsFirst: S, onComplete: x, forcesTransitionToGuild: g } = n;
    (0, r.openModalLazy)(
        async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(t.bind(t, 598)),
                r = (await Promise.all([t.e('52249'), t.e('26182'), t.e('32776'), t.e('8573')]).then(t.bind(t, 405083))).default,
                { getApplicationPaymentSteps: p } = await Promise.all([t.e('96427'), t.e('77298'), t.e('23357'), t.e('12013'), t.e('99783'), t.e('26182'), t.e('95900'), t.e('31269')]).then(t.bind(t, 759386)),
                T = p({
                    guildId: f,
                    showBenefitsFirst: S
                });
            return (t) =>
                (0, l.jsx)(n, {
                    applicationId: h,
                    activeSubscription: i,
                    stepConfigs: T,
                    skuIDs: [m],
                    children: (0, l.jsx)(d.KB, {
                        children: (0, l.jsx)(r, {
                            ...t,
                            initialPlanId: e,
                            skuId: m,
                            analyticsLocations: s,
                            analyticsObject: o,
                            analyticsLocation: a,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: v,
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
let m = async (n, e) => {
    let t = (await (0, a.yD)(n)).filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date()).find((n) => n.sku_id === e);
    o()(null == t, 'User already has an active subscription to this SKU');
};
async function f(n) {
    var e;
    let { applicationId: t, skuId: l, initialPlanId: i, analyticsLocationObject: r, analyticsLocations: a, renderHeader: d } = n,
        f = c.Z.get(l),
        I = u.Z.getForSKU(l);
    o()(null != f, 'Failed to find SKU');
    let h = (0, s.KW)(f.flags);
    o()(h, 'Guild application subscriptions unsupported!'),
        await m(t, l),
        v({
            initialPlanId: null != i ? i : null === (e = I[0]) || void 0 === e ? void 0 : e.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: r,
            analyticsSubscriptionType: p.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t
        });
}
