"use strict";
n.r(t), n.d(t, {
  QuestFilters: function() {
    return r
  },
  useDismissNewQuestBadge: function() {
    return L
  },
  useExpiredQuestsMap: function() {
    return p
  },
  useIsQuestExpired: function() {
    return O
  },
  useQuestCollectibles: function() {
    return D
  },
  useQuestFormattedDate: function() {
    return C
  },
  useQuestFromActivities: function() {
    return v
  },
  useQuestInstructionTitle: function() {
    return R
  },
  useQuests: function() {
    return N
  },
  useQuestsForSettingsBadge: function() {
    return g
  }
}), n("47120"), n("653041");
var i, r, a, s, o = n("470079"),
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
  A = n("46140"),
  m = n("689938");

function N() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only"
    },
    [t, n] = o.useState(!1),
    i = (0, u.useStateFromStoresArray)([E.default], () => [...E.default.quests.values()]),
    {
      isFetchingCurrentQuests: r,
      lastFetchedCurrentQuests: a
    } = (0, u.useStateFromStoresObject)([E.default], () => ({
      isFetchingCurrentQuests: E.default.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: E.default.lastFetchedCurrentQuests
    })),
    s = (0, S.getIsEligibleForQuests)({
      location: A.QuestsExperimentLocations.USE_QUESTS
    });
  return o.useEffect(() => {
    if ("cache-only" !== e.fetchPolicy)("cache-and-network" === e.fetchPolicy || "cache-or-network" === e.fetchPolicy && 0 === a) && s && !t && !r && (n(!0), (0, c.fetchCurrentQuests)())
  }, [e.fetchPolicy, s, t, r, a]), {
    quests: i,
    isFetchingCurrentQuests: r
  }
}

function p() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = N({
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
            let a = Date.parse(t.config.expiresAt) - Date.now();
            e.start(a, () => {
              (0, T.isQuestExpired)(t) ? i(e => new Map(e).set(t.id, !0)): r()
            }), n.push(e)
          };
        r()
      } return () => {
      for (let e of n) e.stop()
    }
  }, [e, t]), n
}

function O(e) {
  let t = p();
  return o.useMemo(() => {
    var n;
    return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
  }, [e, t])
}

function C(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, u.useStateFromStores)([_.default], () => _.default.locale);
  return o.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function R(e, t) {
  return ((0, f.useIsEligibleForQuestPlaytime)({
    location: t
  }) && (0, T.hasPlaytimeTaskVariant)({
    quest: e
  }) ? m.default.Messages.QUESTS_PLAY_TASK : m.default.Messages.QUESTS_STREAM_TASK).format({
    minutes: e.config.streamDurationRequirementMinutes,
    gameTitle: e.config.messages.gameTitle
  })
}

function g() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = N({
    fetchPolicy: "cache-or-network"
  }), n = p();
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
        a = (0, T.isDismissed)(t.userStatus, I.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!e && !a) {
        i.push(t);
        continue
      }
    }
    return i
  }, [e, n, t])
}

function L() {
  let e = g();
  o.useEffect(() => {
    for (let t of e)(0, c.dismissQuestContent)(t.id, I.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)
  }, [e])
}

function v(e) {
  let t = (0, h.useIsEligibleForMembersListQuestEntrypoint)({
      location: A.QuestsExperimentLocations.MEMBERS_LIST
    }),
    n = (0, u.useStateFromStores)([E.default], () => t ? E.default.quests : null),
    i = o.useMemo(() => (0, T.getQuestsFromActivities)(n, e), [e, n]);
  return O(i) ? null : i
}

function D(e) {
  var t;
  let n = (0, T.hasQuestCollectibleRewards)(e),
    {
      product: i,
      isFetching: r
    } = (0, d.useFetchCollectiblesProduct)(e.rewardsConfig.rewards[0].skuId);
  return {
    hasQuestCollectibles: n,
    avatarDecoration: null == i ? void 0 : null === (t = i.items) || void 0 === t ? void 0 : t[0],
    isFetching: r
  }
}(a = i || (i = {}))[a.DESC = 0] = "DESC", a[a.ASC = 1] = "ASC", (s = r || (r = {})).INCOMPLETE = "incomplete", s.COMPLETE = "complete"