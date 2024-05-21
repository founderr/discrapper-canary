"use strict";
a.r(t), a.d(t, {
  useProductItems: function() {
    return n
  }
}), a("724458"), a("653041"), a("47120");
var l = a("470079"),
  s = a("979554");
class r {
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
    return e.items.reduce((e, t) => {
      let a = e.get(t.type);
      return null != a ? a.push(t) : e.set(t.type, [t]), e
    }, new Map)
  }
  constructor(e) {
    var t, a, l;
    t = this, l = void 0, (a = "itemsByTypes") in t ? Object.defineProperty(t, a, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = l, this.itemsByTypes = this.sortByTypes(e)
  }
}
let n = e => {
  let {
    firstProfileEffect: t,
    firstAvatarDecoration: a
  } = l.useMemo(() => new r(e), [e]);
  return {
    firstProfileEffect: t,
    firstAvatarDecoration: a
  }
}