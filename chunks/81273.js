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
  S = n(584825),
  A = n(697227),
  M = n(934826),
  R = n(896083),
  O = n(939872),
  x = n(265985),
  v = n(293810),
  Z = n(981631),
  L = n(689938);
t.Z = (e, t, n, a) => {
  let l;
  let P = (0, c.e7)([N.Z], () => N.Z.isLurking(t)),
D = (0, h.J)(t),
b = (0, c.e7)([T.Z], () => null != t ? T.Z.getRequest(t) : null),
j = (null == b ? void 0 : b.applicationStatus) === m.wB.SUBMITTED,
U = null == e ? void 0 : e.subscription_plans[0],
y = null == U ? void 0 : U.id,
B = (null == e ? void 0 : e.published) === !0,
k = null == U ? void 0 : U.sku_id,
G = (0, c.e7)([C.Z], () => null != y ? C.Z.get(y) : null),
{
  activeSubscription: F,
  activeSubscriptionPlanFromStore: w
} = (0, M.Z)(n),
V = null == F || null != w,
H = (0, S._k)(n, {
  includeSoftDeleted: !0
}).map(e => e.subscription_plans[0].id),
Y = (0, A.V)(F),
W = null != Y,
K = (null == F ? void 0 : F.trialId) != null,
{
  loading: z,
  getTrialPurchaseEligibility: q
} = (0, R.F)(),
Q = (0, S.oC)(null == e ? void 0 : e.id),
{
  analyticsLocations: X
} = (0, E.ZP)(),
J = (null == F ? void 0 : F.paymentGateway) === Z.gg$.APPLE_PARTNER;
  j ? l = L.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : P && !D ? l = L.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_REQUIRE_APPROVED_MEMBER : Y === y ? l = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION_TO_CURRENT_LISTING.format({
changeDate: null != F ? o()(F.currentPeriodEnd).format('MMM DD, YYYY') : ''
  }) : W ? l = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_HAS_PENDING_MUTATION : K ? l = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IN_TRIAL : J && (l = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHANGE_TIER_DISABLED_IF_IAP);
  let $ = (0, _.Z)(v.iP);
  s.useEffect(() => {
B && null != k && u.Z.wait(() => {
  (0, d.GZ)(k);
});
  }, [
B,
k
  ]);
  let ee = s.useCallback(async () => {
  let n, s;
  if (r()(null != e, 'No subscription listing'), r()(null != U, 'No subscription plan'), r()(B, 'Cannot purchase this unpublished plan'), (null == Q ? void 0 : Q.active_trial) != null) {
    let i = await q(t, e.id, Q.active_trial.id);
    if ((null == i ? void 0 : i.is_eligible) === !0) {
      var l;
      n = null == Q ? void 0 : null === (l = Q.active_trial) || void 0 === l ? void 0 : l.id;
    } else
      s = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_INELIGIBLE_TRIAL_DISCLAIMER;
  }
  (0, f.Z)({
    activeSubscription: F,
    analyticsSubscriptionType: Z.NYc.GUILD,
    trialId: n,
    trialFooterMessageOverride: (null == Q ? void 0 : Q.active_trial) != null ? L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_RENEWAL_FOOTER_V2.format({
      buttonText: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SUBSCRIBE,
      interval: (0, g.iG)(U),
      days: 1,
      contactLink: Z.EYA.CONTACT,
      cancelSubscriptionArticle: p.Z.getArticleURL(Z.BhN.ROLE_SUBSCRIPTION_CANCEL),
      helpdeskArticle: p.Z.getArticleURL(Z.BhN.ROLE_SUBSCRIPTION_TRIAL),
      paidServiceTermsArticle: p.Z.getArticleURL(Z.BhN.PAID_TERMS),
      tierName: U.name
    }) : void 0,
    analyticsLocations: X,
    analyticsLocation: a,
    renderHeader: (n, s, a) => (0, i.jsx)(x.h, {
      onClose: s,
      listing: e,
      step: a,
      guildId: t
    }),
    initialPlanId: U.id,
    skuId: U.sku_id,
    planGroup: H,
    renderPurchaseConfirmation: (n, s) => $ ? (0, i.jsx)(O.m, {
      listing: e,
      onClose: s,
      guildId: t
    }) : (0, i.jsx)(x.x, {
      listing: e,
      onClose: s,
      guildId: t
    }),
    reviewWarningMessage: s
  });
}, [
  B,
  e,
  U,
  F,
  H,
  t,
  X,
  a,
  q,
  Q,
  $
]),
et = s.useCallback(() => {
  (0, I.hk)(t);
}, [t]);
  return {
openModal: D ? et : ee,
canOpenModal: !P && null != G && V && !j && !W && !K && !J,
cannotOpenReason: l,
isCheckingTrialEligibility: z
  };
};