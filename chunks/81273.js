var r = n(735250),
    i = n(470079),
    l = n(512722),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
    u = n(442837),
    c = n(570140),
    d = n(821849),
    h = n(131388),
    _ = n(906732),
    f = n(305325),
    E = n(246364),
    p = n(937111),
    m = n(281956),
    C = n(41776),
    S = n(738737),
    I = n(509545),
    g = n(63063),
    T = n(817460),
    R = n(584825),
    N = n(697227),
    v = n(934826),
    x = n(896083),
    A = n(939872),
    L = n(265985),
    b = n(293810),
    O = n(981631),
    Z = n(689938);
t.Z = (e, t, n, l) => {
    let a;
    let P = (0, u.e7)([C.Z], () => C.Z.isLurking(t)),
        M = (0, m.J)(t),
        y = (0, u.e7)([p.Z], () => (null != t ? p.Z.getRequest(t) : null)),
        j = (null == y ? void 0 : y.applicationStatus) === E.wB.SUBMITTED,
        U = null == e ? void 0 : e.subscription_plans[0],
        D = null == U ? void 0 : U.id,
        B = (null == e ? void 0 : e.published) === !0,
        k = null == U ? void 0 : U.sku_id,
        F = (0, u.e7)([I.Z], () => (null != D ? I.Z.get(D) : null)),
        { activeSubscription: H, activeSubscriptionPlanFromStore: w } = (0, v.Z)(n),
        G = null == H || null != w,
        z = (0, R._k)(n, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
        Q = (0, N.V)(H),
        V = null != Q,
        q = (null == H ? void 0 : H.trialId) != null,
        { loading: W, getTrialPurchaseEligibility: K } = (0, x.F)(),
        Y = (0, R.oC)(null == e ? void 0 : e.id),
        { analyticsLocations: J } = (0, _.ZP)(),
        X = (null == H ? void 0 : H.paymentGateway) === O.gg$.APPLE_PARTNER;
    j ? (a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER) : P && !M ? (a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER) : Q === D ? (a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({ changeDate: null != H ? o()(H.currentPeriodEnd).format('MMM DD, YYYY') : '' })) : V ? (a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION) : q ? (a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL) : X && (a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
    let $ = (0, h.Z)(b.iP);
    i.useEffect(() => {
        B &&
            null != k &&
            c.Z.wait(() => {
                (0, d.GZ)(k);
            });
    }, [B, k]);
    let ee = i.useCallback(async () => {
            let n, i;
            if ((s()(null != e, 'No subscription listing'), s()(null != U, 'No subscription plan'), s()(B, 'Cannot purchase this unpublished plan'), (null == Y ? void 0 : Y.active_trial) != null)) {
                let r = await K(t, e.id, Y.active_trial.id);
                if ((null == r ? void 0 : r.is_eligible) === !0) {
                    var a;
                    n = null == Y ? void 0 : null === (a = Y.active_trial) || void 0 === a ? void 0 : a.id;
                } else i = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER;
            }
            (0, S.Z)({
                activeSubscription: H,
                analyticsSubscriptionType: O.NYc.GUILD,
                trialId: n,
                trialFooterMessageOverride:
                    (null == Y ? void 0 : Y.active_trial) != null
                        ? Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
                              buttonText: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
                              interval: (0, T.iG)(U),
                              days: 1,
                              contactLink: O.EYA.CONTACT,
                              cancelSubscriptionArticle: g.Z.getArticleURL(O.BhN.ROLE_SUBSCRIPTION_CANCEL),
                              helpdeskArticle: g.Z.getArticleURL(O.BhN.ROLE_SUBSCRIPTION_TRIAL),
                              paidServiceTermsArticle: g.Z.getArticleURL(O.BhN.PAID_TERMS),
                              tierName: U.name
                          })
                        : void 0,
                analyticsLocations: J,
                analyticsLocation: l,
                renderHeader: (n, i, l) =>
                    (0, r.jsx)(L.h, {
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
                        ? (0, r.jsx)(A.m, {
                              listing: e,
                              onClose: i,
                              guildId: t
                          })
                        : (0, r.jsx)(L.x, {
                              listing: e,
                              onClose: i,
                              guildId: t
                          }),
                reviewWarningMessage: i
            });
        }, [B, e, U, H, z, t, J, l, K, Y, $]),
        et = i.useCallback(() => {
            (0, f.hk)(t);
        }, [t]);
    return {
        openModal: M ? et : ee,
        canOpenModal: !P && null != F && G && !j && !V && !q && !X,
        cannotOpenReason: a,
        isCheckingTrialEligibility: W
    };
};
