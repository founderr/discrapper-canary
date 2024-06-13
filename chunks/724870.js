"use strict";
n.r(t), n.d(t, {
  openActivityApplicationPaymentModal: function() {
    return g
  },
  openApplicationPaymentModal: function() {
    return f
  }
}), n("789020");
var i = n("735250");
n("470079");
var l = n("512722"),
  a = n.n(l),
  r = n("481060"),
  s = n("496929"),
  o = n("171246"),
  u = n("509545"),
  d = n("55563"),
  c = n("987209"),
  p = n("981631");

function f(e) {
  let {
    initialPlanId: t,
    activeSubscription: l,
    analyticsObject: a,
    analyticsLocation: s,
    analyticsLocations: o,
    analyticsSubscriptionType: u,
    renderHeader: d,
    planGroup: f,
    skuId: S,
    guildId: g,
    reviewWarningMessage: v,
    applicationId: m,
    showBenefitsFirst: h,
    eligibleApplicationSubscriptionGuilds: I,
    onComplete: b,
    forcesTransitionToGuild: A
  } = e;
  (0, r.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(n.bind(n, "598")), r = (await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("32776"), n.e("34485")]).then(n.bind(n, "405083"))).default, {
      getApplicationPaymentSteps: p
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("12013"), n.e("43906"), n.e("95900"), n.e("53389")]).then(n.bind(n, "759386")), T = p({
      guildId: g,
      showBenefitsFirst: h,
      eligibleApplicationSubscriptionGuilds: I
    });
    return n => (0, i.jsx)(e, {
      applicationId: m,
      activeSubscription: l,
      stepConfigs: T,
      skuIDs: [S],
      children: (0, i.jsx)(c.GiftContextProvider, {
        children: (0, i.jsx)(r, {
          ...n,
          initialPlanId: t,
          skuId: S,
          analyticsLocations: o,
          analyticsObject: a,
          analyticsLocation: s,
          analyticsSubscriptionType: u,
          renderHeader: d,
          planGroup: f,
          reviewWarningMessage: v,
          applicationId: m,
          guildId: null != g ? g : void 0,
          onComplete: b,
          forcesTransitionToGuild: A
        })
      })
    })
  }, {
    onCloseRequest: p.NOOP
  })
}
let S = async (e, t) => {
  let n = (await (0, s.fetchUserEntitlementsForApplication)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
  a()(null == n, "User already has an active subscription to this SKU")
};
async function g(e) {
  var t;
  let {
    applicationId: n,
    skuId: i,
    initialPlanId: l,
    analyticsLocationObject: r,
    analyticsLocations: s,
    renderHeader: c
  } = e, g = d.default.get(i), v = u.default.getForSKU(i);
  a()(null != g, "Failed to find SKU");
  let m = (0, o.isApplicationUserSubscription)(g.flags);
  a()(m, "Guild application subscriptions unsupported!"), await S(n, i), f({
    initialPlanId: null != l ? l : null === (t = v[0]) || void 0 === t ? void 0 : t.id,
    activeSubscription: null,
    analyticsLocations: s,
    analyticsLocationObject: r,
    analyticsSubscriptionType: p.SubscriptionTypes.APPLICATION,
    renderHeader: c,
    planGroup: [],
    skuId: i,
    guildId: null,
    eligibleApplicationSubscriptionGuilds: [],
    showBenefitsFirst: !1,
    applicationId: n
  })
}