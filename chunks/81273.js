var s = n(735250),
  i = n(470079),
  l = n(512722),
  a = n.n(l),
  r = n(913527),
  o = n.n(r),
  c = n(442837),
  u = n(570140),
  d = n(821849),
  E = n(131388),
  _ = n(906732),
  I = n(305325),
  T = n(246364),
  m = n(937111),
  N = n(281956),
  h = n(41776),
  C = n(738737),
  S = n(509545),
  A = n(63063),
  g = n(817460),
  p = n(584825),
  f = n(697227),
  R = n(934826),
  O = n(896083),
  M = n(939872),
  x = n(265985),
  v = n(293810),
  L = n(981631),
  Z = n(689938);
t.Z = (e, t, n, l) => {
  let r;
  let P = (0, c.e7)([h.Z], () => h.Z.isLurking(t)),
    D = (0, N.J)(t),
    j = (0, c.e7)([m.Z], () => null != t ? m.Z.getRequest(t) : null),
    U = (null == j ? void 0 : j.applicationStatus) === T.wB.SUBMITTED,
    b = null == e ? void 0 : e.subscription_plans[0],
    y = null == b ? void 0 : b.id,
    B = (null == e ? void 0 : e.published) === !0,
    k = null == b ? void 0 : b.sku_id,
    G = (0, c.e7)([S.Z], () => null != y ? S.Z.get(y) : null),
    {
      activeSubscription: F,
      activeSubscriptionPlanFromStore: V
    } = (0, R.Z)(n),
    w = null == F || null != V,
    H = (0, p._k)(n, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    Y = (0, f.V)(F),
    W = null != Y,
    K = (null == F ? void 0 : F.trialId) != null,
    {
      loading: z,
      getTrialPurchaseEligibility: Q
    } = (0, O.F)(),
    X = (0, p.oC)(null == e ? void 0 : e.id),
    {
      analyticsLocations: q
    } = (0, _.ZP)(),
    J = (null == F ? void 0 : F.paymentGateway) === L.gg$.APPLE_PARTNER;
  U ? r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : P && !D ? r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : Y === y ? r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({
    changeDate: null != F ? o()(F.currentPeriodEnd).format("MMM DD, YYYY") : ""
  }) : W ? r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION : K ? r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL : J && (r = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
  let $ = (0, E.Z)(v.iP);
  i.useEffect(() => {
    B && null != k && u.Z.wait(() => {
      (0, d.GZ)(k)
    })
  }, [B, k]);
  let ee = i.useCallback(async () => {
      let n, i;
      if (a()(null != e, "No subscription listing"), a()(null != b, "No subscription plan"), a()(B, "Cannot purchase this unpublished plan"), (null == X ? void 0 : X.active_trial) != null) {
        let s = await Q(t, e.id, X.active_trial.id);
        if ((null == s ? void 0 : s.is_eligible) === !0) {
          var r;
          n = null == X ? void 0 : null === (r = X.active_trial) || void 0 === r ? void 0 : r.id
        } else i = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER
      }(0, C.Z)({
        activeSubscription: F,
        analyticsSubscriptionType: L.NYc.GUILD,
        trialId: n,
        trialFooterMessageOverride: (null == X ? void 0 : X.active_trial) != null ? Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
          buttonText: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
          interval: (0, g.iG)(b),
          days: 1,
          contactLink: L.EYA.CONTACT,
          cancelSubscriptionArticle: A.Z.getArticleURL(L.BhN.ROLE_SUBSCRIPTION_CANCEL),
          helpdeskArticle: A.Z.getArticleURL(L.BhN.ROLE_SUBSCRIPTION_TRIAL),
          paidServiceTermsArticle: A.Z.getArticleURL(L.BhN.PAID_TERMS),
          tierName: b.name
        }) : void 0,
        analyticsLocations: q,
        analyticsLocation: l,
        renderHeader: (n, i, l) => (0, s.jsx)(x.h, {
          onClose: i,
          listing: e,
          step: l,
          guildId: t
        }),
        initialPlanId: b.id,
        skuId: b.sku_id,
        planGroup: H,
        renderPurchaseConfirmation: (n, i) => $ ? (0, s.jsx)(M.m, {
          listing: e,
          onClose: i,
          guildId: t
        }) : (0, s.jsx)(x.x, {
          listing: e,
          onClose: i,
          guildId: t
        }),
        reviewWarningMessage: i
      })
    }, [B, e, b, F, H, t, q, l, Q, X, $]),
    et = i.useCallback(() => {
      (0, I.hk)(t)
    }, [t]);
  return {
    openModal: D ? et : ee,
    canOpenModal: !P && null != G && w && !U && !W && !K && !J,
    cannotOpenReason: r,
    isCheckingTrialEligibility: z
  }
}