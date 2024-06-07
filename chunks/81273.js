"use strict";
n.r(t);
var i = n("735250"),
  a = n("470079"),
  s = n("512722"),
  l = n.n(s),
  r = n("913527"),
  u = n.n(r),
  o = n("442837"),
  d = n("570140"),
  c = n("821849"),
  f = n("131388"),
  E = n("906732"),
  _ = n("305325"),
  T = n("246364"),
  I = n("937111"),
  S = n("281956"),
  C = n("41776"),
  m = n("738737"),
  N = n("509545"),
  R = n("63063"),
  v = n("817460"),
  g = n("584825"),
  p = n("697227"),
  L = n("934826"),
  h = n("896083"),
  A = n("939872"),
  O = n("265985"),
  M = n("293810"),
  x = n("981631"),
  U = n("689938");
t.default = (e, t, n, s) => {
  let r;
  let D = (0, o.useStateFromStores)([C.default], () => C.default.isLurking(t)),
    P = (0, S.useShowMemberVerificationGate)(t),
    j = (0, o.useStateFromStores)([I.default], () => null != t ? I.default.getRequest(t) : null),
    y = (null == j ? void 0 : j.applicationStatus) === T.GuildJoinRequestApplicationStatuses.SUBMITTED,
    B = null == e ? void 0 : e.subscription_plans[0],
    b = null == B ? void 0 : B.id,
    G = (null == e ? void 0 : e.published) === !0,
    F = null == B ? void 0 : B.sku_id,
    H = (0, o.useStateFromStores)([N.default], () => null != b ? N.default.get(b) : null),
    {
      activeSubscription: w,
      activeSubscriptionPlanFromStore: k
    } = (0, L.default)(n),
    Q = null == w || null != k,
    V = (0, g.useSubscriptionListingsForGroup)(n, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    W = (0, p.getRoleSubscriptionMutationPlanId)(w),
    Y = null != W,
    q = (null == w ? void 0 : w.trialId) != null,
    {
      loading: Z,
      getTrialPurchaseEligibility: z
    } = (0, h.useGetTrialPurchaseEligibility)(),
    K = (0, g.useSubscriptionTrial)(null == e ? void 0 : e.id),
    {
      analyticsLocations: J
    } = (0, E.default)(),
    X = (null == w ? void 0 : w.paymentGateway) === x.PaymentGateways.APPLE_PARTNER;
  y ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : D && !P ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : W === b ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({
    changeDate: null != w ? u()(w.currentPeriodEnd).format("MMM DD, YYYY") : ""
  }) : Y ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION : q ? r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL : X && (r = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
  let $ = (0, f.default)(M.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY);
  a.useEffect(() => {
    G && null != F && d.default.wait(() => {
      (0, c.fetchSubscriptionPlansForSKU)(F)
    })
  }, [G, F]);
  let ee = a.useCallback(async () => {
      let n, a;
      if (l()(null != e, "No subscription listing"), l()(null != B, "No subscription plan"), l()(G, "Cannot purchase this unpublished plan"), (null == K ? void 0 : K.active_trial) != null) {
        let i = await z(t, e.id, K.active_trial.id);
        if ((null == i ? void 0 : i.is_eligible) === !0) {
          var r;
          n = null == K ? void 0 : null === (r = K.active_trial) || void 0 === r ? void 0 : r.id
        } else a = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER
      }(0, m.default)({
        activeSubscription: w,
        analyticsSubscriptionType: x.SubscriptionTypes.GUILD,
        trialId: n,
        trialFooterMessageOverride: (null == K ? void 0 : K.active_trial) != null ? U.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
          buttonText: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
          interval: (0, v.formatPlanIntervalDuration)(B),
          days: 1,
          contactLink: x.MarketingURLs.CONTACT,
          cancelSubscriptionArticle: R.default.getArticleURL(x.HelpdeskArticles.ROLE_SUBSCRIPTION_CANCEL),
          helpdeskArticle: R.default.getArticleURL(x.HelpdeskArticles.ROLE_SUBSCRIPTION_TRIAL),
          paidServiceTermsArticle: R.default.getArticleURL(x.HelpdeskArticles.PAID_TERMS),
          tierName: B.name
        }) : void 0,
        analyticsLocations: J,
        analyticsLocation: s,
        renderHeader: (n, a, s) => (0, i.jsx)(O.Header, {
          onClose: a,
          listing: e,
          step: s,
          guildId: t
        }),
        initialPlanId: B.id,
        skuId: B.sku_id,
        planGroup: V,
        renderPurchaseConfirmation: (n, a) => $ ? (0, i.jsx)(A.PurchaseConfirmationLite, {
          listing: e,
          onClose: a,
          guildId: t
        }) : (0, i.jsx)(O.PurchaseConfirmation, {
          listing: e,
          onClose: a,
          guildId: t
        }),
        reviewWarningMessage: a
      })
    }, [G, e, B, w, V, t, J, s, z, K, $]),
    et = a.useCallback(() => {
      (0, _.openMemberVerificationModal)(t)
    }, [t]);
  return {
    openModal: P ? et : ee,
    canOpenModal: !D && null != H && Q && !y && !Y && !q && !X,
    cannotOpenReason: r,
    isCheckingTrialEligibility: Z
  }
}