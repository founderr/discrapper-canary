"use strict";
a.r(t), a.d(t, {
  areDiscoveryCategoriesEqual: function() {
    return h
  }
}), a("653041"), a("47120");
var n, r, s, i, l = a("392711"),
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
  p = [],
  C = [],
  T = {};
class _ extends(n = c.default.Store) {
  getPrimaryCategories() {
    return p
  }
  getDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => C.find(t => t.categoryId === e)).filter(u.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: m.default.Messages.HOME
    }, ...e]
  }
  getClanDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => C.find(t => t.categoryId === e)).filter(u.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: m.default.Messages.COMMUNITIES
    }, ...e]
  }
  getAllCategories() {
    return C
  }
  getFetchedLocale() {
    return E
  }
  getCategoryName(e) {
    return e === f.DISCOVERY_ALL_CATEGORIES_ID ? m.default.Messages.HOME : T[e]
  }
}
i = "GuildDiscoveryCategoryStore", (s = "displayName") in(r = _) ? Object.defineProperty(r, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = i, t.default = new _(d.default, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: a,
        locale: n
      } = e,
      r = [],
      s = [];
    if (a.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
        let {
          id: a,
          name: n,
          is_primary: i
        } = e;
        if (a !== f.DEFAULT_DISCOVERY_CATEGORY_ID) {
          if (a === f.OTHER_DISCOVERY_CATEGORY_ID) {
            t = {
              categoryId: a,
              name: n
            };
            return
          }!0 === i && r.push({
            categoryId: a,
            name: n
          }), s.push({
            categoryId: a,
            name: n
          }), T[a] = n
        }
      }), null != t) {
      let {
        categoryId: e,
        name: a
      } = t;
      r.push({
        categoryId: e,
        name: a
      }), T[e] = a
    }
    E = n, p = r, C = s
  }
})