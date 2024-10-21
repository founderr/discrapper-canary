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
    a = t(512722),
    o = t.n(a),
    s = t(442837),
    u = t(570140),
    c = t(821849),
    d = t(906732),
    p = t(887706),
    f = t(728345),
    m = t(509545),
    v = t(55563),
    h = t(551428),
    I = t(270144),
    S = t(488915),
    x = t(171246),
    T = t(929011),
    E = t(689938);
function g(n, e) {
    let t;
    switch (n) {
        case 3:
            t = E.Z.Messages.STOREFRONT_UPCOMING_PLAN_FOR.format({ rate: e });
            break;
        case 2:
            t = E.Z.Messages.STOREFRONT_CURRENT_PLAN_FOR.format({ rate: e });
            break;
        case 4:
            t = E.Z.Messages.STOREFRONT_ALREADY_SUBSCRIBED;
            break;
        case 1:
            t = E.Z.Messages.STOREFRONT_ITEM_UNAVAILABLE;
    }
    return t;
}
((i = l || (l = {}))[(i.Loading = 0)] = 'Loading'), (i[(i.ItemUnavailable = 1)] = 'ItemUnavailable'), (i[(i.CurrentPlan = 2)] = 'CurrentPlan'), (i[(i.UpcomingPlan = 3)] = 'UpcomingPlan'), (i[(i.OtherSubscription = 4)] = 'OtherSubscription');
e.ZP = (n) => {
    var e, t, l;
    let i,
        { subscribeForGuild: a, analyticsLocation: E, skuId: g, onComplete: N } = n,
        R = (0, s.e7)([v.Z], () => (null != g ? v.Z.get(g) : void 0), [g]),
        _ = (0, s.e7)([h.Z], () => (null != g ? h.Z.getForSKU(g) : void 0), [g]),
        O = null === (e = (0, s.Wu)([m.Z], () => (null != g ? m.Z.getForSKU(g) : []), [g])[0]) || void 0 === e ? void 0 : e.id,
        Z = (0, s.e7)([v.Z], () => (null != g ? v.Z.getParentSKU(g) : void 0), [g]),
        C = null == Z ? void 0 : Z.bundledSkuIds,
        b = (0, s.Wu)(
            [m.Z],
            () => {
                var n;
                return null !== (n = null == C ? void 0 : C.flatMap(m.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [C]
        ),
        j = r.useMemo(() => b.map((n) => n.id), [b]),
        A = (0, s.e7)(
            [S.Z],
            () =>
                null != a &&
                S.Z.getEntitlementsForGuild(a, !0).some((n) => {
                    var e;
                    return null !== (e = null == C ? void 0 : C.includes(n.skuId)) && void 0 !== e && e;
                }),
            [C, a]
        ),
        L = null == R ? void 0 : R.applicationId,
        P = (null == _ ? void 0 : _.published) === !0 && (null == R ? void 0 : R.isAvailable()) === !0,
        { app: M } = (0, f.Rt)(L),
        { analyticsLocations: k } = (0, d.ZP)(),
        F = (0, I.Ev)(Z, null != a ? a : void 0),
        D = (0, I.cr)(Z, null != a ? a : void 0),
        { entitlementsLoaded: y } = (0, I.LM)({ guildId: a });
    null == a && (y = !0);
    let U = (0, p.Z)(),
        B = (0, x.KK)(null !== (l = null == R ? void 0 : R.flags) && void 0 !== l ? l : 0);
    return (
        y && null != M && null != g ? (P ? ((null == F ? void 0 : F.subscriptionPlan.skuId) === g && null == D ? (i = 2) : (null == D ? void 0 : null === (t = D.subscriptionPlan) || void 0 === t ? void 0 : t.skuId) === g ? (i = 3) : B && A && null == F && (i = 4)) : (i = 1)) : (i = 0),
        r.useEffect(() => {
            P &&
                null != g &&
                U &&
                !(m.Z.isFetchingForSKU(g) || m.Z.isLoadedForSKU(g)) &&
                u.Z.wait(() => {
                    (0, c.GZ)(g);
                });
        }, [P, g, U]),
        {
            openModal: r.useCallback(() => {
                o()(null != M, 'No application'),
                    o()(null != g, 'No SKU ID'),
                    o()(P, 'Cannot purchase this unpublished plan'),
                    (0, T.H)({
                        subscriptionPlanId: O,
                        sku: R,
                        subscriptionGroupPlanIds: j,
                        activeSubscription: null == F ? void 0 : F.subscription,
                        subscribeForGuild: a,
                        analyticsLocations: k,
                        analyticsLocation: E
                    }).then(() => {
                        null == N || N();
                    });
            }, [M, g, P, O, R, j, a, k, E, null == F ? void 0 : F.subscription, N]),
            cannotOpenReason: i
        }
    );
};
