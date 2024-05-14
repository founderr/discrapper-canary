"use strict";
n.r(t), n("789020");
var i = n("735250"),
  r = n("470079"),
  a = n("512722"),
  s = n.n(a),
  o = n("442837"),
  l = n("570140"),
  u = n("821849"),
  d = n("906732"),
  _ = n("887706"),
  c = n("724870"),
  E = n("594174"),
  I = n("509545"),
  T = n("55563"),
  f = n("551428"),
  S = n("630388"),
  h = n("270144"),
  A = n("171246"),
  m = n("689011"),
  N = n("714441"),
  p = n("981631"),
  O = n("689938");
t.default = e => {
  var t;
  let n, {
      guildId: a,
      groupListingId: C,
      analyticsLocation: R,
      showBenefitsFirst: g,
      skuId: L,
      onComplete: v,
      forcesTransitionToGuild: D
    } = e,
    M = (0, o.useStateFromStores)([T.default], () => null != L ? T.default.get(L) : void 0, [L]),
    y = (0, o.useStateFromStores)([f.default], () => null != L ? f.default.getForSKU(L) : void 0, [L]),
    P = (0, o.useStateFromStores)([I.default], () => null != L ? I.default.getForSKU(L) : void 0, [L]),
    U = null != P ? P[0] : void 0,
    b = null == M ? void 0 : M.applicationId,
    G = (null == y ? void 0 : y.published) === !0 && null != M && (0, S.hasFlag)(M.flags, p.SKUFlags.AVAILABLE),
    w = null == U ? void 0 : U.skuId,
    B = (0, h.useApplication)(b),
    k = (0, h.useSubscriptionListingsForGroup)(C, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: V
    } = (0, d.default)(),
    {
      activeSubscription: x,
      activeEntitlement: F
    } = (0, h.useActiveSubscriptionListingForApplication)(b, a),
    H = (0, h.useEligibleApplicationSubscriptionGuilds)(b, a),
    Y = (0, _.default)(),
    j = null != M && (0, A.isApplicationUserSubscription)(M.flags),
    W = null != F && F.userId === (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    K = null == F || W,
    z = null == F || k.length > 1,
    Z = null != a || H.length > 0,
    X = j && W,
    Q = null != U && null != B && K && z && (Z || j) && !X;
  return K ? Z ? X && null != U && (n = O.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: U.name
  })) : n = O.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = O.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
    G && null != w && Y && !(I.default.isFetchingForSKU(w) || I.default.isLoadedForSKU(w)) && l.default.wait(() => {
      (0, u.fetchSubscriptionPlansForSKU)(w)
    })
  }, [G, w, Y]), {
    openModal: r.useCallback(() => {
      s()(null != B, "No application"), s()(null != U, "No subscription plan"), s()(G, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, c.openApplicationPaymentModal)({
          activeSubscription: x,
          analyticsSubscriptionType: p.SubscriptionTypes.APPLICATION,
          analyticsLocations: V,
          analyticsLocation: R,
          renderHeader: (e, t, n) => (0, i.jsx)(m.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: U.id,
          skuId: U.skuId,
          guildId: a,
          eligibleApplicationSubscriptionGuilds: H,
          planGroup: k,
          applicationId: B.id,
          showBenefitsFirst: g,
          onComplete: v,
          forcesTransitionToGuild: D
        })
      };
      !Z && j ? (0, N.confirmNoSharedServerSubscribeWarningModal)({
        applicationName: B.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [G, U, k, B, a, Z, j, V, R, x, g, H, v, D]),
    canOpenModal: Q,
    cannotOpenReason: n
  }
}