t.d(e, {
    FC: function () {
        return g;
    },
    HO: function () {
        return l;
    }
}),
    t(390547),
    t(789020);
var l,
    i,
    r = t(192379),
    s = t(512722),
    a = t.n(s),
    o = t(442837),
    u = t(570140),
    c = t(821849),
    d = t(906732),
    f = t(887706),
    p = t(728345),
    v = t(509545),
    m = t(55563),
    h = t(551428),
    I = t(270144),
    S = t(488915),
    x = t(171246),
    E = t(929011),
    T = t(689938);
function g(n, e) {
    let t;
    switch (n) {
        case 3:
            t = T.Z.Messages.STOREFRONT_UPCOMING_PLAN_FOR.format({ rate: e });
            break;
        case 2:
            t = T.Z.Messages.STOREFRONT_CURRENT_PLAN_FOR.format({ rate: e });
            break;
        case 4:
            t = T.Z.Messages.STOREFRONT_ALREADY_SUBSCRIBED;
            break;
        case 1:
            t = T.Z.Messages.STOREFRONT_ITEM_UNAVAILABLE;
    }
    return t;
}
((i = l || (l = {}))[(i.Loading = 0)] = 'Loading'), (i[(i.ItemUnavailable = 1)] = 'ItemUnavailable'), (i[(i.CurrentPlan = 2)] = 'CurrentPlan'), (i[(i.UpcomingPlan = 3)] = 'UpcomingPlan'), (i[(i.OtherSubscription = 4)] = 'OtherSubscription');
e.ZP = (n) => {
    var e, t, l;
    let i,
        { subscribeForGuild: s, analyticsLocation: T, skuId: g, onComplete: R } = n,
        N = (0, o.e7)([m.Z], () => (null != g ? m.Z.get(g) : void 0), [g]),
        O = (0, o.e7)([h.Z], () => (null != g ? h.Z.getForSKU(g) : void 0), [g]),
        Z = null === (e = (0, o.Wu)([v.Z], () => (null != g ? v.Z.getForSKU(g) : []), [g])[0]) || void 0 === e ? void 0 : e.id,
        _ = (0, o.e7)([m.Z], () => (null != g ? m.Z.getParentSKU(g) : void 0), [g]),
        C = null == _ ? void 0 : _.bundledSkuIds,
        j = (0, o.Wu)(
            [v.Z],
            () => {
                var n;
                return null !== (n = null == C ? void 0 : C.flatMap(v.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [C]
        ),
        b = r.useMemo(() => j.map((n) => n.id), [j]),
        A = (0, o.e7)(
            [S.Z],
            () =>
                null != s &&
                S.Z.getEntitlementsForGuild(s, !0).some((n) => {
                    var e;
                    return null !== (e = null == C ? void 0 : C.includes(n.skuId)) && void 0 !== e && e;
                }),
            [C, s]
        ),
        L = null == N ? void 0 : N.applicationId,
        P = (null == O ? void 0 : O.published) === !0 && (null == N ? void 0 : N.isAvailable()) === !0,
        { app: M } = (0, p.Rt)(L),
        { analyticsLocations: k } = (0, d.ZP)(),
        F = (0, I.Ev)(_, null != s ? s : void 0),
        D = (0, I.cr)(_, null != s ? s : void 0),
        { entitlementsLoaded: y } = (0, I.LM)({ guildId: s });
    null == s && (y = !0);
    let U = (0, f.Z)(),
        B = (0, x.KK)(null !== (l = null == N ? void 0 : N.flags) && void 0 !== l ? l : 0);
    return (
        y && null != M && null != g ? (P ? ((null == F ? void 0 : F.subscriptionPlan.skuId) === g && null == D ? (i = 2) : (null == D ? void 0 : null === (t = D.subscriptionPlan) || void 0 === t ? void 0 : t.skuId) === g ? (i = 3) : B && A && null == F && (i = 4)) : (i = 1)) : (i = 0),
        r.useEffect(() => {
            P &&
                null != g &&
                U &&
                !(v.Z.isFetchingForSKU(g) || v.Z.isLoadedForSKU(g)) &&
                u.Z.wait(() => {
                    (0, c.GZ)(g);
                });
        }, [P, g, U]),
        {
            openModal: r.useCallback(() => {
                a()(null != M, 'No application'),
                    a()(null != g, 'No SKU ID'),
                    a()(P, 'Cannot purchase this unpublished plan'),
                    (0, E.H)({
                        subscriptionPlanId: Z,
                        sku: N,
                        subscriptionGroupPlanIds: b,
                        activeSubscription: null == F ? void 0 : F.subscription,
                        subscribeForGuild: s,
                        analyticsLocations: k,
                        analyticsLocation: T
                    }).then(() => {
                        null == R || R();
                    });
            }, [M, g, P, Z, N, b, s, k, T, null == F ? void 0 : F.subscription, R]),
            cannotOpenReason: i
        }
    );
};
