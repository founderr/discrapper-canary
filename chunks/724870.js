n.d(t, {
  h: function() {
    return p
  },
  m: function() {
    return T
  }
}), n(789020);
var i = n(735250);
n(470079);
var l = n(512722),
  a = n.n(l),
  s = n(481060),
  o = n(496929),
  r = n(171246),
  u = n(509545),
  c = n(55563),
  d = n(987209),
  C = n(981631);

function p(e) {
  let {
    initialPlanId: t,
    activeSubscription: l,
    analyticsObject: a,
    analyticsLocation: o,
    analyticsLocations: r,
    analyticsSubscriptionType: u,
    renderHeader: c,
    planGroup: p,
    skuId: I,
    guildId: T,
    reviewWarningMessage: h,
    applicationId: L,
    showBenefitsFirst: S,
    eligibleApplicationSubscriptionGuilds: E,
    onComplete: N,
    forcesTransitionToGuild: f
  } = e;
  (0, s.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(n.bind(n, 598)), s = (await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("32776"), n.e("34485")]).then(n.bind(n, 405083))).default, {
      getApplicationPaymentSteps: C
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("12013"), n.e("43906"), n.e("95900"), n.e("7709")]).then(n.bind(n, 759386)), A = C({
      guildId: T,
      showBenefitsFirst: S,
      eligibleApplicationSubscriptionGuilds: E
    });
    return n => (0, i.jsx)(e, {
      applicationId: L,
      activeSubscription: l,
      stepConfigs: A,
      skuIDs: [I],
      children: (0, i.jsx)(d.KB, {
        children: (0, i.jsx)(s, {
          ...n,
          initialPlanId: t,
          skuId: I,
          analyticsLocations: r,
          analyticsObject: a,
          analyticsLocation: o,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: p,
          reviewWarningMessage: h,
          applicationId: L,
          guildId: null != T ? T : void 0,
          onComplete: N,
          forcesTransitionToGuild: f
        })
      })
    })
  }, {
    onCloseRequest: C.dG4
  })
}
let I = async (e, t) => {
  let n = (await (0, o.yD)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
  a()(null == n, "User already has an active subscription to this SKU")
};
async function T(e) {
  var t;
  let {
    applicationId: n,
    skuId: i,
    initialPlanId: l,
    analyticsLocationObject: s,
    analyticsLocations: o,
    renderHeader: d
  } = e, T = c.Z.get(i), h = u.Z.getForSKU(i);
  a()(null != T, "Failed to find SKU");
  let L = (0, r.KW)(T.flags);
  a()(L, "Guild application subscriptions unsupported!"), await I(n, i), p({
    initialPlanId: null != l ? l : null === (t = h[0]) || void 0 === t ? void 0 : t.id,
    activeSubscription: null,
    analyticsLocations: o,
    analyticsLocationObject: s,
    analyticsSubscriptionType: C.NYc.APPLICATION,
    renderHeader: d,
    planGroup: [],
    skuId: i,
    guildId: null,
    eligibleApplicationSubscriptionGuilds: [],
    showBenefitsFirst: !1,
    applicationId: n
  })
}