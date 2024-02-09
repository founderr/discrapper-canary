"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return l
  },
  default: function() {
    return p
  }
});
var i, l, a = n("693566"),
  r = n.n(a),
  s = n("446674"),
  u = n("913144");

function o(e) {
  let {
    query: t,
    guildId: n,
    page: i,
    categoryId: l
  } = e;
  return "query:'".concat(t, "' guildId:").concat(n, " page:").concat(i, " categoryId:").concat(l)
}(i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
let c = new r({
    max: 20
  }),
  d = {};
class f extends s.default.Store {
  getSearchResults(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: l
    } = e, a = o({
      query: t,
      guildId: n,
      page: i,
      categoryId: l
    });
    return c.get(a)
  }
  getFetchState(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: l
    } = e, a = o({
      query: t,
      guildId: n,
      page: i,
      categoryId: l
    });
    return d[a]
  }
}
f.displayName = "ApplicationDirectorySearchStore";
var p = new f(u.default, {
  APPLICATION_DIRECTORY_FETCH_SEARCH: function(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: l
    } = e, a = o({
      query: t,
      guildId: n,
      page: i,
      categoryId: l
    });
    d = {
      ...d,
      [a]: 0
    }
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: l,
      result: a
    } = e, r = o({
      query: t,
      guildId: n,
      page: i,
      categoryId: l
    });
    c.set(r, {
      lastFetchTimeMs: Date.now(),
      ...a
    }), d = {
      ...d,
      [r]: 1
    }
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(e) {
    let {
      query: t,
      guildId: n,
      page: i,
      categoryId: l
    } = e, a = o({
      query: t,
      guildId: n,
      page: i,
      categoryId: l
    });
    d = {
      ...d,
      [a]: 2
    }
  }
})