var r = n(789020);
var i = n(735250),
    a = n(470079),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(821849),
    d = n(906732),
    _ = n(887706),
    E = n(728345),
    f = n(724870),
    h = n(594174),
    p = n(509545),
    m = n(55563),
    I = n(551428),
    T = n(630388),
    g = n(270144),
    S = n(171246),
    A = n(689011),
    v = n(714441),
    N = n(981631),
    O = n(689938);
let R = (e) => {
    var t;
    let n,
        { guildId: r, groupListingId: o, analyticsLocation: R, showBenefitsFirst: C, skuId: y, onComplete: b, forcesTransitionToGuild: L } = e,
        D = (0, l.e7)([m.Z], () => (null != y ? m.Z.get(y) : void 0), [y]),
        M = (0, l.e7)([I.Z], () => (null != y ? I.Z.getForSKU(y) : void 0), [y]),
        P = (0, l.Wu)([p.Z], () => (null != y ? p.Z.getForSKU(y) : []), [y]),
        U = null != P ? P[0] : void 0,
        w = null == D ? void 0 : D.applicationId,
        x = (null == M ? void 0 : M.published) === !0 && null != D && (0, T.yE)(D.flags, N.l4R.AVAILABLE),
        G = null == U ? void 0 : U.skuId,
        { data: k } = (0, E.I)(w),
        B = (0, g._k)(o, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        { analyticsLocations: F } = (0, d.ZP)(),
        { activeSubscription: Z, activeEntitlement: V } = (0, g.F5)(w, r, o),
        H = (0, g.CR)(w, r),
        Y = (0, _.Z)(),
        j = null != D && (0, S.KW)(D.flags),
        W = null != V && V.userId === (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
        K = null == V || W,
        z = null == V || B.length > 1,
        q = null != r || H.length > 0,
        Q = j && W,
        X = null != U && null != k && K && z && (q || j) && !Q;
    return (
        K ? (q ? Q && null != U && (n = O.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({ tierName: U.name })) : (n = O.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE)) : (n = O.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION),
        a.useEffect(() => {
            x &&
                null != G &&
                Y &&
                !(p.Z.isFetchingForSKU(G) || p.Z.isLoadedForSKU(G)) &&
                u.Z.wait(() => {
                    (0, c.GZ)(G);
                });
        }, [x, G, Y]),
        {
            openModal: a.useCallback(() => {
                s()(null != k, 'No application'), s()(null != U, 'No subscription plan'), s()(x, 'Cannot purchase this unpublished plan');
                let e = () => {
                    (0, f.h)({
                        activeSubscription: Z,
                        analyticsSubscriptionType: N.NYc.APPLICATION,
                        analyticsLocations: F,
                        analyticsLocation: R,
                        renderHeader: (e, t, n) =>
                            (0, i.jsx)(A.t, {
                                step: n,
                                onClose: () => t(!1)
                            }),
                        initialPlanId: U.id,
                        skuId: U.skuId,
                        guildId: r,
                        eligibleApplicationSubscriptionGuilds: H,
                        planGroup: B,
                        applicationId: k.id,
                        showBenefitsFirst: C,
                        onComplete: b,
                        forcesTransitionToGuild: L
                    });
                };
                !q && j
                    ? (0, v.i)({
                          applicationName: k.name,
                          onConfirm: e,
                          onCancel: () => {}
                      })
                    : e();
            }, [x, U, B, k, r, q, j, F, R, Z, C, H, b, L]),
            canOpenModal: X,
            cannotOpenReason: n
        }
    );
};
t.Z = R;
