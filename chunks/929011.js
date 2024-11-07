e.d(t, {
    H: function () {
        return c;
    },
    r: function () {
        return d;
    }
}),
    e(789020);
var l = e(200651),
    i = e(481060),
    r = e(724870),
    u = e(87484),
    a = e(171246),
    o = e(689011),
    s = e(981631);
async function c(n) {
    let { subscriptionPlanId: t, sku: u, subscriptionGroupPlanIds: c, activeSubscription: d, subscribeForGuild: f, analyticsLocations: p, analyticsLocation: v, disableGuildSelector: m = !1 } = n,
        { promise: h, resolve: S } = Promise.withResolvers();
    if ((0, a.KK)(u.flags) && !1 === m) {
        let { promise: n, resolve: t } = Promise.withResolvers();
        (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await e.e('43889').then(e.bind(e, 279875));
            return (e) =>
                (0, l.jsx)(n, {
                    transitionState: e.transitionState,
                    onClose: e.onClose,
                    sku: u,
                    onSelect: t,
                    currentGuildId: f
                });
        }),
            (f = await n);
    }
    return (
        (0, r.h)({
            initialPlanId: t,
            skuId: u.id,
            activeSubscription: null != d ? d : null,
            applicationId: u.applicationId,
            planGroup: c,
            guildId: f,
            renderHeader: (n, t, e) =>
                (0, l.jsx)(o.t, {
                    step: e,
                    onClose: () => t(!1)
                }),
            analyticsSubscriptionType: s.NYc.APPLICATION,
            analyticsLocations: p,
            analyticsLocation: v,
            onComplete: S,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        h
    );
}
function d(n) {
    let { appId: t, skuId: e, analyticsLocations: l } = n;
    (0, u.Z)({
        applicationId: t,
        skuId: e,
        analyticsLocations: l
    });
}
