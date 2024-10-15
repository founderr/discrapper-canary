t(390547), t(789020);
var l = t(735250),
    i = t(470079),
    a = t(512722),
    r = t.n(a),
    o = t(442837),
    s = t(570140),
    u = t(821849),
    c = t(906732),
    d = t(887706),
    p = t(728345),
    f = t(724870),
    m = t(594174),
    v = t(509545),
    I = t(55563),
    h = t(551428),
    S = t(270144),
    x = t(171246),
    N = t(689011),
    T = t(714441),
    Z = t(981631),
    g = t(689938);
n.Z = (e) => {
    var n, t, a, E;
    let _,
        { guildId: R, analyticsLocation: C, showBenefitsFirst: O, skuId: A, onComplete: j, forcesTransitionToGuild: b } = e,
        P = (0, o.e7)([I.Z], () => (null != A ? I.Z.get(A) : void 0), [A]),
        L = (0, o.e7)([h.Z], () => (null != A ? h.Z.getForSKU(A) : void 0), [A]),
        k = null === (n = (0, o.Wu)([v.Z], () => (null != A ? v.Z.getForSKU(A) : []), [A])[0]) || void 0 === n ? void 0 : n.id,
        M = (0, o.e7)([I.Z], () => (null != A ? I.Z.getParentSKU(A) : void 0), [A]),
        D = null == M ? void 0 : M.bundledSkuIds,
        y = (0, o.Wu)(
            [v.Z],
            () => {
                var e;
                return null !== (e = null == D ? void 0 : D.flatMap(v.Z.getForSKU)) && void 0 !== e ? e : [];
            },
            [D]
        ),
        F = i.useMemo(() => y.map((e) => e.id), [y]),
        U = null == P ? void 0 : P.applicationId,
        B = (0, S.CR)(U, A),
        w = B.some((e) => e.id === R) ? R : null === (t = B[0]) || void 0 === t ? void 0 : t.id,
        G = (null == L ? void 0 : L.published) === !0 && (null == P ? void 0 : P.isAvailable()) === !0,
        { data: K } = (0, p.IX)(U),
        { analyticsLocations: Y } = (0, c.ZP)(),
        { activeEntitlement: H } = (0, S.C9)(M, w),
        z = (0, S.Ev)(null !== (E = null == M ? void 0 : M.bundledSkuIds) && void 0 !== E ? E : [], null != R ? R : void 0),
        W = (0, d.Z)(),
        V = null != P && (0, x.KW)(P.flags),
        q = (null == H ? void 0 : H.skuId) === A,
        X = null != H && H.userId === (null === (a = m.default.getCurrentUser()) || void 0 === a ? void 0 : a.id),
        Q = null == H || y.length > 1,
        J = B.length > 0,
        $ = V && X && q,
        ee = null != P && null != K && Q && (J || V) && !$;
    return (
        J ? $ && (_ = g.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_PLAN) : (_ = g.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE),
        i.useEffect(() => {
            G &&
                null != A &&
                W &&
                !(v.Z.isFetchingForSKU(A) || v.Z.isLoadedForSKU(A)) &&
                s.Z.wait(() => {
                    (0, u.GZ)(A);
                });
        }, [G, A, W]),
        {
            openModal: i.useCallback(() => {
                r()(null != K, 'No application'), r()(null != A, 'No SKU ID'), r()(G, 'Cannot purchase this unpublished plan');
                let e = () => {
                    (0, f.h)({
                        activeSubscription: null != z ? z : null,
                        analyticsSubscriptionType: Z.NYc.APPLICATION,
                        analyticsLocations: Y,
                        analyticsLocation: C,
                        renderHeader: (e, n, t) =>
                            (0, l.jsx)(N.t, {
                                step: t,
                                onClose: () => n(!1)
                            }),
                        initialPlanId: k,
                        skuId: A,
                        guildId: w,
                        eligibleApplicationSubscriptionGuilds: B,
                        planGroup: F,
                        applicationId: K.id,
                        showBenefitsFirst: O,
                        onComplete: j,
                        forcesTransitionToGuild: b
                    });
                };
                !J && V
                    ? (0, T.i)({
                          applicationName: K.name,
                          onConfirm: e,
                          onCancel: () => {}
                      })
                    : e();
            }, [A, k, F, G, K, w, J, V, Y, C, z, O, B, j, b]),
            canOpenModal: ee,
            cannotOpenReason: _
        }
    );
};
