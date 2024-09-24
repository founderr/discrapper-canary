t(789020);
var l = t(735250),
    i = t(470079),
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
    h = t(630388),
    g = t(270144),
    x = t(171246),
    _ = t(689011),
    N = t(714441),
    E = t(981631),
    T = t(689938);
n.Z = (e) => {
    var n;
    let t,
        { guildId: r, groupListingId: Z, analyticsLocation: C, showBenefitsFirst: A, skuId: L, onComplete: O, forcesTransitionToGuild: R } = e,
        b = (0, o.e7)([I.Z], () => (null != L ? I.Z.get(L) : void 0), [L]),
        j = (0, o.e7)([S.Z], () => (null != L ? S.Z.getForSKU(L) : void 0), [L]),
        P = (0, o.Wu)([v.Z], () => (null != L ? v.Z.getForSKU(L) : []), [L]),
        M = null != P ? P[0] : void 0,
        D = null == b ? void 0 : b.applicationId,
        k = (null == j ? void 0 : j.published) === !0 && null != b && (0, h.yE)(b.flags, E.l4R.AVAILABLE),
        y = null == M ? void 0 : M.skuId,
        { data: B } = (0, f.I)(D),
        U = (0, g._k)(Z, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        { analyticsLocations: F } = (0, c.ZP)(),
        { activeSubscription: G, activeEntitlement: w } = (0, g.F5)(D, r, Z),
        K = (0, g.CR)(D, r),
        Y = (0, d.Z)(),
        z = null != b && (0, x.KW)(b.flags),
        H = null != w && w.userId === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
        W = null == w || H,
        V = null == w || U.length > 1,
        q = null != r || K.length > 0,
        Q = z && H,
        X = null != M && null != B && W && V && (q || z) && !Q;
    return (
        W ? (q ? Q && null != M && (t = T.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({ tierName: M.name })) : (t = T.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE)) : (t = T.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION),
        i.useEffect(() => {
            k &&
                null != y &&
                Y &&
                !(v.Z.isFetchingForSKU(y) || v.Z.isLoadedForSKU(y)) &&
                a.Z.wait(() => {
                    (0, u.GZ)(y);
                });
        }, [k, y, Y]),
        {
            openModal: i.useCallback(() => {
                s()(null != B, 'No application'), s()(null != M, 'No subscription plan'), s()(k, 'Cannot purchase this unpublished plan');
                let e = () => {
                    (0, p.h)({
                        activeSubscription: G,
                        analyticsSubscriptionType: E.NYc.APPLICATION,
                        analyticsLocations: F,
                        analyticsLocation: C,
                        renderHeader: (e, n, t) =>
                            (0, l.jsx)(_.t, {
                                step: t,
                                onClose: () => n(!1)
                            }),
                        initialPlanId: M.id,
                        skuId: M.skuId,
                        guildId: r,
                        eligibleApplicationSubscriptionGuilds: K,
                        planGroup: U,
                        applicationId: B.id,
                        showBenefitsFirst: A,
                        onComplete: O,
                        forcesTransitionToGuild: R
                    });
                };
                !q && z
                    ? (0, N.i)({
                          applicationName: B.name,
                          onConfirm: e,
                          onCancel: () => {}
                      })
                    : e();
            }, [k, M, U, B, r, q, z, F, C, G, A, K, O, R]),
            canOpenModal: X,
            cannotOpenReason: t
        }
    );
};
