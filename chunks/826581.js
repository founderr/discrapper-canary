"use strict";
s.r(t), s("653041"), s("47120");
var a, n, i, E, l = s("442837"),
  _ = s("759174"),
  r = s("570140"),
  u = s("430824"),
  o = s("594174"),
  T = s("881952"),
  d = s("246364"),
  A = s("937111"),
  I = s("981631");
let L = {};

function c(e) {
  return L[e]
}

function N(e, t) {
  L[e] = t
}

function S(e, t, s) {
  if (t !== s && null != t) {
    var a, n, i, E;
    if (t === d.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = L[e];
      a = e, n = t + 1, L[a] = n
    }
    if (s === d.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = L[e];
      i = e, E = Math.max(0, t - 1), L[i] = E
    }
  }
}
let g = !1,
  D = {
    GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
    GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) => "guild-".concat(e, "-").concat(t)
  };

function C(e) {
  let t = [];
  return t.push(D.GUILD_JOIN_REQUESTS_BY_ID(e.joinRequestId)), t.push(D.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)), t
}
let f = new _.SecondaryIndexMap(C, e => "".concat(e.joinRequestId)),
  O = new _.SecondaryIndexMap(C, e => "".concat(e.joinRequestId)),
  G = new _.SecondaryIndexMap(C, e => "".concat(e.actionedAt));

function M(e) {
  return f.get(e)
}

function U(e) {
  v[e.joinRequestId] = e, f.set(e.joinRequestId, e), (0, T.isSubmittedApplicationStatus)(e.applicationStatus) && (G.delete(e.joinRequestId), O.set(e.joinRequestId, e)), (0, T.isActionedApplicationStatus)(e.applicationStatus) && (O.delete(e.joinRequestId), G.set(e.joinRequestId, e))
}

function R(e) {
  var t, s;
  let {
    guildId: a,
    request: n
  } = e, i = (0, A.joinRequestFromServer)(n), E = o.default.getCurrentUser();
  if (null == E || i.userId === E.id) return !1;
  let l = null === (s = i.joinRequestId, t = f.get(s)) || void 0 === t ? void 0 : t.applicationStatus;
  return S(a, i.applicationStatus, l), U(i), !0
}
let h = {},
  m = {},
  p = {},
  v = {};
class y extends(a = l.default.Store) {
  getRequest(e) {
    return v[e]
  }
  getRequests(e, t) {
    let s = D.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
    return (0, T.isActionedApplicationStatus)(t) ? G.values(s) : (0, T.isSubmittedApplicationStatus)(t) ? O.values(s) : f.values(s)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return L[e]
  }
  isFetching() {
    return g
  }
  getSelectedApplicationTab(e) {
    var t;
    let s = u.default.getGuild(e),
      a = (null == s ? void 0 : s.hasFeature(I.GuildFeatures.CLAN)) ? "REVIEW_APPLICATION" : d.GuildJoinRequestApplicationStatuses.SUBMITTED;
    return null !== (t = h[e]) && void 0 !== t ? t : a
  }
  getSelectedSortOrder(e) {
    var t;
    return null !== (t = m[e]) && void 0 !== t ? t : d.GuildJoinRequestSortOrders.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    var t;
    let s = p[e];
    return null != s ? (t = s.joinRequestId, f.get(t)) : null
  }
}
E = "GuildJoinRequestStoreV2", (i = "displayName") in(n = y) ? Object.defineProperty(n, i, {
  value: E,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = E, t.default = new y(r.default, {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function(e) {
    let {
      joinRequest: t
    } = e;
    U(t)
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
    let {
      status: t,
      requests: s,
      total: a,
      guildId: n
    } = e;
    if (g = !1, t === d.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      var i, E;
      i = n, E = a, L[i] = E
    }
    s.forEach(e => {
      U(e)
    })
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function() {
    g = !0
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function() {
    g = !1
  },
  GUILD_JOIN_REQUESTS_BULK_ACTION: function(e) {
    let {
      guildId: t,
      action: s
    } = e;
    f.values(D.GUILD_JOIN_REQUESTS_BY_STATUS(t, d.GuildJoinRequestApplicationStatuses.SUBMITTED)).forEach(e => {
      U({
        ...e,
        applicationStatus: s
      })
    }), L[t] = 0
  },
  GUILD_JOIN_REQUEST_CREATE: R,
  GUILD_JOIN_REQUEST_UPDATE: R,
  GUILD_JOIN_REQUEST_DELETE: function(e) {
    var t, s;
    let {
      id: a,
      guildId: n
    } = e;
    let i = (t = a, f.get(t));
    if (null != i) {
      ;
      S(n, null, i.applicationStatus), s = a, delete v[s], f.delete(s), O.delete(s), G.delete(s)
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function(e) {
    let {
      guildId: t,
      applicationTab: s
    } = e;
    s !== h[t] && (h[t] = s)
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
    var t;
    let {
      guildId: s,
      sortOrder: a
    } = e;
    if (a === m[s]) return;
    m[s] = a;
    let n = null !== (t = h[s]) && void 0 !== t ? t : d.GuildJoinRequestApplicationStatuses.SUBMITTED;
    "REVIEW_APPLICATION" !== n && ((0, T.isActionedApplicationStatus)(n) && G.clear(), (0, T.isSubmittedApplicationStatus)(n) && O.clear())
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
    let {
      guildId: t,
      request: s
    } = e;
    p[t] = s
  }
})