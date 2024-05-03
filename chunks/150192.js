"use strict";
a.r(t), a.d(t, {
  areDiscoveryCategoriesEqual: function() {
    return h
  }
}), a("653041"), a("47120");
var n, r, i, s, l = a("392711"),
  o = a.n(l),
  c = a("442837"),
  d = a("570140"),
  u = a("823379"),
  f = a("731455"),
  m = a("689938");

function h(e, t) {
  return o().isEqual(e.map(e => [e.categoryId, e.name]), t.map(e => [e.categoryId, e.name]))
}
let E = null,
  T = [],
  p = [],
  _ = {};
class C extends(n = c.default.Store) {
  getPrimaryCategories() {
    return T
  }
  getDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => p.find(t => t.categoryId === e)).filter(u.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: m.default.Messages.HOME
    }, ...e]
  }
  getClanDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => p.find(t => t.categoryId === e)).filter(u.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: m.default.Messages.COMMUNITIES
    }, ...e]
  }
  getAllCategories() {
    return p
  }
  getFetchedLocale() {
    return E
  }
  getCategoryName(e) {
    return e === f.DISCOVERY_ALL_CATEGORIES_ID ? m.default.Messages.HOME : _[e]
  }
}
s = "GuildDiscoveryCategoryStore", (i = "displayName") in(r = C) ? Object.defineProperty(r, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = s, t.default = new C(d.default, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: a,
        locale: n
      } = e,
      r = [],
      i = [];
    if (a.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
        let {
          id: a,
          name: n,
          is_primary: s
        } = e;
        if (a !== f.DEFAULT_DISCOVERY_CATEGORY_ID) {
          if (a === f.OTHER_DISCOVERY_CATEGORY_ID) {
            t = {
              categoryId: a,
              name: n
            };
            return
          }!0 === s && r.push({
            categoryId: a,
            name: n
          }), i.push({
            categoryId: a,
            name: n
          }), _[a] = n
        }
      }), null != t) {
      let {
        categoryId: e,
        name: a
      } = t;
      r.push({
        categoryId: e,
        name: a
      }), _[e] = a
    }
    E = n, T = r, p = i
  }
})