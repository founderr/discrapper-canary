"use strict";
n.r(t), n.d(t, {
  useQuests: function() {
    return f
  },
  useIsQuestExpired: function() {
    return T
  },
  useQuestFormattedDate: function() {
    return I
  },
  useNewQuestBadge: function() {
    return m
  },
  useDismissNewQuestBadge: function() {
    return N
  }
}), n("222007"), n("424973");
var s = n("884691"),
  l = n("862337"),
  a = n("446674"),
  i = n("915639"),
  r = n("448881"),
  o = n("374023"),
  u = n("2973"),
  d = n("588025"),
  c = n("227231"),
  E = n("166604");

function f(e) {
  let [t, n] = s.useState(!1), l = (0, a.useStateFromStoresArray)([u.default], () => [...u.default.quests.values()]), {
    isFetchingCurrentQuests: i,
    lastFetchedCurrentQuests: d
  } = (0, a.useStateFromStoresObject)([u.default], () => ({
    isFetchingCurrentQuests: u.default.isFetchingCurrentQuests,
    lastFetchedCurrentQuests: u.default.lastFetchedCurrentQuests
  })), c = (0, o.getIsEligibleForQuests)({
    location: E.QuestsExperimentLocations.USE_QUESTS,
    autoTrackExposure: !1
  });
  s.useEffect(() => {
    c && !t && !i && 0 === d && (n(!0), (0, r.fetchCurrentQuests)())
  }, [c, t, i, d]);
  let f = s.useMemo(() => {
    let t = null != e ? new Set(e) : null;
    return l.filter(e => null == t || t.has(e.id))
  }, [e, l]);
  return {
    quests: f,
    isFetchingCurrentQuests: i
  }
}

function _() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = f(), [n, a] = s.useState(() => new Map(e.map(e => [e.id, (0, c.isQuestExpired)(e)])));
  return s.useEffect(() => {
    if (t) return;
    let n = [];
    for (let t of e)
      if (null != t && !(0, c.isQuestExpired)(t)) {
        let e = new l.Timeout,
          s = () => {
            let l = Date.parse(t.config.expiresAt) - Date.now();
            e.start(l, () => {
              (0, c.isQuestExpired)(t) ? a(e => new Map(e).set(t.id, !0)): s()
            }), n.push(e)
          };
        s()
      } return () => {
      for (let e of n) e.stop()
    }
  }, [e, t]), n
}

function T(e) {
  let t = _();
  return s.useMemo(() => {
    var n;
    return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
  }, [e, t])
}

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, a.useStateFromStores)([i.default], () => i.default.locale);
  return s.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function m() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = f(), n = _(), l = s.useMemo(() => {
    if (t || 0 === e.length) return !1;
    for (let t of e) {
      var s;
      if (!(0, c.includesTarget)(t, d.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (s = n.get(t.id)) && void 0 !== s && s) continue;
      if ((null == t ? void 0 : t.userStatus) == null) return !0;
      let e = null != t.userStatus.claimedAt,
        l = (0, c.isDismissed)(t.userStatus, d.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!e && !l) return !0
    }
    return !1
  }, [e, n, t]);
  return l
}

function N() {
  let {
    quests: e
  } = f(), t = m();
  s.useEffect(() => {
    for (let n of e) t && (0, r.dismissQuestContent)(n.id, d.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)
  }, [e, t])
}