"use strict";
i.r(t), i("653041"), i("47120");
var a, l, n, s, r = i("442837"),
  o = i("759174"),
  d = i("570140"),
  c = i("430824"),
  u = i("594174"),
  f = i("881952"),
  E = i("246364"),
  I = i("937111"),
  T = i("981631");
let m = {};

function _(e) {
  var t;
  return null !== (t = m[e]) && void 0 !== t ? t : 0
}

function x(e, t) {
  m[e] = t
}

function h(e, t, i) {
  if (t !== i && null != t) {
    var a, l, n, s;
    if (t === E.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = _(e);
      a = e, l = t + 1, m[a] = l
    }
    if (i === E.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = _(e);
      n = e, s = Math.max(0, t - 1), m[n] = s
    }
  }
}
let p = !1,
  M = {
    GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
    GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) => "guild-".concat(e, "-").concat(t)
  };

function R(e) {
  let t = [];
  return t.push(M.GUILD_JOIN_REQUESTS_BY_ID(e.id)), t.push(M.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)), t
}
let F = new o.SecondaryIndexMap(R, e => "".concat(e.id)),
  v = new o.SecondaryIndexMap(R, e => "".concat(e.id)),
  N = new o.SecondaryIndexMap(R, e => "".concat(e.actionedAt));

function S(e) {
  return F.get(e)
}

function g(e) {
  F.set(e.id, e), (0, f.isSubmittedApplicationStatus)(e.applicationStatus) && (N.delete(e.id), v.set(e.id, e)), (0, f.isActionedApplicationStatus)(e.applicationStatus) && (v.delete(e.id), N.set(e.id, e))
}

function C(e) {
  var t, i;
  let {
    guildId: a,
    request: l
  } = e, n = (0, I.joinRequestFromServer)(l), s = u.default.getCurrentUser();
  if (null == s || n.userId === s.id) return !1;
  let r = null === (i = n.id, t = F.get(i)) || void 0 === t ? void 0 : t.applicationStatus;
  return h(a, n.applicationStatus, r), g(n), !0
}
let A = {},
  L = {},
  j = {};
class y extends(a = r.default.Store) {
  getRequests(e, t) {
    let i = M.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
    return (0, f.isActionedApplicationStatus)(t) ? N.values(i) : (0, f.isSubmittedApplicationStatus)(t) ? v.values(i) : F.values(i)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return _(e)
  }
  isFetching() {
    return p
  }
  getSelectedApplicationTab(e) {
    var t;
    let i = c.default.getGuild(e),
      a = (null == i ? void 0 : i.hasFeature(T.GuildFeatures.CLAN)) ? "REVIEW_APPLICATION" : E.GuildJoinRequestApplicationStatuses.SUBMITTED;
    return null !== (t = A[e]) && void 0 !== t ? t : a
  }
  getSelectedSortOrder(e) {
    var t;
    return null !== (t = L[e]) && void 0 !== t ? t : E.GuildJoinRequestSortOrders.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    var t;
    let i = j[e];
    return null != i ? (t = i.id, F.get(t)) : null
  }
}
s = "GuildJoinRequestStoreV2", (n = "displayName") in(l = y) ? Object.defineProperty(l, n, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[n] = s, t.default = new y(d.default, {
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
    let {
      status: t,
      requests: i,
      total: a,
      guildId: l
    } = e;
    if (p = !1, t === E.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      var n, s;
      n = l, s = a, m[n] = s
    }
    i.forEach(e => {
      g(e)
    })
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function() {
    p = !0
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function() {
    p = !1
  },
  GUILD_JOIN_REQUESTS_BULK_ACTION: function(e) {
    let {
      guildId: t,
      action: i
    } = e;
    F.values(M.GUILD_JOIN_REQUESTS_BY_STATUS(t, E.GuildJoinRequestApplicationStatuses.SUBMITTED)).forEach(e => {
      g({
        ...e,
        applicationStatus: i
      })
    }), m[t] = 0
  },
  GUILD_JOIN_REQUEST_CREATE: C,
  GUILD_JOIN_REQUEST_UPDATE: C,
  GUILD_JOIN_REQUEST_DELETE: function(e) {
    var t, i;
    let {
      id: a,
      guildId: l
    } = e;
    let n = (t = a, F.get(t));
    if (null != n) {
      ;
      h(l, null, n.applicationStatus), i = a, F.delete(i), v.delete(i), N.delete(i)
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function(e) {
    let {
      guildId: t,
      applicationTab: i
    } = e;
    i !== A[t] && (A[t] = i)
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
    var t;
    let {
      guildId: i,
      sortOrder: a
    } = e;
    if (a === L[i]) return;
    L[i] = a;
    let l = null !== (t = A[i]) && void 0 !== t ? t : E.GuildJoinRequestApplicationStatuses.SUBMITTED;
    "REVIEW_APPLICATION" !== l && ((0, f.isActionedApplicationStatus)(l) && N.clear(), (0, f.isSubmittedApplicationStatus)(l) && v.clear())
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
    let {
      guildId: t,
      request: i
    } = e;
    j[t] = i
  }
})