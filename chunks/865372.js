"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
    computeWeight: e => {
      let t = 0;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => c.default.getStickerById(e),
    afterCompute: () => {},
    numFrequentlyItems: 20
  }),
  p = () => {
    c.default.isLoaded && h.compute()
  },
  C = () => {
    p()
  };

function v() {
  var e;
  let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
  if (null == t) return !1;
  h.overwriteHistory(r.mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), f.pendingUsages)
}
class E extends l.default.PersistedStore {
  initialize(e) {
    this.waitFor(c.default), null != e && (f = e), this.syncWith([c.default], C), this.syncWith([o.default], v)
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
E.displayName = "StickersPersistedStore", E.persistKey = "StickersPersistedStoreV2";
var I = new E(s.default, {
  STICKER_TRACK_USAGE: e => {
    let {
      stickerIds: t
    } = e;
    null == t || t.forEach(e => {
      h.track(e), f.pendingUsages.push({
        key: e,
        timestamp: Date.now()
      })
    }), p()
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    f.pendingUsages = []
  }
})