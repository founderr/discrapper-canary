"use strict";
n.r(t), n.d(t, {
  useBogoPromotion: function() {
    return h
  },
  useOutboundPromotions: function() {
    return f
  },
  useUnseenOutboundPromotions: function() {
    return S
  }
}), n("47120");
var i = n("470079"),
  r = n("442837"),
  s = n("570140"),
  a = n("594174"),
  o = n("295226"),
  l = n("74538"),
  u = n("775412"),
  d = n("163684"),
  _ = n("518638"),
  c = n("748770"),
  E = n("1844"),
  I = n("474936");

function T() {
  let e = (0, r.useStateFromStoresArray)([E.default], () => E.default.outboundPromotions),
    t = (0, r.useStateFromStores)([E.default], () => E.default.consumedInboundPromotionId);
  return i.useMemo(() => e.filter(e => {
    let {
      id: n
    } = e;
    return n !== t
  }), [e, t])
}

function f() {
  let e = (0, r.useStateFromStores)([E.default], () => E.default.lastFetchedActivePromotions),
    t = T(),
    n = (0, r.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
    f = (0, u.useHasActiveTrial)(),
    S = (0, r.useStateFromStores)([o.default], () => o.default.hasAnyUnexpiredOffer()),
    [h, A] = i.useState(!1),
    [m, N] = i.useState([]);
  i.useEffect(() => {
    null != e && s.default.wait(() => c.default.markOutboundPromotionsSeen())
  }, [e]);
  let p = i.useCallback(e => {
      N(t => t.some(t => {
        let {
          promotion: n
        } = t;
        return n.id === e.promotion.id
      }) ? t : [...t, e])
    }, []),
    O = l.default.isPremium(n),
    C = d.OutboundPromoDesktopUpsellExperiment.useExperiment({
      location: "useOutboundPromotions"
    }, {
      autoTrackExposure: !O,
      disable: O
    }).enabled || l.default.isPremiumExactly(n, I.PremiumTypes.TIER_2);
  i.useEffect(() => {
    s.default.wait(() => {
      C && null == e && c.default.fetchActiveOutboundPromotions()
    })
  }, [e, C]), i.useEffect(() => {
    s.default.wait(() => {
      (0, _.fetchClaimedOutboundPromotionCodes)().then(e => {
        N(e), A(!0)
      }).catch(() => {
        N([]), A(!0)
      })
    })
  }, []);
  let R = {};
  for (let {
      code: e,
      promotion: t
    }
    of m) R[t.id] = e;
  let g = new Set(t.map(e => {
      let {
        id: t
      } = e;
      return t
    })),
    L = m.filter(e => {
      let {
        promotion: t
      } = e;
      return !g.has(t.id)
    });
  return {
    promotionsLoaded: h && (!C || null != e),
    activeOutboundPromotions: t.filter(e => (0, _.shouldShowOutboundPromotionOnPlatform)(e) && (!(f || S) || (0, _.isTrialUserEligibleToSeeOutboundPromotion)(e, R))),
    claimedEndedOutboundPromotions: L.filter(e => (0, _.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
    claimedOutboundPromotionCodeMap: R,
    addClaimedOutboundPromotionCode: p
  }
}

function S() {
  let e = (0, r.useStateFromStores)([E.default], () => E.default.lastSeenOutboundPromotionStartDate),
    t = (0, u.useHasActiveTrial)(),
    n = (0, r.useStateFromStores)([o.default], () => o.default.hasAnyUnexpiredOffer()),
    s = t || n,
    a = T();
  return i.useMemo(() => {
    if (null == e) return s ? a.filter(e => (0, _.isOutboundPromotionRedeemableByTrialUsers)(e)) : a;
    let t = a.filter(t => {
      let {
        startDate: n
      } = t;
      return new Date(n) > new Date(e)
    });
    return s ? t.filter(e => (0, _.isOutboundPromotionRedeemableByTrialUsers)(e)) : t
  }, [a, e, s]).filter(e => (0, _.shouldShowOutboundPromotionOnPlatform)(e))
}

function h() {
  return {
    promotion: (0, r.useStateFromStores)([E.default], () => E.default.bogoPromotion)
  }
}