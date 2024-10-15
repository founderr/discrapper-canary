t(390547);
var l = t(735250),
    i = t(470079),
    a = t(512722),
    s = t.n(a),
    r = t(442837),
    o = t(570140),
    u = t(821849),
    c = t(906732),
    d = t(887706),
    p = t(728345),
    m = t(724870),
    v = t(509545),
    f = t(55563),
    h = t(551428),
    I = t(270144),
    x = t(689011),
    S = t(981631);
n.Z = (e) => {
    var n;
    let { guildId: t, analyticsLocation: a, showBenefitsFirst: T, skuId: N, onComplete: E, forcesTransitionToGuild: _ } = e,
        g = (0, r.e7)([f.Z], () => (null != N ? f.Z.get(N) : void 0), [N]),
        Z = (0, r.e7)([h.Z], () => (null != N ? h.Z.getForSKU(N) : void 0), [N]),
        R = null === (n = (0, r.Wu)([v.Z], () => (null != N ? v.Z.getForSKU(N) : []), [N])[0]) || void 0 === n ? void 0 : n.id,
        O = (0, r.e7)([f.Z], () => (null != N ? f.Z.getParentSKU(N) : void 0), [N]),
        j = null == O ? void 0 : O.bundledSkuIds,
        C = (0, r.Wu)(
            [v.Z],
            () => {
                var e;
                return null !== (e = null == j ? void 0 : j.flatMap(v.Z.getForSKU)) && void 0 !== e ? e : [];
            },
            [j]
        ),
        A = i.useMemo(() => C.map((e) => e.id), [C]),
        b = null == g ? void 0 : g.applicationId,
        L = (null == Z ? void 0 : Z.published) === !0 && (null == g ? void 0 : g.isAvailable()) === !0,
        { data: P } = (0, p.IX)(b),
        { analyticsLocations: k } = (0, c.ZP)(),
        { subscription: M, subscriptionPlan: D } = (0, I.v9)(O, null != t ? t : void 0),
        F = (0, d.Z)(),
        y = null != P && null != N && L && (null == D ? void 0 : D.skuId) !== N;
    return (
        i.useEffect(() => {
            L &&
                null != N &&
                F &&
                !(v.Z.isFetchingForSKU(N) || v.Z.isLoadedForSKU(N)) &&
                o.Z.wait(() => {
                    (0, u.GZ)(N);
                });
        }, [L, N, F]),
        {
            openModal: i.useCallback(() => {
                s()(null != P, 'No application'), s()(null != N, 'No SKU ID'), s()(L, 'Cannot purchase this unpublished plan');
                (0, m.h)({
                    activeSubscription: null != M ? M : null,
                    analyticsSubscriptionType: S.NYc.APPLICATION,
                    analyticsLocations: k,
                    analyticsLocation: a,
                    renderHeader: (e, n, t) =>
                        (0, l.jsx)(x.t, {
                            step: t,
                            onClose: () => n(!1)
                        }),
                    initialPlanId: R,
                    skuId: N,
                    guildId: t,
                    planGroup: A,
                    applicationId: P.id,
                    showBenefitsFirst: T,
                    onComplete: E,
                    forcesTransitionToGuild: _
                });
            }, [N, R, A, L, P, t, k, a, M, T, E, _]),
            canOpenModal: y
        }
    );
};
