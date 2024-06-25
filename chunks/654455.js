"use strict";
n.d(t, {
  LU: function() {
    return h
  }
}), n(47120), n(653041);
var i, r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(911969),
  u = n(704907),
  _ = n(581883);
n(689079);
var c = n(674563),
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
    computeBonus: () => 1,
    computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1,
    lookupKey: e => e,
    afterCompute: () => {},
    numFrequentlyItems: c.yP
  });

function h(e, t) {
  return e.filter(e => {
    if (e.includes(":")) return null != t.guild && t.guild.id === e.split(":")[1];
    return !0
  }).map(e => e.split(":")[0])
}

function f(e, t) {
  return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? "".concat(t.id, ":").concat(e.guild.id) : t.id
}

function S() {
  var e, t;
  let n = null !== (t = null === (e = _.Z.frecencyWithoutFetchingLatest.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
  T.overwriteHistory(s().mapValues(n, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), I.pendingUsages)
}
class A extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    null != e && (I = e), this.syncWith([_.Z], S)
  }
  getState() {
    return I
  }
  hasPendingUsage() {
    return I.pendingUsages.length > 0
  }
  getCommandFrecencyWithoutLoadingLatest() {
    return T
  }
  getScoreWithoutLoadingLatest(e, t) {
    var n;
    return null !== (n = T.getScore(f(e, t))) && void 0 !== n ? n : 0
  }
  getTopCommandsWithoutLoadingLatest() {
    return T.frequently
  }
}
E(A, "displayName", "ApplicationCommandFrecencyStore"), E(A, "persistKey", "ApplicationCommandFrecencyV2"), t.ZP = new A(a.Z, {
  APPLICATION_COMMAND_USED: function(e) {
    let {
      command: t,
      context: n
    } = e;
    if (t.type !== l.yU.CHAT) return !1;
    let i = f(n, t);
    I.pendingUsages.push({
      key: i,
      timestamp: Date.now()
    }), T.track(i), T.compute()
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