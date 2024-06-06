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
  p = n("509545"),
  g = n("55563"),
  h = n("551428"),
  E = n("630388"),
  _ = n("270144"),
  C = n("171246"),
  I = n("689011"),
  m = n("714441"),
  T = n("981631"),
  v = n("689938");
t.default = e => {
  var t;
  let n, {
      guildId: l,
      groupListingId: R,
      analyticsLocation: N,
      showBenefitsFirst: O,
      skuId: b,
      onComplete: M,
      forcesTransitionToGuild: A
    } = e,
    L = (0, o.useStateFromStores)([g.default], () => null != b ? g.default.get(b) : void 0, [b]),
    x = (0, o.useStateFromStores)([h.default], () => null != b ? h.default.getForSKU(b) : void 0, [b]),
    P = (0, o.useStateFromStores)([p.default], () => null != b ? p.default.getForSKU(b) : void 0, [b]),
    w = null != P ? P[0] : void 0,
    D = null == L ? void 0 : L.applicationId,
    G = (null == x ? void 0 : x.published) === !0 && null != L && (0, E.hasFlag)(L.flags, T.SKUFlags.AVAILABLE),
    y = null == w ? void 0 : w.skuId,
    F = (0, _.useApplication)(D),
    U = (0, _.useSubscriptionListingsForGroup)(R, {
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
    W = null != L && (0, C.isApplicationUserSubscription)(L.flags),
    Z = null != k && k.userId === (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    K = null == k || Z,
    z = null == k || U.length > 1,
    Y = null != l || H.length > 0,
    J = W && Z,
    X = null != w && null != F && K && z && (Y || W) && !J;
  return K ? Y ? J && null != w && (n = v.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: w.name
  })) : n = v.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = v.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, i.useEffect(() => {
    G && null != y && V && !(p.default.isFetchingForSKU(y) || p.default.isLoadedForSKU(y)) && u.default.wait(() => {
      (0, a.fetchSubscriptionPlansForSKU)(y)
    })
  }, [G, y, V]), {
    openModal: i.useCallback(() => {
      s()(null != F, "No application"), s()(null != w, "No subscription plan"), s()(G, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, f.openApplicationPaymentModal)({
          activeSubscription: B,
          analyticsSubscriptionType: T.SubscriptionTypes.APPLICATION,
          analyticsLocations: j,
          analyticsLocation: N,
          renderHeader: (e, t, n) => (0, r.jsx)(I.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: w.id,
          skuId: w.skuId,
          guildId: l,
          eligibleApplicationSubscriptionGuilds: H,
          planGroup: U,
          applicationId: F.id,
          showBenefitsFirst: O,
          onComplete: M,
          forcesTransitionToGuild: A
        })
      };
      !Y && W ? (0, m.confirmNoSharedServerSubscribeWarningModal)({
        applicationName: F.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [G, w, U, F, l, Y, W, j, N, B, O, H, M, A]),
    canOpenModal: X,
    cannotOpenReason: n
  }
}