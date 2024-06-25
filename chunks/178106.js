"use strict";
n(653041), n(47120);
var i, r = n(392711),
  s = n.n(r),
  o = n(31775),
  a = n.n(o),
  l = n(442837),
  u = n(570140),
  _ = n(704907),
  c = n(581883),
  d = n(594174),
  E = n(164878),
  I = n(763296),
  T = n(697426),
  h = n(710111),
  f = n(526761);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = [],
  N = new(a())({
    max: h.zb
  }),
  m = new _.Z({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 1;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => I.Z.getSoundById(e),
    afterCompute: () => {},
    numFrequentlyItems: h.O6
  });

function O() {
  var e, t;
  if (!p()) return;
  let n = null === (e = c.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
  m.overwriteHistory((t = null != n ? n : {}, s().mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  }))), A)
}

function p() {
  return (0, E.v)({
    location: "soundboard_event_store",
    autoTrackExposure: !1
  }).canSeeFrequentlyPlayed
}
class R extends(i = l.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(d.default, I.Z), (null == e ? void 0 : e.recentlyHeardCache) != null && N.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (A = e.playedEventsPendingFlush), this.syncWith([c.Z], O)
  }
  getState() {
    return {
      recentlyHeardCache: N.dump(),
      playedEventsPendingFlush: A
    }
  }
  hasPendingUsage() {
    return A.length > 0
  }
  get playedSoundHistory() {
    return m.usageHistory
  }
  get recentlyHeardSoundIds() {
    return N.values()
  }
  get frecentlyPlayedSounds() {
    return m.frequently
  }
}
S(R, "displayName", "SoundboardEventStore"), S(R, "persistKey", "SoundboardEventStore"), t.Z = new R(u.Z, {
  GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
    let {
      sound: t,
      trigger: n
    } = e;
    if (!p()) return;
    let i = t.soundId.toString();
    n === T.YQ.SOUNDBOARD && function(e) {
      m.track(e), A.push({
        key: e,
        timestamp: Date.now()
      }), m.compute()
    }(i)
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
    var t;
    let {
      soundId: n,
      userId: i
    } = e;
    if (! function() {
        return (0, E.v)({
          location: "soundboard_event_store",
          autoTrackExposure: !1
        }).canSeeRecentlyHeard
      }()) return;
    let r = n.toString();
    i !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && function(e) {
      for (let t of I.Z.getSounds().values())
        if (null != t.find(t => t.soundId.toString() === e)) return !0;
      return !1
    }(r) && function(e) {
      N.set(e, e)
    }(r)
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    p() && t === f.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (A = [])
  }
})