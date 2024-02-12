"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("884691"),
  l = s("65597"),
  n = s("465869"),
  i = s("697218"),
  r = s("701909"),
  o = s("7331"),
  d = s("616622"),
  u = s("299732"),
  c = s("365721"),
  E = s("782914"),
  _ = s("49111"),
  I = s("782340");

function T(e) {
  let t;
  let s = (0, o.useIsExpeditedOnboardingGuild)(e),
    T = null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
    f = null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE),
    S = (0, l.default)([i.default], () => {
      let t = i.default.getCurrentUser();
      return (null == e ? void 0 : e.isOwner(t)) === !0
    }),
    {
      error: m,
      loading: N,
      createEnableRequest: g,
      submittedRequest: h
    } = (0, d.default)(null == e ? void 0 : e.id),
    {
      loading: C,
      error: R,
      refresh: x,
      eligibility: L
    } = (0, u.default)(null == e ? void 0 : e.id),
    {
      isApplicationRejected: O,
      requestCooldownDuration: p
    } = (0, c.default)(L),
    A = (null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === !0,
    {
      isMonetizationReapplicationDisabled: M
    } = (0, n.useIsMonetizationReapplicationDisabled)(null == e ? void 0 : e.id),
    D = h || (null == L ? void 0 : L.isApplicationPending) === !0,
    v = (null == L ? void 0 : L.canApply) === !0,
    j = I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUIREMENTS_DESCRIPTION.format({
      faqUrl: r.default.getArticleURL(_.HelpdeskArticles.CREATOR_FAQ)
    });
  O && M ? t = !0 === T ? I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_HIGH_HARM.format({
    communityGuidelineUrl: _.MarketingURLs.GUIDELINES
  }) : I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_HIGH_HARM_ALT.format({
    communityGuidelineUrl: _.MarketingURLs.GUIDELINES
  }) : O && null != p && (t = I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_V2.format({
    requestCooldownDuration: p,
    creatorRevenuePolicyUrl: r.default.getArticleURL(_.HelpdeskArticles.CREATOR_POLICY)
  }));
  let G = s && S && !1 === f,
    U = s && !1 === T,
    P = (0, E.getCreatorMonetizationAcceptTermsCheckboxText)(),
    b = O && v && S ? I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_RESUBMIT_V2.format() : void 0;
  return a.useEffect(() => {
    G && x()
  }, [x, G]), {
    resubmittingEnableRequest: N,
    resubmissionError: m,
    isGuildOwner: S,
    createEnableRequest: g,
    resubmittedRequest: h,
    eligibilityLoading: C,
    eligibilityError: R,
    refreshEligibility: x,
    eligibility: L,
    eligibleForMonetization: v,
    isApplicationPending: D,
    hasPreviousApplicationRejection: O,
    requestRejectedNoticeText: t,
    reapplyNoticeText: b,
    showAcceptTermsFlow: U,
    wasRejectedInV1: U && (A || O),
    requirementsFinePrintText: j,
    acceptTermsCheckboxText: P
  }
}