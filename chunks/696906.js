t(390547), t(789020);
var l = t(735250),
    i = t(470079),
    r = t(512722),
    a = t.n(r),
    o = t(442837),
    s = t(570140),
    u = t(821849),
    c = t(906732),
    d = t(887706),
    p = t(728345),
    f = t(724870),
    m = t(594174),
    v = t(509545),
    I = t(55563),
    S = t(551428),
    h = t(270144),
    x = t(171246),
    N = t(689011),
    T = t(714441),
    g = t(981631),
    E = t(689938);
e.Z = (n) => {
    var e, t, r, Z;
    let _,
        { guildId: C, analyticsLocation: O, showBenefitsFirst: R, skuId: A, onComplete: b, forcesTransitionToGuild: j } = n,
        P = (0, o.e7)([I.Z], () => (null != A ? I.Z.get(A) : void 0), [A]),
        L = (0, o.e7)([S.Z], () => (null != A ? S.Z.getForSKU(A) : void 0), [A]),
        k = null === (e = (0, o.Wu)([v.Z], () => (null != A ? v.Z.getForSKU(A) : []), [A])[0]) || void 0 === e ? void 0 : e.id,
        M = (0, o.e7)([I.Z], () => (null != A ? I.Z.getParentSKU(A) : void 0), [A]),
        D = null == M ? void 0 : M.bundledSkuIds,
        y = (0, o.Wu)(
            [v.Z],
            () => {
                var n;
                return null !== (n = null == D ? void 0 : D.flatMap(v.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [D]
        ),
        U = i.useMemo(() => y.map((n) => n.id), [y]),
        F = null == P ? void 0 : P.applicationId,
        B = (0, h.CR)(F, A),
        w = B.some((n) => n.id === C) ? C : null === (t = B[0]) || void 0 === t ? void 0 : t.id,
        K = (null == L ? void 0 : L.published) === !0 && (null == P ? void 0 : P.isAvailable()) === !0,
        { data: G } = (0, p.IX)(F),
        { analyticsLocations: Y } = (0, c.ZP)(),
        { activeEntitlement: H } = (0, h.C9)(M, w),
        z = (0, h.Ev)(null !== (Z = null == M ? void 0 : M.bundledSkuIds) && void 0 !== Z ? Z : [], null != C ? C : void 0),
        W = (0, d.Z)(),
        V = null != P && (0, x.KW)(P.flags),
        q = (null == H ? void 0 : H.skuId) === A,
        X = null != H && H.userId === (null === (r = m.default.getCurrentUser()) || void 0 === r ? void 0 : r.id),
        J = null == H || y.length > 1,
        Q = B.length > 0,
        $ = V && X && q,
        nn = null != P && null != G && J && (Q || V) && !$;
    return (
        Q ? $ && (_ = E.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_TIER) : (_ = E.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE),
        i.useEffect(() => {
            K &&
                null != A &&
                W &&
                !(v.Z.isFetchingForSKU(A) || v.Z.isLoadedForSKU(A)) &&
                s.Z.wait(() => {
                    (0, u.GZ)(A);
                });
        }, [K, A, W]),
        {
            openModal: i.useCallback(() => {
                a()(null != G, 'No application'), a()(null != A, 'No SKU ID'), a()(K, 'Cannot purchase this unpublished plan');
                let n = () => {
                    (0, f.h)({
                        activeSubscription: null != z ? z : null,
                        analyticsSubscriptionType: g.NYc.APPLICATION,
                        analyticsLocations: Y,
                        analyticsLocation: O,
                        renderHeader: (n, e, t) =>
                            (0, l.jsx)(N.t, {
                                step: t,
                                onClose: () => e(!1)
                            }),
                        initialPlanId: k,
                        skuId: A,
                        guildId: w,
                        eligibleApplicationSubscriptionGuilds: B,
                        planGroup: U,
                        applicationId: G.id,
                        showBenefitsFirst: R,
                        onComplete: b,
                        forcesTransitionToGuild: j
                    });
                };
                !Q && V
                    ? (0, T.i)({
                          applicationName: G.name,
                          onConfirm: n,
                          onCancel: () => {}
                      })
                    : n();
            }, [A, k, U, K, G, w, Q, V, Y, O, z, R, B, b, j]),
            canOpenModal: nn,
            cannotOpenReason: _
        }
    );
};
