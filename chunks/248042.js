n.d(t, {
  Vi: function() {
return C;
  },
  W1: function() {
return b;
  },
  k: function() {
return L;
  },
  l2: function() {
return D;
  }
});
var r = n(913527),
  i = n.n(r),
  a = n(399606),
  s = n(355467),
  o = n(774078),
  l = n(211242),
  u = n(706454),
  c = n(594174),
  d = n(78839),
  _ = n(295226),
  E = n(74538),
  f = n(937579),
  h = n(436783),
  p = n(617799),
  m = n(61196),
  I = n(104494),
  T = n(639119),
  g = n(748770),
  S = n(725727),
  A = n(1844),
  N = n(474936),
  v = n(981631),
  O = n(689938);

function R(e) {
  var t, n, r;
  let {
experimentEnabled: a,
premiumSubscription: s,
mostRecentSubscription: o
  } = e, l = !1, u = !1;
  if (null != o && o.status === v.O0b.ENDED) {
let e = (null === (t = o.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i()(o.metadata.ended_at) : null,
  r = null === (n = (0, E.Af)(o)) || void 0 === n ? void 0 : n.planId,
  a = null != r && E.ZP.getPremiumType(r) === N.p9.TIER_2;
u = null != e && a && e.add(10, 'days').isAfter(i()());
  }
  if (null != s) {
let e = null === (r = (0, E.Af)(s)) || void 0 === r ? void 0 : r.planId,
  t = null != e && E.ZP.getPremiumType(e) === N.p9.TIER_2,
  n = c.default.getCurrentUser(),
  i = (null == s ? void 0 : s.trialId) != null && E.ZP.isPremiumExactly(n, N.p9.TIER_0);
l = t || i;
  }
  return !a || l || u;
}

function C() {
  var e;
  let {
paymentsBlocked: t
  } = l.Z.useExperiment({
location: '153d31_1'
  }, {
autoTrackExposure: !1
  }), {
promotion: n
  } = (0, S.mq)(), {
enabled: r
  } = (0, m.ZP)(), {
mostRecentSubscription: i,
premiumSubscription: s
  } = (0, a.cj)([d.ZP], () => ({
mostRecentSubscription: d.ZP.getMostRecentPremiumTypeSubscription(),
premiumSubscription: d.ZP.getPremiumTypeSubscription()
  })), u = (0, T.N)(), c = (0, I.Ng)(), _ = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf(), {
enabled: E
  } = (0, h.Z)();
  (0, o.Z)(_, 1000, void 0, _ + 2000 < Date.now() || E);
  let f = !R({
  experimentEnabled: r,
  premiumSubscription: s,
  mostRecentSubscription: i
}) && null == u && null != n && !t && null == c,
g = Date.now(),
{
  enabled: A
} = p.Z.useExperiment({
  location: '153d31_2'
}, {
  autoTrackExposure: f,
  disable: !f
});
  return !(g > _) && A;
}
async function y() {
  var e;
  let t = c.default.getCurrentUser(),
n = !(null == t ? void 0 : t.isClaimed()),
{
  paymentsBlocked: r
} = l.Z.getCurrentConfig({
  location: '153d31_3'
}, {
  autoTrackExposure: !1
}),
{
  enabled: i
} = (0, m.aW)(),
{
  enabled: a
} = p.Z.getCurrentConfig({
  location: '153d31_4'
}, {
  autoTrackExposure: !1
});
  if (n || r || !i || !a)
return !1;
  if (_.Z.shouldFetchOffer() && !(0, E.I5)(t) && await (0, f.T)('BogoPromotionUtils'), _.Z.hasFetchedOffer() && (_.Z.hasAnyUnexpiredOffer() || _.Z.hasAnyUnexpiredDiscountOffer()))
return !1;
  !d.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(N.Si.TIER_2)) && await (0, s.ou)(), !d.ZP.hasFetchedSubscriptions() && await (0, s.jg)();
  let o = d.ZP.getMostRecentPremiumTypeSubscription();
  return !R({
experimentEnabled: i,
premiumSubscription: d.ZP.getPremiumTypeSubscription(),
mostRecentSubscription: o
  });
}
async function D() {
  if (!await y())
return;
  let e = A.Z.bogoPromotion;
  if (!(null != e && new Date(e.endDate).valueOf() >= Date.now()))
await (0, g.L9)();
}
async function L() {
  let e = A.Z.bogoPromotion,
t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
n = await y(),
{
  enabled: r
} = m.Am.getCurrentConfig({
  location: '153d31_6'
}, {
  autoTrackExposure: !1
}),
{
  enabled: i
} = p.Z.getCurrentConfig({
  location: '153d31_7'
}, {
  autoTrackExposure: t && r && n
});
  return t && i && r && n;
}

function b() {
  switch (u.default.locale) {
case 'de':
case 'es-ES':
case 'fr':
case 'hr':
case 'it':
case 'lt':
case 'nl':
case 'pl':
case 'pt-BR':
case 'ro':
case 'fi':
case 'sv-SE':
case 'tr':
case 'cs':
case 'el':
case 'bg':
case 'ru':
case 'uk':
case 'ja':
case 'ko':
  return O.Z.Messages.NITRO_BADGE_TEXT;
default:
  return O.Z.Messages.BOGO_PILL;
  }
}