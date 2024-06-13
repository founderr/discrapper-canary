"use strict";
n.r(t), n("789020");
var i = n("735250"),
  l = n("470079"),
  a = n("512722"),
  r = n.n(a),
  s = n("442837"),
  o = n("570140"),
  u = n("821849"),
  d = n("906732"),
  c = n("887706"),
  p = n("724870"),
  f = n("594174"),
  S = n("509545"),
  g = n("55563"),
  v = n("551428"),
  m = n("630388"),
  h = n("270144"),
  I = n("171246"),
  b = n("689011"),
  A = n("714441"),
  T = n("981631"),
  P = n("689938");
t.default = e => {
  var t;
  let n, {
      guildId: a,
      groupListingId: _,
      analyticsLocation: x,
      showBenefitsFirst: y,
      skuId: N,
      onComplete: L,
      forcesTransitionToGuild: O
    } = e,
    R = (0, s.useStateFromStores)([g.default], () => null != N ? g.default.get(N) : void 0, [N]),
    U = (0, s.useStateFromStores)([v.default], () => null != N ? v.default.getForSKU(N) : void 0, [N]),
    C = (0, s.useStateFromStores)([S.default], () => null != N ? S.default.getForSKU(N) : void 0, [N]),
    j = null != C ? C[0] : void 0,
    E = null == R ? void 0 : R.applicationId,
    F = (null == U ? void 0 : U.published) === !0 && null != R && (0, m.hasFlag)(R.flags, T.SKUFlags.AVAILABLE),
    M = null == j ? void 0 : j.skuId,
    k = (0, h.useApplication)(E),
    B = (0, h.useSubscriptionListingsForGroup)(_, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: w
    } = (0, d.default)(),
    {
      activeSubscription: D,
      activeEntitlement: K
    } = (0, h.useActiveSubscriptionListingForApplication)(E, a),
    G = (0, h.useEligibleApplicationSubscriptionGuilds)(E, a),
    H = (0, c.default)(),
    Y = null != R && (0, I.isApplicationUserSubscription)(R.flags),
    V = null != K && K.userId === (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    z = null == K || V,
    W = null == K || B.length > 1,
    Z = null != a || G.length > 0,
    q = Y && V,
    J = null != j && null != k && z && W && (Z || Y) && !q;
  return z ? Z ? q && null != j && (n = P.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: j.name
  })) : n = P.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = P.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
    F && null != M && H && !(S.default.isFetchingForSKU(M) || S.default.isLoadedForSKU(M)) && o.default.wait(() => {
      (0, u.fetchSubscriptionPlansForSKU)(M)
    })
  }, [F, M, H]), {
    openModal: l.useCallback(() => {
      r()(null != k, "No application"), r()(null != j, "No subscription plan"), r()(F, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, p.openApplicationPaymentModal)({
          activeSubscription: D,
          analyticsSubscriptionType: T.SubscriptionTypes.APPLICATION,
          analyticsLocations: w,
          analyticsLocation: x,
          renderHeader: (e, t, n) => (0, i.jsx)(b.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: j.id,
          skuId: j.skuId,
          guildId: a,
          eligibleApplicationSubscriptionGuilds: G,
          planGroup: B,
          applicationId: k.id,
          showBenefitsFirst: y,
          onComplete: L,
          forcesTransitionToGuild: O
        })
      };
      !Z && Y ? (0, A.confirmNoSharedServerSubscribeWarningModal)({
        applicationName: k.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [F, j, B, k, a, Z, Y, w, x, D, y, G, L, O]),
    canOpenModal: J,
    cannotOpenReason: n
  }
}