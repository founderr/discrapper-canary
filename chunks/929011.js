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
    o = t(724870),
    r = t(87484),
    a = t(171246),
    s = t(689011),
    u = t(981631);
async function c(n) {
    let { subscriptionPlanId: e, sku: r, subscriptionGroupPlanIds: c, activeSubscription: d, subscribeForGuild: p, analyticsLocations: v, analyticsLocation: m } = n,
        { promise: f, resolve: I } = Promise.withResolvers();
    if ((0, a.KK)(r.flags)) {
        let { promise: n, resolve: e } = Promise.withResolvers();
        (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await t.e('43889').then(t.bind(t, 279875));
            return (t) =>
                (0, l.jsx)(n, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    sku: r,
                    onSelect: e,
                    currentGuildId: p
                });
        }),
            (p = await n);
    }
    return (
        (0, o.h)({
            initialPlanId: e,
            skuId: r.id,
            activeSubscription: null != d ? d : null,
            applicationId: r.applicationId,
            planGroup: c,
            guildId: p,
            renderHeader: (n, e, t) =>
                (0, l.jsx)(s.t, {
                    step: t,
                    onClose: () => e(!1)
                }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: v,
            analyticsLocation: m,
            onComplete: I,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        f
    );
}
function d(n) {
    let { appId: e, skuId: t, analyticsLocations: l } = n;
    (0, r.Z)({
        applicationId: e,
        skuId: t,
        analyticsLocations: l
    });
}
