"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("424973"), s("222007");
var a = s("446674"),
  l = s("407846"),
  n = s("913144"),
  i = s("697218"),
  r = s("591023"),
  o = s("567054"),
  d = s("982527");
let u = {};

function c(e) {
  var t;
  return null !== (t = u[e]) && void 0 !== t ? t : 0
}

function E(e, t) {
  u[e] = t
}

function _(e, t, s) {
  if (t !== s && null != t) {
    var a, l, n, i;
    if (t === o.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = c(e);
      a = e, l = t + 1, u[a] = l
    }
    if (s === o.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      ;
      let t = c(e);
      n = e, i = Math.max(0, t - 1), u[n] = i
    }
  }
}
let I = !1,
  T = {
    GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
    GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) => "guild-".concat(e, "-").concat(t)
  };

function f(e) {
  let t = [];
  return t.push(T.GUILD_JOIN_REQUESTS_BY_ID(e.id)), t.push(T.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)), t
}
let S = new l.default(f, e => "".concat(e.id)),
  m = new l.default(f, e => "".concat(e.id)),
  N = new l.default(f, e => "".concat(e.actionedAt));

function g(e) {
  return S.get(e)
}

function h(e) {
  S.set(e.id, e), (0, r.isSubmittedApplicationStatus)(e.applicationStatus) && (N.delete(e.id), m.set(e.id, e)), (0, r.isActionedApplicationStatus)(e.applicationStatus) && (m.delete(e.id), N.set(e.id, e))
}

function C(e) {
  var t, s;
  let {
    guildId: a,
    request: l
  } = e, n = (0, d.joinRequestFromServer)(l), r = i.default.getCurrentUser();
  if (null == r || n.userId === r.id) return !1;
  let o = null === (s = n.id, t = S.get(s)) || void 0 === t ? void 0 : t.applicationStatus;
  return _(a, n.applicationStatus, o), h(n), !0
}
let R = {},
  x = {},
  L = {};
class O extends a.default.Store {
  getRequests(e, t) {
    let s = T.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
    return (0, r.isActionedApplicationStatus)(t) ? N.values(s) : (0, r.isSubmittedApplicationStatus)(t) ? m.values(s) : S.values(s)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return c(e)
  }
  isFetching() {
    return I
  }
  getSelectedApplicationStatus(e) {
    var t;
    return null !== (t = R[e]) && void 0 !== t ? t : o.GuildJoinRequestApplicationStatuses.SUBMITTED
  }
  getSelectedSortOrder(e) {
    var t;
    return null !== (t = x[e]) && void 0 !== t ? t : o.GuildJoinRequestSortOrders.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    var t;
    let s = L[e];
    return null != s ? (t = s.id, S.get(t)) : null
  }
}
O.displayName = "GuildJoinRequestStoreV2";
var p = new O(n.default, {
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
    let {
      status: t,
      requests: s,
      total: a,
      guildId: l
    } = e;
    if (I = !1, t === o.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      var n, i;
      n = l, i = a, u[n] = i
    }
    s.forEach(e => {
      h(e)
    })
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function() {
    I = !0
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function() {
    I = !1
  },
  GUILD_JOIN_REQUESTS_BULK_ACTION: function(e) {
    let {
      guildId: t,
      action: s
    } = e, a = S.values(T.GUILD_JOIN_REQUESTS_BY_STATUS(t, o.GuildJoinRequestApplicationStatuses.SUBMITTED));
    a.forEach(e => {
      h({
        ...e,
        applicationStatus: s
      })
    }), u[t] = 0
  },
  GUILD_JOIN_REQUEST_CREATE: C,
  GUILD_JOIN_REQUEST_UPDATE: C,
  GUILD_JOIN_REQUEST_DELETE: function(e) {
    var t, s;
    let {
      id: a,
      guildId: l
    } = e;
    let n = (t = a, S.get(t));
    if (null != n) {
      ;
      _(l, null, n.applicationStatus), s = a, S.delete(s), m.delete(s), N.delete(s)
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_STATUS: function(e) {
    let {
      guildId: t,
      applicationStatus: s
    } = e;
    s !== R[t] && (R[t] = s)
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
    var t;
    let {
      guildId: s,
      sortOrder: a
    } = e;
    if (a === x[s]) return;
    x[s] = a;
    let l = null !== (t = R[s]) && void 0 !== t ? t : o.GuildJoinRequestApplicationStatuses.SUBMITTED;
    (0, r.isActionedApplicationStatus)(l) && N.clear(), (0, r.isSubmittedApplicationStatus)(l) && m.clear()
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
    let {
      guildId: t,
      request: s
    } = e;
    L[t] = s
  }
})