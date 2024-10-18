t.d(n, {
    FC: function () {
        return E;
    },
    HO: function () {
        return l;
    }
}),
    t(390547),
    t(789020);
var l,
    i,
    r = t(470079),
    o = t(512722),
    a = t.n(o),
    s = t(442837),
    u = t(570140),
    c = t(821849),
    d = t(906732),
    p = t(887706),
    m = t(728345),
    v = t(509545),
    f = t(55563),
    I = t(551428),
    h = t(270144),
    S = t(488915),
    x = t(171246),
    g = t(929011),
    T = t(689938);
function E(e, n) {
    let t;
    switch (e) {
        case 3:
            t = T.Z.Messages.STOREFRONT_UPCOMING_PLAN_FOR.format({ rate: n });
            break;
        case 2:
            t = T.Z.Messages.STOREFRONT_CURRENT_PLAN_FOR.format({ rate: n });
            break;
        case 4:
            t = T.Z.Messages.STOREFRONT_ALREADY_SUBSCRIBED;
            break;
        case 1:
            t = T.Z.Messages.STOREFRONT_ITEM_UNAVAILABLE;
    }
    return t;
}
((i = l || (l = {}))[(i.Loading = 0)] = 'Loading'), (i[(i.ItemUnavailable = 1)] = 'ItemUnavailable'), (i[(i.CurrentPlan = 2)] = 'CurrentPlan'), (i[(i.UpcomingPlan = 3)] = 'UpcomingPlan'), (i[(i.OtherSubscription = 4)] = 'OtherSubscription'), (i[(i.LoggedOut = 5)] = 'LoggedOut');
n.ZP = (e) => {
    var n, t, l;
    let i,
        { subscribeForGuild: o, analyticsLocation: T, skuId: E, onComplete: N } = e,
        R = (0, s.e7)([f.Z], () => (null != E ? f.Z.get(E) : void 0), [E]),
        O = (0, s.e7)([I.Z], () => (null != E ? I.Z.getForSKU(E) : void 0), [E]),
        _ = null === (n = (0, s.Wu)([v.Z], () => (null != E ? v.Z.getForSKU(E) : []), [E])[0]) || void 0 === n ? void 0 : n.id,
        Z = (0, s.e7)([f.Z], () => (null != E ? f.Z.getParentSKU(E) : void 0), [E]),
        C = null == Z ? void 0 : Z.bundledSkuIds,
        b = (0, s.Wu)(
            [v.Z],
            () => {
                var e;
                return null !== (e = null == C ? void 0 : C.flatMap(v.Z.getForSKU)) && void 0 !== e ? e : [];
            },
            [C]
        ),
        j = r.useMemo(() => b.map((e) => e.id), [b]),
        A = (0, s.e7)(
            [S.Z],
            () =>
                null != o &&
                S.Z.getEntitlementsForGuild(o, !0).some((e) => {
                    var n;
                    return null !== (n = null == C ? void 0 : C.includes(e.skuId)) && void 0 !== n && n;
                }),
            [C, o]
        ),
        L = null == R ? void 0 : R.applicationId,
        P = (null == O ? void 0 : O.published) === !0 && (null == R ? void 0 : R.isAvailable()) === !0,
        { data: k } = (0, m.IX)(L),
        { analyticsLocations: M } = (0, d.ZP)(),
        F = (0, h.Ev)(Z, null != o ? o : void 0),
        D = (0, h.cr)(Z, null != o ? o : void 0),
        { entitlementsLoaded: y } = (0, h.LM)({ guildId: o });
    null == o && (y = !0);
    let U = (0, p.Z)(),
        B = (0, x.KK)(null !== (l = null == R ? void 0 : R.flags) && void 0 !== l ? l : 0);
    return (
        U ? (y && null != k && null != E ? (P ? ((null == F ? void 0 : F.subscriptionPlan.skuId) === E && null == D ? (i = 2) : (null == D ? void 0 : null === (t = D.subscriptionPlan) || void 0 === t ? void 0 : t.skuId) === E ? (i = 3) : B && A && null == F && (i = 4)) : (i = 1)) : (i = 0)) : (i = 5),
        r.useEffect(() => {
            P &&
                null != E &&
                U &&
                !(v.Z.isFetchingForSKU(E) || v.Z.isLoadedForSKU(E)) &&
                u.Z.wait(() => {
                    (0, c.GZ)(E);
                });
        }, [P, E, U]),
        {
            openModal: r.useCallback(() => {
                a()(null != k, 'No application'),
                    a()(null != E, 'No SKU ID'),
                    a()(P, 'Cannot purchase this unpublished plan'),
                    (0, g.H)({
                        subscriptionPlanId: _,
                        sku: R,
                        subscriptionGroupPlanIds: j,
                        activeSubscription: null == F ? void 0 : F.subscription,
                        subscribeForGuild: o,
                        analyticsLocations: M,
                        analyticsLocation: T
                    }).then(() => {
                        null == N || N();
                    });
            }, [k, E, P, _, R, j, o, M, T, null == F ? void 0 : F.subscription, N]),
            cannotOpenReason: i
        }
    );
};
