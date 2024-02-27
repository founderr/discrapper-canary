"use strict";
n.r(t), n.d(t, {
  useQuests: function() {
    return E
  },
  useIsQuestExpired: function() {
    return f
  },
  useQuestFormattedDate: function() {
    return _
  }
}), n("222007");
var s = n("884691"),
  l = n("862337"),
  a = n("446674"),
  i = n("915639"),
  r = n("448881"),
  o = n("374023"),
  u = n("2973"),
  d = n("227231"),
  c = n("166604");

function E(e) {
  let [t, n] = s.useState(!1), l = (0, a.useStateFromStoresArray)([u.default], () => [...u.default.quests.values()]), {
    isFetchingCurrentQuests: i,
    lastFetchedCurrentQuests: d
  } = (0, a.useStateFromStoresObject)([u.default], () => ({
    isFetchingCurrentQuests: u.default.isFetchingCurrentQuests,
    lastFetchedCurrentQuests: u.default.lastFetchedCurrentQuests
  })), E = (0, o.getIsEligibleForQuests)({
    location: c.QuestsExperimentLocations.USE_QUESTS,
    autoTrackExposure: !1
  });
  s.useEffect(() => {
    E && !t && !i && 0 === d && (n(!0), (0, r.fetchCurrentQuests)())
  }, [E, t, i, d]);
  let f = s.useMemo(() => {
    let t = null != e ? new Set(e) : null;
    return l.filter(e => null == t || t.has(e.id))
  }, [e, l]);
  return {
    quests: f,
    isFetchingCurrentQuests: i
  }
}

function f(e) {
  let [t, n] = s.useState(() => null != e && (0, d.isQuestExpired)(e));
  return s.useEffect(() => {
    if (null != e && !(0, d.isQuestExpired)(e)) {
      let t = new l.Timeout,
        s = () => {
          let l = Date.parse(e.config.expiresAt) - Date.now();
          t.start(l, () => {
            (0, d.isQuestExpired)(e) ? n(!0): s()
          })
        };
      return s(), () => {
        t.stop()
      }
    }
  }, [e]), t
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, a.useStateFromStores)([i.default], () => i.default.locale);
  return s.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}