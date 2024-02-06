"use strict";
r.r(t), r.d(t, {
  default: function() {
    return C
  }
}), r("808653");
var n = r("635058"),
  l = r("265586"),
  i = r("446674"),
  s = r("913144"),
  a = r("853987");
let u = new Date(2023, 8, 25),
  o = new Date(2023, 9, 5),
  c = () => ({
    categoryItemViews: {
      [n.CollectiblesCategorySkuId.FANTASY]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: u,
        [l.CollectiblesItemType.PROFILE_EFFECT]: o
      },
      [n.CollectiblesCategorySkuId.ANIME]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: u,
        [l.CollectiblesItemType.PROFILE_EFFECT]: o
      },
      [n.CollectiblesCategorySkuId.BREAKFAST]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: u,
        [l.CollectiblesItemType.PROFILE_EFFECT]: o
      },
      [n.CollectiblesCategorySkuId.DISXCORE]: {
        [l.CollectiblesItemType.AVATAR_DECORATION]: u
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
    var t, r;
    let n = null === (t = a.default.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
    return null != n && (null === (r = d.categoryItemViews[n]) || void 0 === r ? void 0 : r[e.type]) != null
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
      itemTypes: r
    } = e, n = new Date;
    return t.reduce((e, t) => {
      let {
        skuId: l
      } = t, i = r.reduce((e, t) => {
        var r;
        return (null === (r = d.categoryItemViews[l]) || void 0 === r ? void 0 : r[t]) != null ? e : (null == d.categoryItemViews[l] && (d.categoryItemViews[l] = {}), d.categoryItemViews[l][t] = n, !0)
      }, !1);
      return e || i
    }, !1)
  }
})