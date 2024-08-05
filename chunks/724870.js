t.d(n, {
  h: function() {
return f;
  },
  m: function() {
return I;
  }
}), t(789020);
var r = t(735250);
t(470079);
var i = t(512722),
  o = t.n(i),
  l = t(481060),
  u = t(496929),
  a = t(171246),
  s = t(509545),
  c = t(55563),
  d = t(987209),
  _ = t(981631);

function f(e) {
  let {
initialPlanId: n,
activeSubscription: i,
analyticsObject: o,
analyticsLocation: u,
analyticsLocations: a,
analyticsSubscriptionType: s,
renderHeader: c,
planGroup: f,
skuId: E,
guildId: I,
reviewWarningMessage: g,
applicationId: p,
showBenefitsFirst: S,
eligibleApplicationSubscriptionGuilds: C,
onComplete: T,
forcesTransitionToGuild: m
  } = e;
  (0, l.openModalLazy)(async () => {
let {
  PaymentContextProvider: e
} = await Promise.resolve().then(t.bind(t, 598)), l = (await Promise.all([
  t.e('52249'),
  t.e('47006'),
  t.e('32776'),
  t.e('56809')
]).then(t.bind(t, 405083))).default, {
  getApplicationPaymentSteps: _
} = await Promise.all([
  t.e('96427'),
  t.e('77298'),
  t.e('23357'),
  t.e('13682'),
  t.e('15685'),
  t.e('94915'),
  t.e('30671'),
  t.e('86751')
]).then(t.bind(t, 759386)), A = _({
  guildId: I,
  showBenefitsFirst: S,
  eligibleApplicationSubscriptionGuilds: C
});
return t => (0, r.jsx)(e, {
  applicationId: p,
  activeSubscription: i,
  stepConfigs: A,
  skuIDs: [E],
  children: (0, r.jsx)(d.KB, {
    children: (0, r.jsx)(l, {
      ...t,
      initialPlanId: n,
      skuId: E,
      analyticsLocations: a,
      analyticsObject: o,
      analyticsLocation: u,
      analyticsSubscriptionType: s,
      renderHeader: c,
      planGroup: f,
      reviewWarningMessage: g,
      applicationId: p,
      guildId: null != I ? I : void 0,
      onComplete: T,
      forcesTransitionToGuild: m
    })
  })
});
  }, {
onCloseRequest: _.dG4
  });
}
let E = async (e, n) => {
  let t = (await (0, u.yD)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date()).find(e => e.sku_id === n);
  o()(null == t, 'User already has an active subscription to this SKU');
};
async function I(e) {
  var n;
  let {
applicationId: t,
skuId: r,
initialPlanId: i,
analyticsLocationObject: l,
analyticsLocations: u,
renderHeader: d
  } = e, I = c.Z.get(r), g = s.Z.getForSKU(r);
  o()(null != I, 'Failed to find SKU');
  let p = (0, a.KW)(I.flags);
  o()(p, 'Guild application subscriptions unsupported!'), await E(t, r), f({
initialPlanId: null != i ? i : null === (n = g[0]) || void 0 === n ? void 0 : n.id,
activeSubscription: null,
analyticsLocations: u,
analyticsLocationObject: l,
analyticsSubscriptionType: _.NYc.APPLICATION,
renderHeader: d,
planGroup: [],
skuId: r,
guildId: null,
eligibleApplicationSubscriptionGuilds: [],
showBenefitsFirst: !1,
applicationId: t
  });
}