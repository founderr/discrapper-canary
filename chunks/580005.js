"use strict";
n.d(t, {
  C: function() {
    return f
  }
}), n(653041);
var i, r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(704907),
  u = n(581883),
  _ = n(592125),
  c = n(430824),
  d = n(944486),
  E = n(914010),
  I = n(981631),
  T = n(526761);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = 100,
  S = new l.Z({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 1;
      return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
    },
    lookupKey: e => {
      var t, n;
      return null !== (n = null !== (t = c.Z.getGuild(e)) && void 0 !== t ? t : _.Z.getChannel(e)) && void 0 !== n ? n : _.Z.getChannel(_.Z.getDMFromUserId(e))
    },
    afterCompute: () => {},
    numFrequentlyItems: f,
    maxSamples: 10
  }),
  A = null,
  N = null;

function m(e) {
  let {
    guildId: t,
    channelId: n
  } = e, i = !1;
  return n !== A && (A = null != n ? n : null, null != n && I.Xyh.test(n) && (i = !0, S.track(n), p.pendingUsages.push({
    key: n,
    timestamp: Date.now()
  }))), t !== N && (N = null != t ? t : null, null != t && I.Xyh.test(t) && (i = !0, S.track(t), p.pendingUsages.push({
    key: t,
    timestamp: Date.now()
  }))), i
}

function O() {
  var e;
  let t = null === (e = u.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
  if (null == t) return !1;
  S.overwriteHistory(s().mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), p.pendingUsages)
}
let p = {
  pendingUsages: []
};
class R extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(E.Z, d.Z), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && I.Xyh.test(e.key)), p = e), this.syncWith([u.Z], O)
  }
  getState() {
    return p
  }
  hasPendingUsage() {
    return p.pendingUsages.length > 0
  }
  get frecencyWithoutFetchingLatest() {
    return S
  }
  getFrequentlyWithoutFetchingLatest() {
    return S.frequently
  }
  getScoreWithoutFetchingLatest(e) {
    var t;
    return null !== (t = S.getFrecency(e)) && void 0 !== t ? t : 0
  }
  getScoreForDMWithoutFetchingLatest(e) {
    let t = _.Z.getDMFromUserId(e);
    return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
  }
  getMaxScore() {
    return 10 * f
  }
  getBonusScore() {
    return 100
  }
}
h(R, "displayName", "FrecencyStore"), h(R, "persistKey", "FrecencyStore"), t.Z = new R(a.Z, {
  CHANNEL_SELECT: m,
  VOICE_CHANNEL_SELECT: m,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    return t === T.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!n && (p.pendingUsages = [], !0)
  }
})