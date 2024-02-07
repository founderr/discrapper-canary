"use strict";
n.r(e), n.d(e, {
  FetchState: function() {
    return l
  },
  default: function() {
    return p
  }
});
var i, l, a = n("693566"),
  r = n.n(a),
  u = n("446674"),
  s = n("913144");

function o(t) {
  let {
    query: e,
    guildId: n,
    page: i,
    categoryId: l
  } = t;
  return "query:'".concat(e, "' guildId:").concat(n, " page:").concat(i, " categoryId:").concat(l)
}(i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
let c = new r({
    max: 20
  }),
  d = {};
class f extends u.default.Store {
  getSearchResults(t) {
    let {
      query: e,
      guildId: n,
      page: i,
      categoryId: l
    } = t, a = o({
      query: e,
      guildId: n,
      page: i,
      categoryId: l
    });
    return c.get(a)
  }
  getFetchState(t) {
    let {
      query: e,
      guildId: n,
      page: i,
      categoryId: l
    } = t, a = o({
      query: e,
      guildId: n,
      page: i,
      categoryId: l
    });
    return d[a]
  }
}
f.displayName = "ApplicationDirectorySearchStore";
var p = new f(s.default, {
  APPLICATION_DIRECTORY_FETCH_SEARCH: function(t) {
    let {
      query: e,
      guildId: n,
      page: i,
      categoryId: l
    } = t, a = o({
      query: e,
      guildId: n,
      page: i,
      categoryId: l
    });
    d = {
      ...d,
      [a]: 0
    }
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(t) {
    let {
      query: e,
      guildId: n,
      page: i,
      categoryId: l,
      result: a
    } = t, r = o({
      query: e,
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
  APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(t) {
    let {
      query: e,
      guildId: n,
      page: i,
      categoryId: l
    } = t, a = o({
      query: e,
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