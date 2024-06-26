"use strict";
n.d(t, {
  B6: function() {
    return y
  },
  DU: function() {
    return B
  },
  EH: function() {
    return M
  },
  Fr: function() {
    return x
  },
  J2: function() {
    return v
  },
  Rf: function() {
    return U
  },
  W6: function() {
    return r
  },
  bA: function() {
    return D
  },
  iO: function() {
    return G
  },
  jU: function() {
    return w
  },
  kJ: function() {
    return k
  },
  t5: function() {
    return b
  },
  tP: function() {
    return P
  },
  z6: function() {
    return V
  }
}), n(47120), n(653041);
var i, r, s, o, a = n(470079),
  l = n(846519),
  u = n(442837),
  _ = n(230711),
  c = n(583434),
  d = n(706454),
  E = n(553795),
  I = n(617136),
  T = n(272008),
  h = n(569984),
  f = n(497505),
  S = n(918701),
  N = n(242755),
  A = n(977156),
  m = n(31055),
  O = n(566078),
  p = n(46140),
  R = n(981631),
  g = n(689938);
let C = 12633 == n.j ? -1 : null;

function v() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only"
    },
    [t, n] = a.useState(!1),
    i = (0, u.Wu)([h.Z], () => [...h.Z.quests.values()]),
    {
      isFetchingCurrentQuests: r,
      lastFetchedCurrentQuests: s
    } = (0, u.cj)([h.Z], () => ({
      isFetchingCurrentQuests: h.Z.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: h.Z.lastFetchedCurrentQuests
    })),
    o = (0, A.cB)({
      location: p.dr.USE_QUESTS
    });
  return a.useEffect(() => {
    if ("cache-only" !== e.fetchPolicy)("cache-and-network" === e.fetchPolicy || "cache-or-network" === e.fetchPolicy && 0 === s) && o && !t && !r && (n(!0), (0, T.xw)())
  }, [e.fetchPolicy, o, t, r, s]), {
    quests: i,
    isFetchingCurrentQuests: r
  }
}

function L(e, t, n) {
  return e.localeCompare(t) * (0 === n ? C : 1)
}(s = i || (i = {}))[s.DESC = 0] = "DESC", s[s.ASC = 1] = "ASC";

