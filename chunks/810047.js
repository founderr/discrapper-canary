"use strict";
x.r(t), x.d(t, {
  FetchState: function() {
    return a
  },
  default: function() {
    return c
  }
});
var s, a, o = x("917351"),
  y = x.n(o),
  d = x("446674"),
  k = x("913144");
(s = a || (a = {}))[s.FETCHING = 0] = "FETCHING", s[s.FETCHED = 1] = "FETCHED", s[s.ERROR = 2] = "ERROR";
let p = {},
  e = {},
  r = {};

function n(i) {
  let {
    includesInactive: t
  } = i;
  return "includes_inactive:".concat(t)
}
class m extends d.default.Store {
  getLastFetchTimeMs(i) {
    let {
      includesInactive: t
    } = i;
    return r[n({
      includesInactive: t
    })]
  }
  getFetchState(i) {
    let {
      includesInactive: t
    } = i;
    return e[n({
      includesInactive: t
    })]
  }
  getCollections(i) {
    let {
      includesInactive: t
    } = i;
    return p[n({
      includesInactive: t
    })]
  }
}
var c = new m(k.default, {
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function(i) {
    let {
      includesInactive: t
    } = i;
    e = {
      ...e,
      [n({
        includesInactive: t
      })]: 0
    }
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function(i) {
    var t;
    let {
      collections: x,
      includesInactive: s
    } = i, a = n({
      includesInactive: s
    });
    let o = (t = x.map(i => {
      var t;
      return i.application_directory_collection_items = (t = i.application_directory_collection_items, y.sortBy(t, ["position", "id"])), i
    }), y.sortBy(t, ["position", "id"]));
    p = {
      ...p,
      [a]: o
    }, e = {
      ...e,
      [a]: 1
    };
    let d = Date.now();
    r = {
      ...r,
      [a]: d
    }
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function(i) {
    let {
      includesInactive: t
    } = i;
    e = {
      ...e,
      [n({
        includesInactive: t
      })]: 2
    }
  }
})