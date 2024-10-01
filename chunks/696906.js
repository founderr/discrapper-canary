var r = n(390547);
var i = n(789020);
var a = n(735250),
    o = n(470079),
    s = n(512722),
    l = n.n(s),
    u = n(442837),
    c = n(570140),
    d = n(821849),
    _ = n(906732),
    E = n(887706),
    f = n(728345),
    h = n(724870),
    p = n(594174),
    m = n(509545),
    I = n(55563),
    T = n(551428),
    g = n(270144),
    S = n(171246),
    A = n(689011),
    v = n(714441),
    N = n(981631),
    O = n(689938);
let R = (e) => {
    var t, n, r;
    let i,
        { guildId: s, analyticsLocation: R, showBenefitsFirst: C, skuId: y, onComplete: L, forcesTransitionToGuild: b } = e,
        D = (0, u.e7)([I.Z], () => (null != y ? I.Z.get(y) : void 0), [y]),
        M = (0, u.e7)([T.Z], () => (null != y ? T.Z.getForSKU(y) : void 0), [y]),
        P = null === (t = (0, u.Wu)([m.Z], () => (null != y ? m.Z.getForSKU(y) : []), [y])[0]) || void 0 === t ? void 0 : t.id,
        U = (0, u.e7)([I.Z], () => (null != y ? I.Z.getParentSKU(y) : void 0), [y]),
        w = null == U ? void 0 : U.bundledSkuIds,
        x = (0, u.Wu)(
            [m.Z],
            () => {
                var e;
                return null !== (e = null == w ? void 0 : w.flatMap(m.Z.getForSKU)) && void 0 !== e ? e : [];
            },
            [w]
        ),
        G = o.useMemo(() => x.map((e) => e.id), [x]),
        k = null == D ? void 0 : D.applicationId,
        B = (0, g.CR)(k, y),
        F = B.some((e) => e.id === s) ? s : null === (n = B[0]) || void 0 === n ? void 0 : n.id,
        Z = (null == M ? void 0 : M.published) === !0 && (null == D ? void 0 : D.isAvailable()) === !0,
        { data: V } = (0, f.IX)(k),
        { analyticsLocations: H } = (0, _.ZP)(),
        { activeSubscription: Y, activeEntitlement: j } = (0, g.C9)(U, F),
        W = (0, E.Z)(),
        K = null != D && (0, S.KW)(D.flags),
        z = (null == j ? void 0 : j.skuId) === y,
        q = null != j && j.userId === (null === (r = p.default.getCurrentUser()) || void 0 === r ? void 0 : r.id),
        Q = null == j || x.length > 1,
        X = B.length > 0,
        $ = K && q && z,
        J = null != D && null != V && Q && (X || K) && !$;
    return (
        X ? $ && (i = O.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_TIER) : (i = O.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE),
        o.useEffect(() => {
            Z &&
                null != y &&
                W &&
                !(m.Z.isFetchingForSKU(y) || m.Z.isLoadedForSKU(y)) &&
                c.Z.wait(() => {
                    (0, d.GZ)(y);
                });
        }, [Z, y, W]),
        {
            openModal: o.useCallback(() => {
                l()(null != V, 'No application'), l()(null != y, 'No SKU ID'), l()(Z, 'Cannot purchase this unpublished plan');
                let e = () => {
                    (0, h.h)({
                        activeSubscription: null != Y ? Y : null,
                        analyticsSubscriptionType: N.NYc.APPLICATION,
                        analyticsLocations: H,
                        analyticsLocation: R,
                        renderHeader: (e, t, n) =>
                            (0, a.jsx)(A.t, {
                                step: n,
                                onClose: () => t(!1)
                            }),
                        initialPlanId: P,
                        skuId: y,
                        guildId: F,
                        eligibleApplicationSubscriptionGuilds: B,
                        planGroup: G,
                        applicationId: V.id,
                        showBenefitsFirst: C,
                        onComplete: L,
                        forcesTransitionToGuild: b
                    });
                };
                !X && K
                    ? (0, v.i)({
                          applicationName: V.name,
                          onConfirm: e,
                          onCancel: () => {}
                      })
                    : e();
            }, [y, P, G, Z, V, F, X, K, H, R, Y, C, B, L, b]),
            canOpenModal: J,
            cannotOpenReason: i
        }
    );
};
t.Z = R;
