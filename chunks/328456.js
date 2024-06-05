"use strict";
r.r(t), r.d(t, {
  ItemsSortingHat: function() {
    return o
  },
  useShopProductItems: function() {
    return l
  }
}), r("724458"), r("653041"), r("47120");
var a = r("470079"),
  n = r("979554");
class o {
  get firstAvatarDecoration() {
    return this.getFirstItemByType(n.CollectiblesItemType.AVATAR_DECORATION)
  }
  get firstProfileEffect() {
    return this.getFirstItemByType(n.CollectiblesItemType.PROFILE_EFFECT)
  }
  getFirstItemByType(e) {
    var t;
    let r = (null !== (t = this.itemsByTypes.get(e)) && void 0 !== t ? t : [])[0];
    if (null != r) return r
  }
  sortByTypes(e) {
    return e.reduce((e, t) => {
      let r = e.get(t.type);
      return null != r ? r.push(t) : e.set(t.type, [t]), e
    }, new Map)
  }
  constructor(e) {
    var t, r, a;
    t = this, a = void 0, (r = "itemsByTypes") in t ? Object.defineProperty(t, r, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[r] = a, this.itemsByTypes = this.sortByTypes(e)
  }
}
let l = e => {
  let {
    firstProfileEffect: t,
    firstAvatarDecoration: r
  } = a.useMemo(() => new o(e.items), [e]);
  return {
    firstProfileEffect: t,
    firstAvatarDecoration: r
  }
}