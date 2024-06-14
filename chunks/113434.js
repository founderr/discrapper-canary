"use strict";
n.r(t), n.d(t, {
  QuestFilters: function() {
    return r
  },
  useConnectedAccounts: function() {
    return B
  },
  useDismissNewQuestBadge: function() {
    return b
  },
  useExpiredQuestsMap: function() {
    return v
  },
  useFilteredQuests: function() {
    return L
  },
  useIsQuestExpired: function() {
    return D
  },
  useQuestCollectibles: function() {
    return w
  },
  useQuestFormattedDate: function() {
    return M
  },
  useQuestFromActivities: function() {
    return G
  },
  useQuestInstructionTitle: function() {
    return P
  },
  useQuestPreviewActions: function() {
    return k
  },
  useQuestTaskDetails: function() {
    return y
  },
  useQuests: function() {
    return R
  },
  useQuestsForSettingsBadge: function() {
    return U
  }
}), n("47120"), n("653041");
var i, r, s, a, o = n("470079"),
  l = n("846519"),
  u = n("442837"),
  d = n("230711"),
  _ = n("583434"),
  c = n("706454"),
  E = n("553795"),
  I = n("272008"),
  T = n("569984"),
  f = n("497505"),
  S = n("918701"),
  h = n("242755"),
  A = n("977156"),
  m = n("31055"),
  N = n("566078"),
  p = n("46140"),
  O = n("981631"),
  C = n("689938");

function R() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only"
    },
    [t, n] = o.useState(!1),
    i = (0, u.useStateFromStoresArray)([T.default], () => [...T.default.quests.values()]),
    {
      isFetchingCurrentQuests: r,
      lastFetchedCurrentQuests: s
    } = (0, u.useStateFromStoresObject)([T.default], () => ({
      isFetchingCurrentQuests: T.default.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: T.default.lastFetchedCurrentQuests
    })),
    a = (0, A.getIsEligibleForQuests)({
      location: p.QuestsExperimentLocations.USE_QUESTS
    });
  return o.useEffect(() => {
    if ("cache-only" !== e.fetchPolicy)("cache-and-network" === e.fetchPolicy || "cache-or-network" === e.fetchPolicy && 0 === s) && a && !t && !r && (n(!0), (0, I.fetchCurrentQuests)())
  }, [e.fetchPolicy, a, t, r, s]), {
    quests: i,
    isFetchingCurrentQuests: r
  }
}

function g(e, t, n) {
  return e.localeCompare(t) * (0 === n ? -1 : 1)
}(s = i || (i = {}))[s.DESC = 0] = "DESC", s[s.ASC = 1] = "ASC";

