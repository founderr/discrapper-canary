"use strict";
n.r(t), n.d(t, {
  areDiscoveryCategoriesEqual: function() {
    return h
  }
}), n("653041"), n("47120");
var a, r, s, i, l = n("392711"),
  o = n.n(l),
  c = n("442837"),
  d = n("570140"),
  u = n("823379"),
  f = n("731455"),
  m = n("689938");

function h(e, t) {
  return o().isEqual(e.map(e => [e.categoryId, e.name]), t.map(e => [e.categoryId, e.name]))
}
let p = null,
  E = [],
  T = [],
  C = {};
class x extends(a = c.default.Store) {
  getPrimaryCategories() {
    return E
  }
  getDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => T.find(t => t.categoryId === e)).filter(u.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: m.default.Messages.HOME
    }, ...e]
  }
  getClanDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => T.find(t => t.categoryId === e)).filter(u.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: m.default.Messages.COMMUNITIES
    }, ...e]
  }
  getAllCategories() {
    return T
  }
  getFetchedLocale() {
    return p
  }
  getCategoryName(e) {
    return e === f.DISCOVERY_ALL_CATEGORIES_ID ? m.default.Messages.HOME : C[e]
  }
}
i = "GuildDiscoveryCategoryStore", (s = "displayName") in(r = x) ? Object.defineProperty(r, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = i, t.default = new x(d.default, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: n,
        locale: a
      } = e,
      r = [],
      s = [];
    if (n.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
        let {
          id: n,
          name: a,
          is_primary: i
        } = e;
        if (n !== f.DEFAULT_DISCOVERY_CATEGORY_ID) {
          if (n === f.OTHER_DISCOVERY_CATEGORY_ID) {
            t = {
              categoryId: n,
              name: a
            };
            return
          }!0 === i && r.push({
            categoryId: n,
            name: a
          }), s.push({
            categoryId: n,
            name: a
          }), C[n] = a
        }
      }), null != t) {
      let {
        categoryId: e,
        name: n
      } = t;
      r.push({
        categoryId: e,
        name: n
      }), C[e] = n
    }
    p = a, E = r, T = s
  }
})