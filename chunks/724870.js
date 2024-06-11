"use strict";
n.r(t), n.d(t, {
  openActivityApplicationPaymentModal: function() {
    return p
  },
  openApplicationPaymentModal: function() {
    return S
  }
}), n("789020");
var r = n("735250");
n("470079");
var i = n("512722"),
  l = n.n(i),
  s = n("481060"),
  o = n("496929"),
  u = n("171246"),
  a = n("509545"),
  c = n("55563"),
  d = n("987209"),
  f = n("981631");

function S(e) {
  let {
    initialPlanId: t,
    activeSubscription: i,
    analyticsObject: l,
    analyticsLocation: o,
    analyticsLocations: u,
    analyticsSubscriptionType: a,
    renderHeader: c,
    planGroup: S,
    skuId: g,
    guildId: p,
    reviewWarningMessage: h,
    applicationId: E,
    showBenefitsFirst: _,
    eligibleApplicationSubscriptionGuilds: I,
    onComplete: C,
    forcesTransitionToGuild: m
  } = e;
  (0, s.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(n.bind(n, "598")), s = (await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("32776"), n.e("34485")]).then(n.bind(n, "405083"))).default, {
      getApplicationPaymentSteps: f
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("12013"), n.e("43906"), n.e("95900"), n.e("53389")]).then(n.bind(n, "759386")), T = f({
      guildId: p,
      showBenefitsFirst: _,
      eligibleApplicationSubscriptionGuilds: I
    });
    return n => (0, r.jsx)(e, {
      applicationId: E,
      activeSubscription: i,
      stepConfigs: T,
      skuIDs: [g],
      children: (0, r.jsx)(d.GiftContextProvider, {
        children: (0, r.jsx)(s, {
          ...n,
          initialPlanId: t,
          skuId: g,
          analyticsLocations: u,
          analyticsObject: l,
          analyticsLocation: o,
          analyticsSubscriptionType: a,
          renderHeader: c,
          planGroup: S,
          reviewWarningMessage: h,
          applicationId: E,
          guildId: null != p ? p : void 0,
          onComplete: C,
          forcesTransitionToGuild: m
        })
      })
    })
  }, {
    onCloseRequest: f.NOOP
  })
}
let g = async (e, t) => {
  let n = (await (0, o.fetchUserEntitlementsForApplication)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
  l()(null == n, "User already has an active subscription to this SKU")
};
async function p(e) {
  var t;
  let {
    applicationId: n,
    skuId: r,
    initialPlanId: i,
    analyticsLocationObject: s,
    analyticsLocations: o,
    renderHeader: d
  } = e, p = c.default.get(r), h = a.default.getForSKU(r);
  l()(null != p, "Failed to find SKU");
  let E = (0, u.isApplicationUserSubscription)(p.flags);
  l()(E, "Guild application subscriptions unsupported!"), await g(n, r), S({
    initialPlanId: null != i ? i : null === (t = h[0]) || void 0 === t ? void 0 : t.id,
    activeSubscription: null,
    analyticsLocations: o,
    analyticsLocationObject: s,
    analyticsSubscriptionType: f.SubscriptionTypes.APPLICATION,
    renderHeader: d,
    planGroup: [],
    skuId: r,
    guildId: null,
    eligibleApplicationSubscriptionGuilds: [],
    showBenefitsFirst: !1,
    applicationId: n
  })
}