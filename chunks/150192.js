"use strict";
a.r(t), a.d(t, {
  areDiscoveryCategoriesEqual: function() {
    return E
  }
}), a("653041"), a("47120");
var n, r, i, s, l = a("392711"),
  o = a.n(l),
  d = a("442837"),
  c = a("570140"),
  u = a("823379"),
  f = a("731455"),
  m = a("689938");

function E(e, t) {
  return o().isEqual(e.map(e => [e.categoryId, e.name]), t.map(e => [e.categoryId, e.name]))
}
let h = null,
  T = [],
  _ = [],
  C = {};
class x extends(n = d.default.Store) {
  getPrimaryCategories() {
    return T
  }
  getDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => _.find(t => t.categoryId === e)).filter(u.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: m.default.Messages.HOME
    }, ...e]
  }
  getClanDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => _.find(t => t.categoryId === e)).filter(u.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: m.default.Messages.COMMUNITIES
    }, ...e]
  }
  getAllCategories() {
    return _
  }
  getFetchedLocale() {
    return h
  }
  getCategoryName(e) {
    return e === f.DISCOVERY_ALL_CATEGORIES_ID ? m.default.Messages.HOME : C[e]
  }
}
s = "GuildDiscoveryCategoryStore", (i = "displayName") in(r = x) ? Object.defineProperty(r, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = s, t.default = new x(c.default, {
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
          }), C[a] = n
        }
      }), null != t) {
      let {
        categoryId: e,
        name: a
      } = t;
      r.push({
        categoryId: e,
        name: a
      }), C[e] = a
    }
    h = n, T = r, _ = i
  }
})