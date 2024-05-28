"use strict";
n.r(t);
var s = n("735250"),
  a = n("470079"),
  i = n("512722"),
  l = n.n(i),
  r = n("913527"),
  u = n.n(r),
  o = n("442837"),
  d = n("570140"),
  c = n("821849"),
  E = n("131388"),
  f = n("906732"),
  _ = n("305325"),
  T = n("246364"),
  I = n("937111"),
  S = n("281956"),
  m = n("41776"),
  C = n("738737"),
  N = n("509545"),
  R = n("63063"),
  g = n("817460"),
  v = n("584825"),
  L = n("697227"),
  h = n("934826"),
  p = n("896083"),
  M = n("939872"),
  O = n("265985"),
  A = n("293810"),
  x = n("981631"),
  U = n("689938");
t.default = (e, t, n, i) => {
  let r;
  let D = (0, o.useStateFromStores)([m.default], () => m.default.isLurking(t)),
    P = (0, S.useShowMemberVerificationGate)(t),
    j = (0, o.useStateFromStores)([I.default], () => null != t ? I.default.getRequest(t) : null),
    B = (null == j ? void 0 : j.applicationStatus) === T.GuildJoinRequestApplicationStatuses.SUBMITTED,
    b = null == e ? void 0 : e.subscription_plans[0],
    y = null == b ? void 0 : b.id,
    G = (null == e ? void 0 : e.published) === !0,
    F = null == b ? void 0 : b.sku_id,
    H = (0, o.useStateFromStores)([N.default], () => null != y ? N.default.get(y) : null),
    {
      activeSubscription: w,
      activeSubscriptionPlanFromStore: k
    } = (0, h.default)(n),
    Q = null == w || null != k,
    V = (0, v.useSubscriptionListingsForGroup)(n, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    W = (0, L.getRoleSubscriptionMutationPlanId)(w),
    q = null != W,
    Y = (null == w ? void 0 : w.trialId) != null,
    {
      loading: Z,
      getTrialPurchaseEligibility: z
    } = (0, p.useGetTrialPurchaseEligibility)(),
    K = (0, v.useSubscriptionTrial)(null == e ? void 0 : e.id),
    {
      analyticsLocations: J
    } = (0, f.default)(),
    X = (null == w ? void 0 : w.paymentGateway) === x.PaymentGateways.APPLE_PARTNER;
  B ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : D && !P ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : W === y ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({
    changeDate: null != w ? u()(w.currentPeriodEnd).format("MMM DD, YYYY") : ""
  }) : q ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION : Y ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL : X && (r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
  let $ = (0, E.default)(A.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY);
  a.useEffect(() => {
    G && null != F && d.default.wait(() => {
      (0, c.fetchSubscriptionPlansForSKU)(F)
    })
  }, [G, F]);
  let ee = a.useCallback(async () => {
      let n, a;
      if (l()(null != e, "No subscription listing"), l()(null != b, "No subscription plan"), l()(G, "Cannot purchase this unpublished plan"), (null == K ? void 0 : K.active_trial) != null) {
        let s = await z(t, e.id, K.active_trial.id);
        if ((null == s ? void 0 : s.is_eligible) === !0) {
          var r;
          n = null == K ? void 0 : null === (r = K.active_trial) || void 0 === r ? void 0 : r.id
        } else a = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER
      }(0, C.default)({
        activeSubscription: w,
        analyticsSubscriptionType: x.SubscriptionTypes.GUILD,
        trialId: n,
        trialFooterMessageOverride: (null == K ? void 0 : K.active_trial) != null ? U.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
          buttonText: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
          interval: (0, g.formatPlanIntervalDuration)(b),
          days: 1,
          contactLink: x.MarketingURLs.CONTACT,
          cancelSubscriptionArticle: R.default.getArticleURL(x.HelpdeskArticles.ROLE_SUBSCRIPTION_CANCEL),
          helpdeskArticle: R.default.getArticleURL(x.HelpdeskArticles.ROLE_SUBSCRIPTION_TRIAL),
          paidServiceTermsArticle: R.default.getArticleURL(x.HelpdeskArticles.PAID_TERMS),
          tierName: b.name
        }) : void 0,
        analyticsLocations: J,
        analyticsLocation: i,
        renderHeader: (n, a, i) => (0, s.jsx)(O.Header, {
          onClose: a,
          listing: e,
          step: i,
          guildId: t
        }),
        initialPlanId: b.id,
        skuId: b.sku_id,
        planGroup: V,
        renderPurchaseConfirmation: (n, a) => $ ? (0, s.jsx)(M.PurchaseConfirmationLite, {
          listing: e,
          onClose: a,
          guildId: t
        }) : (0, s.jsx)(O.PurchaseConfirmation, {
          listing: e,
          onClose: a,
          guildId: t
        }),
        reviewWarningMessage: a
      })
    }, [G, e, b, w, V, t, J, i, z, K, $]),
    et = a.useCallback(() => {
      (0, _.openMemberVerificationModal)(t)
    }, [t]);
  return {
    openModal: P ? et : ee,
    canOpenModal: !D && null != H && Q && !B && !q && !Y && !X,
    cannotOpenReason: r,
    isCheckingTrialEligibility: Z
  }
}