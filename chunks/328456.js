"use strict";
r.r(t), r.d(t, {
  useShopProductItems: function() {
    return n
  }
}), r("724458"), r("653041"), r("47120");
var a = r("470079"),
  o = r("979554");
class l {
  get firstAvatarDecoration() {
    return this.getFirstItemByType(o.CollectiblesItemType.AVATAR_DECORATION)
  }
  get firstProfileEffect() {
    return this.getFirstItemByType(o.CollectiblesItemType.PROFILE_EFFECT)
  }
  getFirstItemByType(e) {
    var t;
    let r = (null !== (t = this.itemsByTypes.get(e)) && void 0 !== t ? t : [])[0];
    if (null != r) return r
  }
  sortByTypes(e) {
    return e.items.reduce((e, t) => {
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
let n = e => {
  let {
    firstProfileEffect: t,
    firstAvatarDecoration: r
  } = a.useMemo(() => new l(e), [e]);
  return {
    firstProfileEffect: t,
    firstAvatarDecoration: r
  }
}