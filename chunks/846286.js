"use strict";
n.r(t), n.d(t, {
  openApplicationSubscriptionPaymentModal: function() {
    return h
  },
  openActivityApplicationPaymentModal: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var l = n("627445"),
  a = n.n(l),
  r = n("77078"),
  s = n("316718"),
  u = n("55620"),
  o = n("524503"),
  c = n("186211"),
  d = n("90592"),
  f = n("651057"),
  p = n("299285"),
  I = n("635357"),
  S = n("49111");

function h(e) {
  let {
    initialPlanId: t,
    activeSubscription: l,
    analyticsObject: a,
    analyticsLocation: s,
    analyticsLocations: u,
    analyticsSubscriptionType: o,
    renderHeader: c,
    planGroup: d,
    skuId: f,
    guildId: p,
    reviewWarningMessage: h,
    listing: _,
    application: T,
    showBenefitsFirst: C,
    eligibleApplicationSubscriptionGuilds: E,
    onComplete: A,
    forcesTransitionToGuild: m
  } = e;
  (0, r.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await n.el("642906").then(n.bind(n, "642906")), r = (await n.el("452113").then(n.bind(n, "452113"))).default, {
      getApplicationSubscriptionPaymentSteps: S
    } = await n.el("590749").then(n.bind(n, "590749")), g = S({
      guildId: p,
      application: T,
      listing: _,
      showBenefitsFirst: C,
      eligibleApplicationSubscriptionGuilds: E
    });
    return n => (0, i.jsx)(e, {
      applicationId: T.id,
      activeSubscription: l,
      stepConfigs: g,
      skuIDs: [f],
      children: (0, i.jsx)(I.GiftContextProvider, {
        children: (0, i.jsx)(r, {
          ...n,
          initialPlanId: t,
          skuId: f,
          analyticsLocations: u,
          analyticsObject: a,
          analyticsLocation: s,
          analyticsSubscriptionType: o,
          renderHeader: c,
          planGroup: d,
          reviewWarningMessage: h,
          applicationId: T.id,
          guildId: null != p ? p : void 0,
          onComplete: A,
          forcesTransitionToGuild: m
        })
      })
    })
  }, {
    onCloseRequest: S.NOOP
  })
}
let _ = async e => {
  let t = p.default.getApplication(e);
  if (null != t) return t;
  await f.default.fetchApplications([e], !1);
  let n = p.default.getApplication(e);
  return a(null != n, "Failed to find application with ID %s", e), n
}, T = async e => {
  let t = c.default.getSubscriptionGroupListingForApplication(e);
  if (null != t) return t;
  let n = await (0, u.fetchAllStoreListingsForApplication)(e),
    i = n.find(e => e.sku.type === S.SKUTypes.SUBSCRIPTION_GROUP);
  a(null != i, "Failed to find subscription store listing"), await (0, o.fetchAllSubscriptionListingsDataForApplication)(e, null == i ? void 0 : i.id);
  let l = c.default.getSubscriptionGroupListingForApplication(e);
  return a(null != l, "Failed to find subscription group listing"), l
}, C = async (e, t) => {
  let n = await (0, s.fetchUserEntitlementsForApplication)(e),
    i = n.filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
  a(null == i, "User already has an active subscription to this SKU")
};
async function E(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: i,
    analyticsLocationObject: l,
    analyticsLocations: r,
    renderHeader: s
  } = e, u = await _(t), o = await T(t), c = (0, d.getPayableSubscriptionListing)(o);
  a(null != c, "Failed to find subscription listing");
  let f = (0, d.isApplicationUserSubscription)(c.sku_flags);
  a(f, "Guild application subscriptions unsupported!"), a(c.published, "Subscription listing not published"), await C(t, n);
  let p = {
    initialPlanId: null != i ? i : null == c ? void 0 : c.subscription_plans[0].id,
    activeSubscription: null,
    analyticsLocations: r,
    analyticsLocationObject: l,
    analyticsSubscriptionType: S.SubscriptionTypes.APPLICATION,
    renderHeader: s,
    planGroup: o.subscription_listings_ids,
    skuId: n,
    guildId: null,
    eligibleApplicationSubscriptionGuilds: [],
    showBenefitsFirst: !1,
    application: u,
    listing: c
  };
  h(p)
}