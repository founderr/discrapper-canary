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
    applicationId: t,
    guildId: x,
    page: s
  } = i;
  return "applicationId:".concat(t, " guildId:").concat(x, " page:").concat(s)
}(s = a || (a = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED", s[s.ERROR = 3] = "ERROR";
let r = new y({
    max: 20
  }),
  e = {};
class n extends d.default.Store {
  getSimilarApplications(i) {
    let {
      applicationId: t,
      guildId: x,
      page: s
    } = i;
    if (null == t) return;
    let a = p({
      applicationId: t,
      guildId: x,
      page: s
    });
    return r.get(a)
  }
  getFetchState(i) {
    let {
      applicationId: t,
      guildId: x,
      page: s
    } = i;
    if (null == t) return;
    let a = p({
      applicationId: t,
      guildId: x,
      page: s
    });
    return e[a]
  }
}
n.displayName = "ApplicationDirectorySimilarApplicationsStore";
var m = new n(k.default, {
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(i) {
    let {
      applicationId: t,
      guildId: x,
      page: s
    } = i, a = p({
      applicationId: t,
      guildId: x,
      page: s
    });
    e = {
      ...e,
      [a]: 1
    }
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(i) {
    let {
      applicationId: t,
      guildId: x,
      similarApplications: s,
      loadId: a,
      page: o,
      totalPages: y
    } = i, d = p({
      applicationId: t,
      guildId: x,
      page: o
    });
    r.set(d, {
      lastFetchTimeMs: Date.now(),
      applications: s,
      loadId: a,
      page: o,
      totalPages: y
    }), e = {
      ...e,
      [d]: 2
    }
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(i) {
    let {
      applicationId: t,
      guildId: x,
      page: s
    } = i, a = p({
      applicationId: t,
      guildId: x,
      page: s
    });
    e = {
      ...e,
      [a]: 3
    }
  }
})