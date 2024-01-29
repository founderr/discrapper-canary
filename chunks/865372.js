"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("424973");
var l = n("917351"),
  i = n.n(l),
  s = n("446674"),
  r = n("913144"),
  o = n("80507"),
  a = n("374363"),
  u = n("718517"),
  d = n("364685"),
  c = n("397336");
let f = {
  pendingUsages: []
};
u.default.Millis.DAY;
let p = new o.default({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 0;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => d.default.getStickerById(e),
    afterCompute: () => {},
    numFrequentlyItems: 20
  }),
  h = () => {
    d.default.isLoaded && p.compute()
  },
  m = () => {
    h()
  };

function E() {
  var e;
  let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
  if (null == t) return !1;
  p.overwriteHistory(i.mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), f.pendingUsages)
}
class I extends s.default.PersistedStore {
  initialize(e) {
    this.waitFor(d.default), null != e && (f = e), this.syncWith([d.default], m), this.syncWith([a.default], E)
  }
  getState() {
    return f
  }
  hasPendingUsage() {
    return f.pendingUsages.length > 0
  }
  get stickerFrecencyWithoutFetchingLatest() {
    return p
  }
}
I.displayName = "StickersPersistedStore", I.persistKey = "StickersPersistedStoreV2";
var S = new I(r.default, {
  STICKER_TRACK_USAGE: e => {
    let {
      stickerIds: t
    } = e;
    null == t || t.forEach(e => {
      p.track(e), f.pendingUsages.push({
        key: e,
        timestamp: Date.now()
      })
    }), h()
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