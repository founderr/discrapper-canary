e.d(t, {
    Z: function () {
        return E;
    }
}),
    e(390547),
    e(789020);
var l = e(192379),
    i = e(512722),
    r = e.n(i),
    u = e(442837),
    a = e(570140),
    o = e(821849),
    s = e(906732),
    c = e(887706),
    d = e(680005),
    f = e(728345),
    p = e(509545),
    v = e(55563),
    m = e(551428),
    h = e(270144),
    I = e(488915),
    S = e(171246),
    g = e(929011);
function E(n) {
    var t, e;
    let { subscribeForGuild: i, analyticsLocation: E, skuId: A, onComplete: N, disableGuildSelector: Z } = n,
        x = (0, u.e7)([v.Z], () => (null != A ? v.Z.get(A) : void 0), [A]),
        T = (0, u.e7)([m.Z], () => (null != A ? m.Z.getForSKU(A) : void 0), [A]),
        L = null === (t = (0, u.Wu)([p.Z], () => (null != A ? p.Z.getForSKU(A) : []), [A])[0]) || void 0 === t ? void 0 : t.id,
        b = (0, u.e7)([v.Z], () => (null != A ? v.Z.getParentSKU(A) : void 0), [A]),
        C = null == b ? void 0 : b.bundledSkuIds,
        P = (0, u.Wu)(
            [p.Z],
            () => {
                var n;
                return null !== (n = null == C ? void 0 : C.flatMap(p.Z.getForSKU)) && void 0 !== n ? n : [];
            },
            [C]
        ),
        _ = l.useMemo(() => P.map((n) => n.id), [P]),
        O = (0, S.KK)(null !== (e = null == x ? void 0 : x.flags) && void 0 !== e ? e : 0),
        j = (0, u.e7)([I.Z], () => null != i && !1 !== O && I.Z.getEntitlementsForGuild(i, !0).some((n) => n.skuId === A), [O, A, i]),
        D = null == x ? void 0 : x.applicationId,
        R = (null == T ? void 0 : T.published) === !0 && (null == x ? void 0 : x.isAvailable()) === !0,
        { app: k } = (0, f.Rt)(D),
        { analyticsLocations: y } = (0, s.ZP)(),
        M = (0, h.Ev)(b, null != i ? i : void 0),
        F = null == M ? void 0 : M.subscription,
        U = null == M ? void 0 : M.subscriptionPlan,
        G = (0, h.cr)(b, null != i ? i : void 0),
        w = null == G ? void 0 : G.subscriptionPlan,
        { entitlementsLoaded: B } = (0, h.LM)({ guildId: i });
    null == i && (B = !0);
    let K = (0, c.Z)(),
        H = null != F && (0, S.Jf)(F, x),
        Y = l.useMemo(() => {
            if (!B || null == k || null == A) return d.rf.LOADING;
            if (!R) return d.rf.UNAVAILABLE;
            if (!O) {
                if ((null == U ? void 0 : U.skuId) === A) return d.rf.SUBSCRIBED;
                if ((null == w ? void 0 : w.skuId) === A && !1 === H) return d.rf.UPCOMING_PLAN;
            }
            return d.rf.AVAILABLE;
        }, [null == U ? void 0 : U.skuId, R, k, B, H, O, null == w ? void 0 : w.skuId, A]);
    return (
        l.useEffect(() => {
            R &&
                null != A &&
                K &&
                !(p.Z.isFetchingForSKU(A) || p.Z.isLoadedForSKU(A)) &&
                a.Z.wait(() => {
                    (0, o.GZ)(A);
                });
        }, [R, A, K]),
        {
            openModal: l.useCallback(() => {
                r()(null != k, 'No application'),
                    r()(null != A, 'No SKU ID'),
                    r()(R, 'Cannot purchase this unpublished plan'),
                    (0, g.H)({
                        subscriptionPlanId: L,
                        sku: x,
                        subscriptionGroupPlanIds: _,
                        activeSubscription: F,
                        subscribeForGuild: i,
                        disableGuildSelector: Z,
                        analyticsLocations: y,
                        analyticsLocation: E
                    }).then(() => {
                        null == N || N();
                    });
            }, [k, A, R, L, x, _, i, Z, y, E, F, N]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: j
        }
    );
}
