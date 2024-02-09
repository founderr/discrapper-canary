"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var i = n("37983"),
  l = n("884691"),
  a = n("627445"),
  r = n.n(a),
  s = n("446674"),
  u = n("913144"),
  o = n("775433"),
  c = n("685665"),
  d = n("598981"),
  f = n("846286"),
  p = n("697218"),
  I = n("10514"),
  S = n("650509"),
  h = n("90592"),
  _ = n("333955"),
  T = n("599733"),
  C = n("49111"),
  E = n("782340"),
  A = e => {
    var t;
    let n, {
        listing: a,
        guildId: A,
        groupListingId: m,
        analyticsLocation: g,
        showBenefitsFirst: N,
        onComplete: O,
        forcesTransitionToGuild: R
      } = e,
      L = null == a ? void 0 : a.subscription_plans[0],
      P = null == a ? void 0 : a.application_id,
      b = null == L ? void 0 : L.id,
      v = (null == a ? void 0 : a.published) === !0,
      y = null == L ? void 0 : L.sku_id,
      F = (0, s.useStateFromStores)([I.default], () => null != b ? I.default.get(b) : null),
      D = (0, S.useApplication)(P),
      x = (0, S.useSubscriptionListingsForGroup)(m, {
        includeSoftDeleted: !0
      }),
      G = x.map(e => e.subscription_plans[0].id),
      {
        analyticsLocations: M
      } = (0, c.default)(),
      {
        activeSubscription: w,
        activeEntitlement: H
      } = (0, S.useActiveSubscriptionListingForApplication)(P, A),
      U = (0, S.useEligibleApplicationSubscriptionGuilds)(P, A),
      k = (0, d.default)(),
      j = null != a && (0, h.isApplicationUserSubscription)(a.sku_flags),
      B = null != H && H.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
      Y = null == H || B,
      V = null == H || G.length > 1,
      K = null != A || U.length > 0,
      W = j && B,
      z = null != F && null != D && Y && V && (K || j) && !W;
    Y ? K ? W && null != F && (n = E.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
      tierName: F.name
    })) : n = E.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = E.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
      v && null != y && k && u.default.wait(() => {
        (0, o.fetchSubscriptionPlansForSKU)(y)
      })
    }, [v, y, k]);
    let q = l.useCallback(() => {
      r(null != a, "No subscription listing"), r(null != D, "No application"), r(null != L, "No subscription plan"), r(v, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, f.openApplicationSubscriptionPaymentModal)({
          activeSubscription: w,
          analyticsSubscriptionType: C.SubscriptionTypes.APPLICATION,
          analyticsLocations: M,
          analyticsLocation: g,
          renderHeader: (e, t, n) => (0, i.jsx)(_.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: L.id,
          skuId: L.sku_id,
          guildId: A,
          eligibleApplicationSubscriptionGuilds: U,
          planGroup: G,
          listing: a,
          application: D,
          showBenefitsFirst: N,
          onComplete: O,
          forcesTransitionToGuild: R
        })
      };
      !K && j ? (0, T.confirmNoSharedServerSubscribeWarningModal)({
        application: D,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [v, a, L, G, D, A, K, j, M, g, w, N, U, O, R]);
    return {
      openModal: q,
      canOpenModal: z,
      cannotOpenReason: n
    }
  }