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
var i = n("884691"),
  r = n("446674"),
  l = n("913144"),
  a = n("697218"),
  s = n("719923"),
  o = n("324878"),
  u = n("44678"),
  c = n("538620"),
  d = n("807345"),
  f = n("646718");

function m() {
  let e = (0, r.useStateFromStoresArray)([d.default], () => d.default.outboundPromotions),
    t = (0, r.useStateFromStores)([d.default], () => d.default.consumedInboundPromotionId),
    n = i.useMemo(() => e.filter(e => {
      let {
        id: n
      } = e;
      return n !== t
    }), [e, t]);
  return n
}

function _() {
  let e = (0, r.useStateFromStores)([d.default], () => d.default.lastFetchedActivePromotions),
    t = m(),
    n = (0, r.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
    _ = (0, o.useHasActiveTrial)(),
    [E, T] = i.useState(!1),
    [I, C] = i.useState([]);
  i.useEffect(() => {
    null != e && l.default.wait(() => c.default.markOutboundPromotionsSeen())
  }, [e]);
  let p = i.useCallback(e => {
      C(t => t.some(t => {
        let {
          promotion: n
        } = t;
        return n.id === e.promotion.id
      }) ? t : [...t, e])
    }, []),
    P = (0, s.isPremiumExactly)(n, f.PremiumTypes.TIER_2);
  i.useEffect(() => {
    l.default.wait(() => {
      P && null == e && c.default.fetchActiveOutboundPromotions()
    })
  }, [e, P]), i.useEffect(() => {
    l.default.wait(() => {
      (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
        C(e), T(!0)
      }).catch(() => {
        C([]), T(!0)
      })
    })
  }, []);
  let S = {};
  for (let {
      code: e,
      promotion: t
    }
    of I) S[t.id] = e;
  let R = new Set(t.map(e => {
      let {
        id: t
      } = e;
      return t
    })),
    O = I.filter(e => {
      let {
        promotion: t
      } = e;
      return !R.has(t.id)
    }),
    M = E && (!P || null != e);
  return {
    promotionsLoaded: M,
    activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!_ || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, S))),
    claimedEndedOutboundPromotions: O.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
    claimedOutboundPromotionCodeMap: S,
    addClaimedOutboundPromotionCode: p
  }
}

function E() {
  let e = (0, r.useStateFromStores)([d.default], () => d.default.lastSeenOutboundPromotionStartDate),
    t = (0, o.useHasActiveTrial)(),
    n = m(),
    l = i.useMemo(() => {
      if (null == e) return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n;
      let i = n.filter(t => {
        let {
          startDate: n
        } = t;
        return new Date(n) > new Date(e)
      });
      return t ? i.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : i
    }, [n, e, t]);
  return l.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
}

function T() {
  let e = (0, r.useStateFromStores)([d.default], () => d.default.bogoPromotion);
  return {
    promotion: e
  }
}