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
    f = t(728345),
    p = t(724870),
    m = t(594174),
    v = t(509545),
    I = t(55563),
    S = t(551428),
    h = t(270144),
    x = t(171246),
    g = t(689011),
    N = t(714441),
    Z = t(981631),
    E = t(689938);
e.Z = (n) => {
    var e, t, r, T;
    let C,
        { guildId: _, analyticsLocation: A, showBenefitsFirst: b, skuId: O, onComplete: R, forcesTransitionToGuild: j } = n,
        P = (0, o.e7)([I.Z], () => (null != O ? I.Z.get(O) : void 0), [O]),
        L = (0, o.e7)([S.Z], () => (null != O ? S.Z.getForSKU(O) : void 0), [O]),
        k = null === (e = (0, o.Wu)([v.Z], () => (null != O ? v.Z.getForSKU(O) : []), [O])[0]) || void 0 === e ? void 0 : e.id,
        M = (0, o.e7)([I.Z], () => (null != O ? I.Z.getParentSKU(O) : void 0), [O]),
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
        B = null == P ? void 0 : P.applicationId,
        F = (0, h.CR)(B, O),
        w = F.some((n) => n.id === _) ? _ : null === (t = F[0]) || void 0 === t ? void 0 : t.id,
        K = (null == L ? void 0 : L.published) === !0 && (null == P ? void 0 : P.isAvailable()) === !0,
        { data: G } = (0, f.IX)(B),
        { analyticsLocations: Y } = (0, c.ZP)(),
        { activeEntitlement: H } = (0, h.C9)(M, w),
        z = (0, h.Ev)(null !== (T = null == M ? void 0 : M.bundledSkuIds) && void 0 !== T ? T : [], null != _ ? _ : void 0),
        W = (0, d.Z)(),
        V = null != P && (0, x.KW)(P.flags),
        q = (null == H ? void 0 : H.skuId) === O,
        X = null != H && H.userId === (null === (r = m.default.getCurrentUser()) || void 0 === r ? void 0 : r.id),
        J = null == H || y.length > 1,
        Q = F.length > 0,
        $ = V && X && q,
        nn = null != P && null != G && J && (Q || V) && !$;
    return (
        Q ? $ && (C = E.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_TIER) : (C = E.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE),
        i.useEffect(() => {
            K &&
                null != O &&
                W &&
                !(v.Z.isFetchingForSKU(O) || v.Z.isLoadedForSKU(O)) &&
                s.Z.wait(() => {
                    (0, u.GZ)(O);
                });
        }, [K, O, W]),
        {
            openModal: i.useCallback(() => {
                a()(null != G, 'No application'), a()(null != O, 'No SKU ID'), a()(K, 'Cannot purchase this unpublished plan');
                let n = () => {
                    (0, p.h)({
                        activeSubscription: null != z ? z : null,
                        analyticsSubscriptionType: Z.NYc.APPLICATION,
                        analyticsLocations: Y,
                        analyticsLocation: A,
                        renderHeader: (n, e, t) =>
                            (0, l.jsx)(g.t, {
                                step: t,
                                onClose: () => e(!1)
                            }),
                        initialPlanId: k,
                        skuId: O,
                        guildId: w,
                        eligibleApplicationSubscriptionGuilds: F,
                        planGroup: U,
                        applicationId: G.id,
                        showBenefitsFirst: b,
                        onComplete: R,
                        forcesTransitionToGuild: j
                    });
                };
                !Q && V
                    ? (0, N.i)({
                          applicationName: G.name,
                          onConfirm: n,
                          onCancel: () => {}
                      })
                    : n();
            }, [O, k, U, K, G, w, Q, V, Y, A, z, b, F, R, j]),
            canOpenModal: nn,
            cannotOpenReason: C
        }
    );
};
