t.d(n, {
  j: function() {
    return C
  }
}), t(653041), t(47120);
var a, r, s, i, o = t(392711),
  l = t.n(o),
  c = t(442837),
  d = t(570140),
  u = t(823379),
  m = t(731455),
  h = t(689938);

function C(e, n) {
  return l().isEqual(e.map(e => [e.categoryId, e.name]), n.map(e => [e.categoryId, e.name]))
}
let x = null,
  f = [],
  E = [],
  T = {};
class _ extends(a = c.ZP.Store) {
  getPrimaryCategories() {
    return f
  }
  getDiscoveryCategories() {
    let e = m.L3.map(e => E.find(n => n.categoryId === e)).filter(u.lm);
    return [{
      categoryId: m.Hk,
      name: h.Z.Messages.HOME
    }, ...e]
  }
  getClanDiscoveryCategories() {
    let e = m.L3.map(e => E.find(n => n.categoryId === e)).filter(u.lm);
    return [{
      categoryId: m.Hk,
      name: h.Z.Messages.COMMUNITIES
    }, ...e]
  }
  getAllCategories() {
    return E
  }
  getFetchedLocale() {
    return x
  }
  getCategoryName(e) {
    return e === m.Hk ? h.Z.Messages.HOME : T[e]
  }
}
i = "GuildDiscoveryCategoryStore", (s = "displayName") in(r = _) ? Object.defineProperty(r, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = i, n.Z = new _(d.Z, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let n, {
        categories: t,
        locale: a
      } = e,
      r = [],
      s = [];
    if (t.sort((e, n) => e.name < n.name ? -1 : 1).forEach(e => {
        let {
          id: t,
          name: a,
          is_primary: i
        } = e;
        if (t !== m.o3) {
          if (t === m.dc) {
            n = {
              categoryId: t,
              name: a
            };
            return
          }!0 === i && r.push({
            categoryId: t,
            name: a
          }), s.push({
            categoryId: t,
            name: a
          }), T[t] = a
        }
      }), null != n) {
      let {
        categoryId: e,
        name: t
      } = n;
      r.push({
        categoryId: e,
        name: t
      }), T[e] = t
    }
    x = a, f = r, E = s
  }
})