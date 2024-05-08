"use strict";
n.r(t), n("653041"), n("47120");
var i, r, a, s, o = n("442837"),
  l = n("759174"),
  u = n("570140"),
  d = n("430824"),
  _ = n("594174"),
  c = n("881952"),
  E = n("246364"),
  I = n("937111"),
  T = n("981631");
let f = {};

function S(e) {
  return f[e]
}

function h(e, t) {
  f[e] = t
}

function A(e, t, n) {
  if (t !== n && null != t) {
    var i, r, a, s;
    if (t === E.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = f[e];
      i = e, r = t + 1, f[i] = r
    }
    if (n === E.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = f[e];
      a = e, s = Math.max(0, t - 1), f[a] = s
    }
  }
}
let m = !1,
  N = {
    GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
    GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) => "guild-".concat(e, "-").concat(t)
  };

function p(e) {
  let t = [];
  return t.push(N.GUILD_JOIN_REQUESTS_BY_ID(e.joinRequestId)), t.push(N.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)), t
}
let O = new l.SecondaryIndexMap(p, e => "".concat(e.joinRequestId)),
  R = new l.SecondaryIndexMap(p, e => "".concat(e.joinRequestId)),
  C = new l.SecondaryIndexMap(p, e => "".concat(e.actionedAt));

function g(e) {
  return O.get(e)
}

function L(e) {
  P[e.joinRequestId] = e, O.set(e.joinRequestId, e), (0, c.isSubmittedApplicationStatus)(e.applicationStatus) && (C.delete(e.joinRequestId), R.set(e.joinRequestId, e)), (0, c.isActionedApplicationStatus)(e.applicationStatus) && (R.delete(e.joinRequestId), C.set(e.joinRequestId, e))
}

function v(e) {
  var t, n;
  let {
    guildId: i,
    request: r
  } = e, a = (0, I.joinRequestFromServer)(r), s = _.default.getCurrentUser();
  if (null == s || a.userId === s.id) return !1;
  let o = null === (n = a.joinRequestId, t = O.get(n)) || void 0 === t ? void 0 : t.applicationStatus;
  return A(i, a.applicationStatus, o), L(a), !0
}
let D = {},
  M = {},
  y = {},
  P = {};
class U extends(i = o.default.Store) {
  getRequest(e) {
    return P[e]
  }
  getRequests(e, t) {
    let n = N.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
    return (0, c.isActionedApplicationStatus)(t) ? C.values(n) : (0, c.isSubmittedApplicationStatus)(t) ? R.values(n) : O.values(n)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return f[e]
  }
  isFetching() {
    return m
  }
  getSelectedApplicationTab(e) {
    var t;
    let n = d.default.getGuild(e),
      i = (null == n ? void 0 : n.hasFeature(T.GuildFeatures.CLAN)) ? "REVIEW_APPLICATION" : E.GuildJoinRequestApplicationStatuses.SUBMITTED;
    return null !== (t = D[e]) && void 0 !== t ? t : i
  }
  getSelectedSortOrder(e) {
    var t;
    return null !== (t = M[e]) && void 0 !== t ? t : E.GuildJoinRequestSortOrders.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    var t;
    let n = y[e];
    return null != n ? (t = n.joinRequestId, O.get(t)) : null
  }
}
s = "GuildJoinRequestStoreV2", (a = "displayName") in(r = U) ? Object.defineProperty(r, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[a] = s, t.default = new U(u.default, {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function(e) {
    let {
      joinRequest: t
    } = e;
    L(t)
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
    let {
      status: t,
      requests: n,
      total: i,
      guildId: r
    } = e;
    if (m = !1, t === E.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      var a, s;
      a = r, s = i, f[a] = s
    }
    n.forEach(e => {
      L(e)
    })
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function() {
    m = !0
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function() {
    m = !1
  },
  GUILD_JOIN_REQUESTS_BULK_ACTION: function(e) {
    let {
      guildId: t,
      action: n
    } = e;
    O.values(N.GUILD_JOIN_REQUESTS_BY_STATUS(t, E.GuildJoinRequestApplicationStatuses.SUBMITTED)).forEach(e => {
      L({
        ...e,
        applicationStatus: n
      })
    }), f[t] = 0
  },
  GUILD_JOIN_REQUEST_CREATE: v,
  GUILD_JOIN_REQUEST_UPDATE: v,
  GUILD_JOIN_REQUEST_DELETE: function(e) {
    var t, n;
    let {
      id: i,
      guildId: r
    } = e;
    let a = (t = i, O.get(t));
    if (null != a) {
      ;
      A(r, null, a.applicationStatus), n = i, delete P[n], O.delete(n), R.delete(n), C.delete(n)
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function(e) {
    let {
      guildId: t,
      applicationTab: n
    } = e;
    n !== D[t] && (D[t] = n)
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
    var t;
    let {
      guildId: n,
      sortOrder: i
    } = e;
    if (i === M[n]) return;
    M[n] = i;
    let r = null !== (t = D[n]) && void 0 !== t ? t : E.GuildJoinRequestApplicationStatuses.SUBMITTED;
    "REVIEW_APPLICATION" !== r && ((0, c.isActionedApplicationStatus)(r) && C.clear(), (0, c.isSubmittedApplicationStatus)(r) && R.clear())
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
    let {
      guildId: t,
      request: n
    } = e;
    y[t] = n
  }
})