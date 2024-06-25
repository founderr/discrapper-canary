n(653041);
var s, i = n(392711),
  l = n.n(i),
  a = n(442837),
  r = n(570140),
  o = n(194359),
  c = n(81825),
  u = n(5254),
  d = n(199902),
  E = n(271383),
  h = n(430824),
  _ = n(158776),
  I = n(699516),
  m = n(594174),
  T = n(981631);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function p(e) {
  let t = m.default.getUser(e);
  return {
    user: t,
    usernameLower: null != t ? t.username.toLowerCase() : null
  }
}

function N(e) {
  return {
    status: _.Z.getStatus(e),
    lastOnlineTimestamp: _.Z.getLastOnlineTimestamp(e),
    isMobile: _.Z.isMobileOnline(e),
    activities: _.Z.getActivities(e),
    applicationStream: d.Z.getAnyStreamForUser(e)
  }
}

function S(e) {
  let t = [];
  return l()(E.ZP.memberOf(e)).map(h.Z.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
    null != e && t.push(e)
  }), {
    mutualGuildsLength: t.length,
    mutualGuilds: t.slice(0, 5)
  }
}
class C extends c.Z {
  get comparator() {
    var e, t, n, s, i;
    return [this.type, null !== (i = null !== (s = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== s ? s : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== i ? i : this.usernameLower]
  }
  constructor(e) {
    super(), g(this, "key", void 0), g(this, "type", void 0), g(this, "status", void 0), g(this, "isMobile", void 0), g(this, "activities", void 0), g(this, "applicationStream", void 0), g(this, "user", void 0), g(this, "usernameLower", void 0), g(this, "mutualGuildsLength", void 0), g(this, "mutualGuilds", void 0), g(this, "nickname", void 0), g(this, "lastOnlineTimestamp", void 0), this.key = e.key, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname, this.lastOnlineTimestamp = e.lastOnlineTimestamp
  }
}
class A {
  reset() {
    let e = l().map(I.Z.getRelationships(), (e, t) => new C({
        key: t,
        type: e,
        nickname: I.Z.getNickname(t),
        ...p(t),
        ...N(t),
        ...S(t)
      })),
      t = l().map(u.Z.getSuggestions(), e => new C({
        key: e.key,
        type: 99,
        nickname: e.name,
        ...p(e.key),
        ...N(e.key),
        ...S(e.key)
      }));
    return new A(l().concat(e, t))
  }
  clone() {
    return new A(this._rows)
  }
  update(e) {
    let t = !1;
    for (let n = 0; n < this._rows.length; n++) {
      let s = this._rows[n],
        i = s.merge(e(s.key));
      t = t || i !== s, this._rows[n] = i
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
        case T.pJs.ONLINE:
          return t.type === T.OGo.FRIEND && t.status !== T.Skl.OFFLINE;
        case T.pJs.PENDING:
          return t.type === T.OGo.PENDING_INCOMING || t.type === T.OGo.PENDING_OUTGOING;
        case T.pJs.SUGGESTIONS:
          return 99 === t.type;
        case T.pJs.BLOCKED:
          return t.type === T.OGo.BLOCKED;
        case T.pJs.ALL:
        default:
          return t.type === T.OGo.FRIEND
      }
    }).sortBy(e => e.comparator).value()
  }
  getRelationshipCounts() {
    let e = {
      [T.OGo.FRIEND]: 0,
      [T.OGo.PENDING_INCOMING]: 0,
      [T.OGo.PENDING_OUTGOING]: 0,
      99: 0,
      [T.OGo.BLOCKED]: 0
    };
    return this._rows.forEach(t => {
      null != t.user && null != e[t.type] && e[t.type]++
    }), e
  }
  constructor(e = []) {
    g(this, "_rows", void 0), this._rows = e
  }
}
let f = !0,
  Z = !1,
  L = T.pJs.ONLINE,
  O = new A,
  v = !0,
  R = !1;

function P() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  f && (e || L !== T.pJs.ONLINE && L !== T.pJs.ADD_FRIEND) && !Z && (f = !1, Z = !0, o.Z.fetchRelationships())
}

function x() {
  if (f = !0, v ? Z = !1 : P(), O = O.reset(), R) return;
  let e = O.getRelationshipCounts();
  L = 0 === e[T.OGo.FRIEND] ? 0 !== e[T.OGo.PENDING_INCOMING] ? T.pJs.PENDING : T.pJs.ADD_FRIEND : T.pJs.ONLINE
}

function M() {
  O = v ? new A : O.reset()
}

function D(e) {
  return function() {
    return !v && !!O.update(e) && (O = O.clone(), !0)
  }
}
class b extends(s = a.ZP.Store) {
  initialize() {
    this.waitFor(I.Z, _.Z, m.default, h.Z, E.ZP, d.Z, u.Z), this.syncWith([I.Z], M), this.syncWith([u.Z], M), this.syncWith([m.default], D(p)), this.syncWith([_.Z, d.Z], D(N)), x()
  }
  getState() {
    return {
      fetching: Z,
      section: L,
      pendingCount: I.Z.getPendingCount(),
      rows: O
    }
  }
}
g(b, "displayName", "FriendsStore"), t.ZP = new b(r.Z, {
  CONNECTION_OPEN: function() {
    x()
  },
  FRIENDS_SET_SECTION: function(e) {
    L = e.section, P()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return v = null != t, M(), !v
  },
  LOAD_RELATIONSHIPS_SUCCESS: function() {
    Z = !1
  },
  LOAD_RELATIONSHIPS_FAILURE: function() {
    f = !0, Z = !0
  },
  DRAWER_SELECT_TAB: function(e) {
    let {
      tab: t
    } = e;
    return v = t !== T.cII.FRIENDS, M(), !v
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    L = e.section, R = !0
  }
})