"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("424973");
var i = n("917351"),
  l = n.n(i),
  r = n("446674"),
  s = n("913144"),
  a = n("80507"),
  u = n("374363"),
  o = n("718517"),
  d = n("364685"),
  c = n("397336");
let f = {
  pendingUsages: []
};
o.default.Millis.DAY;
let h = new a.default({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 0;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => d.default.getStickerById(e),
    afterCompute: () => {},
    numFrequentlyItems: 20
  }),
  E = () => {
    d.default.isLoaded && h.compute()
  },
  v = () => {
    E()
  };

function C() {
  var e;
  let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
  if (null == t) return !1;
  h.overwriteHistory(l.mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), f.pendingUsages)
}
class _ extends r.default.PersistedStore {
  initialize(e) {
    this.waitFor(d.default), null != e && (f = e), this.syncWith([d.default], v), this.syncWith([u.default], C)
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
_.displayName = "StickersPersistedStore", _.persistKey = "StickersPersistedStoreV2";
var p = new _(s.default, {
  STICKER_TRACK_USAGE: e => {
    let {
      stickerIds: t
    } = e;
    null == t || t.forEach(e => {
      h.track(e), f.pendingUsages.push({
        key: e,
        timestamp: Date.now()
      })
    }), E()
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    f.pendingUsages = []
  }
})