var i = t(735250),
  l = t(470079),
  s = t(512722),
  r = t.n(s),
  a = t(913527),
  o = t.n(a),
  u = t(442837),
  c = t(570140),
  d = t(821849),
  _ = t(131388),
  I = t(906732),
  E = t(305325),
  C = t(246364),
  m = t(937111),
  S = t(281956),
  N = t(41776),
  T = t(738737),
  L = t(509545),
  h = t(63063),
  R = t(817460),
  f = t(584825),
  g = t(697227),
  v = t(934826),
  x = t(896083),
  O = t(939872),
  A = t(265985),
  M = t(293810),
  j = t(981631),
  Z = t(689938);
n.Z = (e, n, t, s) => {
  let a;
  let p = (0, u.e7)([N.Z], () => N.Z.isLurking(n)),
    U = (0, S.J)(n),
    P = (0, u.e7)([m.Z], () => null != n ? m.Z.getRequest(n) : null),
    B = (null == P ? void 0 : P.applicationStatus) === C.wB.SUBMITTED,
    D = null == e ? void 0 : e.subscription_plans[0],
    b = null == D ? void 0 : D.id,
    G = (null == e ? void 0 : e.published) === !0,
    H = null == D ? void 0 : D.sku_id,
    y = (0, u.e7)([L.Z], () => null != b ? L.Z.get(b) : null),
    {
      activeSubscription: k,
      activeSubscriptionPlanFromStore: F
    } = (0, v.Z)(t),
    w = null == k || null != F,
    V = (0, f._k)(t, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    z = (0, g.V)(k),
    W = null != z,
    Q = (null == k ? void 0 : k.trialId) != null,
    {
      loading: q,
      getTrialPurchaseEligibility: Y
    } = (0, x.F)(),
    K = (0, f.oC)(null == e ? void 0 : e.id),
    {
      analyticsLocations: J
    } = (0, I.ZP)(),
    X = (null == k ? void 0 : k.paymentGateway) === j.gg$.APPLE_PARTNER;
  B ? a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : p && !U ? a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : z === b ? a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({
    changeDate: null != k ? o()(k.currentPeriodEnd).format("MMM DD, YYYY") : ""
  }) : W ? a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION : Q ? a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL : X && (a = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
  let $ = (0, _.Z)(M.iP);
  l.useEffect(() => {
    G && null != H && c.Z.wait(() => {
      (0, d.GZ)(H)
    })
  }, [G, H]);
  let ee = l.useCallback(async () => {
      let t, l;
      if (r()(null != e, "No subscription listing"), r()(null != D, "No subscription plan"), r()(G, "Cannot purchase this unpublished plan"), (null == K ? void 0 : K.active_trial) != null) {
        let i = await Y(n, e.id, K.active_trial.id);
        if ((null == i ? void 0 : i.is_eligible) === !0) {
          var a;
          t = null == K ? void 0 : null === (a = K.active_trial) || void 0 === a ? void 0 : a.id
        } else l = Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER
      }(0, T.Z)({
        activeSubscription: k,
        analyticsSubscriptionType: j.NYc.GUILD,
        trialId: t,
        trialFooterMessageOverride: (null == K ? void 0 : K.active_trial) != null ? Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
          buttonText: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
          interval: (0, R.iG)(D),
          days: 1,
          contactLink: j.EYA.CONTACT,
          cancelSubscriptionArticle: h.Z.getArticleURL(j.BhN.ROLE_SUBSCRIPTION_CANCEL),
          helpdeskArticle: h.Z.getArticleURL(j.BhN.ROLE_SUBSCRIPTION_TRIAL),
          paidServiceTermsArticle: h.Z.getArticleURL(j.BhN.PAID_TERMS),
          tierName: D.name
        }) : void 0,
        analyticsLocations: J,
        analyticsLocation: s,
        renderHeader: (t, l, s) => (0, i.jsx)(A.h, {
          onClose: l,
          listing: e,
          step: s,
          guildId: n
        }),
        initialPlanId: D.id,
        skuId: D.sku_id,
        planGroup: V,
        renderPurchaseConfirmation: (t, l) => $ ? (0, i.jsx)(O.m, {
          listing: e,
          onClose: l,
          guildId: n
        }) : (0, i.jsx)(A.x, {
          listing: e,
          onClose: l,
          guildId: n
        }),
        reviewWarningMessage: l
      })
    }, [G, e, D, k, V, n, J, s, Y, K, $]),
    en = l.useCallback(() => {
      (0, E.hk)(n)
    }, [n]);
  return {
    openModal: U ? en : ee,
    canOpenModal: !p && null != y && w && !B && !W && !Q && !X,
    cannotOpenReason: a,
    isCheckingTrialEligibility: q
  }
}