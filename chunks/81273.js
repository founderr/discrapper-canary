"use strict";
s.r(t);
var n = s("735250"),
  i = s("470079"),
  l = s("512722"),
  a = s.n(l),
  r = s("913527"),
  u = s.n(r),
  o = s("442837"),
  d = s("570140"),
  c = s("821849"),
  f = s("131388"),
  _ = s("906732"),
  I = s("305325"),
  C = s("246364"),
  m = s("937111"),
  E = s("281956"),
  S = s("41776"),
  T = s("738737"),
  N = s("509545"),
  g = s("63063"),
  L = s("817460"),
  R = s("584825"),
  h = s("697227"),
  p = s("934826"),
  v = s("896083"),
  x = s("939872"),
  O = s("265985"),
  A = s("293810"),
  M = s("981631"),
  U = s("689938");
t.default = (e, t, s, l) => {
  let r;
  let j = (0, o.useStateFromStores)([S.default], () => S.default.isLurking(t)),
    P = (0, E.useShowMemberVerificationGate)(t),
    D = (0, o.useStateFromStores)([m.default], () => null != t ? m.default.getRequest(t) : null),
    b = (null == D ? void 0 : D.applicationStatus) === C.GuildJoinRequestApplicationStatuses.SUBMITTED,
    B = null == e ? void 0 : e.subscription_plans[0],
    y = null == B ? void 0 : B.id,
    H = (null == e ? void 0 : e.published) === !0,
    F = null == B ? void 0 : B.sku_id,
    G = (0, o.useStateFromStores)([N.default], () => null != y ? N.default.get(y) : null),
    {
      activeSubscription: k,
      activeSubscriptionPlanFromStore: w
    } = (0, p.default)(s),
    Q = null == k || null != w,
    V = (0, R.useSubscriptionListingsForGroup)(s, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    q = (0, h.getRoleSubscriptionMutationPlanId)(k),
    W = null != q,
    Z = (null == k ? void 0 : k.trialId) != null,
    {
      loading: z,
      getTrialPurchaseEligibility: Y
    } = (0, v.useGetTrialPurchaseEligibility)(),
    K = (0, R.useSubscriptionTrial)(null == e ? void 0 : e.id),
    {
      analyticsLocations: J
    } = (0, _.default)(),
    X = (null == k ? void 0 : k.paymentGateway) === M.PaymentGateways.APPLE_PARTNER;
  b ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : j && !P ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : q === y ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({
    changeDate: null != k ? u()(k.currentPeriodEnd).format("MMM DD, YYYY") : ""
  }) : W ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION : Z ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL : X && (r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
  let $ = (0, f.default)(A.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY);
  i.useEffect(() => {
    H && null != F && d.default.wait(() => {
      (0, c.fetchSubscriptionPlansForSKU)(F)
    })
  }, [H, F]);
  let ee = i.useCallback(async () => {
      let s, i;
      if (a()(null != e, "No subscription listing"), a()(null != B, "No subscription plan"), a()(H, "Cannot purchase this unpublished plan"), (null == K ? void 0 : K.active_trial) != null) {
        let n = await Y(t, e.id, K.active_trial.id);
        if ((null == n ? void 0 : n.is_eligible) === !0) {
          var r;
          s = null == K ? void 0 : null === (r = K.active_trial) || void 0 === r ? void 0 : r.id
        } else i = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER
      }(0, T.default)({
        activeSubscription: k,
        analyticsSubscriptionType: M.SubscriptionTypes.GUILD,
        trialId: s,
        trialFooterMessageOverride: (null == K ? void 0 : K.active_trial) != null ? U.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
          buttonText: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
          interval: (0, L.formatPlanIntervalDuration)(B),
          days: 1,
          contactLink: M.MarketingURLs.CONTACT,
          cancelSubscriptionArticle: g.default.getArticleURL(M.HelpdeskArticles.ROLE_SUBSCRIPTION_CANCEL),
          helpdeskArticle: g.default.getArticleURL(M.HelpdeskArticles.ROLE_SUBSCRIPTION_TRIAL),
          paidServiceTermsArticle: g.default.getArticleURL(M.HelpdeskArticles.PAID_TERMS),
          tierName: B.name
        }) : void 0,
        analyticsLocations: J,
        analyticsLocation: l,
        renderHeader: (s, i, l) => (0, n.jsx)(O.Header, {
          onClose: i,
          listing: e,
          step: l,
          guildId: t
        }),
        initialPlanId: B.id,
        skuId: B.sku_id,
        planGroup: V,
        renderPurchaseConfirmation: (s, i) => $ ? (0, n.jsx)(x.PurchaseConfirmationLite, {
          listing: e,
          onClose: i,
          guildId: t
        }) : (0, n.jsx)(O.PurchaseConfirmation, {
          listing: e,
          onClose: i,
          guildId: t
        }),
        reviewWarningMessage: i
      })
    }, [H, e, B, k, V, t, J, l, Y, K, $]),
    et = i.useCallback(() => {
      (0, I.openMemberVerificationModal)(t)
    }, [t]);
  return {
    openModal: P ? et : ee,
    canOpenModal: !j && null != G && Q && !b && !W && !Z && !X,
    cannotOpenReason: r,
    isCheckingTrialEligibility: z
  }
}