t(390547);
var l = t(470079),
    i = t(512722),
    s = t.n(i),
    a = t(442837),
    o = t(570140),
    r = t(821849),
    u = t(906732),
    c = t(887706),
    d = t(728345),
    p = t(509545),
    m = t(55563),
    v = t(551428),
    f = t(270144),
    h = t(929011);
n.Z = (e) => {
    var n, t;
    let { subscribeForGuild: i, analyticsLocation: I, skuId: S, onComplete: x } = e,
        T = (0, a.e7)([m.Z], () => (null != S ? m.Z.get(S) : void 0), [S]),
        N = (0, a.e7)([v.Z], () => (null != S ? v.Z.getForSKU(S) : void 0), [S]),
        E = null === (n = (0, a.Wu)([p.Z], () => (null != S ? p.Z.getForSKU(S) : []), [S])[0]) || void 0 === n ? void 0 : n.id,
        g = (0, a.e7)([m.Z], () => (null != S ? m.Z.getParentSKU(S) : void 0), [S]),
        _ = null == g ? void 0 : g.bundledSkuIds,
        Z = (0, a.Wu)(
            [p.Z],
            () => {
                var e;
                return null !== (e = null == _ ? void 0 : _.flatMap(p.Z.getForSKU)) && void 0 !== e ? e : [];
            },
            [_]
        ),
        R = l.useMemo(() => Z.map((e) => e.id), [Z]),
        O = null == T ? void 0 : T.applicationId,
        C = (null == N ? void 0 : N.published) === !0 && (null == T ? void 0 : T.isAvailable()) === !0,
        { data: j } = (0, d.IX)(O),
        { analyticsLocations: b } = (0, u.ZP)(),
        { subscription: A, subscriptionPlan: L } = null !== (t = (0, f.v9)(g, null != i ? i : void 0)) && void 0 !== t ? t : {},
        P = (0, c.Z)(),
        k = null != j && null != S && C && (null == L ? void 0 : L.skuId) !== S;
    return (
        l.useEffect(() => {
            C &&
                null != S &&
                P &&
                !(p.Z.isFetchingForSKU(S) || p.Z.isLoadedForSKU(S)) &&
                o.Z.wait(() => {
                    (0, r.GZ)(S);
                });
        }, [C, S, P]),
        {
            openModal: l.useCallback(() => {
                s()(null != j, 'No application'),
                    s()(null != S, 'No SKU ID'),
                    s()(C, 'Cannot purchase this unpublished plan'),
                    (0, h.H)({
                        subscriptionPlanId: E,
                        sku: T,
                        subscriptionGroupPlanIds: R,
                        activeSubscription: A,
                        subscribeForGuild: i,
                        analyticsLocations: b,
                        analyticsLocation: I
                    }).then(() => {
                        null == x || x();
                    });
            }, [j, S, C, E, T, R, A, i, b, I, x]),
            canOpenModal: k
        }
    );
};
