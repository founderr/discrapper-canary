"use strict";
i.r(t), i("789020");
var n = i("735250"),
  l = i("470079"),
  a = i("512722"),
  s = i.n(a),
  o = i("442837"),
  r = i("570140"),
  u = i("821849"),
  c = i("906732"),
  d = i("887706"),
  p = i("724870"),
  C = i("594174"),
  f = i("509545"),
  S = i("55563"),
  h = i("551428"),
  I = i("630388"),
  T = i("270144"),
  A = i("171246"),
  L = i("689011"),
  E = i("714441"),
  O = i("981631"),
  N = i("689938");
t.default = e => {
  var t;
  let i, {
      guildId: a,
      groupListingId: g,
      analyticsLocation: v,
      showBenefitsFirst: _,
      skuId: P,
      onComplete: R,
      forcesTransitionToGuild: m
    } = e,
    b = (0, o.useStateFromStores)([S.default], () => null != P ? S.default.get(P) : void 0, [P]),
    F = (0, o.useStateFromStores)([h.default], () => null != P ? h.default.getForSKU(P) : void 0, [P]),
    y = (0, o.useStateFromStores)([f.default], () => null != P ? f.default.getForSKU(P) : void 0, [P]),
    w = null != y ? y[0] : void 0,
    M = null == b ? void 0 : b.applicationId,
    U = (null == F ? void 0 : F.published) === !0 && null != b && (0, I.hasFlag)(b.flags, O.SKUFlags.AVAILABLE),
    x = null == w ? void 0 : w.skuId,
    D = (0, T.useApplication)(M),
    j = (0, T.useSubscriptionListingsForGroup)(g, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: H
    } = (0, c.default)(),
    {
      activeSubscription: k,
      activeEntitlement: B
    } = (0, T.useActiveSubscriptionListingForApplication)(M, a),
    G = (0, T.useEligibleApplicationSubscriptionGuilds)(M, a),
    Y = (0, d.default)(),
    K = null != b && (0, A.isApplicationUserSubscription)(b.flags),
    V = null != B && B.userId === (null === (t = C.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    Z = null == B || V,
    z = null == B || j.length > 1,
    W = null != a || G.length > 0,
    q = K && V,
    J = null != w && null != D && Z && z && (W || K) && !q;
  return Z ? W ? q && null != w && (i = N.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: w.name
  })) : i = N.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : i = N.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
    U && null != x && Y && !(f.default.isFetchingForSKU(x) || f.default.isLoadedForSKU(x)) && r.default.wait(() => {
      (0, u.fetchSubscriptionPlansForSKU)(x)
    })
  }, [U, x, Y]), {
    openModal: l.useCallback(() => {
      s()(null != D, "No application"), s()(null != w, "No subscription plan"), s()(U, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, p.openApplicationPaymentModal)({
          activeSubscription: k,
          analyticsSubscriptionType: O.SubscriptionTypes.APPLICATION,
          analyticsLocations: H,
          analyticsLocation: v,
          renderHeader: (e, t, i) => (0, n.jsx)(L.PurchaseHeader, {
            step: i,
            onClose: () => t(!1)
          }),
          initialPlanId: w.id,
          skuId: w.skuId,
          guildId: a,
          eligibleApplicationSubscriptionGuilds: G,
          planGroup: j,
          applicationId: D.id,
          showBenefitsFirst: _,
          onComplete: R,
          forcesTransitionToGuild: m
        })
      };
      !W && K ? (0, E.confirmNoSharedServerSubscribeWarningModal)({
        applicationName: D.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [U, w, j, D, a, W, K, H, v, k, _, G, R, m]),
    canOpenModal: J,
    cannotOpenReason: i
  }
}