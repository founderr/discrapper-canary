"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("808653");
var r = n("635058"),
  l = n("265586"),
  i = n("446674"),
  s = n("913144"),
  a = n("853987");
let o = new Date(2023, 8, 25),
  u = new Date(2023, 9, 5),
  c = () => ({
    categoryItemViews: {
      [r.CollectiblesCategorySkuId.FANTASY]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: o,
        [l.CollectiblesItemType.PROFILE_EFFECT]: u
      },
      [r.CollectiblesCategorySkuId.ANIME]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: o,
        [l.CollectiblesItemType.PROFILE_EFFECT]: u
      },
      [r.CollectiblesCategorySkuId.BREAKFAST]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: o,
        [l.CollectiblesItemType.PROFILE_EFFECT]: u
      },
      [r.CollectiblesCategorySkuId.DISXCORE]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: o
      }
    }
  }),
  d = c();
class f extends i.default.PersistedStore {
  initialize(e) {
    null != e && (d = e)
  }
  getState() {
    return d
  }
  isItemViewed(e) {
    var t, n;
    let r = null === (t = a.default.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
    return null != r && (null === (n = d.categoryItemViews[r]) || void 0 === n ? void 0 : n[e.type]) != null
  }
  reset() {
    d = c()
  }
}
f.displayName = "CollectiblesPersistedStore", f.persistKey = "CollectiblesPersistedStoreV2";
var C = new f(s.default, {
  COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
    let {
      categories: t,
      itemTypes: n
    } = e, r = new Date;
    return t.reduce((e, t) => {
      let {
        skuId: l
      } = t, i = n.reduce((e, t) => {
        var n;
        return (null === (n = d.categoryItemViews[l]) || void 0 === n ? void 0 : n[t]) != null ? e : (null == d.categoryItemViews[l] && (d.categoryItemViews[l] = {}), d.categoryItemViews[l][t] = r, !0)
      }, !1);
      return e || i
    }, !1)
  }
})