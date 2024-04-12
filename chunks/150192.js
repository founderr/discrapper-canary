"use strict";
n.r(t), n.d(t, {
  areDiscoveryCategoriesEqual: function() {
    return m
  }
}), n("653041"), n("47120");
var i, r, s, a, l = n("392711"),
  o = n.n(l),
  u = n("442837"),
  c = n("570140"),
  d = n("823379"),
  f = n("731455"),
  p = n("689938");

function m(e, t) {
  return o().isEqual(e.map(e => [e.categoryId, e.name]), t.map(e => [e.categoryId, e.name]))
}
let E = null,
  I = [],
  _ = [],
  T = {};
class h extends(i = u.default.Store) {
  getPrimaryCategories() {
    return I
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
    return E
  }
  getCategoryName(e) {
    return e === f.DISCOVERY_ALL_CATEGORIES_ID ? p.default.Messages.HOME : T[e]
  }
}
a = "GuildDiscoveryCategoryStore", (s = "displayName") in(r = h) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new h(c.default, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: n,
        locale: i
      } = e,
      r = [],
      s = [];
    if (n.sort((e, t) => e.name < t.name ? -1 : 1).forEach(e => {
        let {
          id: n,
          name: i,
          is_primary: a
        } = e;
        if (n !== f.DEFAULT_DISCOVERY_CATEGORY_ID) {
          if (n === f.OTHER_DISCOVERY_CATEGORY_ID) {
            t = {
              categoryId: n,
              name: i
            };
            return
          }!0 === a && r.push({
            categoryId: n,
            name: i
          }), s.push({
            categoryId: n,
            name: i
          }), T[n] = i
        }
      }), null != t) {
      let {
        categoryId: e,
        name: n
      } = t;
      r.push({
        categoryId: e,
        name: n
      }), T[e] = n
    }
    E = i, I = r, _ = s
  }
})