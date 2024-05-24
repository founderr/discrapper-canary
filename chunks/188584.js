"use strict";
s.r(t), s.d(t, {
  useBundledProducts: function() {
    return n
  }
}), s("724458"), s("653041"), s("47120");
var l = s("470079"),
  a = s("979554");
class i {
  get firstAvatarDecoration() {
    return this.getFirstItemByType(a.CollectiblesItemType.AVATAR_DECORATION)
  }
  get firstProfileEffect() {
    return this.getFirstItemByType(a.CollectiblesItemType.PROFILE_EFFECT)
  }
  getFirstItemByType(e) {
    var t;
    let s = (null !== (t = this.itemsByTypes.get(e)) && void 0 !== t ? t : [])[0];
    if (null != s) return s
  }
  sortByTypes(e) {
    var t;
    return (null !== (t = e.bundledProducts) && void 0 !== t ? t : []).reduce((e, t) => {
      let s = e.get(t.type);
      return null != s ? s.push(t) : e.set(t.type, [t]), e
    }, new Map)
  }
  constructor(e) {
    var t, s, l;
    t = this, l = void 0, (s = "itemsByTypes") in t ? Object.defineProperty(t, s, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = l, this.itemsByTypes = this.sortByTypes(e)
  }
}
let n = e => {
  let {
    firstProfileEffect: t,
    firstAvatarDecoration: s
  } = l.useMemo(() => new i(e), [e]);
  return {
    firstProfileEffect: t,
    firstAvatarDecoration: s
  }
}