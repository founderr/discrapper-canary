"use strict";
n.r(t), n.d(t, {
  useBogoPromotion: function() {
    return S
  },
  useOutboundPromotions: function() {
    return T
  },
  useUnseenOutboundPromotions: function() {
    return f
  }
}), n("47120");
var i = n("470079"),
  r = n("442837"),
  s = n("570140"),
  a = n("594174"),
  o = n("74538"),
  l = n("775412"),
  u = n("163684"),
  d = n("518638"),
  _ = n("748770"),
  c = n("1844"),
  E = n("474936");

function I() {
  let e = (0, r.useStateFromStoresArray)([c.default], () => c.default.outboundPromotions),
    t = (0, r.useStateFromStores)([c.default], () => c.default.consumedInboundPromotionId);
  return i.useMemo(() => e.filter(e => {
    let {
      id: n
    } = e;
    return n !== t
  }), [e, t])
}

function T() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.lastFetchedActivePromotions),
    t = I(),
    n = (0, r.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
    T = (0, l.useHasActiveTrial)(),
    [f, S] = i.useState(!1),
    [h, A] = i.useState([]);
  i.useEffect(() => {
    null != e && s.default.wait(() => _.default.markOutboundPromotionsSeen())
  }, [e]);
  let m = i.useCallback(e => {
      A(t => t.some(t => {
        let {
          promotion: n
        } = t;
        return n.id === e.promotion.id
      }) ? t : [...t, e])
    }, []),
    N = u.OutboundPromoDesktopUpsellExperiment.useExperiment({
      location: "useOutboundPromotions"
    }, {
      autoTrackExposure: !0
    }).enabled || (0, o.isPremiumExactly)(n, E.PremiumTypes.TIER_2);
  i.useEffect(() => {
    s.default.wait(() => {
      N && null == e && _.default.fetchActiveOutboundPromotions()
    })
  }, [e, N]), i.useEffect(() => {
    s.default.wait(() => {
      (0, d.fetchClaimedOutboundPromotionCodes)().then(e => {
        A(e), S(!0)
      }).catch(() => {
        A([]), S(!0)
      })
    })
  }, []);
  let p = {};
  for (let {
      code: e,
      promotion: t
    }
    of h) p[t.id] = e;
  let O = new Set(t.map(e => {
      let {
        id: t
      } = e;
      return t
    })),
    C = h.filter(e => {
      let {
        promotion: t
      } = e;
      return !O.has(t.id)
    });
  return {
    promotionsLoaded: f && (!N || null != e),
    activeOutboundPromotions: t.filter(e => (0, d.shouldShowOutboundPromotionOnPlatform)(e) && (!T || (0, d.isTrialUserEligibleToSeeOutboundPromotion)(e, p))),
    claimedEndedOutboundPromotions: C.filter(e => (0, d.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
    claimedOutboundPromotionCodeMap: p,
    addClaimedOutboundPromotionCode: m
  }
}

function f() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.lastSeenOutboundPromotionStartDate),
    t = (0, l.useHasActiveTrial)(),
    n = I();
  return i.useMemo(() => {
    if (null == e) return t ? n.filter(e => (0, d.isOutboundPromotionRedeemableByTrialUsers)(e)) : n;
    let i = n.filter(t => {
      let {
        startDate: n
      } = t;
      return new Date(n) > new Date(e)
    });
    return t ? i.filter(e => (0, d.isOutboundPromotionRedeemableByTrialUsers)(e)) : i
  }, [n, e, t]).filter(e => (0, d.shouldShowOutboundPromotionOnPlatform)(e))
}

function S() {
  return {
    promotion: (0, r.useStateFromStores)([c.default], () => c.default.bogoPromotion)
  }
}