function D(e) {
  let {
    quests: t,
    isFetchingCurrentQuests: n
  } = v({
    fetchPolicy: "cache-and-network"
  }), i = new Map(t.map(e => [e.id, e])), r = function(e) {
    let t = a.useMemo(() => e.filter(e => {
        var t;
        return !((null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null)
      }), [e]),
      n = a.useRef([]);
    return a.useMemo(() => {
      if (0 === t.length) return [];
      if (n.current.length > 0) return n.current;
      let e = t.sort((e, t) => {
        var n, i, r, s, o, a;
        let l = !(0, S.zi)(e),
          u = !(0, S.zi)(t),
          _ = (0, S.Mi)(e, f.jn.QUEST_BAR) || (0, S.Mi)(e, f.jn.QUEST_BAR_V2),
          c = (0, S.Mi)(t, f.jn.QUEST_BAR) || (0, S.Mi)(t, f.jn.QUEST_BAR_V2),
          d = (0, S.Mi)(e, f.jn.GIFT_INVENTORY_FOR_YOU),
          E = (0, S.Mi)(t, f.jn.GIFT_INVENTORY_FOR_YOU),
          I = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
          T = (null === (i = t.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null;
        return l !== u ? l ? C : 1 : _ !== c && l && u ? _ ? C : 1 : d !== E ? d ? C : 1 : I !== T ? I ? C : 1 : l && u ? L(null === (o = e.config) || void 0 === o ? void 0 : o.expiresAt, null === (a = t.config) || void 0 === a ? void 0 : a.expiresAt, 1) : L(null === (r = e.config) || void 0 === r ? void 0 : r.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 0)
      }).map(e => e.id);
      return n.current = e, e
    }, [t])
  }(t), s = function(e) {
    let t = a.useMemo(() => e.filter(e => {
        var t, n;
        let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
          r = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
        return i && r
      }), [e]),
      n = a.useRef([]);
    return a.useMemo(() => {
      if (0 === t.length) return [];
      if (n.current.length > 0) return n.current;
      let e = t.sort((e, t) => {
        var n, i;
        let r = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
        if (r !== ((null === (i = t.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null)) return r ? C : 1;
        let s = O.r.build(e.config).rewardsExpireAt;
        return L(s, O.r.build(t.config).rewardsExpireAt, 0)
      }).map(e => e.id);
      return n.current = e, e
    }, [t])
  }(t), o = [], l = [];
  for (let t of o = "unclaimed" === e ? r : s) {
    let e = i.get(t);
    null != e && l.push(e)
  }
  return {
    quests: l,
    isFetchingCurrentQuests: n
  }
}

function M() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = v({
    fetchPolicy: "cache-only"
  }), [n, i] = a.useState(() => new Map(e.map(e => [e.id, (0, S.zi)(e)])));
  return a.useEffect(() => {
    if (t) return;
    let n = [];
    for (let t of e)
      if (null == t || (0, S.zi)(t)) null != t && (0, S.zi)(t) && i(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
      else {
        let e = new l.V7,
          r = () => {
            let s = Date.parse(t.config.expiresAt) - Date.now();
            e.start(s, () => {
              (0, S.zi)(t) ? i(e => new Map(e).set(t.id, !0)): r()
            }), n.push(e)
          };
        r()
      } return () => {
      for (let e of n) e.stop()
    }
  }, [e, t]), n
}

function P(e) {
  let t = M();
  return a.useMemo(() => {
    var n;
    return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
  }, [e, t])
}

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, u.e7)([d.default], () => d.default.locale);
  return a.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}(o = r || (r = {})).UNCLAIMED = "unclaimed", o.CLAIMED = "claimed";
let U = e => {
  let {
    quest: t,
    location: n
  } = e;
  return a.useMemo(() => (0, S.il)({
    quest: t,
    location: n
  }), [t, n])
};

function b(e, t, n) {
  let i = (0, N.A)({
      location: t
    }),
    {
      targetMinutes: r
    } = U({
      quest: e,
      location: t
    });
  if ((0, S.zK)(e, p.S7.IN_HOUSE_CONSOLE_QUEST)) return g.Z.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
    minutes: r,
    onClick: () => {
      (0, I._3)({
        questId: e.id,
        questContent: n,
        questContentCTA: I.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
      }), _.Z.open(R.oAB.CONNECTIONS)
    }
  });
  let s = g.Z.Messages.QUESTS_STREAM_TASK;
  return i && (0, S.Nj)({
    quest: e
  }) && (s = g.Z.Messages.QUESTS_PLAY_TASK), s.format({
    minutes: r,
    gameTitle: e.config.messages.gameTitle
  })
}

function G() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = v({
    fetchPolicy: "cache-or-network"
  }), n = M();
  return a.useMemo(() => {
    let i = [];
    if (t || 0 === e.length) return i;
    for (let t of e) {
      var r;
      if (!(0, S.vR)(t, f.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (r = n.get(t.id)) && void 0 !== r && r) continue;
      if ((null == t ? void 0 : t.userStatus) == null) {
        i.push(t);
        continue
      }
      let e = null != t.userStatus.claimedAt,
        s = (0, S.zE)(t.userStatus, f.jn.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!e && !s) {
        i.push(t);
        continue
      }
    }
    return i
  }, [e, n, t])
}

function w() {
  let e = G();
  a.useEffect(() => {
    for (let t of e)(0, T.gl)(t.id, f.jn.GIFT_INVENTORY_SETTINGS_BADGE)
  }, [e])
}

function x(e) {
  let t = (0, m.z)({
      location: p.dr.MEMBERS_LIST
    }),
    n = (0, u.e7)([h.Z], () => t ? h.Z.quests : null),
    i = a.useMemo(() => (0, S.Jg)(n, e), [e, n]);
  return P(i) ? null : i
}

function B(e) {
  var t;
  let n = (0, S.Xv)(e),
    {
      product: i,
      isFetching: r
    } = (0, c.T)(O.r.build(e).defaultReward.skuId);
  return {
    hasQuestCollectibles: n,
    avatarDecoration: null == i ? void 0 : null === (t = i.items) || void 0 === t ? void 0 : t[0],
    isFetching: r
  }
}

function k(e) {
  return {
    handleComplete: () => (0, T.Wf)(e),
    handleResetStatusClick: () => (0, T.eT)(e),
    handleResetDismissibilityClick: () => (0, T.T0)(e),
    handleOverrideDeliveryClick: () => (0, T.EW)(e)
  }
}

function V() {
  let {
    fetching: e,
    accounts: t
  } = (0, u.cj)([E.Z], () => ({
    fetching: E.Z.isFetching(),
    accounts: E.Z.getAccounts()
  })), {
    xboxAccounts: n,
    playstationAccounts: i,
    xboxAndPlaystationAccounts: r
  } = a.useMemo(() => {
    let e = t.filter(e => !1 === e.revoked),
      n = e.filter(e => e.type === R.ABu.XBOX),
      i = e.filter(e => e.type === R.ABu.PLAYSTATION),
      r = n.concat(i);
    return {
      xboxAccounts: n,
      playstationAccounts: i,
      xboxAndPlaystationAccounts: r
    }
  }, [t]);
  return {
    fetching: e,
    xboxAccounts: n,
    playstationAccounts: i,
    xboxAndPlaystationAccounts: r
  }
}