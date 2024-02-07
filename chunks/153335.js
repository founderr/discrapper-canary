"use strict";
n.r(e), n.d(e, {
  default: function() {
    return A
  }
});
var i = n("37983"),
  l = n("884691"),
  a = n("627445"),
  r = n.n(a),
  u = n("446674"),
  s = n("913144"),
  o = n("775433"),
  c = n("685665"),
  d = n("598981"),
  f = n("846286"),
  p = n("697218"),
  I = n("10514"),
  S = n("650509"),
  T = n("90592"),
  h = n("333955"),
  _ = n("599733"),
  E = n("49111"),
  C = n("782340"),
  A = t => {
    var e;
    let n, {
        listing: a,
        guildId: A,
        groupListingId: m,
        analyticsLocation: N,
        showBenefitsFirst: g,
        onComplete: L,
        forcesTransitionToGuild: O
      } = t,
      R = null == a ? void 0 : a.subscription_plans[0],
      F = null == a ? void 0 : a.application_id,
      P = null == R ? void 0 : R.id,
      v = (null == a ? void 0 : a.published) === !0,
      b = null == R ? void 0 : R.sku_id,
      y = (0, u.useStateFromStores)([I.default], () => null != P ? I.default.get(P) : null),
      D = (0, S.useApplication)(F),
      H = (0, S.useSubscriptionListingsForGroup)(m, {
        includeSoftDeleted: !0
      }),
      G = H.map(t => t.subscription_plans[0].id),
      {
        analyticsLocations: x
      } = (0, c.default)(),
      {
        activeSubscription: M,
        activeEntitlement: w
      } = (0, S.useActiveSubscriptionListingForApplication)(F, A),
      U = (0, S.useEligibleApplicationSubscriptionGuilds)(F, A),
      k = (0, d.default)(),
      j = null != a && (0, T.isApplicationUserSubscription)(a.sku_flags),
      B = null != w && w.userId === (null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id),
      Y = null == w || B,
      V = null == w || G.length > 1,
      K = null != A || U.length > 0,
      z = j && B,
      W = null != y && null != D && Y && V && (K || j) && !z;
    Y ? K ? z && null != y && (n = C.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
      tierName: y.name
    })) : n = C.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = C.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
      v && null != b && k && s.default.wait(() => {
        (0, o.fetchSubscriptionPlansForSKU)(b)
      })
    }, [v, b, k]);
    let Z = l.useCallback(() => {
      r(null != a, "No subscription listing"), r(null != D, "No application"), r(null != R, "No subscription plan"), r(v, "Cannot purchase this unpublished plan");
      let t = () => {
        (0, f.openApplicationSubscriptionPaymentModal)({
          activeSubscription: M,
          analyticsSubscriptionType: E.SubscriptionTypes.APPLICATION,
          analyticsLocations: x,
          analyticsLocation: N,
          renderHeader: (t, e, n) => (0, i.jsx)(h.PurchaseHeader, {
            step: n,
            onClose: () => e(!1)
          }),
          initialPlanId: R.id,
          skuId: R.sku_id,
          guildId: A,
          eligibleApplicationSubscriptionGuilds: U,
          planGroup: G,
          listing: a,
          application: D,
          showBenefitsFirst: g,
          onComplete: L,
          forcesTransitionToGuild: O
        })
      };
      !K && j ? (0, _.confirmNoSharedServerSubscribeWarningModal)({
        application: D,
        onConfirm: t,
        onCancel: () => {}
      }) : t()
    }, [v, a, R, G, D, A, K, j, x, N, M, g, U, L, O]);
    return {
      openModal: Z,
      canOpenModal: W,
      cannotOpenReason: n
    }
  }