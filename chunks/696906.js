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
  h = n("551428"),
  E = n("630388"),
  _ = n("270144"),
  I = n("171246"),
  C = n("689011"),
  m = n("714441"),
  T = n("981631"),
  R = n("689938");
t.default = e => {
  var t;
  let n, {
      guildId: l,
      groupListingId: v,
      analyticsLocation: M,
      showBenefitsFirst: N,
      skuId: O,
      onComplete: A,
      forcesTransitionToGuild: b
    } = e,
    L = (0, o.useStateFromStores)([p.default], () => null != O ? p.default.get(O) : void 0, [O]),
    P = (0, o.useStateFromStores)([h.default], () => null != O ? h.default.getForSKU(O) : void 0, [O]),
    x = (0, o.useStateFromStores)([g.default], () => null != O ? g.default.getForSKU(O) : void 0, [O]),
    w = null != x ? x[0] : void 0,
    D = null == L ? void 0 : L.applicationId,
    G = (null == P ? void 0 : P.published) === !0 && null != L && (0, E.hasFlag)(L.flags, T.SKUFlags.AVAILABLE),
    y = null == w ? void 0 : w.skuId,
    U = (0, _.useApplication)(D),
    F = (0, _.useSubscriptionListingsForGroup)(v, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: j
    } = (0, c.default)(),
    {
      activeSubscription: B,
      activeEntitlement: k
    } = (0, _.useActiveSubscriptionListingForApplication)(D, l),
    H = (0, _.useEligibleApplicationSubscriptionGuilds)(D, l),
    V = (0, d.default)(),
    W = null != L && (0, I.isApplicationUserSubscription)(L.flags),
    Z = null != k && k.userId === (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    z = null == k || Z,
    K = null == k || F.length > 1,
    Y = null != l || H.length > 0,
    J = W && Z,
    X = null != w && null != U && z && K && (Y || W) && !J;
  return z ? Y ? J && null != w && (n = R.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: w.name
  })) : n = R.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = R.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, i.useEffect(() => {
    G && null != y && V && !(g.default.isFetchingForSKU(y) || g.default.isLoadedForSKU(y)) && u.default.wait(() => {
      (0, a.fetchSubscriptionPlansForSKU)(y)
    })
  }, [G, y, V]), {
    openModal: i.useCallback(() => {
      s()(null != U, "No application"), s()(null != w, "No subscription plan"), s()(G, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, f.openApplicationPaymentModal)({
          activeSubscription: B,
          analyticsSubscriptionType: T.SubscriptionTypes.APPLICATION,
          analyticsLocations: j,
          analyticsLocation: M,
          renderHeader: (e, t, n) => (0, r.jsx)(C.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: w.id,
          skuId: w.skuId,
          guildId: l,
          eligibleApplicationSubscriptionGuilds: H,
          planGroup: F,
          applicationId: U.id,
          showBenefitsFirst: N,
          onComplete: A,
          forcesTransitionToGuild: b
        })
      };
      !Y && W ? (0, m.confirmNoSharedServerSubscribeWarningModal)({
        applicationName: U.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [G, w, F, U, l, Y, W, j, M, B, N, H, A, b]),
    canOpenModal: X,
    cannotOpenReason: n
  }
}