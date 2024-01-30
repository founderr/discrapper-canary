"use strict";
x.r(t), x.d(t, {
  FetchState: function() {
    return a
  },
  default: function() {
    return m
  }
});
var s, a, o = x("693566"),
  y = x.n(o),
  d = x("446674"),
  k = x("913144");

function p(i) {
  let {
    query: t,
    guildId: x,
    page: s,
    categoryId: a
  } = i;
  return "query:'".concat(t, "' guildId:").concat(x, " page:").concat(s, " categoryId:").concat(a)
}(s = a || (a = {}))[s.FETCHING = 0] = "FETCHING", s[s.FETCHED = 1] = "FETCHED", s[s.ERROR = 2] = "ERROR";
let e = new y({
    max: 20
  }),
  r = {};
class n extends d.default.Store {
  getSearchResults(i) {
    let {
      query: t,
      guildId: x,
      page: s,
      categoryId: a
    } = i, o = p({
      query: t,
      guildId: x,
      page: s,
      categoryId: a
    });
    return e.get(o)
  }
  getFetchState(i) {
    let {
      query: t,
      guildId: x,
      page: s,
      categoryId: a
    } = i, o = p({
      query: t,
      guildId: x,
      page: s,
      categoryId: a
    });
    return r[o]
  }
}
n.displayName = "ApplicationDirectorySearchStore";
var m = new n(k.default, {
  APPLICATION_DIRECTORY_FETCH_SEARCH: function(i) {
    let {
      query: t,
      guildId: x,
      page: s,
      categoryId: a
    } = i, o = p({
      query: t,
      guildId: x,
      page: s,
      categoryId: a
    });
    r = {
      ...r,
      [o]: 0
    }
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(i) {
    let {
      query: t,
      guildId: x,
      page: s,
      categoryId: a,
      result: o
    } = i, y = p({
      query: t,
      guildId: x,
      page: s,
      categoryId: a
    });
    e.set(y, {
      lastFetchTimeMs: Date.now(),
      ...o
    }), r = {
      ...r,
      [y]: 1
    }
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(i) {
    let {
      query: t,
      guildId: x,
      page: s,
      categoryId: a
    } = i, o = p({
      query: t,
      guildId: x,
      page: s,
      categoryId: a
    });
    r = {
      ...r,
      [o]: 2
    }
  }
})