"use strict";
n.r(t);
var i = n("735250"),
  a = n("470079"),
  s = n("512722"),
  r = n.n(s),
  l = n("913527"),
  u = n.n(l),
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
  h = n("934826"),
  L = n("896083"),
  A = n("939872"),
  O = n("265985"),
  M = n("293810"),
  x = n("981631"),
  U = n("689938");
t.default = (e, t, n, s) => {
  let l;
  let D = (0, o.useStateFromStores)([C.default], () => C.default.isLurking(t)),
    P = (0, S.useShowMemberVerificationGate)(t),
    y = (0, o.useStateFromStores)([I.default], () => null != t ? I.default.getRequest(t) : null),
    j = (null == y ? void 0 : y.applicationStatus) === T.GuildJoinRequestApplicationStatuses.SUBMITTED,
    B = null == e ? void 0 : e.subscription_plans[0],
    b = null == B ? void 0 : B.id,
    F = (null == e ? void 0 : e.published) === !0,
    G = null == B ? void 0 : B.sku_id,
    H = (0, o.useStateFromStores)([N.default], () => null != b ? N.default.get(b) : null),
    {
      activeSubscription: w,
      activeSubscriptionPlanFromStore: k
    } = (0, h.default)(n),
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
    } = (0, L.useGetTrialPurchaseEligibility)(),
    K = (0, g.useSubscriptionTrial)(null == e ? void 0 : e.id),
    {
      analyticsLocations: J
    } = (0, E.default)(),
    X = (null == w ? void 0 : w.paymentGateway) === x.PaymentGateways.APPLE_PARTNER;
  j ? l = U.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : D && !P ? l = U.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : W === b ? l = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({
    changeDate: null != w ? u()(w.currentPeriodEnd).format("MMM DD, YYYY") : ""
  }) : Y ? l = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION : q ? l = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL : X && (l = U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
  let $ = (0, f.default)(M.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY);
  a.useEffect(() => {
    F && null != G && d.default.wait(() => {
      (0, c.fetchSubscriptionPlansForSKU)(G)
    })
  }, [F, G]);
  let ee = a.useCallback(async () => {
      let n, a;
      if (r()(null != e, "No subscription listing"), r()(null != B, "No subscription plan"), r()(F, "Cannot purchase this unpublished plan"), (null == K ? void 0 : K.active_trial) != null) {
        let i = await z(t, e.id, K.active_trial.id);
        if ((null == i ? void 0 : i.is_eligible) === !0) {
          var l;
          n = null == K ? void 0 : null === (l = K.active_trial) || void 0 === l ? void 0 : l.id
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
    }, [F, e, B, w, V, t, J, s, z, K, $]),
    et = a.useCallback(() => {
      (0, _.openMemberVerificationModal)(t)
    }, [t]);
  return {
    openModal: P ? et : ee,
    canOpenModal: !D && null != H && Q && !j && !Y && !q && !X,
    cannotOpenReason: l,
    isCheckingTrialEligibility: Z
  }
}