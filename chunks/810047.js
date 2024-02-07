"use strict";
n.r(e), n.d(e, {
  FetchState: function() {
    return l
  },
  default: function() {
    return I
  }
});
var i, l, a = n("917351"),
  r = n.n(a),
  u = n("446674"),
  s = n("913144");
(i = l || (l = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
let o = {},
  c = {},
  d = {};

function f(t) {
  let {
    includesInactive: e
  } = t;
  return "includes_inactive:".concat(e)
}
class p extends u.default.Store {
  getLastFetchTimeMs(t) {
    let {
      includesInactive: e
    } = t;
    return d[f({
      includesInactive: e
    })]
  }
  getFetchState(t) {
    let {
      includesInactive: e
    } = t;
    return c[f({
      includesInactive: e
    })]
  }
  getCollections(t) {
    let {
      includesInactive: e
    } = t;
    return o[f({
      includesInactive: e
    })]
  }
}
var I = new p(s.default, {
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function(t) {
    let {
      includesInactive: e
    } = t;
    c = {
      ...c,
      [f({
        includesInactive: e
      })]: 0
    }
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function(t) {
    var e;
    let {
      collections: n,
      includesInactive: i
    } = t, l = f({
      includesInactive: i
    });
    let a = (e = n.map(t => {
      var e;
      return t.application_directory_collection_items = (e = t.application_directory_collection_items, r.sortBy(e, ["position", "id"])), t
    }), r.sortBy(e, ["position", "id"]));
    o = {
      ...o,
      [l]: a
    }, c = {
      ...c,
      [l]: 1
    };
    let u = Date.now();
    d = {
      ...d,
      [l]: u
    }
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function(t) {
    let {
      includesInactive: e
    } = t;
    c = {
      ...c,
      [f({
        includesInactive: e
      })]: 2
    }
  }
})