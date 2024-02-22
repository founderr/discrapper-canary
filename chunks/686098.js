"use strict";
n.r(t), n.d(t, {
  useHandleClaimQuestsReward: function() {
    return c
  },
  useQuests: function() {
    return E
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("77078"),
  i = n("446674"),
  r = n("448881"),
  o = n("374023"),
  u = n("2973"),
  d = n("166604");

function c(e, t) {
  return l.useCallback(() => {
    null != e && (0, a.openModalLazy)(async () => {
      let {
        default: l
      } = await n.el("36170").then(n.bind(n, "36170"));
      return n => (0, s.jsx)(l, {
        ...n,
        quest: e,
        location: t
      })
    })
  }, [e, t])
}

function E(e) {
  let [t, n] = l.useState(!1), s = (0, i.useStateFromStoresArray)([u.default], () => [...u.default.quests.values()]), {
    isFetchingCurrentQuests: a,
    lastFetchedCurrentQuests: c
  } = (0, i.useStateFromStoresObject)([u.default], () => ({
    isFetchingCurrentQuests: u.default.isFetchingCurrentQuests,
    lastFetchedCurrentQuests: u.default.lastFetchedCurrentQuests
  })), E = (0, o.getIsEligibleForQuests)({
    location: d.QuestsExperimentLocations.USE_QUESTS,
    autoTrackExposure: !1
  });
  l.useEffect(() => {
    E && !t && !a && 0 === c && (n(!0), (0, r.fetchCurrentQuests)())
  }, [E, t, a, c]);
  let f = l.useMemo(() => {
    let t = null != e ? new Set(e) : null;
    return s.filter(e => null == t || t.has(e.id))
  }, [e, s]);
  return {
    quests: f,
    isFetchingCurrentQuests: a
  }
}