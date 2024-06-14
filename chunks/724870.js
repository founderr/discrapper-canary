"use strict";
i.r(t), i.d(t, {
  openActivityApplicationPaymentModal: function() {
    return S
  },
  openApplicationPaymentModal: function() {
    return C
  }
}), i("789020");
var n = i("735250");
i("470079");
var l = i("512722"),
  a = i.n(l),
  s = i("481060"),
  o = i("496929"),
  r = i("171246"),
  u = i("509545"),
  c = i("55563"),
  d = i("987209"),
  p = i("981631");

function C(e) {
  let {
    initialPlanId: t,
    activeSubscription: l,
    analyticsObject: a,
    analyticsLocation: o,
    analyticsLocations: r,
    analyticsSubscriptionType: u,
    renderHeader: c,
    planGroup: C,
    skuId: f,
    guildId: S,
    reviewWarningMessage: h,
    applicationId: I,
    showBenefitsFirst: T,
    eligibleApplicationSubscriptionGuilds: A,
    onComplete: L,
    forcesTransitionToGuild: E
  } = e;
  (0, s.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(i.bind(i, "598")), s = (await Promise.all([i.e("49237"), i.e("99387"), i.e("15972"), i.e("6416"), i.e("32776"), i.e("34485")]).then(i.bind(i, "405083"))).default, {
      getApplicationPaymentSteps: p
    } = await Promise.all([i.e("49237"), i.e("99387"), i.e("96427"), i.e("40326"), i.e("23357"), i.e("12013"), i.e("43906"), i.e("95900"), i.e("53389")]).then(i.bind(i, "759386")), O = p({
      guildId: S,
      showBenefitsFirst: T,
      eligibleApplicationSubscriptionGuilds: A
    });
    return i => (0, n.jsx)(e, {
      applicationId: I,
      activeSubscription: l,
      stepConfigs: O,
      skuIDs: [f],
      children: (0, n.jsx)(d.GiftContextProvider, {
        children: (0, n.jsx)(s, {
          ...i,
          initialPlanId: t,
          skuId: f,
          analyticsLocations: r,
          analyticsObject: a,
          analyticsLocation: o,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: C,
          reviewWarningMessage: h,
          applicationId: I,
          guildId: null != S ? S : void 0,
          onComplete: L,
          forcesTransitionToGuild: E
        })
      })
    })
  }, {
    onCloseRequest: p.NOOP
  })
}
let f = async (e, t) => {
  let i = (await (0, o.fetchUserEntitlementsForApplication)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
  a()(null == i, "User already has an active subscription to this SKU")
};
async function S(e) {
  var t;
  let {
    applicationId: i,
    skuId: n,
    initialPlanId: l,
    analyticsLocationObject: s,
    analyticsLocations: o,
    renderHeader: d
  } = e, S = c.default.get(n), h = u.default.getForSKU(n);
  a()(null != S, "Failed to find SKU");
  let I = (0, r.isApplicationUserSubscription)(S.flags);
  a()(I, "Guild application subscriptions unsupported!"), await f(i, n), C({
    initialPlanId: null != l ? l : null === (t = h[0]) || void 0 === t ? void 0 : t.id,
    activeSubscription: null,
    analyticsLocations: o,
    analyticsLocationObject: s,
    analyticsSubscriptionType: p.SubscriptionTypes.APPLICATION,
    renderHeader: d,
    planGroup: [],
    skuId: n,
    guildId: null,
    eligibleApplicationSubscriptionGuilds: [],
    showBenefitsFirst: !1,
    applicationId: i
  })
}