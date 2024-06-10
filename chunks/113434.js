"use strict";
n.r(t), n.d(t, {
  QuestFilters: function() {
    return r
  },
  useConnectedAccounts: function() {
    return w
  },
  useDismissNewQuestBadge: function() {
    return P
  },
  useExpiredQuestsMap: function() {
    return L
  },
  useFilteredQuests: function() {
    return g
  },
  useIsQuestExpired: function() {
    return v
  },
  useQuestCollectibles: function() {
    return b
  },
  useQuestFormattedDate: function() {
    return D
  },
  useQuestFromActivities: function() {
    return U
  },
  useQuestInstructionTitle: function() {
    return M
  },
  useQuestPreviewActions: function() {
    return G
  },
  useQuests: function() {
    return C
  },
  useQuestsForSettingsBadge: function() {
    return y
  }
}), n("47120"), n("653041");
var i, r, s, a, o = n("470079"),
  l = n("846519"),
  u = n("442837"),
  d = n("583434"),
  _ = n("706454"),
  c = n("553795"),
  E = n("272008"),
  I = n("569984"),
  T = n("497505"),
  f = n("918701"),
  S = n("242755"),
  h = n("977156"),
  A = n("31055"),
  m = n("566078"),
  N = n("46140"),
  p = n("981631"),
  O = n("689938");

function C() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only"
    },
    [t, n] = o.useState(!1),
    i = (0, u.useStateFromStoresArray)([I.default], () => [...I.default.quests.values()]),
    {
      isFetchingCurrentQuests: r,
      lastFetchedCurrentQuests: s
    } = (0, u.useStateFromStoresObject)([I.default], () => ({
      isFetchingCurrentQuests: I.default.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: I.default.lastFetchedCurrentQuests
    })),
    a = (0, h.getIsEligibleForQuests)({
      location: N.QuestsExperimentLocations.USE_QUESTS
    });
  return o.useEffect(() => {
    if ("cache-only" !== e.fetchPolicy)("cache-and-network" === e.fetchPolicy || "cache-or-network" === e.fetchPolicy && 0 === s) && a && !t && !r && (n(!0), (0, E.fetchCurrentQuests)())
  }, [e.fetchPolicy, a, t, r, s]), {
    quests: i,
    isFetchingCurrentQuests: r
  }
}

function R(e, t, n) {
  return e.localeCompare(t) * (0 === n ? -1 : 1)
}(s = i || (i = {}))[s.DESC = 0] = "DESC", s[s.ASC = 1] = "ASC";

