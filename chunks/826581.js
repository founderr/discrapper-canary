"use strict";
n(47120), n(653041);
var i, r, s, o, a = n(913527),
  l = n.n(a),
  u = n(442837),
  _ = n(759174),
  c = n(570140),
  d = n(430824),
  E = n(594174),
  I = n(70956),
  T = n(881952),
  h = n(246364),
  f = n(937111),
  S = n(981631);
let A = new Map,
  N = {};

function m(e) {
  return N[e]
}

function O(e, t) {
  N[e] = t, A.set(e, l()())
}

function R(e, t, n) {
  if (t !== n && null != t) {
    if (t === h.wB.SUBMITTED) {
      let t = N[e];
      O(e, t + 1)
    }
    if (n === h.wB.SUBMITTED) {
      let t = N[e];
      O(e, Math.max(0, t - 1))
    }
  }
}
let p = !1,
  g = e => "guild-join-request=".concat(e),
  C = (e, t) => "guild-".concat(e, "-").concat(t);

function v(e) {
  let t = [];
  return t.push(g(e.joinRequestId)), t.push(C(e.guildId, e.applicationStatus)), t
}
let L = new _.h(v, e => "".concat(e.joinRequestId)),
  D = new _.h(v, e => "".concat(e.joinRequestId)),
  M = new _.h(v, e => "".concat(e.actionedAt));

function P(e) {
  return L.get(e)
}

function y(e) {
  B[e.joinRequestId] = e, L.set(e.joinRequestId, e), (0, T.Nd)(e.applicationStatus) && (M.delete(e.joinRequestId), D.set(e.joinRequestId, e)), (0, T.bk)(e.applicationStatus) && (D.delete(e.joinRequestId), M.set(e.joinRequestId, e))
}

function U(e) {
  var t, n;
  let {
    guildId: i,
    request: r
  } = e, s = (0, f.j)(r), o = E.default.getCurrentUser();
  if (null == o || s.userId === o.id) return !1;
  let a = null === (n = s.joinRequestId, t = L.get(n)) || void 0 === t ? void 0 : t.applicationStatus;
  return R(i, s.applicationStatus, a), y(s), !0
}
let b = {},
  G = {},
  w = {},
  B = {},
  x = 10 * I.Z.Seconds.MINUTE;
class k extends(i = u.ZP.Store) {
  getRequest(e) {
    return B[e]
  }
  getRequests(e, t) {
    let n = C(e, t);
    return (0, T.bk)(t) ? M.values(n) : (0, T.Nd)(t) ? D.values(n) : L.values(n)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return N[e]
  }
  isFetching() {
    return p
  }
  hasFetched(e) {
    if (!A.has(e)) return !1;
    let t = A.get(e);
    return null != t && l()().diff(t, "seconds") < x
  }
  getSelectedApplicationTab(e) {
    var t;
    let n = d.Z.getGuild(e),
      i = (null == n ? void 0 : n.hasFeature(S.oNc.CLAN)) ? "REVIEW_APPLICATION" : h.wB.SUBMITTED;
    return null !== (t = b[e]) && void 0 !== t ? t : i
  }
  getSelectedSortOrder(e) {
    var t;
    return null !== (t = G[e]) && void 0 !== t ? t : h.Nw.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    var t;
    let n = w[e];
    return null != n ? (t = n.joinRequestId, L.get(t)) : null
  }
}
o = "GuildJoinRequestStoreV2", (s = "displayName") in(r = k) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new k(c.Z, {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function(e) {
    let {
      joinRequest: t
    } = e;
    y(t)
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
    let {
      status: t,
      requests: n,
      total: i,
      guildId: r
    } = e;
    p = !1, t === h.wB.SUBMITTED && O(r, i), n.forEach(e => {
      y(e)
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
      action: n
    } = e;
    L.values(C(t, h.wB.SUBMITTED)).forEach(e => {
      y({
        ...e,
        applicationStatus: n
      })
    }), O(t, 0)
  },
  GUILD_JOIN_REQUEST_CREATE: U,
  GUILD_JOIN_REQUEST_UPDATE: U,
  GUILD_JOIN_REQUEST_DELETE: function(e) {
    var t, n;
    let {
      id: i,
      guildId: r
    } = e;
    let s = (t = i, L.get(t));
    if (null != s) {
      ;
      R(r, null, s.applicationStatus), n = i, delete B[n], L.delete(n), D.delete(n), M.delete(n)
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function(e) {
    let {
      guildId: t,
      applicationTab: n
    } = e;
    n !== b[t] && (b[t] = n)
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
    var t;
    let {
      guildId: n,
      sortOrder: i
    } = e;
    if (i === G[n]) return;
    G[n] = i;
    let r = null !== (t = b[n]) && void 0 !== t ? t : h.wB.SUBMITTED;
    "REVIEW_APPLICATION" !== r && ((0, T.bk)(r) && M.clear(), (0, T.Nd)(r) && D.clear())
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
    let {
      guildId: t,
      request: n
    } = e;
    w[t] = n
  }
})