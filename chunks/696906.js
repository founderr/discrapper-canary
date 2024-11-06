e.d(t, {
    FC: function () {
        return x;
    },
    HO: function () {
        return l;
    }
}),
    e(390547),
    e(789020);
var l,
    i,
    r = e(192379),
    u = e(512722),
    a = e.n(u),
    o = e(442837),
    s = e(570140),
    c = e(821849),
    d = e(906732),
    f = e(887706),
    p = e(728345),
    v = e(509545),
    m = e(55563),
    h = e(551428),
    S = e(270144),
    g = e(488915),
    I = e(171246),
    b = e(929011),
    Z = e(388032);
function x(n, t) {
    let e;
    switch (n) {
        case 3:
            e = Z.intl.formatToPlainString(Z.t.k1ew5O, { rate: t });
            break;
        case 2:
            e = Z.intl.formatToPlainString(Z.t['Hs3Y+P'], { rate: t });
            break;
        case 4:
            e = Z.intl.string(Z.t.HDFZLS);
            break;
        case 1:
            e = Z.intl.string(Z.t.DLAKbm);
    }
    return e;
}
((i = l || (l = {}))[(i.Loading = 0)] = 'Loading'), (i[(i.ItemUnavailable = 1)] = 'ItemUnavailable'), (i[(i.CurrentPlan = 2)] = 'CurrentPlan'), (i[(i.UpcomingPlan = 3)] = 'UpcomingPlan'), (i[(i.OtherSubscription = 4)] = 'OtherSubscription');
t.ZP = (n) => {
    var t, e, l;
    let i,
        { subscribeForGuild: u, analyticsLocation: Z, skuId: x, onComplete: E } = n,
        T = (0, o.e7)([m.Z], () => (null != x ? m.Z.get(x) : void 0), [x]),
        N = (0, o.e7)([h.Z], () => (null != x ? h.Z.getForSKU(x) : void 0), [x]),
        C = null === (t = (0, o.Wu)([v.Z], () => (null != x ? v.Z.getForSKU(x) : []), [x])[0]) || void 0 === t ? void 0 : t.id,
        P = (0, o.e7)([m.Z], () => (null != x ? m.Z.getParentSKU(x) : void 0), [x]),
        O = null == P ? void 0 : P.bundledSkuIds,
        _ = (0, o.Wu)(
            [v.Z],
            () => {
                var n;
                return null !== (n = null == O ? void 0 : O.flatMap(v.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [O]
        ),
        L = r.useMemo(() => _.map((n) => n.id), [_]),
        j = (0, o.e7)(
            [g.Z],
            () =>
                null != u &&
                g.Z.getEntitlementsForGuild(u, !0).some((n) => {
                    var t;
                    return null !== (t = null == O ? void 0 : O.includes(n.skuId)) && void 0 !== t && t;
                }),
            [O, u]
        ),
        A = null == T ? void 0 : T.applicationId,
        k = (null == N ? void 0 : N.published) === !0 && (null == T ? void 0 : T.isAvailable()) === !0,
        { app: R } = (0, p.Rt)(A),
        { analyticsLocations: y } = (0, d.ZP)(),
        D = (0, S.Ev)(P, null != u ? u : void 0),
        F = (0, S.cr)(P, null != u ? u : void 0),
        { entitlementsLoaded: M } = (0, S.LM)({ guildId: u });
    null == u && (M = !0);
    let w = (0, f.Z)(),
        U = (0, I.KK)(null !== (l = null == T ? void 0 : T.flags) && void 0 !== l ? l : 0);
    return (
        M && null != R && null != x ? (k ? ((null == D ? void 0 : D.subscriptionPlan.skuId) === x && null == F ? (i = 2) : (null == F ? void 0 : null === (e = F.subscriptionPlan) || void 0 === e ? void 0 : e.skuId) === x ? (i = 3) : U && j && null == D && (i = 4)) : (i = 1)) : (i = 0),
        r.useEffect(() => {
            k &&
                null != x &&
                w &&
                !(v.Z.isFetchingForSKU(x) || v.Z.isLoadedForSKU(x)) &&
                s.Z.wait(() => {
                    (0, c.GZ)(x);
                });
        }, [k, x, w]),
        {
            openModal: r.useCallback(() => {
                a()(null != R, 'No application'),
                    a()(null != x, 'No SKU ID'),
                    a()(k, 'Cannot purchase this unpublished plan'),
                    (0, b.H)({
                        subscriptionPlanId: C,
                        sku: T,
                        subscriptionGroupPlanIds: L,
                        activeSubscription: null == D ? void 0 : D.subscription,
                        subscribeForGuild: u,
                        analyticsLocations: y,
                        analyticsLocation: Z
                    }).then(() => {
                        null == E || E();
                    });
            }, [R, x, k, C, T, L, u, y, Z, null == D ? void 0 : D.subscription, E]),
            cannotOpenReason: i
        }
    );
};
