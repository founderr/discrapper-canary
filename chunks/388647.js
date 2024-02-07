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
    applicationId: e,
    guildId: n,
    page: i
  } = t;
  return "applicationId:".concat(e, " guildId:").concat(n, " page:").concat(i)
}(i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
let c = new r({
    max: 20
  }),
  d = {};
class f extends u.default.Store {
  getSimilarApplications(t) {
    let {
      applicationId: e,
      guildId: n,
      page: i
    } = t;
    if (null == e) return;
    let l = o({
      applicationId: e,
      guildId: n,
      page: i
    });
    return c.get(l)
  }
  getFetchState(t) {
    let {
      applicationId: e,
      guildId: n,
      page: i
    } = t;
    if (null == e) return;
    let l = o({
      applicationId: e,
      guildId: n,
      page: i
    });
    return d[l]
  }
}
f.displayName = "ApplicationDirectorySimilarApplicationsStore";
var p = new f(s.default, {
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(t) {
    let {
      applicationId: e,
      guildId: n,
      page: i
    } = t, l = o({
      applicationId: e,
      guildId: n,
      page: i
    });
    d = {
      ...d,
      [l]: 1
    }
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(t) {
    let {
      applicationId: e,
      guildId: n,
      similarApplications: i,
      loadId: l,
      page: a,
      totalPages: r
    } = t, u = o({
      applicationId: e,
      guildId: n,
      page: a
    });
    c.set(u, {
      lastFetchTimeMs: Date.now(),
      applications: i,
      loadId: l,
      page: a,
      totalPages: r
    }), d = {
      ...d,
      [u]: 2
    }
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(t) {
    let {
      applicationId: e,
      guildId: n,
      page: i
    } = t, l = o({
      applicationId: e,
      guildId: n,
      page: i
    });
    d = {
      ...d,
      [l]: 3
    }
  }
})