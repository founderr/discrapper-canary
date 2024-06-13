"use strict";
i.r(t), i("789020");
var n = i("735250"),
  l = i("470079"),
  a = i("512722"),
  s = i.n(a),
  r = i("442837"),
  o = i("570140"),
  u = i("821849"),
  d = i("906732"),
  c = i("887706"),
  p = i("724870"),
  C = i("594174"),
  f = i("509545"),
  S = i("55563"),
  h = i("551428"),
  I = i("630388"),
  A = i("270144"),
  T = i("171246"),
  L = i("689011"),
  g = i("714441"),
  E = i("981631"),
  v = i("689938");
t.default = e => {
  var t;
  let i, {
      guildId: a,
      groupListingId: N,
      analyticsLocation: _,
      showBenefitsFirst: O,
      skuId: b,
      onComplete: m,
      forcesTransitionToGuild: P
    } = e,
    F = (0, r.useStateFromStores)([S.default], () => null != b ? S.default.get(b) : void 0, [b]),
    R = (0, r.useStateFromStores)([h.default], () => null != b ? h.default.getForSKU(b) : void 0, [b]),
    y = (0, r.useStateFromStores)([f.default], () => null != b ? f.default.getForSKU(b) : void 0, [b]),
    w = null != y ? y[0] : void 0,
    M = null == F ? void 0 : F.applicationId,
    U = (null == R ? void 0 : R.published) === !0 && null != F && (0, I.hasFlag)(F.flags, E.SKUFlags.AVAILABLE),
    x = null == w ? void 0 : w.skuId,
    H = (0, A.useApplication)(M),
    j = (0, A.useSubscriptionListingsForGroup)(N, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: D
    } = (0, d.default)(),
    {
      activeSubscription: G,
      activeEntitlement: Y
    } = (0, A.useActiveSubscriptionListingForApplication)(M, a),
    B = (0, A.useEligibleApplicationSubscriptionGuilds)(M, a),
    k = (0, c.default)(),
    V = null != F && (0, T.isApplicationUserSubscription)(F.flags),
    K = null != Y && Y.userId === (null === (t = C.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    Z = null == Y || K,
    z = null == Y || j.length > 1,
    W = null != a || B.length > 0,
    q = V && K,
    J = null != w && null != H && Z && z && (W || V) && !q;
  return Z ? W ? q && null != w && (i = v.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: w.name
  })) : i = v.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : i = v.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
    U && null != x && k && !(f.default.isFetchingForSKU(x) || f.default.isLoadedForSKU(x)) && o.default.wait(() => {
      (0, u.fetchSubscriptionPlansForSKU)(x)
    })
  }, [U, x, k]), {
    openModal: l.useCallback(() => {
      s()(null != H, "No application"), s()(null != w, "No subscription plan"), s()(U, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, p.openApplicationPaymentModal)({
          activeSubscription: G,
          analyticsSubscriptionType: E.SubscriptionTypes.APPLICATION,
          analyticsLocations: D,
          analyticsLocation: _,
          renderHeader: (e, t, i) => (0, n.jsx)(L.PurchaseHeader, {
            step: i,
            onClose: () => t(!1)
          }),
          initialPlanId: w.id,
          skuId: w.skuId,
          guildId: a,
          eligibleApplicationSubscriptionGuilds: B,
          planGroup: j,
          applicationId: H.id,
          showBenefitsFirst: O,
          onComplete: m,
          forcesTransitionToGuild: P
        })
      };
      !W && V ? (0, g.confirmNoSharedServerSubscribeWarningModal)({
        applicationName: H.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [U, w, j, H, a, W, V, D, _, G, O, B, m, P]),
    canOpenModal: J,
    cannotOpenReason: i
  }
}