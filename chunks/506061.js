"use strict";
x.r(t), x.d(t, {
  FetchState: function() {
    return s
  },
  default: function() {
    return r
  }
}), x("222007");
var s, a, o = x("446674"),
  y = x("913144"),
  d = x("718517");
(a = s || (s = {}))[a.NOT_FETCHED = 0] = "NOT_FETCHED", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.ERROR = 3] = "ERROR";
let k = {
  applicationIdToGuildIds: {},
  lastFetchTimeMs: null,
  nextFetchRetryTimeMs: null,
  fetchState: 0
};

function p(i) {
  let {
    applicationId: t,
    guildId: x
  } = i;
  null == k.applicationIdToGuildIds[t] && (k.applicationIdToGuildIds[t] = new Set), k.applicationIdToGuildIds[t].add(x), k.applicationIdToGuildIds[t] = new Set(k.applicationIdToGuildIds[t])
}
class e extends o.default.PersistedStore {
  initialize(i) {
    if (null != i)
      for (let t in k.lastFetchTimeMs = i.lastFetchTimeMs, k.nextFetchRetryTimeMs = i.nextFetchRetryTimeMs, k.fetchState = i.fetchState, i.applicationIdToGuildIds) k.applicationIdToGuildIds[t] = new Set(i.applicationIdToGuildIds[t])
  }
  getState() {
    return k
  }
  getGuildIdsForApplication(i) {
    if (null != i) return k.applicationIdToGuildIds[i]
  }
  getLastFetchTimeMs() {
    return k.lastFetchTimeMs
  }
  getNextFetchRetryTimeMs() {
    return k.nextFetchRetryTimeMs
  }
  getFetchState() {
    return k.fetchState
  }
}
e.displayName = "MyGuildApplicationsStore", e.persistKey = "MyGuildApplicationsStore";
var r = new e(y.default, {
  LOGOUT: function() {
    k.applicationIdToGuildIds = {}, k.lastFetchTimeMs = null, k.nextFetchRetryTimeMs = null, k.fetchState = 0
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
    k.fetchState = 1
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(i) {
    let {
      guildIdToApplicationIds: t
    } = i;
    for (let i in k.fetchState = 2, k.lastFetchTimeMs = Date.now(), k.applicationIdToGuildIds = {}, k.nextFetchRetryTimeMs = null, t)
      for (let x of t[i]) p({
        applicationId: x,
        guildId: i
      })
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(i) {
    let {
      retryAfterSeconds: t
    } = i;
    if (k.fetchState = 3, null != t) {
      let i = t * d.default.Millis.SECOND;
      k.nextFetchRetryTimeMs = Date.now() + i
    }
  },
  INTEGRATION_CREATE: function(i) {
    let {
      application: t,
      guildId: x
    } = i;
    null != t && p({
      applicationId: t.id,
      guildId: x
    })
  },
  INTEGRATION_DELETE: function(i) {
    let {
      applicationId: t,
      guildId: x
    } = i;
    null != t && ! function(i) {
      let {
        applicationId: t,
        guildId: x
      } = i;
      null != k.applicationIdToGuildIds[t] && (k.applicationIdToGuildIds[t].delete(x), k.applicationIdToGuildIds[t] = new Set(k.applicationIdToGuildIds[t]))
    }({
      applicationId: t,
      guildId: x
    })
  }
})