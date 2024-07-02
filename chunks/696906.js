t(789020);
var i = t(735250), a = t(470079), o = t(512722), r = t.n(o), l = t(442837), s = t(570140), c = t(821849), d = t(906732), u = t(887706), f = t(724870), p = t(594174), C = t(509545), _ = t(55563), b = t(551428), I = t(630388), h = t(270144), m = t(171246), T = t(689011), L = t(714441), S = t(981631), g = t(689938);
n.Z = e => {
    var n;
    let t, {
            guildId: o,
            groupListingId: E,
            analyticsLocation: N,
            showBenefitsFirst: A,
            skuId: O,
            onComplete: v,
            forcesTransitionToGuild: R
        } = e, x = (0, l.e7)([_.Z], () => null != O ? _.Z.get(O) : void 0, [O]), y = (0, l.e7)([b.Z], () => null != O ? b.Z.getForSKU(O) : void 0, [O]), P = (0, l.e7)([C.Z], () => null != O ? C.Z.getForSKU(O) : void 0, [O]), Z = null != P ? P[0] : void 0, w = null == x ? void 0 : x.applicationId, B = (null == y ? void 0 : y.published) === !0 && null != x && (0, I.yE)(x.flags, S.l4R.AVAILABLE), k = null == Z ? void 0 : Z.skuId, F = (0, h.IX)(w), H = (0, h._k)(E, { includeSoftDeleted: !0 }).map(e => e.subscription_plans[0].id), {analyticsLocations: M} = (0, d.ZP)(), {
            activeSubscription: D,
            activeEntitlement: j
        } = (0, h.F5)(w, o), U = (0, h.CR)(w, o), G = (0, u.Z)(), Y = null != x && (0, m.KW)(x.flags), K = null != j && j.userId === (null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.id), V = null == j || K, z = null == j || H.length > 1, W = null != o || U.length > 0, q = Y && K, X = null != Z && null != F && V && z && (W || Y) && !q;
    return V ? W ? q && null != Z && (t = g.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({ tierName: Z.name })) : t = g.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : t = g.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, a.useEffect(() => {
        B && null != k && G && !(C.Z.isFetchingForSKU(k) || C.Z.isLoadedForSKU(k)) && s.Z.wait(() => {
            (0, c.GZ)(k);
        });
    }, [
        B,
        k,
        G
    ]), {
        openModal: a.useCallback(() => {
            r()(null != F, 'No application'), r()(null != Z, 'No subscription plan'), r()(B, 'Cannot purchase this unpublished plan');
            let e = () => {
                (0, f.h)({
                    activeSubscription: D,
                    analyticsSubscriptionType: S.NYc.APPLICATION,
                    analyticsLocations: M,
                    analyticsLocation: N,
                    renderHeader: (e, n, t) => (0, i.jsx)(T.t, {
                        step: t,
                        onClose: () => n(!1)
                    }),
                    initialPlanId: Z.id,
                    skuId: Z.skuId,
                    guildId: o,
                    eligibleApplicationSubscriptionGuilds: U,
                    planGroup: H,
                    applicationId: F.id,
                    showBenefitsFirst: A,
                    onComplete: v,
                    forcesTransitionToGuild: R
                });
            };
            !W && Y ? (0, L.i)({
                applicationName: F.name,
                onConfirm: e,
                onCancel: () => {
                }
            }) : e();
        }, [
            B,
            Z,
            H,
            F,
            o,
            W,
            Y,
            M,
            N,
            D,
            A,
            U,
            v,
            R
        ]),
        canOpenModal: X,
        cannotOpenReason: t
    };
};
