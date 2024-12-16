e.d(t, {
    Z: function () {
        return E;
    }
}),
    e(390547),
    e(789020);
var i = e(192379),
    l = e(512722),
    r = e.n(l),
    u = e(442837),
    a = e(570140),
    o = e(821849),
    s = e(906732),
    c = e(887706),
    d = e(680005),
    f = e(728345),
    p = e(509545),
    m = e(55563),
    v = e(551428),
    S = e(270144),
    I = e(488915),
    h = e(171246),
    g = e(929011);
function E(n) {
    var t, e;
    let { initialSubscribeForGuild: l, analyticsLocation: E, skuId: Z, onComplete: A, disableGuildSelector: N } = n,
        b = (0, u.e7)([m.Z], () => (null != Z ? m.Z.get(Z) : void 0), [Z]),
        x = (0, u.e7)([v.Z], () => (null != Z ? v.Z.getForSKU(Z) : void 0), [Z]),
        T = null === (t = (0, u.Wu)([p.Z], () => (null != Z ? p.Z.getForSKU(Z) : []), [Z])[0]) || void 0 === t ? void 0 : t.id,
        L = (0, u.e7)([m.Z], () => (null != Z ? m.Z.getParentSKU(Z) : void 0), [Z]),
        _ = null == L ? void 0 : L.bundledSkuIds,
        C = (0, u.Wu)(
            [p.Z],
            () => {
                var n;
                return null !== (n = null == _ ? void 0 : _.flatMap(p.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [_]
        ),
        P = i.useMemo(() => C.map((n) => n.id), [C]),
        O = (0, h.KK)(null !== (e = null == b ? void 0 : b.flags) && void 0 !== e ? e : 0),
        j = (0, u.e7)([I.Z], () => null != l && !1 !== O && I.Z.getEntitlementsForGuild(l, !0).some((n) => n.skuId === Z), [O, Z, l]),
        k = null == b ? void 0 : b.applicationId,
        D = (null == x ? void 0 : x.published) === !0 && (null == b ? void 0 : b.isAvailable()) === !0,
        { app: R } = (0, f.Rt)(k),
        { analyticsLocations: y } = (0, s.ZP)(),
        M = (0, S.Ev)(L, null != l ? l : void 0),
        F = null == M ? void 0 : M.subscription,
        G = null == M ? void 0 : M.subscriptionPlan,
        U = (0, S.cr)(L, null != l ? l : void 0),
        w = null == U ? void 0 : U.subscriptionPlan,
        { entitlementsLoaded: B } = (0, S.LM)({ guildId: l });
    null == l && (B = !0);
    let K = (0, c.Z)(),
        H = null != F && (0, h.Jf)(F, b),
        Y = i.useMemo(() => {
            if (!B || null == R || null == Z) return d.rf.LOADING;
            if (!D) return d.rf.UNAVAILABLE;
            if (!O) {
                if ((null == G ? void 0 : G.skuId) === Z) return d.rf.SUBSCRIBED;
                if ((null == w ? void 0 : w.skuId) === Z && !1 === H) return d.rf.UPCOMING_PLAN;
            }
            return d.rf.AVAILABLE;
        }, [null == G ? void 0 : G.skuId, D, R, B, H, O, null == w ? void 0 : w.skuId, Z]);
    return (
        i.useEffect(() => {
            D &&
                null != Z &&
                K &&
                !(p.Z.isFetchingForSKU(Z) || p.Z.isLoadedForSKU(Z)) &&
                a.Z.wait(() => {
                    (0, o.GZ)(Z);
                });
        }, [D, Z, K]),
        {
            openModal: i.useCallback(() => {
                r()(null != R, 'No application'),
                    r()(null != Z, 'No SKU ID'),
                    r()(D, 'Cannot purchase this unpublished plan'),
                    (0, g.H)({
                        subscriptionPlanId: T,
                        sku: b,
                        subscriptionGroupPlanIds: P,
                        initialSubscribeForGuild: l,
                        disableGuildSelector: N,
                        analyticsLocations: y,
                        analyticsLocation: E
                    }).then(() => {
                        null == A || A();
                    });
            }, [R, Z, D, T, b, P, l, N, y, E, A]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: j
        }
    );
}
