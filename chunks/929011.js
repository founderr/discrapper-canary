t.d(e, {
    H: function () {
        return c;
    },
    r: function () {
        return d;
    }
}),
    t(789020);
var l = t(200651),
    i = t(481060),
    r = t(724870),
    s = t(87484),
    a = t(171246),
    o = t(689011),
    u = t(981631);
async function c(n) {
    let { subscriptionPlanId: e, sku: s, subscriptionGroupPlanIds: c, activeSubscription: d, subscribeForGuild: f, analyticsLocations: p, analyticsLocation: v } = n,
        { promise: m, resolve: h } = Promise.withResolvers();
    if ((0, a.KK)(s.flags)) {
        let { promise: n, resolve: e } = Promise.withResolvers();
        (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await t.e('43889').then(t.bind(t, 279875));
            return (t) =>
                (0, l.jsx)(n, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    sku: s,
                    onSelect: e,
                    currentGuildId: f
                });
        }),
            (f = await n);
    }
    return (
        (0, r.h)({
            initialPlanId: e,
            skuId: s.id,
            activeSubscription: null != d ? d : null,
            applicationId: s.applicationId,
            planGroup: c,
            guildId: f,
            renderHeader: (n, e, t) =>
                (0, l.jsx)(o.t, {
                    step: t,
                    onClose: () => e(!1)
                }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: p,
            analyticsLocation: v,
            onComplete: h,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        m
    );
}
function d(n) {
    let { appId: e, skuId: t, analyticsLocations: l } = n;
    (0, s.Z)({
        applicationId: e,
        skuId: t,
        analyticsLocations: l
    });
}