function g(e) {
  let {
    quests: t,
    isFetchingCurrentQuests: n
  } = C({
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
        let l = !(0, f.isQuestExpired)(e),
          u = !(0, f.isQuestExpired)(t),
          d = (0, f.isTargetedForContent)(e, T.QuestContent.QUEST_BAR) || (0, f.isTargetedForContent)(e, T.QuestContent.QUEST_BAR_V2),
          _ = (0, f.isTargetedForContent)(t, T.QuestContent.QUEST_BAR) || (0, f.isTargetedForContent)(t, T.QuestContent.QUEST_BAR_V2),
          c = (0, f.isTargetedForContent)(e, T.QuestContent.GIFT_INVENTORY_FOR_YOU),
          E = (0, f.isTargetedForContent)(t, T.QuestContent.GIFT_INVENTORY_FOR_YOU),
          I = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
          S = (null === (i = t.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null;
        return l !== u ? l ? -1 : 1 : d !== _ && l && u ? d ? -1 : 1 : c !== E ? c ? -1 : 1 : I !== S ? I ? -1 : 1 : l && u ? R(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : R(null === (r = e.config) || void 0 === r ? void 0 : r.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 0)
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
        let s = m.SharedQuestFields.build(e.config).rewardsExpireAt;
        return R(s, m.SharedQuestFields.build(t.config).rewardsExpireAt, 0)
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

function L() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = C({
    fetchPolicy: "cache-only"
  }), [n, i] = o.useState(() => new Map(e.map(e => [e.id, (0, f.isQuestExpired)(e)])));
  return o.useEffect(() => {
    if (t) return;
    let n = [];
    for (let t of e)
      if (null == t || (0, f.isQuestExpired)(t)) null != t && (0, f.isQuestExpired)(t) && i(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
      else {
        let e = new l.Timeout,
          r = () => {
            let s = Date.parse(t.config.expiresAt) - Date.now();
            e.start(s, () => {
              (0, f.isQuestExpired)(t) ? i(e => new Map(e).set(t.id, !0)): r()
            }), n.push(e)
          };
        r()
      } return () => {
      for (let e of n) e.stop()
    }
  }, [e, t]), n
}

function v(e) {
  let t = L();
  return o.useMemo(() => {
    var n;
    return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
  }, [e, t])
}

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, u.useStateFromStores)([_.default], () => _.default.locale);
  return o.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function M(e, t) {
  let n = (0, S.useIsEligibleForQuestPlaytime)({
      location: t
    }),
    i = O.default.Messages.QUESTS_STREAM_TASK;
  (0, f.hasVariant)(e, N.QuestVariants.IN_HOUSE_CONSOLE_QUEST) ? i = O.default.Messages.QUESTS_IN_HOUSE_TASK: n && (0, f.hasPlayOnDesktopTask)({
    quest: e
  }) && (i = O.default.Messages.QUESTS_PLAY_TASK);
  let r = (0, f.getQuestTaskDetails)({
    quest: e,
    location: t
  }).targetMinutes;
  return i.format({
    minutes: r,
    gameTitle: e.config.messages.gameTitle
  })
}

function y() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = C({
    fetchPolicy: "cache-or-network"
  }), n = L();
  return o.useMemo(() => {
    let i = [];
    if (t || 0 === e.length) return i;
    for (let t of e) {
      var r;
      if (!(0, f.includesTarget)(t, T.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (r = n.get(t.id)) && void 0 !== r && r) continue;
      if ((null == t ? void 0 : t.userStatus) == null) {
        i.push(t);
        continue
      }
      let e = null != t.userStatus.claimedAt,
        s = (0, f.isDismissed)(t.userStatus, T.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!e && !s) {
        i.push(t);
        continue
      }
    }
    return i
  }, [e, n, t])
}

function P() {
  let e = y();
  o.useEffect(() => {
    for (let t of e)(0, E.dismissQuestContent)(t.id, T.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)
  }, [e])
}

function U(e) {
  let t = (0, A.useIsEligibleForMembersListQuestEntrypoint)({
      location: N.QuestsExperimentLocations.MEMBERS_LIST
    }),
    n = (0, u.useStateFromStores)([I.default], () => t ? I.default.quests : null),
    i = o.useMemo(() => (0, f.getQuestsFromActivities)(n, e), [e, n]);
  return v(i) ? null : i
}

function b(e) {
  var t;
  let n = (0, f.hasCollectiblesQuestReward)(e),
    {
      product: i,
      isFetching: r
    } = (0, d.useFetchCollectiblesProduct)(m.SharedQuestFields.build(e).defaultReward.skuId);
  return {
    hasQuestCollectibles: n,
    avatarDecoration: null == i ? void 0 : null === (t = i.items) || void 0 === t ? void 0 : t[0],
    isFetching: r
  }
}

function G(e) {
  return {
    handleComplete: () => (0, E.completeQuestPreview)(e),
    handleResetStatusClick: () => (0, E.resetQuestPreviewStatus)(e),
    handleResetDismissibilityClick: () => (0, E.resetQuestDismissibilityStatus)(e),
    handleOverrideDeliveryClick: () => (0, E.overrideQuestDelivery)(e)
  }
}

function w() {
  let {
    fetching: e,
    accounts: t
  } = (0, u.useStateFromStoresObject)([c.default], () => ({
    fetching: c.default.isFetching(),
    accounts: c.default.getAccounts()
  })), {
    xboxAccounts: n,
    playstationAccounts: i,
    xboxAndPlaystationAccounts: r
  } = o.useMemo(() => {
    let e = t.filter(e => !1 === e.revoked),
      n = e.filter(e => e.type === p.PlatformTypes.XBOX),
      i = e.filter(e => e.type === p.PlatformTypes.PLAYSTATION),
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
}(a = r || (r = {})).UNCLAIMED = "unclaimed", a.CLAIMED = "claimed"