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
  h = n("158776"),
  _ = n("699516"),
  C = n("594174"),
  S = n("981631");

function m(e, t, n) {
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
    var e, t, n, a, s;
    return [this.type, null !== (s = null !== (a = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== a ? a : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : this.usernameLower]
  }
  constructor(e) {
    super(), m(this, "key", void 0), m(this, "type", void 0), m(this, "status", void 0), m(this, "isMobile", void 0), m(this, "activities", void 0), m(this, "applicationStream", void 0), m(this, "user", void 0), m(this, "usernameLower", void 0), m(this, "mutualGuildsLength", void 0), m(this, "mutualGuilds", void 0), m(this, "nickname", void 0), this.key = e.key, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname
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
        case S.FriendsSections.ONLINE:
          return t.type === S.RelationshipTypes.FRIEND && t.status !== S.StatusTypes.OFFLINE;
        case S.FriendsSections.PENDING:
          return t.type === S.RelationshipTypes.PENDING_INCOMING || t.type === S.RelationshipTypes.PENDING_OUTGOING;
        case S.FriendsSections.SUGGESTIONS:
          return 99 === t.type;
        case S.FriendsSections.BLOCKED:
          return t.type === S.RelationshipTypes.BLOCKED;
        case S.FriendsSections.ALL:
        default:
          return t.type === S.RelationshipTypes.FRIEND
      }
    }).sortBy(e => e.comparator).value()
  }
  getRelationshipCounts() {
    let e = {
      [S.RelationshipTypes.FRIEND]: 0,
      [S.RelationshipTypes.PENDING_INCOMING]: 0,
      [S.RelationshipTypes.PENDING_OUTGOING]: 0,
      99: 0,
      [S.RelationshipTypes.BLOCKED]: 0
    };
    return this._rows.forEach(t => {
      null != t.user && null != e[t.type] && e[t.type]++
    }), e
  }
  constructor(e = []) {
    m(this, "_rows", void 0), this._rows = e
  }
}
let N = !0,
  v = !1,
  R = S.FriendsSections.ONLINE,
  O = new A,
  L = !0,
  P = !1;

function M() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  N && (e || R !== S.FriendsSections.ONLINE && R !== S.FriendsSections.ADD_FRIEND) && !v && (N = !1, v = !0, o.default.fetchRelationships())
}

function y() {
  if (N = !0, L ? v = !1 : M(), O = O.reset(), P) return;
  let e = O.getRelationshipCounts();
  R = 0 === e[S.RelationshipTypes.FRIEND] ? 0 !== e[S.RelationshipTypes.PENDING_INCOMING] ? S.FriendsSections.PENDING : S.FriendsSections.ADD_FRIEND : S.FriendsSections.ONLINE
}

function D() {
  O = L ? new A : O.reset()
}

function x(e) {
  return function() {
    return !L && !!O.update(e) && (O = O.clone(), !0)
  }
}
class b extends(a = i.default.Store) {
  initialize() {
    this.waitFor(_.default, h.default, C.default, E.default, f.default, c.default, d.default), this.syncWith([_.default], D), this.syncWith([d.default], D), this.syncWith([C.default], x(I)), this.syncWith([h.default, c.default], x(p)), y()
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
m(b, "displayName", "FriendsStore"), t.default = new b(r.default, {
  CONNECTION_OPEN: function() {
    y()
  },
  FRIENDS_SET_SECTION: function(e) {
    R = e.section, M()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return L = null != t, D(), !L
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
    return L = t !== S.DrawerTabTypes.FRIENDS, D(), !L
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    R = e.section, P = !0
  }
})