"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  c = n(23750),
  d = n(709054),
  E = n(594174),
  I = n(981631);
let T = {},
  h = {},
  S = {},
  f = 0,
  N = 0,
  A = 0,
  m = 0;

function O() {
  m = Object.values(T).length;
  let {
    [I.OGo.PENDING_INCOMING]: e = 0, [I.OGo.PENDING_OUTGOING]: t = 0, [I.OGo.FRIEND]: n = 0
  } = l().countBy(Object.values(T), e => e);
  f = e, N = t, A = n
}
class R extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(E.default)
  }
  isFriend(e) {
    return null != e && T[e] === I.OGo.FRIEND
  }
  isBlocked(e) {
    return null != e && T[e] === I.OGo.BLOCKED
  }
  isBlockedForMessage(e) {
    var t, n, i, r;
    if (null != e.author && T[e.author.id] === I.OGo.BLOCKED) return !0;
    if (e instanceof c.ZP) {
      if (this.isBlocked(null === (r = e.interactionMetadata) || void 0 === r ? void 0 : null === (i = r.user) || void 0 === i ? void 0 : i.id)) return !0
    } else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
    return !1
  }
  getPendingCount() {
    return f
  }
  getOutgoingCount() {
    return N
  }
  getFriendCount() {
    return A
  }
  getRelationshipCount() {
    return m
  }
  getRelationships() {
    return T
  }
  getRelationshipType(e) {
    let t = T[e];
    return null != t ? t : I.OGo.NONE
  }
  getNickname(e) {
    return h[e]
  }
  getSince(e) {
    return S[e]
  }
  getSinces() {
    return S
  }
  getFriendIDs() {
    return d.default.keys(T).filter(e => T[e] === I.OGo.FRIEND)
  }
}
o = "RelationshipStore", (s = "displayName") in(r = R) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new R(_.Z, {
  CONNECTION_OPEN: function(e) {
    T = {}, h = {}, S = {}, e.relationships.forEach(e => {
      T[e.id] = e.type, null != e.nickname && (h[e.id] = e.nickname), null != e.since && (S[e.id] = e.since)
    }), O()
  },
  OVERLAY_INITIALIZE: function(e) {
    T = {
      ...e.relationships
    }, O()
  },
  RELATIONSHIP_ADD: function(e) {
    let t = T[e.relationship.id];
    T = {
      ...T,
      [e.relationship.id]: e.relationship.type
    }, null != e.relationship.nickname && (h = {
      ...h,
      [e.relationship.id]: e.relationship.nickname
    }), null != e.relationship.since && (S = {
      ...S,
      [e.relationship.id]: e.relationship.since
    }), O(), e.relationship.type === I.OGo.FRIEND && t === I.OGo.PENDING_OUTGOING && _.Z.dispatch({
      type: "FRIEND_REQUEST_ACCEPTED",
      user: e.relationship.user
    })
  },
  RELATIONSHIP_REMOVE: function(e) {
    T = {
      ...T
    }, delete T[e.relationship.id], null != h[e.relationship.id] && (h = {
      ...h
    }, delete h[e.relationship.id]), null != S[e.relationship.id] && (S = {
      ...S
    }, delete S[e.relationship.id]), O()
  },
  RELATIONSHIP_UPDATE: function(e) {
    null == e.relationship.since ? delete S[e.relationship.id] : S[e.relationship.id] = e.relationship.since, null == e.relationship.nickname ? delete h[e.relationship.id] : h[e.relationship.id] = e.relationship.nickname
  },
  RELATIONSHIP_PENDING_INCOMING_REMOVED: function(e) {
    T = {
      ...T
    }, d.default.keys(T).forEach(e => {
      T[e] === I.OGo.PENDING_INCOMING && delete T[e]
    }), O()
  }
})