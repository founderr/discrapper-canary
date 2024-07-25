t.d(n, {
  h: function() {
return f;
  },
  m: function() {
return m;
  }
}), t(789020);
var i = t(735250);
t(470079);
var o = t(512722),
  l = t.n(o),
  a = t(481060),
  r = t(496929),
  s = t(171246),
  u = t(509545),
  d = t(55563),
  c = t(987209),
  p = t(981631);

function f(e) {
  let {
initialPlanId: n,
activeSubscription: o,
analyticsObject: l,
analyticsLocation: r,
analyticsLocations: s,
analyticsSubscriptionType: u,
renderHeader: d,
planGroup: f,
skuId: h,
guildId: m,
reviewWarningMessage: I,
applicationId: g,
showBenefitsFirst: _,
eligibleApplicationSubscriptionGuilds: C,
onComplete: b,
forcesTransitionToGuild: v
  } = e;
  (0, a.openModalLazy)(async () => {
let {
  PaymentContextProvider: e
} = await Promise.resolve().then(t.bind(t, 598)), a = (await Promise.all([
  t.e('15972'),
  t.e('47006'),
  t.e('32776'),
  t.e('16083')
]).then(t.bind(t, 405083))).default, {
  getApplicationPaymentSteps: p
} = await Promise.all([
  t.e('96427'),
  t.e('77298'),
  t.e('23357'),
  t.e('13682'),
  t.e('15685'),
  t.e('94915'),
  t.e('30671'),
  t.e('33830')
]).then(t.bind(t, 759386)), S = p({
  guildId: m,
  showBenefitsFirst: _,
  eligibleApplicationSubscriptionGuilds: C
});
return t => (0, i.jsx)(e, {
  applicationId: g,
  activeSubscription: o,
  stepConfigs: S,
  skuIDs: [h],
  children: (0, i.jsx)(c.KB, {
    children: (0, i.jsx)(a, {
      ...t,
      initialPlanId: n,
      skuId: h,
      analyticsLocations: s,
      analyticsObject: l,
      analyticsLocation: r,
      analyticsSubscriptionType: u,
      renderHeader: d,
      planGroup: f,
      reviewWarningMessage: I,
      applicationId: g,
      guildId: null != m ? m : void 0,
      onComplete: b,
      forcesTransitionToGuild: v
    })
  })
});
  }, {
onCloseRequest: p.dG4
  });
}
let h = async (e, n) => {
  let t = (await (0, r.yD)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date()).find(e => e.sku_id === n);
  l()(null == t, 'User already has an active subscription to this SKU');
};
async function m(e) {
  var n;
  let {
applicationId: t,
skuId: i,
initialPlanId: o,
analyticsLocationObject: a,
analyticsLocations: r,
renderHeader: c
  } = e, m = d.Z.get(i), I = u.Z.getForSKU(i);
  l()(null != m, 'Failed to find SKU');
  let g = (0, s.KW)(m.flags);
  l()(g, 'Guild application subscriptions unsupported!'), await h(t, i), f({
initialPlanId: null != o ? o : null === (n = I[0]) || void 0 === n ? void 0 : n.id,
activeSubscription: null,
analyticsLocations: r,
analyticsLocationObject: a,
analyticsSubscriptionType: p.NYc.APPLICATION,
renderHeader: c,
planGroup: [],
skuId: i,
guildId: null,
eligibleApplicationSubscriptionGuilds: [],
showBenefitsFirst: !1,
applicationId: t
  });
}