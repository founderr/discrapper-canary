"use strict";
n.r(t), n.d(t, {
  QuestFilters: function() {
    return r
  },
  useDismissNewQuestBadge: function() {
    return M
  },
  useExpiredQuestsMap: function() {
    return R
  },
  useFilteredQuests: function() {
    return C
  },
  useIsQuestExpired: function() {
    return g
  },
  useQuestCollectibles: function() {
    return P
  },
  useQuestFormattedDate: function() {
    return L
  },
  useQuestFromActivities: function() {
    return y
  },
  useQuestInstructionTitle: function() {
    return v
  },
  useQuestPreviewActions: function() {
    return U
  },
  useQuests: function() {
    return p
  },
  useQuestsForSettingsBadge: function() {
    return D
  }
}), n("47120"), n("653041");
var i, r, s, a, o = n("470079"),
  l = n("846519"),
  u = n("442837"),
  d = n("583434"),
  _ = n("706454"),
  c = n("272008"),
  E = n("569984"),
  I = n("497505"),
  T = n("918701"),
  f = n("242755"),
  S = n("977156"),
  h = n("31055"),
  A = n("566078"),
  m = n("46140"),
  N = n("689938");

function p() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only"
    },
    [t, n] = o.useState(!1),
    i = (0, u.useStateFromStoresArray)([E.default], () => [...E.default.quests.values()]),
    {
      isFetchingCurrentQuests: r,
      lastFetchedCurrentQuests: s
    } = (0, u.useStateFromStoresObject)([E.default], () => ({
      isFetchingCurrentQuests: E.default.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: E.default.lastFetchedCurrentQuests
    })),
    a = (0, S.getIsEligibleForQuests)({
      location: m.QuestsExperimentLocations.USE_QUESTS
    });
  return o.useEffect(() => {
    if ("cache-only" !== e.fetchPolicy)("cache-and-network" === e.fetchPolicy || "cache-or-network" === e.fetchPolicy && 0 === s) && a && !t && !r && (n(!0), (0, c.fetchCurrentQuests)())
  }, [e.fetchPolicy, a, t, r, s]), {
    quests: i,
    isFetchingCurrentQuests: r
  }
}

function O(e, t, n) {
  return e.localeCompare(t) * (0 === n ? -1 : 1)
}(s = i || (i = {}))[s.DESC = 0] = "DESC", s[s.ASC = 1] = "ASC";

function C(e) {
  let {
    quests: t,
    isFetchingCurrentQuests: n
  } = p({
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
        let l = !(0, T.isQuestExpired)(e),
          u = !(0, T.isQuestExpired)(t),
          d = (0, T.isTargetedForContent)(e, I.QuestContent.QUEST_BAR) || (0, T.isTargetedForContent)(e, I.QuestContent.QUEST_BAR_V2),
          _ = (0, T.isTargetedForContent)(t, I.QuestContent.QUEST_BAR) || (0, T.isTargetedForContent)(t, I.QuestContent.QUEST_BAR_V2),
          c = (0, T.isTargetedForContent)(e, I.QuestContent.GIFT_INVENTORY_FOR_YOU),
          E = (0, T.isTargetedForContent)(t, I.QuestContent.GIFT_INVENTORY_FOR_YOU),
          f = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
          S = (null === (i = t.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null;
        return l !== u ? l ? -1 : 1 : d !== _ && l && u ? d ? -1 : 1 : c !== E ? c ? -1 : 1 : f !== S ? f ? -1 : 1 : l && u ? O(null === (a = e.config) || void 0 === a ? void 0 : a.expiresAt, null === (o = t.config) || void 0 === o ? void 0 : o.expiresAt, 1) : O(null === (r = e.config) || void 0 === r ? void 0 : r.expiresAt, null === (s = t.config) || void 0 === s ? void 0 : s.expiresAt, 0)
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
        let s = A.SharedQuestFields.build(e.config).rewardsExpireAt;
        return O(s, A.SharedQuestFields.build(t.config).rewardsExpireAt, 0)
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

function R() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = p({
    fetchPolicy: "cache-only"
  }), [n, i] = o.useState(() => new Map(e.map(e => [e.id, (0, T.isQuestExpired)(e)])));
  return o.useEffect(() => {
    if (t) return;
    let n = [];
    for (let t of e)
      if (null == t || (0, T.isQuestExpired)(t)) null != t && (0, T.isQuestExpired)(t) && i(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
      else {
        let e = new l.Timeout,
          r = () => {
            let s = Date.parse(t.config.expiresAt) - Date.now();
            e.start(s, () => {
              (0, T.isQuestExpired)(t) ? i(e => new Map(e).set(t.id, !0)): r()
            }), n.push(e)
          };
        r()
      } return () => {
      for (let e of n) e.stop()
    }
  }, [e, t]), n
}

function g(e) {
  let t = R();
  return o.useMemo(() => {
    var n;
    return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
  }, [e, t])
}

function L(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, u.useStateFromStores)([_.default], () => _.default.locale);
  return o.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function v(e, t) {
  let n = (0, f.useIsEligibleForQuestPlaytime)({
      location: t
    }) && (0, T.hasPlayOnDesktopTask)({
      quest: e
    }) ? N.default.Messages.QUESTS_PLAY_TASK : N.default.Messages.QUESTS_STREAM_TASK,
    i = (0, T.getQuestTaskDetails)({
      quest: e,
      location: t
    }).targetMinutes;
  return n.format({
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function D() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = p({
    fetchPolicy: "cache-or-network"
  }), n = R();
  return o.useMemo(() => {
    let i = [];
    if (t || 0 === e.length) return i;
    for (let t of e) {
      var r;
      if (!(0, T.includesTarget)(t, I.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (r = n.get(t.id)) && void 0 !== r && r) continue;
      if ((null == t ? void 0 : t.userStatus) == null) {
        i.push(t);
        continue
      }
      let e = null != t.userStatus.claimedAt,
        s = (0, T.isDismissed)(t.userStatus, I.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!e && !s) {
        i.push(t);
        continue
      }
    }
    return i
  }, [e, n, t])
}

function M() {
  let e = D();
  o.useEffect(() => {
    for (let t of e)(0, c.dismissQuestContent)(t.id, I.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)
  }, [e])
}

function y(e) {
  let t = (0, h.useIsEligibleForMembersListQuestEntrypoint)({
      location: m.QuestsExperimentLocations.MEMBERS_LIST
    }),
    n = (0, u.useStateFromStores)([E.default], () => t ? E.default.quests : null),
    i = o.useMemo(() => (0, T.getQuestsFromActivities)(n, e), [e, n]);
  return g(i) ? null : i
}

function P(e) {
  var t;
  let n = (0, T.hasCollectiblesQuestReward)(e),
    {
      product: i,
      isFetching: r
    } = (0, d.useFetchCollectiblesProduct)(A.SharedQuestFields.build(e).defaultReward.skuId);
  return {
    hasQuestCollectibles: n,
    avatarDecoration: null == i ? void 0 : null === (t = i.items) || void 0 === t ? void 0 : t[0],
    isFetching: r
  }
}

function U(e) {
  return {
    handleComplete: () => (0, c.completeQuestPreview)(e),
    handleResetStatusClick: () => (0, c.resetQuestPreviewStatus)(e),
    handleResetDismissibilityClick: () => (0, c.resetQuestDismissibilityStatus)(e),
    handleOverrideDeliveryClick: () => (0, c.overrideQuestDelivery)(e)
  }
}(a = r || (r = {})).UNCLAIMED = "unclaimed", a.CLAIMED = "claimed"