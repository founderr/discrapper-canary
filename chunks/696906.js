t(789020);
var i = t(735250), r = t(470079), o = t(512722), l = t.n(o), u = t(442837), s = t(570140), a = t(821849), c = t(906732), d = t(887706), _ = t(724870), f = t(594174), E = t(509545), I = t(55563), g = t(551428), p = t(630388), S = t(270144), C = t(171246), m = t(689011), T = t(714441), h = t(981631), A = t(689938);
n.Z = e => {
    var n;
    let t, {
            guildId: o,
            groupListingId: N,
            analyticsLocation: v,
            showBenefitsFirst: R,
            skuId: L,
            onComplete: b,
            forcesTransitionToGuild: O
        } = e, M = (0, u.e7)([I.Z], () => null != L ? I.Z.get(L) : void 0, [L]), Z = (0, u.e7)([g.Z], () => null != L ? g.Z.getForSKU(L) : void 0, [L]), D = (0, u.e7)([E.Z], () => null != L ? E.Z.getForSKU(L) : void 0, [L]), U = null != D ? D[0] : void 0, P = null == M ? void 0 : M.applicationId, x = (null == Z ? void 0 : Z.published) === !0 && null != M && (0, p.yE)(M.flags, h.l4R.AVAILABLE), G = null == U ? void 0 : U.skuId, y = (0, S.IX)(P), w = (0, S._k)(N, { includeSoftDeleted: !0 }).map(e => e.subscription_plans[0].id), {analyticsLocations: j} = (0, c.ZP)(), {
            activeSubscription: F,
            activeEntitlement: B
        } = (0, S.F5)(P, o), k = (0, S.CR)(P, o), H = (0, d.Z)(), W = null != M && (0, C.KW)(M.flags), V = null != B && B.userId === (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.id), Y = null == B || V, K = null == B || w.length > 1, z = null != o || k.length > 0, J = W && V, q = null != U && null != y && Y && K && (z || W) && !J;
    return Y ? z ? J && null != U && (t = A.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({ tierName: U.name })) : t = A.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : t = A.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
        x && null != G && H && !(E.Z.isFetchingForSKU(G) || E.Z.isLoadedForSKU(G)) && s.Z.wait(() => {
            (0, a.GZ)(G);
        });
    }, [
        x,
        G,
        H
    ]), {
        openModal: r.useCallback(() => {
            l()(null != y, 'No application'), l()(null != U, 'No subscription plan'), l()(x, 'Cannot purchase this unpublished plan');
            let e = () => {
                (0, _.h)({
                    activeSubscription: F,
                    analyticsSubscriptionType: h.NYc.APPLICATION,
                    analyticsLocations: j,
                    analyticsLocation: v,
                    renderHeader: (e, n, t) => (0, i.jsx)(m.t, {
                        step: t,
                        onClose: () => n(!1)
                    }),
                    initialPlanId: U.id,
                    skuId: U.skuId,
                    guildId: o,
                    eligibleApplicationSubscriptionGuilds: k,
                    planGroup: w,
                    applicationId: y.id,
                    showBenefitsFirst: R,
                    onComplete: b,
                    forcesTransitionToGuild: O
                });
            };
            !z && W ? (0, T.i)({
                applicationName: y.name,
                onConfirm: e,
                onCancel: () => {
                }
            }) : e();
        }, [
            x,
            U,
            w,
            y,
            o,
            z,
            W,
            j,
            v,
            F,
            R,
            k,
            b,
            O
        ]),
        canOpenModal: q,
        cannotOpenReason: t
    };
};
