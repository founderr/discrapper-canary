"use strict";
n.r(e), n.d(e, {
  openApplicationSubscriptionPaymentModal: function() {
    return T
  },
  openActivityApplicationPaymentModal: function() {
    return C
  }
});
var i = n("37983");
n("884691");
var l = n("627445"),
  a = n.n(l),
  r = n("77078"),
  u = n("316718"),
  s = n("55620"),
  o = n("524503"),
  c = n("186211"),
  d = n("90592"),
  f = n("651057"),
  p = n("299285"),
  I = n("635357"),
  S = n("49111");

function T(t) {
  let {
    initialPlanId: e,
    activeSubscription: l,
    analyticsObject: a,
    analyticsLocation: u,
    analyticsLocations: s,
    analyticsSubscriptionType: o,
    renderHeader: c,
    planGroup: d,
    skuId: f,
    guildId: p,
    reviewWarningMessage: T,
    listing: h,
    application: _,
    showBenefitsFirst: E,
    eligibleApplicationSubscriptionGuilds: C,
    onComplete: A,
    forcesTransitionToGuild: m
  } = t;
  (0, r.openModalLazy)(async () => {
    let {
      PaymentContextProvider: t
    } = await n.el("642906").then(n.bind(n, "642906")), r = (await n.el("452113").then(n.bind(n, "452113"))).default, {
      getApplicationSubscriptionPaymentSteps: S
    } = await n.el("590749").then(n.bind(n, "590749")), N = S({
      guildId: p,
      application: _,
      listing: h,
      showBenefitsFirst: E,
      eligibleApplicationSubscriptionGuilds: C
    });
    return n => (0, i.jsx)(t, {
      applicationId: _.id,
      activeSubscription: l,
      stepConfigs: N,
      skuIDs: [f],
      children: (0, i.jsx)(I.GiftContextProvider, {
        children: (0, i.jsx)(r, {
          ...n,
          initialPlanId: e,
          skuId: f,
          analyticsLocations: s,
          analyticsObject: a,
          analyticsLocation: u,
          analyticsSubscriptionType: o,
          renderHeader: c,
          planGroup: d,
          reviewWarningMessage: T,
          applicationId: _.id,
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
let h = async t => {
  let e = p.default.getApplication(t);
  if (null != e) return e;
  await f.default.fetchApplications([t], !1);
  let n = p.default.getApplication(t);
  return a(null != n, "Failed to find application with ID %s", t), n
}, _ = async t => {
  let e = c.default.getSubscriptionGroupListingForApplication(t);
  if (null != e) return e;
  let n = await (0, s.fetchAllStoreListingsForApplication)(t),
    i = n.find(t => t.sku.type === S.SKUTypes.SUBSCRIPTION_GROUP);
  a(null != i, "Failed to find subscription store listing"), await (0, o.fetchAllSubscriptionListingsDataForApplication)(t, null == i ? void 0 : i.id);
  let l = c.default.getSubscriptionGroupListingForApplication(t);
  return a(null != l, "Failed to find subscription group listing"), l
}, E = async (t, e) => {
  let n = await (0, u.fetchUserEntitlementsForApplication)(t),
    i = n.filter(t => null == t.ends_at || new Date(t.ends_at) > new Date).find(t => t.sku_id === e);
  a(null == i, "User already has an active subscription to this SKU")
};
async function C(t) {
  let {
    applicationId: e,
    skuId: n,
    initialPlanId: i,
    analyticsLocationObject: l,
    analyticsLocations: r,
    renderHeader: u
  } = t, s = await h(e), o = await _(e), c = (0, d.getPayableSubscriptionListing)(o);
  a(null != c, "Failed to find subscription listing");
  let f = (0, d.isApplicationUserSubscription)(c.sku_flags);
  a(f, "Guild application subscriptions unsupported!"), a(c.published, "Subscription listing not published"), await E(e, n);
  let p = {
    initialPlanId: null != i ? i : null == c ? void 0 : c.subscription_plans[0].id,
    activeSubscription: null,
    analyticsLocations: r,
    analyticsLocationObject: l,
    analyticsSubscriptionType: S.SubscriptionTypes.APPLICATION,
    renderHeader: u,
    planGroup: o.subscription_listings_ids,
    skuId: n,
    guildId: null,
    eligibleApplicationSubscriptionGuilds: [],
    showBenefitsFirst: !1,
    application: s,
    listing: c
  };
  T(p)
}