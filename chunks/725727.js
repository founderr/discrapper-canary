"use strict";
n.d(t, {
  YO: function() {
    return f
  },
  lG: function() {
    return h
  },
  mq: function() {
    return S
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(570140),
  o = n(594174),
  a = n(295226),
  l = n(74538),
  u = n(775412),
  _ = n(163684),
  c = n(518638),
  d = n(748770),
  E = n(1844),
  I = n(474936);

function T() {
  let e = (0, r.Wu)([E.Z], () => E.Z.outboundPromotions),
    t = (0, r.e7)([E.Z], () => E.Z.consumedInboundPromotionId);
  return i.useMemo(() => e.filter(e => {
    let {
      id: n
    } = e;
    return n !== t
  }), [e, t])
}

function h() {
  let e = (0, r.e7)([E.Z], () => E.Z.lastFetchedActivePromotions),
    t = T(),
    n = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
    h = (0, u._O)(),
    f = (0, r.e7)([a.Z], () => a.Z.hasAnyUnexpiredOffer()),
    [S, A] = i.useState(!1),
    [N, m] = i.useState([]);
  i.useEffect(() => {
    null != e && s.Z.wait(() => d.ZP.markOutboundPromotionsSeen())
  }, [e]);
  let O = i.useCallback(e => {
      m(t => t.some(t => {
        let {
          promotion: n
        } = t;
        return n.id === e.promotion.id
      }) ? t : [...t, e])
    }, []),
    p = l.ZP.isPremium(n),
    R = _.g.useExperiment({
      location: "useOutboundPromotions"
    }, {
      autoTrackExposure: !p,
      disable: p
    }).enabled || l.ZP.isPremiumExactly(n, I.p9.TIER_2);
  i.useEffect(() => {
    s.Z.wait(() => {
      R && null == e && d.ZP.fetchActiveOutboundPromotions()
    })
  }, [e, R]), i.useEffect(() => {
    s.Z.wait(() => {
      (0, c.t8)().then(e => {
        m(e), A(!0)
      }).catch(() => {
        m([]), A(!0)
      })
    })
  }, []);
  let g = {};
  for (let {
      code: e,
      promotion: t
    }
    of N) g[t.id] = e;
  let C = new Set(t.map(e => {
      let {
        id: t
      } = e;
      return t
    })),
    v = N.filter(e => {
      let {
        promotion: t
      } = e;
      return !C.has(t.id)
    });
  return {
    promotionsLoaded: S && (!R || null != e),
    activeOutboundPromotions: t.filter(e => (0, c.ZC)(e) && (!(h || f) || (0, c.Qf)(e, g))),
    claimedEndedOutboundPromotions: v.filter(e => (0, c.ZC)(e.promotion)),
    claimedOutboundPromotionCodeMap: g,
    addClaimedOutboundPromotionCode: O
  }
}

function f() {
  let e = (0, r.e7)([E.Z], () => E.Z.lastSeenOutboundPromotionStartDate),
    t = (0, u._O)(),
    n = (0, r.e7)([a.Z], () => a.Z.hasAnyUnexpiredOffer()),
    s = t || n,
    o = T();
  return i.useMemo(() => {
    if (null == e) return s ? o.filter(e => (0, c.Nw)(e)) : o;
    let t = o.filter(t => {
      let {
        startDate: n
      } = t;
      return new Date(n) > new Date(e)
    });
    return s ? t.filter(e => (0, c.Nw)(e)) : t
  }, [o, e, s]).filter(e => (0, c.ZC)(e))
}

function S() {
  return {
    promotion: (0, r.e7)([E.Z], () => E.Z.bogoPromotion)
  }
}