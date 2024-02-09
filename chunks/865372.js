"use strict";
n.r(e), n.d(e, {
  default: function() {
    return E
  }
}), n("424973");
var i = n("917351"),
  r = n.n(i),
  l = n("446674"),
  s = n("913144"),
  a = n("80507"),
  o = n("374363"),
  u = n("718517"),
  c = n("364685"),
  d = n("397336");
let f = {
  pendingUsages: []
};
u.default.Millis.DAY;
let h = new a.default({
    computeBonus: () => 100,
    computeWeight: t => {
      let e = 0;
      return t <= 3 ? e = 100 : t <= 15 ? e = 70 : t <= 30 ? e = 50 : t <= 45 ? e = 30 : t <= 80 && (e = 10), e
    },
    lookupKey: t => c.default.getStickerById(t),
    afterCompute: () => {},
    numFrequentlyItems: 20
  }),
  p = () => {
    c.default.isLoaded && h.compute()
  },
  _ = () => {
    p()
  };

function v() {
  var t;
  let e = null === (t = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === t ? void 0 : t.stickers;
  if (null == e) return !1;
  h.overwriteHistory(r.mapValues(e, t => ({
    ...t,
    recentUses: t.recentUses.map(Number).filter(t => t > 0)
  })), f.pendingUsages)
}
class C extends l.default.PersistedStore {
  initialize(t) {
    this.waitFor(c.default), null != t && (f = t), this.syncWith([c.default], _), this.syncWith([o.default], v)
  }
  getState() {
    return f
  }
  hasPendingUsage() {
    return f.pendingUsages.length > 0
  }
  get stickerFrecencyWithoutFetchingLatest() {
    return h
  }
}
C.displayName = "StickersPersistedStore", C.persistKey = "StickersPersistedStoreV2";
var E = new C(s.default, {
  STICKER_TRACK_USAGE: t => {
    let {
      stickerIds: e
    } = t;
    null == e || e.forEach(t => {
      h.track(t), f.pendingUsages.push({
        key: t,
        timestamp: Date.now()
      })
    }), p()
  },
  USER_SETTINGS_PROTO_UPDATE: function(t) {
    let {
      settings: {
        type: e
      },
      wasSaved: n
    } = t;
    if (e !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    f.pendingUsages = []
  }
})