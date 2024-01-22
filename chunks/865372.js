"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("424973");
var l = n("917351"),
  i = n.n(l),
  a = n("446674"),
  u = n("913144"),
  o = n("80507"),
  d = n("374363"),
  r = n("718517"),
  s = n("364685"),
  c = n("397336");
let f = {
  pendingUsages: []
};
r.default.Millis.DAY;
let E = new o.default({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 0;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => s.default.getStickerById(e),
    afterCompute: () => {},
    numFrequentlyItems: 20
  }),
  _ = () => {
    s.default.isLoaded && E.compute()
  },
  S = () => {
    _()
  };

function T() {
  var e;
  let t = null === (e = d.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
  if (null == t) return !1;
  E.overwriteHistory(i.mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), f.pendingUsages)
}
class A extends a.default.PersistedStore {
  initialize(e) {
    this.waitFor(s.default), null != e && (f = e), this.syncWith([s.default], S), this.syncWith([d.default], T)
  }
  getState() {
    return f
  }
  hasPendingUsage() {
    return f.pendingUsages.length > 0
  }
  get stickerFrecencyWithoutFetchingLatest() {
    return E
  }
}
A.displayName = "StickersPersistedStore", A.persistKey = "StickersPersistedStoreV2";
var p = new A(u.default, {
  STICKER_TRACK_USAGE: e => {
    let {
      stickerIds: t
    } = e;
    null == t || t.forEach(e => {
      E.track(e), f.pendingUsages.push({
        key: e,
        timestamp: Date.now()
      })
    }), _()
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