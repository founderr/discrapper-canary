var i = n(200651),
    a = n(192379),
    s = n(512722),
    r = n.n(s),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    u = n(570140),
    d = n(821849),
    _ = n(131388),
    E = n(906732),
    I = n(305325),
    m = n(246364),
    f = n(937111),
    T = n(281956),
    h = n(41776),
    N = n(738737),
    p = n(509545),
    C = n(63063),
    g = n(817460),
    S = n(584825),
    A = n(697227),
    x = n(934826),
    R = n(896083),
    v = n(939872),
    M = n(265985),
    O = n(293810),
    L = n(981631),
    Z = n(689938);
t.Z = (e, t, n, s) => {
    let l;
    let b = (0, c.e7)([h.Z], () => h.Z.isLurking(t)),
        P = (0, T.J)(t),
        D = (0, c.e7)([f.Z], () => (null != t ? f.Z.getRequest(t) : null)),
        j = (null == D ? void 0 : D.applicationStatus) === m.wB.SUBMITTED,
        U = null == e ? void 0 : e.subscription_plans[0],
        y = null == U ? void 0 : U.id,
        B = (null == e ? void 0 : e.published) === !0,
        k = null == U ? void 0 : U.sku_id,
        G = (0, c.e7)([p.Z], () => (null != y ? p.Z.get(y) : null)),
        { activeSubscription: F, activeSubscriptionPlanFromStore: w } = (0, x.Z)(n),
        V = null == F || null != w,
        H = (0, S._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        Y = (0, A.V)(F),
        W = null != Y,
        K = (null == F ? void 0 : F.trialId) != null,
        { loading: z, getTrialPurchaseEligibility: X } = (0, R.F)(),
        Q = (0, S.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: q } = (0, E.ZP)(),
        J = (null == F ? void 0 : F.paymentGateway) === L.gg$.APPLE_PARTNER;
    j ? (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER) : b && !P ? (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER) : Y === y ? (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({ changeDate: null != F ? o()(F.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : W ? (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION) : K ? (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL) : J && (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
    let $ = (0, _.Z)(O.iP);
    a.useEffect(() => {
        B &&
            null != k &&
            u.Z.wait(() => {
                (0, d.GZ)(k);
            });
    }, [B, k]);
    let ee = a.useCallback(async () => {
            let n, a;
            if ((r()(null != e, 'No subscription listing'), r()(null != U, 'No subscription plan'), r()(B, 'Cannot purchase this unpublished plan'), (null == Q ? void 0 : Q.active_trial) != null)) {
                let i = await X(t, e.id, Q.active_trial.id);
                if ((null == i ? void 0 : i.is_eligible) === !0) {
                    var l;
                    n = null == Q ? void 0 : null === (l = Q.active_trial) || void 0 === l ? void 0 : l.id;
                } else a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER;
            }
            (0, N.Z)({
                activeSubscription: F,
                analyticsSubscriptionType: L.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == Q ? void 0 : Q.active_trial) != null
                        ? Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
                              buttonText: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
                              interval: (0, g.iG)(U),
                              days: 1,
                              contactLink: L.EYA.CONTACT,
                              cancelSubscriptionArticle: C.Z.getArticleURL(L.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: C.Z.getArticleURL(L.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: C.Z.getArticleURL(L.BhN.PAID_TERMS),
                              tierName: U.name
                          })
                        : void 0,
                analyticsLocations: q,
                analyticsLocation: s,
                renderHeader: (n, a, s) =>
                    (0, i.jsx)(M.h, {
                        onClose: a,
                        listing: e,
                        step: s,
                        guildId: t
                    }),
                initialPlanId: U.id,
                skuId: U.sku_id,
                planGroup: H,
                renderPurchaseConfirmation: (n, a) =>
                    $
                        ? (0, i.jsx)(v.m, {
                              listing: e,
                              onClose: a,
                              guildId: t
                          })
                        : (0, i.jsx)(M.x, {
                              listing: e,
                              onClose: a,
                              guildId: t
                          }),
                reviewWarningMessage: a
            });
        }, [B, e, U, F, H, t, q, s, X, Q, $]),
        et = a.useCallback(() => {
            (0, I.hk)(t);
        }, [t]);
    return {
        openModal: P ? et : ee,
        canOpenModal: !b && null != G && V && !j && !W && !K && !J,
        cannotOpenReason: l,
        isCheckingTrialEligibility: z
    };
};
