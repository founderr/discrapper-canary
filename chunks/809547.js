"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return o
  }
});
var i, r, a, s, o, l, u = n("31775"),
  d = n.n(u),
  _ = n("442837"),
  c = n("570140");

function E(e) {
  let {
    query: t,
    guildId: n,
    page: i,
    categoryId: r,
    integrationType: a
  } = e;
  return "query:'".concat(t, "' guildId:").concat(n, " page:").concat(i, " categoryId:").concat(r, " integrationType:").concat(a)
}(i = o || (o = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
let I = new(d())({
    max: 20
  }),
  T = {};
class f extends(l = _.default.Store) {
  getSearchResults(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: a
    } = e, s = E({
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: a
    });
    return I.get(s)
  }
  getFetchState(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: a
    } = e;
    return T[E({
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: a
    })]
  }
}
s = "ApplicationDirectorySearchStore", (a = "displayName") in(r = f) ? Object.defineProperty(r, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[a] = s, t.default = new f(c.default, {
  APPLICATION_DIRECTORY_FETCH_SEARCH: function(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: a
    } = e, s = E({
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: a
    });
    T = {
      ...T,
      [s]: 0
    }
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      result: a,
      integrationType: s
    } = e, o = E({
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: s
    });
    I.set(o, {
      lastFetchTimeMs: Date.now(),
      ...a
    }), T = {
      ...T,
      [o]: 1
    }
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: a
    } = e, s = E({
      query: t,
      guildId: n,
      page: i,
      categoryId: r,
      integrationType: a
    });
    T = {
      ...T,
      [s]: 2
    }
  }
})