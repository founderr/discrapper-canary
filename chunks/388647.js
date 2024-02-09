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
    applicationId: t,
    guildId: n,
    page: i
  } = e;
  return "applicationId:".concat(t, " guildId:").concat(n, " page:").concat(i)
}(i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
let c = new r({
    max: 20
  }),
  d = {};
class f extends s.default.Store {
  getSimilarApplications(e) {
    let {
      applicationId: t,
      guildId: n,
      page: i
    } = e;
    if (null == t) return;
    let l = o({
      applicationId: t,
      guildId: n,
      page: i
    });
    return c.get(l)
  }
  getFetchState(e) {
    let {
      applicationId: t,
      guildId: n,
      page: i
    } = e;
    if (null == t) return;
    let l = o({
      applicationId: t,
      guildId: n,
      page: i
    });
    return d[l]
  }
}
f.displayName = "ApplicationDirectorySimilarApplicationsStore";
var p = new f(u.default, {
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(e) {
    let {
      applicationId: t,
      guildId: n,
      page: i
    } = e, l = o({
      applicationId: t,
      guildId: n,
      page: i
    });
    d = {
      ...d,
      [l]: 1
    }
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(e) {
    let {
      applicationId: t,
      guildId: n,
      similarApplications: i,
      loadId: l,
      page: a,
      totalPages: r
    } = e, s = o({
      applicationId: t,
      guildId: n,
      page: a
    });
    c.set(s, {
      lastFetchTimeMs: Date.now(),
      applications: i,
      loadId: l,
      page: a,
      totalPages: r
    }), d = {
      ...d,
      [s]: 2
    }
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(e) {
    let {
      applicationId: t,
      guildId: n,
      page: i
    } = e, l = o({
      applicationId: t,
      guildId: n,
      page: i
    });
    d = {
      ...d,
      [l]: 3
    }
  }
})