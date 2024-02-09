"use strict";
n.r(t), n.d(t, {
  useIsEligibleForBogoPromotion: function() {
    return U
  },
  maybeFetchActiveBogoPromotion: function() {
    return h
  },
  isEligibleForBOGOAnnouncementModal: function() {
    return N
  },
  getBOGOPillCopy: function() {
    return A
  }
});
var r = n("866227"),
  i = n.n(r),
  l = n("65597"),
  a = n("151426"),
  s = n("850068"),
  o = n("174727"),
  u = n("619935"),
  d = n("10641"),
  c = n("915639"),
  m = n("697218"),
  f = n("521012"),
  _ = n("340412"),
  E = n("719923"),
  T = n("982457"),
  I = n("433947"),
  p = n("705337"),
  P = n("935566"),
  S = n("917247"),
  R = n("538620"),
  O = n("694540"),
  C = n("807345"),
  M = n("646718"),
  g = n("49111"),
  L = n("782340");

function v(e) {
  var t, n, r;
  let {
    experimentEnabled: l,
    premiumSubscription: a,
    mostRecentSubscription: s
  } = e, o = !1, u = !1;
  if (null != s && s.status === g.SubscriptionStatusTypes.ENDED) {
    let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i(s.metadata.ended_at) : null,
      r = null === (n = (0, E.getPremiumPlanItem)(s)) || void 0 === n ? void 0 : n.planId,
      l = null != r && E.default.getPremiumType(r) === M.PremiumTypes.TIER_2;
    u = null != e && l && e.add(10, "days").isAfter(i())
  }
  if (null != a) {
    let e = null === (r = (0, E.getPremiumPlanItem)(a)) || void 0 === r ? void 0 : r.planId,
      t = null != e && E.default.getPremiumType(e) === M.PremiumTypes.TIER_2,
      n = m.default.getCurrentUser(),
      i = (null == a ? void 0 : a.trialId) != null && E.default.isPremiumExactly(n, M.PremiumTypes.TIER_0);
    o = t || i
  }
  return !l || o || u
}

function U() {
  var e;
  let {
    paymentsBlocked: t
  } = u.default.useExperiment({
    location: "153d31_1"
  }, {
    autoTrackExposure: !1
  }), {
    promotion: n
  } = (0, O.useBogoPromotion)(), {
    enabled: r
  } = (0, P.default)(), {
    mostRecentSubscription: i,
    premiumSubscription: a
  } = (0, l.useStateFromStoresObject)([f.default], () => ({
    mostRecentSubscription: f.default.getMostRecentPremiumTypeSubscription(),
    premiumSubscription: f.default.getPremiumTypeSubscription()
  })), s = (0, S.usePremiumTrialOffer)(), d = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
  (0, o.default)(d, 1e3, void 0, d + 2e3 < Date.now());
  let c = !v({
      experimentEnabled: r,
      premiumSubscription: a,
      mostRecentSubscription: i
    }),
    m = c && null == s && null != n && !t,
    _ = Date.now(),
    {
      enabled: E
    } = p.default.useExperiment({
      location: "153d31_2"
    }, {
      autoTrackExposure: m,
      disable: !m
    });
  return !(_ > d) && E
}
async function x() {
  var e;
  let t = m.default.getCurrentUser(),
    n = !(null == t ? void 0 : t.isClaimed()),
    {
      paymentsBlocked: r
    } = u.default.getCurrentConfig({
      location: "153d31_3"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: i
    } = (0, P.isBogoPromotionExperimentEnabled)(),
    {
      enabled: l
    } = p.default.getCurrentConfig({
      location: "153d31_4"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: a
    } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
      location: "153d31_5"
    }, {
      autoTrackExposure: !1
    });
  if (n || r || !i || !a && !l) return !1;
  if (_.default.shouldFetchOffer() && await T.default.fetchUserTrialOffer(), _.default.hasFetchedOffer() && _.default.hasAnyUnexpiredOffer()) return !1;
  !f.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(M.PremiumSubscriptionSKUs.TIER_2)) && await (0, s.fetchMostRecentSubscription)(), !f.default.hasFetchedSubscriptions() && await (0, s.fetchSubscriptions)();
  let o = f.default.getMostRecentPremiumTypeSubscription(),
    d = f.default.getPremiumTypeSubscription();
  return !v({
    experimentEnabled: i,
    premiumSubscription: d,
    mostRecentSubscription: o
  })
}
async function h() {
  let e = await x();
  if (!e) return;
  let t = C.default.bogoPromotion;
  if (null != t) {
    let e = new Date(t.endDate).valueOf();
    if (e >= Date.now()) return
  }
  await (0, R.fetchActiveBogoPromotion)()
}
async function N() {
  let e = C.default.bogoPromotion,
    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
    n = (0, d.isDismissibleContentDismissed)(a.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
    r = await x(),
    {
      enabled: i
    } = P.BogoPromotionExperiment.getCurrentConfig({
      location: "153d31_6"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: l
    } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
      location: "153d31_7"
    }, {
      autoTrackExposure: t && i && !n && r
    });
  return t && l && i && !n && r
}

function A() {
  let e = c.default.locale;
  switch (e) {
    case "de":
    case "es-ES":
    case "fr":
    case "hr":
    case "it":
    case "lt":
    case "nl":
    case "pl":
    case "pt-BR":
    case "ro":
    case "fi":
    case "sv-SE":
    case "tr":
    case "cs":
    case "el":
    case "bg":
    case "ru":
    case "uk":
    case "ja":
    case "ko":
      return L.default.Messages.NITRO_BADGE_TEXT;
    default:
      return L.default.Messages.BOGO_PILL
  }
}