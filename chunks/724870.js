t.d(n, {
  h: function() {
    return f
  },
  m: function() {
    return I
  }
}), t(789020);
var i = t(735250);
t(470079);
var r = t(512722),
  l = t.n(r),
  o = t(481060),
  u = t(496929),
  s = t(171246),
  a = t(509545),
  c = t(55563),
  d = t(987209),
  _ = t(981631);

function f(e) {
  let {
    initialPlanId: n,
    activeSubscription: r,
    analyticsObject: l,
    analyticsLocation: u,
    analyticsLocations: s,
    analyticsSubscriptionType: a,
    renderHeader: c,
    planGroup: f,
    skuId: E,
    guildId: I,
    reviewWarningMessage: g,
    applicationId: S,
    showBenefitsFirst: p,
    eligibleApplicationSubscriptionGuilds: m,
    onComplete: C,
    forcesTransitionToGuild: T
  } = e;
  (0, o.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(t.bind(t, 598)), o = (await Promise.all([t.e("49237"), t.e("99387"), t.e("15972"), t.e("6416"), t.e("32776"), t.e("34485")]).then(t.bind(t, 405083))).default, {
      getApplicationPaymentSteps: _
    } = await Promise.all([t.e("49237"), t.e("99387"), t.e("96427"), t.e("77298"), t.e("23357"), t.e("12013"), t.e("43906"), t.e("95900"), t.e("95854"), t.e("68310")]).then(t.bind(t, 759386)), N = _({
      guildId: I,
      showBenefitsFirst: p,
      eligibleApplicationSubscriptionGuilds: m
    });
    return t => (0, i.jsx)(e, {
      applicationId: S,
      activeSubscription: r,
      stepConfigs: N,
      skuIDs: [E],
      children: (0, i.jsx)(d.KB, {
        children: (0, i.jsx)(o, {
          ...t,
          initialPlanId: n,
          skuId: E,
          analyticsLocations: s,
          analyticsObject: l,
          analyticsLocation: u,
          analyticsSubscriptionType: a,
          renderHeader: c,
          planGroup: f,
          reviewWarningMessage: g,
          applicationId: S,
          guildId: null != I ? I : void 0,
          onComplete: C,
          forcesTransitionToGuild: T
        })
      })
    })
  }, {
    onCloseRequest: _.dG4
  })
}
let E = async (e, n) => {
  let t = (await (0, u.yD)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === n);
  l()(null == t, "User already has an active subscription to this SKU")
};
async function I(e) {
  var n;
  let {
    applicationId: t,
    skuId: i,
    initialPlanId: r,
    analyticsLocationObject: o,
    analyticsLocations: u,
    renderHeader: d
  } = e, I = c.Z.get(i), g = a.Z.getForSKU(i);
  l()(null != I, "Failed to find SKU");
  let S = (0, s.KW)(I.flags);
  l()(S, "Guild application subscriptions unsupported!"), await E(t, i), f({
    initialPlanId: null != r ? r : null === (n = g[0]) || void 0 === n ? void 0 : n.id,
    activeSubscription: null,
    analyticsLocations: u,
    analyticsLocationObject: o,
    analyticsSubscriptionType: _.NYc.APPLICATION,
    renderHeader: d,
    planGroup: [],
    skuId: i,
    guildId: null,
    eligibleApplicationSubscriptionGuilds: [],
    showBenefitsFirst: !1,
    applicationId: t
  })
}