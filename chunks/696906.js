e.d(t, {
    FC: function () {
        return x;
    },
    HO: function () {
        return l;
    },
    ZP: function () {
        return E;
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
function E(n) {
    var t, e, l;
    let i,
        { subscribeForGuild: u, analyticsLocation: Z, skuId: x, onComplete: E, disableGuildSelector: T } = n,
        N = (0, o.e7)([m.Z], () => (null != x ? m.Z.get(x) : void 0), [x]),
        C = (0, o.e7)([h.Z], () => (null != x ? h.Z.getForSKU(x) : void 0), [x]),
        P = null === (t = (0, o.Wu)([v.Z], () => (null != x ? v.Z.getForSKU(x) : []), [x])[0]) || void 0 === t ? void 0 : t.id,
        O = (0, o.e7)([m.Z], () => (null != x ? m.Z.getParentSKU(x) : void 0), [x]),
        _ = null == O ? void 0 : O.bundledSkuIds,
        L = (0, o.Wu)(
            [v.Z],
            () => {
                var n;
                return null !== (n = null == _ ? void 0 : _.flatMap(v.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [_]
        ),
        j = r.useMemo(() => L.map((n) => n.id), [L]),
        A = (0, o.e7)(
            [g.Z],
            () =>
                null != u &&
                g.Z.getEntitlementsForGuild(u, !0).some((n) => {
                    var t;
                    return null !== (t = null == _ ? void 0 : _.includes(n.skuId)) && void 0 !== t && t;
                }),
            [_, u]
        ),
        k = null == N ? void 0 : N.applicationId,
        R = (null == C ? void 0 : C.published) === !0 && (null == N ? void 0 : N.isAvailable()) === !0,
        { app: y } = (0, p.Rt)(k),
        { analyticsLocations: D } = (0, d.ZP)(),
        F = (0, S.Ev)(O, null != u ? u : void 0),
        M = (0, S.cr)(O, null != u ? u : void 0),
        { entitlementsLoaded: w } = (0, S.LM)({ guildId: u });
    null == u && (w = !0);
    let U = (0, f.Z)(),
        G = (0, I.KK)(null !== (l = null == N ? void 0 : N.flags) && void 0 !== l ? l : 0);
    return (
        w && null != y && null != x ? (R ? ((null == F ? void 0 : F.subscriptionPlan.skuId) === x && null == M ? (i = 2) : (null == M ? void 0 : null === (e = M.subscriptionPlan) || void 0 === e ? void 0 : e.skuId) === x ? (i = 3) : G && A && null == F && (i = 4)) : (i = 1)) : (i = 0),
        r.useEffect(() => {
            R &&
                null != x &&
                U &&
                !(v.Z.isFetchingForSKU(x) || v.Z.isLoadedForSKU(x)) &&
                s.Z.wait(() => {
                    (0, c.GZ)(x);
                });
        }, [R, x, U]),
        {
            openModal: r.useCallback(() => {
                a()(null != y, 'No application'),
                    a()(null != x, 'No SKU ID'),
                    a()(R, 'Cannot purchase this unpublished plan'),
                    (0, b.H)({
                        subscriptionPlanId: P,
                        sku: N,
                        subscriptionGroupPlanIds: j,
                        activeSubscription: null == F ? void 0 : F.subscription,
                        subscribeForGuild: u,
                        disableGuildSelector: T,
                        analyticsLocations: D,
                        analyticsLocation: Z
                    }).then(() => {
                        null == E || E();
                    });
            }, [y, x, R, P, N, j, u, T, D, Z, null == F ? void 0 : F.subscription, E]),
            cannotOpenReason: i
        }
    );
}
((i = l || (l = {}))[(i.Loading = 0)] = 'Loading'), (i[(i.ItemUnavailable = 1)] = 'ItemUnavailable'), (i[(i.CurrentPlan = 2)] = 'CurrentPlan'), (i[(i.UpcomingPlan = 3)] = 'UpcomingPlan'), (i[(i.OtherSubscription = 4)] = 'OtherSubscription');
