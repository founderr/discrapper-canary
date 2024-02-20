"use strict";
n.r(t), n.d(t, {
  getRootNavigationRefIfInExperiment: function() {
    return _
  },
  isInMainTabsExperiment: function() {
    return m
  },
  useInMainTabsExperiment: function() {
    return S
  }
}), n("70102"), n("884691");
var i, r, s = n("308503"),
  a = n("95410");
n("789563");
var o = n("132522"),
  l = n("693051"),
  u = n("139404"),
  c = n("61796"),
  d = n("264325"),
  p = n("18108");
(r = i || (i = {}))[r.EXISTING_USERS = 0] = "EXISTING_USERS", r[r.NEW_USERS = 1] = "NEW_USERS";
let h = "tabs-v2-experiment-key",
  f = (0, s.default)((e, t) => ({
    _experimentCacheInitialized: !1,
    _experimentEnabled: !1,
    getExperimentEnabled() {
      if (!(0, c.isMainTabsExperimentPlatformSupported)()) return !1;
      let {
        _experimentCacheInitialized: e,
        _experimentEnabled: n
      } = t();
      if (!e) throw Error("MainTabsV2ExperimentStore: Experiment cache not initialized");
      return n
    },
    setExperimentEnabled: t => {
      e({
        _experimentEnabled: t
      }), a.default.set(h, t)
    },
    setInitialized: () => {
      e(e => e._experimentCacheInitialized ? e : {
        _experimentCacheInitialized: !0,
        _experimentEnabled: !0 === a.default.get(h)
      })
    }
  }));

function E() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.isMobileRedesignDisabled)(),
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.getState().getExperimentEnabled(),
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, d.isTabsUIEnabledManually)(),
    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, o.isRedesignToggleIgnored)();
  if (!(0, c.isMainTabsExperimentPlatformSupported)()) return !1;
  if (!r) {
    if (!t && e) return (0, p.updateIsInTabsUI)(!1), !1;
    if (i) return (0, p.updateIsInTabsUI)(!0), !0
  }
  return !t && (0, p.updateIsInTabsUI)(n), n
}

function _() {
  return m() ? (0, l.getRootNavigationRef)() : void 0
}

function m() {
  return E()
}

function S() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = (0, u.useMobileRedesignDisabled)(),
    n = f(e => e.getExperimentEnabled()),
    i = (0, d.useIsTabsUIEnabledManually)(),
    r = (0, o.useRedesignToggleIgnored)();
  return E(t, e, n, i, r)
}