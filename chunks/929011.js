t.d(e, {
    H: function () {
        return c;
    },
    r: function () {
        return d;
    }
}),
    t(789020);
var l = t(735250),
    i = t(481060),
    r = t(724870),
    a = t(87484),
    o = t(171246),
    s = t(689011),
    u = t(981631);
async function c(n) {
    let { subscriptionPlanId: e, sku: a, subscriptionGroupPlanIds: c, activeSubscription: d, subscribeForGuild: p, analyticsLocations: f, analyticsLocation: m } = n,
        { promise: v, resolve: h } = Promise.withResolvers();
    if ((0, o.KK)(a.flags)) {
        let { promise: n, resolve: e } = Promise.withResolvers();
        (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await t.e('43889').then(t.bind(t, 279875));
            return (t) =>
                (0, l.jsx)(n, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    sku: a,
                    onSelect: e,
                    currentGuildId: p
                });
        }),
            (p = await n);
    }
    return (
        (0, r.h)({
            initialPlanId: e,
            skuId: a.id,
            activeSubscription: null != d ? d : null,
            applicationId: a.applicationId,
            planGroup: c,
            guildId: p,
            renderHeader: (n, e, t) =>
                (0, l.jsx)(s.t, {
                    step: t,
                    onClose: () => e(!1)
                }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: f,
            analyticsLocation: m,
            onComplete: h,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        v
    );
}
function d(n) {
    let { appId: e, skuId: t, analyticsLocations: l } = n;
    (0, a.Z)({
        applicationId: e,
        skuId: t,
        analyticsLocations: l
    });
}
