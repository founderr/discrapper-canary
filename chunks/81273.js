var r = n(735250),
    i = n(470079),
    l = n(512722),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
    c = n(442837),
    u = n(570140),
    d = n(821849),
    h = n(131388),
    _ = n(906732),
    f = n(305325),
    E = n(246364),
    p = n(937111),
    m = n(281956),
    I = n(41776),
    C = n(738737),
    S = n(509545),
    g = n(63063),
    R = n(817460),
    T = n(584825),
    N = n(697227),
    x = n(934826),
    v = n(896083),
    L = n(939872),
    b = n(265985),
    O = n(293810),
    A = n(981631),
    P = n(689938);
t.Z = (e, t, n, l) => {
    let a;
    let Z = (0, c.e7)([I.Z], () => I.Z.isLurking(t)),
        y = (0, m.J)(t),
        M = (0, c.e7)([p.Z], () => (null != t ? p.Z.getRequest(t) : null)),
        j = (null == M ? void 0 : M.applicationStatus) === E.wB.SUBMITTED,
        U = null == e ? void 0 : e.subscription_plans[0],
        D = null == U ? void 0 : U.id,
        B = (null == e ? void 0 : e.published) === !0,
        F = null == U ? void 0 : U.sku_id,
        k = (0, c.e7)([S.Z], () => (null != D ? S.Z.get(D) : null)),
        { activeSubscription: H, activeSubscriptionPlanFromStore: w } = (0, x.Z)(n),
        G = null == H || null != w,
        z = (0, T._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        W = (0, N.V)(H),
        V = null != W,
        Y = (null == H ? void 0 : H.trialId) != null,
        { loading: K, getTrialPurchaseEligibility: Q } = (0, v.F)(),
        q = (0, T.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: X } = (0, _.ZP)(),
        J = (null == H ? void 0 : H.paymentGateway) === A.gg$.APPLE_PARTNER;
    j ? (a = P.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER) : Z && !y ? (a = P.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER) : W === D ? (a = P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({ changeDate: null != H ? o()(H.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : V ? (a = P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION) : Y ? (a = P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL) : J && (a = P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
    let $ = (0, h.Z)(O.iP);
    i.useEffect(() => {
        B &&
            null != F &&
            u.Z.wait(() => {
                (0, d.GZ)(F);
            });
    }, [B, F]);
    let ee = i.useCallback(async () => {
            let n, i;
            if ((s()(null != e, 'No subscription listing'), s()(null != U, 'No subscription plan'), s()(B, 'Cannot purchase this unpublished plan'), (null == q ? void 0 : q.active_trial) != null)) {
                let r = await Q(t, e.id, q.active_trial.id);
                if ((null == r ? void 0 : r.is_eligible) === !0) {
                    var a;
                    n = null == q ? void 0 : null === (a = q.active_trial) || void 0 === a ? void 0 : a.id;
                } else i = P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER;
            }
            (0, C.Z)({
                activeSubscription: H,
                analyticsSubscriptionType: A.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == q ? void 0 : q.active_trial) != null
                        ? P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
                              buttonText: P.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
                              interval: (0, R.iG)(U),
                              days: 1,
                              contactLink: A.EYA.CONTACT,
                              cancelSubscriptionArticle: g.Z.getArticleURL(A.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: g.Z.getArticleURL(A.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: g.Z.getArticleURL(A.BhN.PAID_TERMS),
                              tierName: U.name
                          })
                        : void 0,
                analyticsLocations: X,
                analyticsLocation: l,
                renderHeader: (n, i, l) =>
                    (0, r.jsx)(b.h, {
                        onClose: i,
                        listing: e,
                        step: l,
                        guildId: t
                    }),
                initialPlanId: U.id,
                skuId: U.sku_id,
                planGroup: z,
                renderPurchaseConfirmation: (n, i) =>
                    $
                        ? (0, r.jsx)(L.m, {
                              listing: e,
                              onClose: i,
                              guildId: t
                          })
                        : (0, r.jsx)(b.x, {
                              listing: e,
                              onClose: i,
                              guildId: t
                          }),
                reviewWarningMessage: i
            });
        }, [B, e, U, H, z, t, X, l, Q, q, $]),
        et = i.useCallback(() => {
            (0, f.hk)(t);
        }, [t]);
    return {
        openModal: y ? et : ee,
        canOpenModal: !Z && null != k && G && !j && !V && !Y && !J,
        cannotOpenReason: a,
        isCheckingTrialEligibility: K
    };
};
