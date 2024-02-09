"use strict";
n.r(t), n.d(t, {
  useOutboundPromotions: function() {
    return _
  },
  useUnseenOutboundPromotions: function() {
    return E
  },
  useBogoPromotion: function() {
    return T
  }
}), n("222007");
var r = n("884691"),
  i = n("446674"),
  l = n("913144"),
  a = n("697218"),
  s = n("719923"),
  o = n("324878"),
  u = n("44678"),
  d = n("538620"),
  c = n("807345"),
  m = n("646718");

function f() {
  let e = (0, i.useStateFromStoresArray)([c.default], () => c.default.outboundPromotions),
    t = (0, i.useStateFromStores)([c.default], () => c.default.consumedInboundPromotionId),
    n = r.useMemo(() => e.filter(e => {
      let {
        id: n
      } = e;
      return n !== t
    }), [e, t]);
  return n
}

function _() {
  let e = (0, i.useStateFromStores)([c.default], () => c.default.lastFetchedActivePromotions),
    t = f(),
    n = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
    _ = (0, o.useHasActiveTrial)(),
    [E, T] = r.useState(!1),
    [I, p] = r.useState([]);
  r.useEffect(() => {
    null != e && l.default.wait(() => d.default.markOutboundPromotionsSeen())
  }, [e]);
  let P = r.useCallback(e => {
      p(t => t.some(t => {
        let {
          promotion: n
        } = t;
        return n.id === e.promotion.id
      }) ? t : [...t, e])
    }, []),
    S = (0, s.isPremiumExactly)(n, m.PremiumTypes.TIER_2);
  r.useEffect(() => {
    l.default.wait(() => {
      S && null == e && d.default.fetchActiveOutboundPromotions()
    })
  }, [e, S]), r.useEffect(() => {
    l.default.wait(() => {
      (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
        p(e), T(!0)
      }).catch(() => {
        p([]), T(!0)
      })
    })
  }, []);
  let R = {};
  for (let {
      code: e,
      promotion: t
    }
    of I) R[t.id] = e;
  let O = new Set(t.map(e => {
      let {
        id: t
      } = e;
      return t
    })),
    C = I.filter(e => {
      let {
        promotion: t
      } = e;
      return !O.has(t.id)
    }),
    M = E && (!S || null != e);
  return {
    promotionsLoaded: M,
    activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!_ || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, R))),
    claimedEndedOutboundPromotions: C.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
    claimedOutboundPromotionCodeMap: R,
    addClaimedOutboundPromotionCode: P
  }
}

function E() {
  let e = (0, i.useStateFromStores)([c.default], () => c.default.lastSeenOutboundPromotionStartDate),
    t = (0, o.useHasActiveTrial)(),
    n = f(),
    l = r.useMemo(() => {
      if (null == e) return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n;
      let r = n.filter(t => {
        let {
          startDate: n
        } = t;
        return new Date(n) > new Date(e)
      });
      return t ? r.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : r
    }, [n, e, t]);
  return l.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
}

function T() {
  let e = (0, i.useStateFromStores)([c.default], () => c.default.bogoPromotion);
  return {
    promotion: e
  }
}