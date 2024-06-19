r.d(t, {
  $_: function() {
    return T
  },
  FM: function() {
    return I
  },
  IB: function() {
    return B
  },
  IY: function() {
    return S
  },
  JR: function() {
    return F
  },
  Vp: function() {
    return v
  },
  nY: function() {
    return L
  },
  rM: function() {
    return A
  },
  yQ: function() {
    return y
  }
}), r(47120);
var n = r(470079),
  s = r(913527),
  i = r.n(s),
  l = r(442837),
  a = r(704215),
  o = r(496929),
  d = r(607070),
  c = r(605236),
  u = r(706140),
  _ = r(243778),
  p = r(594174),
  f = r(314884),
  C = r(580130),
  x = r(626135),
  E = r(823379),
  h = r(111361),
  m = r(595878),
  j = r(944880),
  R = r(513785),
  g = r(106255),
  O = r(474936),
  N = r(735825),
  w = r(981631);

function y() {
  let e = function() {
      var e;
      let t = (0, l.cj)([R.Z], () => R.Z.getState());
      if (null != t) return null !== (e = t.userTenureRewardStatusByRewardId[N.Ft.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[N.Ft.FREE_GUILD_BOOST_3_MONTHS]
    }(),
    t = v(),
    r = (0, l.e7)([f.Z], () => f.Z.boostSlots),
    s = n.useMemo(() => Object.values(r).some(e => null == e.premiumGuildSubscription), [r]),
    a = null != t,
    o = a && !1 === s;
  return n.useMemo(() => {
    let r = {
      redeemableAt: null == e ? void 0 : e.redeemable_at,
      tenureRewardStatusId: null == e ? void 0 : e.id
    };
    if (o) return {
      ...r,
      nitroTenureStatus: N.EB.REDEEMED,
      tenureRewardSkuId: t.skuId,
      showNotification: !0,
      showCard: !0
    };
    if (a) return {
      ...r,
      nitroTenureStatus: N.EB.REDEEMABLE,
      tenureRewardSkuId: t.skuId,
      showNotification: !0,
      showCard: !0
    };
    if (!(null != e && (0, g.u7)(e))) return null;
    else {
      if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
      let t = i()(e.redeemable_at).diff(i().utc(), "days"),
        n = null != e.redeemable_in_ms ? Math.ceil(i().duration(e.redeemable_in_ms).asDays()) : t;
      if (t < 0) return null;
      let s = !1,
        l = !1;
      return e.next_tenure_reward_id === N.Ft.FREE_GUILD_BOOST_1_MONTH ? (l = t <= N.bm, s = t <= N.dF) : e.next_tenure_reward_id === N.Ft.FREE_GUILD_BOOST_3_MONTHS && (l = t <= N.yj, s = t <= N.LJ), {
        ...r,
        nitroTenureStatus: N.EB.PENDING,
        tenureRewardSkuId: e.next_tenure_reward_id,
        redeemableInDays: 0 === n ? 1 : n,
        showNotification: l,
        showCard: s
      }
    }
  }, [a, t, e, o])
}

function L(e) {
  let {
    showAnimations: t
  } = e, r = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), n = y();
  if (null == n) return;
  let {
    redeemableInDays: s = 0,
    tenureRewardSkuId: i
  } = n, a = N.Ft.FREE_GUILD_BOOST_1_MONTH === i ? N.jW : N.fY, o = Math.min(a, Math.max(a - s, 0)), c = 100 * o / a;
  return {
    initialPercentage: t && !r ? 100 * Math.max(o - .25 * a, 0) / a : c,
    percentage: c
  }
}
let M = new Set;

function v() {
  let e = (0, l.e7)([C.Z], () => {
      var e;
      return null !== (e = C.Z.getForApplication(O.RQ)) && void 0 !== e ? e : M
    }, [], E.OL),
    t = (0, l.e7)([p.default], () => {
      let e = p.default.getCurrentUser();
      return null != e && (0, h.M5)(e, O.p9.TIER_2)
    });
  if (null != (0, g.kG)(e) || !!t) return (0, g.MR)([N.Ft.FREE_GUILD_BOOST_1_MONTH, N.Ft.FREE_GUILD_BOOST_3_MONTHS], e)
}
let A = e => {
    if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
    switch (e.nitroTenureStatus) {
      case N.EB.PENDING:
        return [a.z.TENURE_REWARD_PENDING];
      case N.EB.REDEEMABLE:
        return [a.z.TENURE_REWARD_REDEEMABLE];
      default:
        return []
    }
  },
  T = () => {
    let e = y(),
      [t, r] = n.useState(A(e)),
      s = (0, m.c)({
        location: "Home"
      });
    n.useEffect(() => {
      if (!1 !== s) r(A(e))
    }, [e, s]);
    let [i] = (0, _.U)(s ? t : []);
    return s ? null != e && !0 === e.showNotification && (i === a.z.TENURE_REWARD_REDEEMABLE || i === a.z.TENURE_REWARD_PENDING) ? (0, g.Wb)(e.nitroTenureStatus) : null : null
  },
  B = () => {
    var e;
    let t = null === (e = y()) || void 0 === e ? void 0 : e.nitroTenureStatus,
      r = (0, m.c)({
        location: "Home"
      }) && null != t && t === N.EB.REDEEMABLE,
      [n] = (0, _.U)(r ? [a.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
    return !!r && n === a.z.TENURE_REWARD_REDEEMABLE_CONFETTI
  },
  S = () => {
    let e = y(),
      t = n.useMemo(() => A(e), [e]),
      [r] = (0, u.c)(t),
      s = n.useRef(!1);
    return n.useCallback(() => {
      null != e && !0 === e.showNotification && (r === a.z.TENURE_REWARD_REDEEMABLE || r === a.z.TENURE_REWARD_PENDING) && ((0, c.EW)(r), r === a.z.TENURE_REWARD_PENDING && !1 === s.current && (x.default.track(w.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
        tenure_reward_id: e.tenureRewardSkuId,
        reward_type: N.nW.SERVER_BOOST,
        redeemable_at: null == e ? void 0 : e.redeemableAt
      }), s.current = !0))
    }, [e, r])
  };

function F() {
  let {
    hasFetchedPremiumApplicationEntitlements: e,
    isFetchingPremiumApplicationEntitlements: t
  } = (0, l.cj)([C.Z], () => ({
    hasFetchedPremiumApplicationEntitlements: C.Z.isFetchedForApplication(O.RQ),
    isFetchingPremiumApplicationEntitlements: C.Z.isFetchingForApplication(O.RQ)
  })), r = (0, l.e7)([p.default], () => {
    let e = p.default.getCurrentUser();
    return null != e && (0, h.M5)(e, O.p9.TIER_2)
  }), s = n.useRef(!1);
  n.useEffect(() => {
    !1 === e && !1 === t && !0 === r && !1 === s.current && (o.yD(O.RQ), s.current = !0)
  }, [e, t, r])
}

function I() {
  var e;
  F();
  let t = y(),
    r = null !== (e = null == t ? void 0 : t.showCard) && void 0 !== e && e;
  n.useEffect(() => {
    r && j.Z.forceRefreshIfOutdated()
  }, [r])
}