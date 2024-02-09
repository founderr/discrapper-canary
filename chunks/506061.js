"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return i
  },
  default: function() {
    return d
  }
}), n("222007");
var i, l, a = n("446674"),
  r = n("913144"),
  s = n("718517");
(l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR";
let u = {
  applicationIdToGuildIds: {},
  lastFetchTimeMs: null,
  nextFetchRetryTimeMs: null,
  fetchState: 0
};

function o(e) {
  let {
    applicationId: t,
    guildId: n
  } = e;
  null == u.applicationIdToGuildIds[t] && (u.applicationIdToGuildIds[t] = new Set), u.applicationIdToGuildIds[t].add(n), u.applicationIdToGuildIds[t] = new Set(u.applicationIdToGuildIds[t])
}
class c extends a.default.PersistedStore {
  initialize(e) {
    if (null != e)
      for (let t in u.lastFetchTimeMs = e.lastFetchTimeMs, u.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs, u.fetchState = e.fetchState, e.applicationIdToGuildIds) u.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t])
  }
  getState() {
    return u
  }
  getGuildIdsForApplication(e) {
    if (null != e) return u.applicationIdToGuildIds[e]
  }
  getLastFetchTimeMs() {
    return u.lastFetchTimeMs
  }
  getNextFetchRetryTimeMs() {
    return u.nextFetchRetryTimeMs
  }
  getFetchState() {
    return u.fetchState
  }
}
c.displayName = "MyGuildApplicationsStore", c.persistKey = "MyGuildApplicationsStore";
var d = new c(r.default, {
  LOGOUT: function() {
    u.applicationIdToGuildIds = {}, u.lastFetchTimeMs = null, u.nextFetchRetryTimeMs = null, u.fetchState = 0
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
    u.fetchState = 1
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(e) {
    let {
      guildIdToApplicationIds: t
    } = e;
    for (let e in u.fetchState = 2, u.lastFetchTimeMs = Date.now(), u.applicationIdToGuildIds = {}, u.nextFetchRetryTimeMs = null, t)
      for (let n of t[e]) o({
        applicationId: n,
        guildId: e
      })
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(e) {
    let {
      retryAfterSeconds: t
    } = e;
    if (u.fetchState = 3, null != t) {
      let e = t * s.default.Millis.SECOND;
      u.nextFetchRetryTimeMs = Date.now() + e
    }
  },
  INTEGRATION_CREATE: function(e) {
    let {
      application: t,
      guildId: n
    } = e;
    null != t && o({
      applicationId: t.id,
      guildId: n
    })
  },
  INTEGRATION_DELETE: function(e) {
    let {
      applicationId: t,
      guildId: n
    } = e;
    null != t && ! function(e) {
      let {
        applicationId: t,
        guildId: n
      } = e;
      null != u.applicationIdToGuildIds[t] && (u.applicationIdToGuildIds[t].delete(n), u.applicationIdToGuildIds[t] = new Set(u.applicationIdToGuildIds[t]))
    }({
      applicationId: t,
      guildId: n
    })
  }
})