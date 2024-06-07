"use strict";
n.r(t), n("789020");
var i = n("735250"),
  l = n("470079"),
  r = n("512722"),
  a = n.n(r),
  o = n("442837"),
  s = n("570140"),
  u = n("821849"),
  d = n("906732"),
  c = n("887706"),
  p = n("724870"),
  f = n("594174"),
  h = n("509545"),
  m = n("55563"),
  S = n("551428"),
  g = n("630388"),
  I = n("270144"),
  v = n("171246"),
  C = n("689011"),
  b = n("714441"),
  M = n("981631"),
  y = n("689938");
t.default = e => {
  var t;
  let n, {
      guildId: r,
      groupListingId: A,
      analyticsLocation: x,
      showBenefitsFirst: _,
      skuId: w,
      onComplete: N,
      forcesTransitionToGuild: E
    } = e,
    T = (0, o.useStateFromStores)([m.default], () => null != w ? m.default.get(w) : void 0, [w]),
    P = (0, o.useStateFromStores)([S.default], () => null != w ? S.default.getForSKU(w) : void 0, [w]),
    j = (0, o.useStateFromStores)([h.default], () => null != w ? h.default.getForSKU(w) : void 0, [w]),
    R = null != j ? j[0] : void 0,
    U = null == T ? void 0 : T.applicationId,
    O = (null == P ? void 0 : P.published) === !0 && null != T && (0, g.hasFlag)(T.flags, M.SKUFlags.AVAILABLE),
    L = null == R ? void 0 : R.skuId,
    B = (0, I.useApplication)(U),
    F = (0, I.useSubscriptionListingsForGroup)(A, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: k
    } = (0, d.default)(),
    {
      activeSubscription: D,
      activeEntitlement: G
    } = (0, I.useActiveSubscriptionListingForApplication)(U, r),
    z = (0, I.useEligibleApplicationSubscriptionGuilds)(U, r),
    V = (0, c.default)(),
    H = null != T && (0, v.isApplicationUserSubscription)(T.flags),
    K = null != G && G.userId === (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    W = null == G || K,
    Z = null == G || F.length > 1,
    Y = null != r || z.length > 0,
    q = H && K,
    J = null != R && null != B && W && Z && (Y || H) && !q;
  return W ? Y ? q && null != R && (n = y.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: R.name
  })) : n = y.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = y.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
    O && null != L && V && !(h.default.isFetchingForSKU(L) || h.default.isLoadedForSKU(L)) && s.default.wait(() => {
      (0, u.fetchSubscriptionPlansForSKU)(L)
    })
  }, [O, L, V]), {
    openModal: l.useCallback(() => {
      a()(null != B, "No application"), a()(null != R, "No subscription plan"), a()(O, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, p.openApplicationPaymentModal)({
          activeSubscription: D,
          analyticsSubscriptionType: M.SubscriptionTypes.APPLICATION,
          analyticsLocations: k,
          analyticsLocation: x,
          renderHeader: (e, t, n) => (0, i.jsx)(C.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: R.id,
          skuId: R.skuId,
          guildId: r,
          eligibleApplicationSubscriptionGuilds: z,
          planGroup: F,
          applicationId: B.id,
          showBenefitsFirst: _,
          onComplete: N,
          forcesTransitionToGuild: E
        })
      };
      !Y && H ? (0, b.confirmNoSharedServerSubscribeWarningModal)({
        applicationName: B.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [O, R, F, B, r, Y, H, k, x, D, _, z, N, E]),
    canOpenModal: J,
    cannotOpenReason: n
  }
}