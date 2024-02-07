"use strict";
n.r(e), n.d(e, {
  FetchState: function() {
    return i
  },
  default: function() {
    return d
  }
}), n("222007");
var i, l, a = n("446674"),
  r = n("913144"),
  u = n("718517");
(l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR";
let s = {
  applicationIdToGuildIds: {},
  lastFetchTimeMs: null,
  nextFetchRetryTimeMs: null,
  fetchState: 0
};

function o(t) {
  let {
    applicationId: e,
    guildId: n
  } = t;
  null == s.applicationIdToGuildIds[e] && (s.applicationIdToGuildIds[e] = new Set), s.applicationIdToGuildIds[e].add(n), s.applicationIdToGuildIds[e] = new Set(s.applicationIdToGuildIds[e])
}
class c extends a.default.PersistedStore {
  initialize(t) {
    if (null != t)
      for (let e in s.lastFetchTimeMs = t.lastFetchTimeMs, s.nextFetchRetryTimeMs = t.nextFetchRetryTimeMs, s.fetchState = t.fetchState, t.applicationIdToGuildIds) s.applicationIdToGuildIds[e] = new Set(t.applicationIdToGuildIds[e])
  }
  getState() {
    return s
  }
  getGuildIdsForApplication(t) {
    if (null != t) return s.applicationIdToGuildIds[t]
  }
  getLastFetchTimeMs() {
    return s.lastFetchTimeMs
  }
  getNextFetchRetryTimeMs() {
    return s.nextFetchRetryTimeMs
  }
  getFetchState() {
    return s.fetchState
  }
}
c.displayName = "MyGuildApplicationsStore", c.persistKey = "MyGuildApplicationsStore";
var d = new c(r.default, {
  LOGOUT: function() {
    s.applicationIdToGuildIds = {}, s.lastFetchTimeMs = null, s.nextFetchRetryTimeMs = null, s.fetchState = 0
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
    s.fetchState = 1
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(t) {
    let {
      guildIdToApplicationIds: e
    } = t;
    for (let t in s.fetchState = 2, s.lastFetchTimeMs = Date.now(), s.applicationIdToGuildIds = {}, s.nextFetchRetryTimeMs = null, e)
      for (let n of e[t]) o({
        applicationId: n,
        guildId: t
      })
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(t) {
    let {
      retryAfterSeconds: e
    } = t;
    if (s.fetchState = 3, null != e) {
      let t = e * u.default.Millis.SECOND;
      s.nextFetchRetryTimeMs = Date.now() + t
    }
  },
  INTEGRATION_CREATE: function(t) {
    let {
      application: e,
      guildId: n
    } = t;
    null != e && o({
      applicationId: e.id,
      guildId: n
    })
  },
  INTEGRATION_DELETE: function(t) {
    let {
      applicationId: e,
      guildId: n
    } = t;
    null != e && ! function(t) {
      let {
        applicationId: e,
        guildId: n
      } = t;
      null != s.applicationIdToGuildIds[e] && (s.applicationIdToGuildIds[e].delete(n), s.applicationIdToGuildIds[e] = new Set(s.applicationIdToGuildIds[e]))
    }({
      applicationId: e,
      guildId: n
    })
  }
})