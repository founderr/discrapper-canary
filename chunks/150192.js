"use strict";
i.r(t), i.d(t, {
  areDiscoveryCategoriesEqual: function() {
    return C
  }
}), i("653041"), i("47120");
var n, r, s, a, l = i("392711"),
  o = i.n(l),
  c = i("442837"),
  u = i("570140"),
  d = i("823379"),
  f = i("731455"),
  p = i("689938");

function C(e, t) {
  return o().isEqual(e.map(e => [e.categoryId, e.name]), t.map(e => [e.categoryId, e.name]))
}
let m = null,
  h = [],
  _ = [],
  E = {};
class I extends(n = c.default.Store) {
  getPrimaryCategories() {
    return h
  }
  getDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => _.find(t => t.categoryId === e)).filter(d.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: p.default.Messages.HOME
    }, ...e]
  }
  getClanDiscoveryCategories() {
    let e = f.DISCOVERY_SIDEBAR_CATEGORIES.map(e => _.find(t => t.categoryId === e)).filter(d.isNotNullish);
    return [{
      categoryId: f.DISCOVERY_ALL_CATEGORIES_ID,
      name: p.default.Messages.COMMUNITIES
    }, ...e]
  }
  getAllCategories() {
    return _
  }
  getFetchedLocale() {
    return m
  }
  getCategoryName(e) {
    return e === f.DISCOVERY_ALL_CATEGORIES_ID ? p.default.Messages.HOME : E[e]
  }
}
a = "GuildDiscoveryCategoryStore", (s = "displayName") in(r = I) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new I(u.default, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: i,
        locale: n
      } = e,
      r = [],
      s = [];
    if (i.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
        let {
          id: i,
          name: n,
          is_primary: a
        } = e;
        if (i !== f.DEFAULT_DISCOVERY_CATEGORY_ID) {
          if (i === f.OTHER_DISCOVERY_CATEGORY_ID) {
            t = {
              categoryId: i,
              name: n
            };
            return
          }!0 === a && r.push({
            categoryId: i,
            name: n
          }), s.push({
            categoryId: i,
            name: n
          }), E[i] = n
        }
      }), null != t) {
      let {
        categoryId: e,
        name: i
      } = t;
      r.push({
        categoryId: e,
        name: i
      }), E[e] = i
    }
    m = n, h = r, _ = s
  }
})