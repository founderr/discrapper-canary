"use strict";
n.r(t), n("789020");
var r = n("735250"),
  i = n("470079"),
  l = n("512722"),
  s = n.n(l),
  o = n("442837"),
  u = n("570140"),
  a = n("821849"),
  c = n("906732"),
  d = n("887706"),
  f = n("724870"),
  S = n("594174"),
  g = n("509545"),
  p = n("55563"),
  E = n("551428"),
  _ = n("630388"),
  h = n("270144"),
  I = n("171246"),
  C = n("689011"),
  T = n("714441"),
  m = n("981631"),
  R = n("689938");
t.default = e => {
  var t;
  let n, {
      guildId: l,
      groupListingId: N,
      analyticsLocation: v,
      showBenefitsFirst: O,
      skuId: A,
      onComplete: M,
      forcesTransitionToGuild: L
    } = e,
    b = (0, o.useStateFromStores)([p.default], () => null != A ? p.default.get(A) : void 0, [A]),
    P = (0, o.useStateFromStores)([E.default], () => null != A ? E.default.getForSKU(A) : void 0, [A]),
    x = (0, o.useStateFromStores)([g.default], () => null != A ? g.default.getForSKU(A) : void 0, [A]),
    w = null != x ? x[0] : void 0,
    D = null == b ? void 0 : b.applicationId,
    G = (null == P ? void 0 : P.published) === !0 && null != b && (0, _.hasFlag)(b.flags, m.SKUFlags.AVAILABLE),
    U = null == w ? void 0 : w.skuId,
    F = (0, h.useApplication)(D),
    y = (0, h.useSubscriptionListingsForGroup)(N, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: j
    } = (0, c.default)(),
    {
      activeSubscription: B,
      activeEntitlement: k
    } = (0, h.useActiveSubscriptionListingForApplication)(D, l),
    H = (0, h.useEligibleApplicationSubscriptionGuilds)(D, l),
    V = (0, d.default)(),
    W = null != b && (0, I.isApplicationUserSubscription)(b.flags),
    Z = null != k && k.userId === (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    K = null == k || Z,
    z = null == k || y.length > 1,
    Y = null != l || H.length > 0,
    J = W && Z,
    X = null != w && null != F && K && z && (Y || W) && !J;
  return K ? Y ? J && null != w && (n = R.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: w.name
  })) : n = R.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = R.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, i.useEffect(() => {
    G && null != U && V && !(g.default.isFetchingForSKU(U) || g.default.isLoadedForSKU(U)) && u.default.wait(() => {
      (0, a.fetchSubscriptionPlansForSKU)(U)
    })
  }, [G, U, V]), {
    openModal: i.useCallback(() => {
      s()(null != F, "No application"), s()(null != w, "No subscription plan"), s()(G, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, f.openApplicationPaymentModal)({
          activeSubscription: B,
          analyticsSubscriptionType: m.SubscriptionTypes.APPLICATION,
          analyticsLocations: j,
          analyticsLocation: v,
          renderHeader: (e, t, n) => (0, r.jsx)(C.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: w.id,
          skuId: w.skuId,
          guildId: l,
          eligibleApplicationSubscriptionGuilds: H,
          planGroup: y,
          applicationId: F.id,
          showBenefitsFirst: O,
          onComplete: M,
          forcesTransitionToGuild: L
        })
      };
      !Y && W ? (0, T.confirmNoSharedServerSubscribeWarningModal)({
        applicationName: F.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [G, w, y, F, l, Y, W, j, v, B, O, H, M, L]),
    canOpenModal: X,
    cannotOpenReason: n
  }
}