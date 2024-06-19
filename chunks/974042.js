n(653041);
var i, s = n(392711),
  l = n.n(s),
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
  g = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function T(e) {
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
    var e, t, n, i, s;
    return [this.type, null !== (s = null !== (i = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== i ? i : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : this.usernameLower]
  }
  constructor(e) {
    super(), p(this, "key", void 0), p(this, "type", void 0), p(this, "status", void 0), p(this, "isMobile", void 0), p(this, "activities", void 0), p(this, "applicationStream", void 0), p(this, "user", void 0), p(this, "usernameLower", void 0), p(this, "mutualGuildsLength", void 0), p(this, "mutualGuilds", void 0), p(this, "nickname", void 0), p(this, "lastOnlineTimestamp", void 0), this.key = e.key, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname, this.lastOnlineTimestamp = e.lastOnlineTimestamp
  }
}
class A {
  reset() {
    let e = l().map(I.Z.getRelationships(), (e, t) => new C({
        key: t,
        type: e,
        nickname: I.Z.getNickname(t),
        ...T(t),
        ...N(t),
        ...S(t)
      })),
      t = l().map(u.Z.getSuggestions(), e => new C({
        key: e.key,
        type: 99,
        nickname: e.name,
        ...T(e.key),
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
      let i = this._rows[n],
        s = i.merge(e(i.key));
      t = t || s !== i, this._rows[n] = s
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
        case g.pJs.ONLINE:
          return t.type === g.OGo.FRIEND && t.status !== g.Skl.OFFLINE;
        case g.pJs.PENDING:
          return t.type === g.OGo.PENDING_INCOMING || t.type === g.OGo.PENDING_OUTGOING;
        case g.pJs.SUGGESTIONS:
          return 99 === t.type;
        case g.pJs.BLOCKED:
          return t.type === g.OGo.BLOCKED;
        case g.pJs.ALL:
        default:
          return t.type === g.OGo.FRIEND
      }
    }).sortBy(e => e.comparator).value()
  }
  getRelationshipCounts() {
    let e = {
      [g.OGo.FRIEND]: 0,
      [g.OGo.PENDING_INCOMING]: 0,
      [g.OGo.PENDING_OUTGOING]: 0,
      99: 0,
      [g.OGo.BLOCKED]: 0
    };
    return this._rows.forEach(t => {
      null != t.user && null != e[t.type] && e[t.type]++
    }), e
  }
  constructor(e = []) {
    p(this, "_rows", void 0), this._rows = e
  }
}
let f = !0,
  Z = !1,
  v = g.pJs.ONLINE,
  L = new A,
  O = !0,
  R = !1;

function x() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  f && (e || v !== g.pJs.ONLINE && v !== g.pJs.ADD_FRIEND) && !Z && (f = !1, Z = !0, o.Z.fetchRelationships())
}

function M() {
  if (f = !0, O ? Z = !1 : x(), L = L.reset(), R) return;
  let e = L.getRelationshipCounts();
  v = 0 === e[g.OGo.FRIEND] ? 0 !== e[g.OGo.PENDING_INCOMING] ? g.pJs.PENDING : g.pJs.ADD_FRIEND : g.pJs.ONLINE
}

function P() {
  L = O ? new A : L.reset()
}

function D(e) {
  return function() {
    return !O && !!L.update(e) && (L = L.clone(), !0)
  }
}
class b extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(I.Z, _.Z, m.default, h.Z, E.ZP, d.Z, u.Z), this.syncWith([I.Z], P), this.syncWith([u.Z], P), this.syncWith([m.default], D(T)), this.syncWith([_.Z, d.Z], D(N)), M()
  }
  getState() {
    return {
      fetching: Z,
      section: v,
      pendingCount: I.Z.getPendingCount(),
      rows: L
    }
  }
}
p(b, "displayName", "FriendsStore"), t.ZP = new b(r.Z, {
  CONNECTION_OPEN: function() {
    M()
  },
  FRIENDS_SET_SECTION: function(e) {
    v = e.section, x()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return O = null != t, P(), !O
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
    return O = t !== g.cII.FRIENDS, P(), !O
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    v = e.section, R = !0
  }
})