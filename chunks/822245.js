"use strict";
n(653041);
var i, r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(911969),
  u = n(704907),
  _ = n(581883),
  c = n(674563),
  d = n(526761);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = {
    pendingUsages: []
  },
  T = new u.Z({
    computeBonus: () => 100,
    computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1,
    lookupKey: e => e,
    afterCompute: () => {},
    numFrequentlyItems: c.yP
  });

function h(e) {
  I.pendingUsages.push({
    key: e,
    timestamp: Date.now()
  }), T.track(e), T.compute()
}

function f() {
  var e, t;
  let n = null !== (t = null === (e = _.Z.frecencyWithoutFetchingLatest.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
  T.overwriteHistory(s().mapValues(n, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), I.pendingUsages)
}
class S extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    null != e && (I = e), this.syncWith([_.Z], f)
  }
  getState() {
    return I
  }
  hasPendingUsage() {
    return I.pendingUsages.length > 0
  }
  getApplicationFrecencyWithoutLoadingLatest() {
    return T
  }
  getScoreWithoutLoadingLatest(e) {
    var t;
    return null !== (t = T.getScore(e)) && void 0 !== t ? t : 0
  }
  getTopApplicationsWithoutLoadingLatest() {
    return T.frequently
  }
}
E(S, "displayName", "ApplicationFrecencyStore"), E(S, "persistKey", "ApplicationFrecency"), t.Z = new S(a.Z, {
  APPLICATION_COMMAND_USED: function(e) {
    let {
      command: t
    } = e;
    if (t.type !== l.yU.CHAT) return !1;
    h(t.applicationId)
  },
  EMBEDDED_ACTIVITY_OPEN: function(e) {
    let {
      applicationId: t
    } = e;
    h(t)
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    if (t !== d.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    I.pendingUsages = []
  }
})