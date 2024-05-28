"use strict";
a.r(t), a.d(t, {
  ItemsSortingHat: function() {
    return n
  },
  useShopProductItems: function() {
    return o
  }
}), a("724458"), a("653041"), a("47120");
var r = a("470079"),
  s = a("979554");
class n {
  get firstAvatarDecoration() {
    return this.getFirstItemByType(s.CollectiblesItemType.AVATAR_DECORATION)
  }
  get firstProfileEffect() {
    return this.getFirstItemByType(s.CollectiblesItemType.PROFILE_EFFECT)
  }
  getFirstItemByType(e) {
    var t;
    let a = (null !== (t = this.itemsByTypes.get(e)) && void 0 !== t ? t : [])[0];
    if (null != a) return a
  }
  sortByTypes(e) {
    return e.reduce((e, t) => {
      let a = e.get(t.type);
      return null != a ? a.push(t) : e.set(t.type, [t]), e
    }, new Map)
  }
  constructor(e) {
    var t, a, r;
    t = this, r = void 0, (a = "itemsByTypes") in t ? Object.defineProperty(t, a, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = r, this.itemsByTypes = this.sortByTypes(e)
  }
}
let o = e => {
  let {
    firstProfileEffect: t,
    firstAvatarDecoration: a
  } = r.useMemo(() => new n(e.items), [e]);
  return {
    firstProfileEffect: t,
    firstAvatarDecoration: a
  }
}