t.d(n, {
  h: function() {
return f;
  },
  m: function() {
return h;
  }
}), t(789020);
var i = t(735250);
t(470079);
var o = t(512722),
  a = t.n(o),
  l = t(481060),
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
analyticsObject: a,
analyticsLocation: r,
analyticsLocations: s,
analyticsSubscriptionType: u,
renderHeader: d,
planGroup: f,
skuId: m,
guildId: h,
reviewWarningMessage: I,
applicationId: _,
showBenefitsFirst: g,
eligibleApplicationSubscriptionGuilds: C,
onComplete: b,
forcesTransitionToGuild: v
  } = e;
  (0, l.openModalLazy)(async () => {
let {
  PaymentContextProvider: e
} = await Promise.resolve().then(t.bind(t, 598)), l = (await Promise.all([
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
  guildId: h,
  showBenefitsFirst: g,
  eligibleApplicationSubscriptionGuilds: C
});
return t => (0, i.jsx)(e, {
  applicationId: _,
  activeSubscription: o,
  stepConfigs: S,
  skuIDs: [m],
  children: (0, i.jsx)(c.KB, {
    children: (0, i.jsx)(l, {
      ...t,
      initialPlanId: n,
      skuId: m,
      analyticsLocations: s,
      analyticsObject: a,
      analyticsLocation: r,
      analyticsSubscriptionType: u,
      renderHeader: d,
      planGroup: f,
      reviewWarningMessage: I,
      applicationId: _,
      guildId: null != h ? h : void 0,
      onComplete: b,
      forcesTransitionToGuild: v
    })
  })
});
  }, {
onCloseRequest: p.dG4
  });
}
let m = async (e, n) => {
  let t = (await (0, r.yD)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date()).find(e => e.sku_id === n);
  a()(null == t, 'User already has an active subscription to this SKU');
};
async function h(e) {
  var n;
  let {
applicationId: t,
skuId: i,
initialPlanId: o,
analyticsLocationObject: l,
analyticsLocations: r,
renderHeader: c
  } = e, h = d.Z.get(i), I = u.Z.getForSKU(i);
  a()(null != h, 'Failed to find SKU');
  let _ = (0, s.KW)(h.flags);
  a()(_, 'Guild application subscriptions unsupported!'), await m(t, i), f({
initialPlanId: null != o ? o : null === (n = I[0]) || void 0 === n ? void 0 : n.id,
activeSubscription: null,
analyticsLocations: r,
analyticsLocationObject: l,
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