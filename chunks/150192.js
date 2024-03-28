"use strict";
n.r(t), n.d(t, {
  areDiscoveryCategoriesEqual: function() {
    return _
  }
}), n("653041"), n("47120");
var r, i, s, a, l = n("392711"),
  o = n.n(l),
  u = n("442837"),
  c = n("570140"),
  d = n("823379"),
  f = n("731455"),
  p = n("689938");

function _(e, t) {
  return o().isEqual(e.map(e => [e.categoryId, e.name]), t.map(e => [e.categoryId, e.name]))
}
let m = null,
  E = [],
  T = [],
  I = {};
class h extends(r = u.default.Store) {
  getPrimaryCategories() {
    return E
  }
  getDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.slice(1).map(e => T.find(t => t.categoryId === e.categoryId)).filter(d.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: p.default.Messages.HOME
    }, ...e]
  }
  getAllCategories() {
    return T
  }
  getFetchedLocale() {
    return m
  }
  getCategoryName(e) {
    return e === f.DISCOVERY_ALL_CATEGORIES_ID ? p.default.Messages.HOME : I[e]
  }
}
a = "GuildDiscoveryCategoryStore", (s = "displayName") in(i = h) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.default = new h(c.default, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: n,
        locale: r
      } = e,
      i = [],
      s = [];
    if (n.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
        let {
          id: n,
          name: r,
          is_primary: a
        } = e;
        if (n !== f.DEFAULT_DISCOVERY_CATEGORY_ID) {
          if (n === f.OTHER_DISCOVERY_CATEGORY_ID) {
            t = {
              categoryId: n,
              name: r
            };
            return
          }!0 === a && i.push({
            categoryId: n,
            name: r
          }), s.push({
            categoryId: n,
            name: r
          }), I[n] = r
        }
      }), null != t) {
      let {
        categoryId: e,
        name: n
      } = t;
      i.push({
        categoryId: e,
        name: n
      }), I[e] = n
    }
    m = r, E = i, T = s
  }
})