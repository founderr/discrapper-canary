"use strict";
n.r(t), n("653041");
var a, s = n("392711"),
  l = n.n(s),
  i = n("442837"),
  r = n("570140"),
  o = n("194359"),
  u = n("81825"),
  d = n("5254"),
  c = n("199902"),
  f = n("271383"),
  E = n("430824"),
  _ = n("158776"),
  h = n("699516"),
  C = n("594174"),
  m = n("981631");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function I(e) {
  let t = C.default.getUser(e);
  return {
    user: t,
    usernameLower: null != t ? t.username.toLowerCase() : null
  }
}

function T(e) {
  return {
    status: _.default.getStatus(e),
    isMobile: _.default.isMobileOnline(e),
    activities: _.default.getActivities(e),
    applicationStream: c.default.getAnyStreamForUser(e)
  }
}

function p(e) {
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
    var e, t, n, a, s;
    return [this.type, null !== (s = null !== (a = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== a ? a : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : this.usernameLower]
  }
  constructor(e) {
    super(), S(this, "key", void 0), S(this, "type", void 0), S(this, "status", void 0), S(this, "isMobile", void 0), S(this, "activities", void 0), S(this, "applicationStream", void 0), S(this, "user", void 0), S(this, "usernameLower", void 0), S(this, "mutualGuildsLength", void 0), S(this, "mutualGuilds", void 0), S(this, "nickname", void 0), this.key = e.key, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname
  }
}
class N {
  reset() {
    let e = l().map(h.default.getRelationships(), (e, t) => new g({
        key: t,
        type: e,
        nickname: h.default.getNickname(t),
        ...I(t),
        ...T(t),
        ...p(t)
      })),
      t = l().map(d.default.getSuggestions(), e => new g({
        key: e.key,
        type: 99,
        nickname: e.name,
        ...I(e.key),
        ...T(e.key),
        ...p(e.key)
      }));
    return new N(l().concat(e, t))
  }
  clone() {
    return new N(this._rows)
  }
  update(e) {
    let t = !1;
    for (let n = 0; n < this._rows.length; n++) {
      let a = this._rows[n],
        s = a.merge(e(a.key));
      t = t || s !== a, this._rows[n] = s
    }
    return t
  }
  filter(e, t) {
    return l()(this._rows).filter(e => {
      if (null == e.user) return !1;
      if (null != t && "" !== t) {
        let n = t.toLowerCase();
        return [e.usernameLower, e.nickname, e.user.globalName].map(e => null == e ? void 0 : e.toLowerCase()).some(e => null == e ? void 0 : e.includes(n))
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
let A = !0,
  R = !1,
  O = m.FriendsSections.ONLINE,
  v = new N,
  L = !0,
  P = !1;

function M() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  A && (e || O !== m.FriendsSections.ONLINE && O !== m.FriendsSections.ADD_FRIEND) && !R && (A = !1, R = !0, o.default.fetchRelationships())
}

function y() {
  if (A = !0, L ? R = !1 : M(), v = v.reset(), P) return;
  let e = v.getRelationshipCounts();
  O = 0 === e[m.RelationshipTypes.FRIEND] ? 0 !== e[m.RelationshipTypes.PENDING_INCOMING] ? m.FriendsSections.PENDING : m.FriendsSections.ADD_FRIEND : m.FriendsSections.ONLINE
}

function D() {
  v = L ? new N : v.reset()
}

function x(e) {
  return function() {
    return !L && !!v.update(e) && (v = v.clone(), !0)
  }
}
class b extends(a = i.default.Store) {
  initialize() {
    this.waitFor(h.default, _.default, C.default, E.default, f.default, c.default, d.default), this.syncWith([h.default], D), this.syncWith([d.default], D), this.syncWith([C.default], x(I)), this.syncWith([_.default, c.default], x(T)), y()
  }
  getState() {
    return {
      fetching: R,
      section: O,
      pendingCount: h.default.getPendingCount(),
      rows: v
    }
  }
}
S(b, "displayName", "FriendsStore"), t.default = new b(r.default, {
  CONNECTION_OPEN: function() {
    y()
  },
  FRIENDS_SET_SECTION: function(e) {
    O = e.section, M()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return L = null != t, D(), !L
  },
  LOAD_RELATIONSHIPS_SUCCESS: function() {
    R = !1
  },
  LOAD_RELATIONSHIPS_FAILURE: function() {
    A = !0, R = !0
  },
  DRAWER_SELECT_TAB: function(e) {
    let {
      tab: t
    } = e;
    return L = t !== m.DrawerTabTypes.FRIENDS, D(), !L
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    O = e.section, P = !0
  }
})