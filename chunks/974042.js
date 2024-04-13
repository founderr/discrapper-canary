"use strict";
a.r(t), a("653041");
var n, s = a("392711"),
  l = a.n(s),
  i = a("442837"),
  r = a("570140"),
  o = a("194359"),
  u = a("81825"),
  d = a("5254"),
  c = a("199902"),
  f = a("271383"),
  E = a("430824"),
  h = a("158776"),
  _ = a("699516"),
  C = a("594174"),
  m = a("981631");

function S(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}

function I(e) {
  let t = C.default.getUser(e);
  return {
    user: t,
    usernameLower: null != t ? t.username.toLowerCase() : null
  }
}

function p(e) {
  return {
    status: h.default.getStatus(e),
    isMobile: h.default.isMobileOnline(e),
    activities: h.default.getActivities(e),
    applicationStream: c.default.getAnyStreamForUser(e)
  }
}

function T(e) {
  let t = [];
  return l()(f.default.memberOf(e)).map(E.default.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
    null != e && t.push(e)
  }), {
    mutualGuildsLength: t.length,
    mutualGuilds: t.slice(0, 5)
  }
}
class g extends u.default {
  get comparator() {
    var e, t, a, n, s;
    return [this.type, null !== (s = null !== (n = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : null === (a = this.user) || void 0 === a ? void 0 : null === (t = a.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : this.usernameLower]
  }
  constructor(e) {
    super(), S(this, "key", void 0), S(this, "type", void 0), S(this, "status", void 0), S(this, "isMobile", void 0), S(this, "activities", void 0), S(this, "applicationStream", void 0), S(this, "user", void 0), S(this, "usernameLower", void 0), S(this, "mutualGuildsLength", void 0), S(this, "mutualGuilds", void 0), S(this, "nickname", void 0), this.key = e.key, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname
  }
}
class A {
  reset() {
    let e = l().map(_.default.getRelationships(), (e, t) => new g({
        key: t,
        type: e,
        nickname: _.default.getNickname(t),
        ...I(t),
        ...p(t),
        ...T(t)
      })),
      t = l().map(d.default.getSuggestions(), e => new g({
        key: e.key,
        type: 99,
        nickname: e.name,
        ...I(e.key),
        ...p(e.key),
        ...T(e.key)
      }));
    return new A(l().concat(e, t))
  }
  clone() {
    return new A(this._rows)
  }
  update(e) {
    let t = !1;
    for (let a = 0; a < this._rows.length; a++) {
      let n = this._rows[a],
        s = n.merge(e(n.key));
      t = t || s !== n, this._rows[a] = s
    }
    return t
  }
  filter(e, t) {
    return l()(this._rows).filter(e => {
      if (null == e.user) return !1;
      if (null != t && "" !== t) {
        let a = t.toLowerCase();
        return [e.usernameLower, e.nickname, e.user.globalName].map(e => null == e ? void 0 : e.toLowerCase()).some(e => null == e ? void 0 : e.includes(a))
      }
      return !0
    }).filter(t => {
      switch (e) {
        case m.FriendsSections.ONLINE:
          return t.type === m.RelationshipTypes.FRIEND && t.status !== m.StatusTypes.OFFLINE;
        case m.FriendsSections.PENDING:
          return t.type === m.RelationshipTypes.PENDING_INCOMING || t.type === m.RelationshipTypes.PENDING_OUTGOING;
        case m.FriendsSections.SUGGESTIONS:
          return 99 === t.type;
        case m.FriendsSections.BLOCKED:
          return t.type === m.RelationshipTypes.BLOCKED;
        case m.FriendsSections.ALL:
        default:
          return t.type === m.RelationshipTypes.FRIEND
      }
    }).sortBy(e => e.comparator).value()
  }
  getRelationshipCounts() {
    let e = {
      [m.RelationshipTypes.FRIEND]: 0,
      [m.RelationshipTypes.PENDING_INCOMING]: 0,
      [m.RelationshipTypes.PENDING_OUTGOING]: 0,
      99: 0,
      [m.RelationshipTypes.BLOCKED]: 0
    };
    return this._rows.forEach(t => {
      null != t.user && null != e[t.type] && e[t.type]++
    }), e
  }
  constructor(e = []) {
    S(this, "_rows", void 0), this._rows = e
  }
}
let N = !0,
  v = !1,
  R = m.FriendsSections.ONLINE,
  O = new A,
  L = !0,
  M = !1;

function P() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  N && (e || R !== m.FriendsSections.ONLINE && R !== m.FriendsSections.ADD_FRIEND) && !v && (N = !1, v = !0, o.default.fetchRelationships())
}

function x() {
  if (N = !0, L ? v = !1 : P(), O = O.reset(), M) return;
  let e = O.getRelationshipCounts();
  R = 0 === e[m.RelationshipTypes.FRIEND] ? 0 !== e[m.RelationshipTypes.PENDING_INCOMING] ? m.FriendsSections.PENDING : m.FriendsSections.ADD_FRIEND : m.FriendsSections.ONLINE
}

function y() {
  O = L ? new A : O.reset()
}

function D(e) {
  return function() {
    return !L && !!O.update(e) && (O = O.clone(), !0)
  }
}
class b extends(n = i.default.Store) {
  initialize() {
    this.waitFor(_.default, h.default, C.default, E.default, f.default, c.default, d.default), this.syncWith([_.default], y), this.syncWith([d.default], y), this.syncWith([C.default], D(I)), this.syncWith([h.default, c.default], D(p)), x()
  }
  getState() {
    return {
      fetching: v,
      section: R,
      pendingCount: _.default.getPendingCount(),
      rows: O
    }
  }
}
S(b, "displayName", "FriendsStore"), t.default = new b(r.default, {
  CONNECTION_OPEN: function() {
    x()
  },
  FRIENDS_SET_SECTION: function(e) {
    R = e.section, P()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return L = null != t, y(), !L
  },
  LOAD_RELATIONSHIPS_SUCCESS: function() {
    v = !1
  },
  LOAD_RELATIONSHIPS_FAILURE: function() {
    N = !0, v = !0
  },
  DRAWER_SELECT_TAB: function(e) {
    let {
      tab: t
    } = e;
    return L = t !== m.DrawerTabTypes.FRIENDS, y(), !L
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    R = e.section, M = !0
  }
})