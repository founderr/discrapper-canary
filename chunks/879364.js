"use strict";
n.r(t), n.d(t, {
  useQuests: function() {
    return c
  },
  useIsQuestExpired: function() {
    return E
  }
}), n("222007");
var s = n("884691"),
  l = n("862337"),
  a = n("446674"),
  i = n("448881"),
  r = n("374023"),
  o = n("2973"),
  u = n("227231"),
  d = n("166604");

function c(e) {
  let [t, n] = s.useState(!1), l = (0, a.useStateFromStoresArray)([o.default], () => [...o.default.quests.values()]), {
    isFetchingCurrentQuests: u,
    lastFetchedCurrentQuests: c
  } = (0, a.useStateFromStoresObject)([o.default], () => ({
    isFetchingCurrentQuests: o.default.isFetchingCurrentQuests,
    lastFetchedCurrentQuests: o.default.lastFetchedCurrentQuests
  })), E = (0, r.getIsEligibleForQuests)({
    location: d.QuestsExperimentLocations.USE_QUESTS,
    autoTrackExposure: !1
  });
  s.useEffect(() => {
    E && !t && !u && 0 === c && (n(!0), (0, i.fetchCurrentQuests)())
  }, [E, t, u, c]);
  let f = s.useMemo(() => {
    let t = null != e ? new Set(e) : null;
    return l.filter(e => null == t || t.has(e.id))
  }, [e, l]);
  return {
    quests: f,
    isFetchingCurrentQuests: u
  }
}

function E(e) {
  let [t, n] = s.useState(() => null != e && (0, u.isQuestExpired)(e));
  return s.useEffect(() => {
    if (null != e && !(0, u.isQuestExpired)(e)) {
      let t = new l.Timeout,
        s = () => {
          let l = Date.parse(e.config.expiresAt) - Date.now();
          t.start(l, () => {
            (0, u.isQuestExpired)(e) ? n(!0): s()
          })
        };
      return s(), () => {
        t.stop()
      }
    }
  }, [e]), t
}