function L(e) {
  let {
    quests: t,
    isFetchingCurrentQuests: n
  } = R({
    fetchPolicy: "cache-and-network"
  }), i = new Map(t.map(e => [e.id, e])), r = function(e) {
    let t = o.useMemo(() => e.filter(e => {
        var t;
        return !((null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null)
      }), [e]),
      n = o.useRef([]);
    return o.useMemo(() => {
      if (0 === t.length) return [];
      if (n.current.length > 0) return n.current;
      let e = t.sort((e, t) => {
        var n, i, r, s, a, o;
        let l = !(0, S.isQuestExpired)(e),
          u = !(0, S.isQuestExpired)(t),
          d = (0, S.isTargetedForContent)(e, f.QuestContent.QUEST_BAR) || (0, S.isTargetedForContent)(e, f.QuestContent.QUEST_BAR_V2),
          _ = (0, S.isTargetedForContent)(t, f.QuestContent.QUEST_BAR) || (0, S.isTargetedForContent)(t, f.QuestContent.QUEST_BAR_V2),
          c = (0, S.isTargetedForContent)(e, f.QuestContent.GIFT_INVENTORY_FOR_YOU),
          E = (0, S.isTargetedForContent)(t, f.QuestContent.GIFT_INVENTORY_FOR_YOU),
          I = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
          T = (null === (i = t.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null;
        return l !== u ? l ? -1 : 1 : d !== _ && l && u ? d ? -1 : 1 : c !== E ? c ? -1 : 1 : I !== T ? I ? -1 : 1 : l && u ? g(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : g(null === (r = e.config) || void 0 === r ? void 0 : r.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 0)
      }).map(e => e.id);
      return n.current = e, e
    }, [t])
  }(t), s = function(e) {
    let t = o.useMemo(() => e.filter(e => {
        var t, n;
        let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
          r = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null;
        return i && r
      }), [e]),
      n = o.useRef([]);
    return o.useMemo(() => {
      if (0 === t.length) return [];
      if (n.current.length > 0) return n.current;
      let e = t.sort((e, t) => {
        var n, i;
        let r = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null;
        if (r !== ((null === (i = t.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null)) return r ? -1 : 1;
        let s = N.SharedQuestFields.build(e.config).rewardsExpireAt;
        return g(s, N.SharedQuestFields.build(t.config).rewardsExpireAt, 0)
      }).map(e => e.id);
      return n.current = e, e
    }, [t])
  }(t), a = [], l = [];
  for (let t of a = "unclaimed" === e ? r : s) {
    let e = i.get(t);
    null != e && l.push(e)
  }
  return {
    quests: l,
    isFetchingCurrentQuests: n
  }
}

function v() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = R({
    fetchPolicy: "cache-only"
  }), [n, i] = o.useState(() => new Map(e.map(e => [e.id, (0, S.isQuestExpired)(e)])));
  return o.useEffect(() => {
    if (t) return;
    let n = [];
    for (let t of e)
      if (null == t || (0, S.isQuestExpired)(t)) null != t && (0, S.isQuestExpired)(t) && i(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
      else {
        let e = new l.Timeout,
          r = () => {
            let s = Date.parse(t.config.expiresAt) - Date.now();
            e.start(s, () => {
              (0, S.isQuestExpired)(t) ? i(e => new Map(e).set(t.id, !0)): r()
            }), n.push(e)
          };
        r()
      } return () => {
      for (let e of n) e.stop()
    }
  }, [e, t]), n
}

function D(e) {
  let t = v();
  return o.useMemo(() => {
    var n;
    return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
  }, [e, t])
}

function M(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, u.useStateFromStores)([c.default], () => c.default.locale);
  return o.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}(a = r || (r = {})).UNCLAIMED = "unclaimed", a.CLAIMED = "claimed";
let y = e => {
  let {
    quest: t,
    location: n
  } = e;
  return o.useMemo(() => (0, S.getQuestTaskDetails)({
    quest: t,
    location: n
  }), [t, n])
};

function P(e, t) {
  let n = (0, h.useIsEligibleForQuestPlaytime)({
      location: t
    }),
    {
      targetMinutes: i
    } = y({
      quest: e,
      location: t
    });
  if ((0, S.hasVariant)(e, p.QuestVariants.IN_HOUSE_CONSOLE_QUEST)) return C.default.Messages.QUESTS_IN_HOUSE_TASK_WITH_LINK.format({
    minutes: i,
    onClick: () => {
      d.default.open(O.UserSettingsSections.CONNECTIONS)
    }
  });
  let r = C.default.Messages.QUESTS_STREAM_TASK;
  return n && (0, S.hasPlayOnDesktopTask)({
    quest: e
  }) && (r = C.default.Messages.QUESTS_PLAY_TASK), r.format({
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function U() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = R({
    fetchPolicy: "cache-or-network"
  }), n = v();
  return o.useMemo(() => {
    let i = [];
    if (t || 0 === e.length) return i;
    for (let t of e) {
      var r;
      if (!(0, S.includesTarget)(t, f.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (r = n.get(t.id)) && void 0 !== r && r) continue;
      if ((null == t ? void 0 : t.userStatus) == null) {
        i.push(t);
        continue
      }
      let e = null != t.userStatus.claimedAt,
        s = (0, S.isDismissed)(t.userStatus, f.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!e && !s) {
        i.push(t);
        continue
      }
    }
    return i
  }, [e, n, t])
}

function b() {
  let e = U();
  o.useEffect(() => {
    for (let t of e)(0, I.dismissQuestContent)(t.id, f.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)
  }, [e])
}

function G(e) {
  let t = (0, m.useIsEligibleForMembersListQuestEntrypoint)({
      location: p.QuestsExperimentLocations.MEMBERS_LIST
    }),
    n = (0, u.useStateFromStores)([T.default], () => t ? T.default.quests : null),
    i = o.useMemo(() => (0, S.getQuestsFromActivities)(n, e), [e, n]);
  return D(i) ? null : i
}

function w(e) {
  var t;
  let n = (0, S.hasCollectiblesQuestReward)(e),
    {
      product: i,
      isFetching: r
    } = (0, _.useFetchCollectiblesProduct)(N.SharedQuestFields.build(e).defaultReward.skuId);
  return {
    hasQuestCollectibles: n,
    avatarDecoration: null == i ? void 0 : null === (t = i.items) || void 0 === t ? void 0 : t[0],
    isFetching: r
  }
}

function k(e) {
  return {
    handleComplete: () => (0, I.completeQuestPreview)(e),
    handleResetStatusClick: () => (0, I.resetQuestPreviewStatus)(e),
    handleResetDismissibilityClick: () => (0, I.resetQuestDismissibilityStatus)(e),
    handleOverrideDeliveryClick: () => (0, I.overrideQuestDelivery)(e)
  }
}

function B() {
  let {
    fetching: e,
    accounts: t
  } = (0, u.useStateFromStoresObject)([E.default], () => ({
    fetching: E.default.isFetching(),
    accounts: E.default.getAccounts()
  })), {
    xboxAccounts: n,
    playstationAccounts: i,
    xboxAndPlaystationAccounts: r
  } = o.useMemo(() => {
    let e = t.filter(e => !1 === e.revoked),
      n = e.filter(e => e.type === O.PlatformTypes.XBOX),
      i = e.filter(e => e.type === O.PlatformTypes.PLAYSTATION),
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