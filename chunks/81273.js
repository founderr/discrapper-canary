var i = n(735250),
    s = n(470079),
    a = n(512722),
    r = n.n(a),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    u = n(570140),
    d = n(821849),
    _ = n(131388),
    E = n(906732),
    I = n(305325),
    m = n(246364),
    T = n(937111),
    h = n(281956),
    N = n(41776),
    f = n(738737),
    C = n(509545),
    p = n(63063),
    g = n(817460),
    A = n(584825),
    S = n(697227),
    x = n(934826),
    R = n(896083),
    O = n(939872),
    M = n(265985),
    v = n(293810),
    L = n(981631),
    Z = n(689938);
t.Z = (e, t, n, a) => {
    let l;
    let P = (0, c.e7)([N.Z], () => N.Z.isLurking(t)),
        b = (0, h.J)(t),
        D = (0, c.e7)([T.Z], () => (null != t ? T.Z.getRequest(t) : null)),
        j = (null == D ? void 0 : D.applicationStatus) === m.wB.SUBMITTED,
        U = null == e ? void 0 : e.subscription_plans[0],
        y = null == U ? void 0 : U.id,
        B = (null == e ? void 0 : e.published) === !0,
        k = null == U ? void 0 : U.sku_id,
        F = (0, c.e7)([C.Z], () => (null != y ? C.Z.get(y) : null)),
        { activeSubscription: G, activeSubscriptionPlanFromStore: w } = (0, x.Z)(n),
        V = null == G || null != w,
        H = (0, A._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        Y = (0, S.V)(G),
        W = null != Y,
        K = (null == G ? void 0 : G.trialId) != null,
        { loading: z, getTrialPurchaseEligibility: Q } = (0, R.F)(),
        q = (0, A.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: X } = (0, E.ZP)(),
        J = (null == G ? void 0 : G.paymentGateway) === L.gg$.APPLE_PARTNER;
    j ? (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER) : P && !b ? (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER) : Y === y ? (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({ changeDate: null != G ? o()(G.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : W ? (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION) : K ? (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL) : J && (l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
    let $ = (0, _.Z)(v.iP);
    s.useEffect(() => {
        B &&
            null != k &&
            u.Z.wait(() => {
                (0, d.GZ)(k);
            });
    }, [B, k]);
    let ee = s.useCallback(async () => {
            let n, s;
            if ((r()(null != e, 'No subscription listing'), r()(null != U, 'No subscription plan'), r()(B, 'Cannot purchase this unpublished plan'), (null == q ? void 0 : q.active_trial) != null)) {
                let i = await Q(t, e.id, q.active_trial.id);
                if ((null == i ? void 0 : i.is_eligible) === !0) {
                    var l;
                    n = null == q ? void 0 : null === (l = q.active_trial) || void 0 === l ? void 0 : l.id;
                } else s = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER;
            }
            (0, f.Z)({
                activeSubscription: G,
                analyticsSubscriptionType: L.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == q ? void 0 : q.active_trial) != null
                        ? Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
                              buttonText: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
                              interval: (0, g.iG)(U),
                              days: 1,
                              contactLink: L.EYA.CONTACT,
                              cancelSubscriptionArticle: p.Z.getArticleURL(L.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: p.Z.getArticleURL(L.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: p.Z.getArticleURL(L.BhN.PAID_TERMS),
                              tierName: U.name
                          })
                        : void 0,
                analyticsLocations: X,
                analyticsLocation: a,
                renderHeader: (n, s, a) =>
                    (0, i.jsx)(M.h, {
                        onClose: s,
                        listing: e,
                        step: a,
                        guildId: t
                    }),
                initialPlanId: U.id,
                skuId: U.sku_id,
                planGroup: H,
                renderPurchaseConfirmation: (n, s) =>
                    $
                        ? (0, i.jsx)(O.m, {
                              listing: e,
                              onClose: s,
                              guildId: t
                          })
                        : (0, i.jsx)(M.x, {
                              listing: e,
                              onClose: s,
                              guildId: t
                          }),
                reviewWarningMessage: s
            });
        }, [B, e, U, G, H, t, X, a, Q, q, $]),
        et = s.useCallback(() => {
            (0, I.hk)(t);
        }, [t]);
    return {
        openModal: b ? et : ee,
        canOpenModal: !P && null != F && V && !j && !W && !K && !J,
        cannotOpenReason: l,
        isCheckingTrialEligibility: z
    };
};
