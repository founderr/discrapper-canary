t(789020);
var i = t(735250),
    l = t(470079),
    r = t(512722),
    s = t.n(r),
    o = t(442837),
    a = t(570140),
    u = t(821849),
    c = t(906732),
    d = t(887706),
    f = t(728345),
    p = t(724870),
    m = t(594174),
    v = t(509545),
    I = t(55563),
    S = t(551428),
    g = t(630388),
    h = t(270144),
    x = t(171246),
    E = t(689011),
    _ = t(714441),
    N = t(981631),
    T = t(689938);
n.Z = (e) => {
    var n;
    let t,
        { guildId: r, groupListingId: Z, analyticsLocation: C, showBenefitsFirst: A, skuId: L, onComplete: b, forcesTransitionToGuild: O } = e,
        R = (0, o.e7)([I.Z], () => (null != L ? I.Z.get(L) : void 0), [L]),
        j = (0, o.e7)([S.Z], () => (null != L ? S.Z.getForSKU(L) : void 0), [L]),
        P = (0, o.Wu)([v.Z], () => (null != L ? v.Z.getForSKU(L) : []), [L]),
        M = null != P ? P[0] : void 0,
        D = null == R ? void 0 : R.applicationId,
        k = (null == j ? void 0 : j.published) === !0 && null != R && (0, g.yE)(R.flags, N.l4R.AVAILABLE),
        F = null == M ? void 0 : M.skuId,
        { data: y } = (0, f.I)(D),
        U = (0, h._k)(Z, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        { analyticsLocations: B } = (0, c.ZP)(),
        { activeSubscription: G, activeEntitlement: w } = (0, h.F5)(D, r),
        K = (0, h.CR)(D, r),
        H = (0, d.Z)(),
        Y = null != R && (0, x.KW)(R.flags),
        z = null != w && w.userId === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
        W = null == w || z,
        V = null == w || U.length > 1,
        q = null != r || K.length > 0,
        Q = Y && z,
        X = null != M && null != y && W && V && (q || Y) && !Q;
    return (
        W ? (q ? Q && null != M && (t = T.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({ tierName: M.name })) : (t = T.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE)) : (t = T.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION),
        l.useEffect(() => {
            k &&
                null != F &&
                H &&
                !(v.Z.isFetchingForSKU(F) || v.Z.isLoadedForSKU(F)) &&
                a.Z.wait(() => {
                    (0, u.GZ)(F);
                });
        }, [k, F, H]),
        {
            openModal: l.useCallback(() => {
                s()(null != y, 'No application'), s()(null != M, 'No subscription plan'), s()(k, 'Cannot purchase this unpublished plan');
                let e = () => {
                    (0, p.h)({
                        activeSubscription: G,
                        analyticsSubscriptionType: N.NYc.APPLICATION,
                        analyticsLocations: B,
                        analyticsLocation: C,
                        renderHeader: (e, n, t) =>
                            (0, i.jsx)(E.t, {
                                step: t,
                                onClose: () => n(!1)
                            }),
                        initialPlanId: M.id,
                        skuId: M.skuId,
                        guildId: r,
                        eligibleApplicationSubscriptionGuilds: K,
                        planGroup: U,
                        applicationId: y.id,
                        showBenefitsFirst: A,
                        onComplete: b,
                        forcesTransitionToGuild: O
                    });
                };
                !q && Y
                    ? (0, _.i)({
                          applicationName: y.name,
                          onConfirm: e,
                          onCancel: () => {}
                      })
                    : e();
            }, [k, M, U, y, r, q, Y, B, C, G, A, K, b, O]),
            canOpenModal: X,
            cannotOpenReason: t
        }
    );
};
