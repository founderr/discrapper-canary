"use strict";
n.r(t), n.d(t, {
  useHandleClaimQuestsReward: function() {
    return f
  },
  useQuests: function() {
    return _
  },
  useIsQuestExpired: function() {
    return T
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("862337"),
  i = n("77078"),
  r = n("446674"),
  o = n("448881"),
  u = n("374023"),
  d = n("2973"),
  c = n("227231"),
  E = n("166604");

function f(e, t) {
  return l.useCallback(() => {
    null != e && (0, i.openModalLazy)(async () => {
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

function _(e) {
  let [t, n] = l.useState(!1), s = (0, r.useStateFromStoresArray)([d.default], () => [...d.default.quests.values()]), {
    isFetchingCurrentQuests: a,
    lastFetchedCurrentQuests: i
  } = (0, r.useStateFromStoresObject)([d.default], () => ({
    isFetchingCurrentQuests: d.default.isFetchingCurrentQuests,
    lastFetchedCurrentQuests: d.default.lastFetchedCurrentQuests
  })), c = (0, u.getIsEligibleForQuests)({
    location: E.QuestsExperimentLocations.USE_QUESTS,
    autoTrackExposure: !1
  });
  l.useEffect(() => {
    c && !t && !a && 0 === i && (n(!0), (0, o.fetchCurrentQuests)())
  }, [c, t, a, i]);
  let f = l.useMemo(() => {
    let t = null != e ? new Set(e) : null;
    return s.filter(e => null == t || t.has(e.id))
  }, [e, s]);
  return {
    quests: f,
    isFetchingCurrentQuests: a
  }
}

function T(e) {
  let [t, n] = l.useState(() => null != e && (0, c.isQuestExpired)(e));
  return l.useEffect(() => {
    if (null != e && !(0, c.isQuestExpired)(e)) {
      let t = new a.Timeout,
        s = () => {
          let l = Date.parse(e.config.expiresAt) - Date.now();
          t.start(l, () => {
            (0, c.isQuestExpired)(e) ? n(!0): s()
          })
        };
      return s(), () => {
        t.stop()
      }
    }
  }, [e]), t
}