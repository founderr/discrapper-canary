t.d(n, {
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
    o = t(87484),
    a = t(171246),
    s = t(689011),
    u = t(981631);
async function c(e) {
    let { subscriptionPlanId: n, sku: o, subscriptionGroupPlanIds: c, activeSubscription: d, subscribeForGuild: p, analyticsLocations: m, analyticsLocation: v } = e,
        { promise: f, resolve: I } = Promise.withResolvers();
    if ((0, a.KK)(o.flags)) {
        let { promise: e, resolve: n } = Promise.withResolvers();
        (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: e } = await t.e('43889').then(t.bind(t, 279875));
            return (t) =>
                (0, l.jsx)(e, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    sku: o,
                    onSelect: n,
                    currentGuildId: p
                });
        }),
            (p = await e);
    }
    return (
        (0, r.h)({
            initialPlanId: n,
            skuId: o.id,
            activeSubscription: null != d ? d : null,
            applicationId: o.applicationId,
            planGroup: c,
            guildId: p,
            renderHeader: (e, n, t) =>
                (0, l.jsx)(s.t, {
                    step: t,
                    onClose: () => n(!1)
                }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: m,
            analyticsLocation: v,
            onComplete: I,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        f
    );
}
function d(e) {
    let { appId: n, skuId: t, analyticsLocations: l } = e;
    (0, o.Z)({
        applicationId: n,
        skuId: t,
        analyticsLocations: l
    });
}
