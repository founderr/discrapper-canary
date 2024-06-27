"use strict";
n(653041), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(411104), n(312677), n(390547);
var i, r, s = n(392711),
  o = n.n(s),
  a = n(772848),
  l = n(147913),
  u = n(131704),
  _ = n(592125),
  c = n(271383),
  d = n(699516),
  E = n(594174),
  I = n(823379),
  T = n(709054),
  h = n(51144);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function S(e) {
  if (null == e || d.Z.isBlocked(e.id)) return null;
  let t = {
    id: e.id,
    username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username
  };
  return null != h.ZP.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), d.Z.isFriend(e.id) && (t.isFriend = !0, t.friendNickname = d.Z.getNickname(e.id)), t
}

function A(e, t, n) {
  null != e && (e[t] = null != n && "" !== n ? n : null)
}

function N(e) {
  let t = [];
  if (null == e || !(0, u.hv)(e.type)) return t;
  let {
    recipients: n = []
  } = e;
  return n.forEach(n => {
    let i = S(E.default.getUser(n));
    null != e && A(i, e.id), t.push(i)
  }), t
}

function m(e, t) {
  let n = [];
  return e.forEach(e => {
    let i = S(e.user);
    null != i && (A(i, t, e.nick), n.push(i))
  }), n
}(r = i || (i = {})).UPDATE_USERS = "UPDATE_USERS", r.USER_RESULTS = "USER_RESULTS", r.QUERY_SET = "QUERY_SET", r.QUERY_CLEAR = "QUERY_CLEAR";
class O {
  setLimit(e) {
    this._limit = e, null != this._nextQuery && (this._nextQuery.limit = e)
  }
  subscribe() {
    null != this._worker && !this._subscribed && (this._worker.addEventListener("message", this.handleMessages, !1), this._subscribed = !0, this._setNextQuery())
  }
  unsubscribe() {
    null != this._worker && this._subscribed && (this._worker.removeEventListener("message", this.handleMessages, !1), this._subscribed = !1)
  }
  destroy() {
    this.clearQuery(), this.unsubscribe()
  }
  clearQuery() {
    this._currentQuery = !1, this._nextQuery = null, null != this._worker && this._subscribed && this._worker.postMessage({
      uuid: this._uuid,
      type: "QUERY_CLEAR"
    })
  }
  setQuery(e, t, n, i) {
    if (null != e) this._nextQuery = {
      query: e,
      filters: t,
      blacklist: n,
      boosters: null != i ? i : {},
      limit: this._limit
    }, this._setNextQuery()
  }
  _setNextQuery() {
    if ((null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery) null != this._worker && this._subscribed ? (this._currentQuery = this._nextQuery, this._nextQuery = null, this._worker.postMessage({
      uuid: this._uuid,
      type: "QUERY_SET",
      payload: this._currentQuery
    })) : !this._subscribed && this.subscribe()
  }
  constructor(e, t, n = 10) {
    f(this, "_worker", void 0), f(this, "_uuid", void 0), f(this, "_callback", void 0), f(this, "_limit", void 0), f(this, "_currentQuery", void 0), f(this, "_nextQuery", void 0), f(this, "_subscribed", void 0), f(this, "handleMessages", e => {
      let t = e.data;
      if (null != t && "USER_RESULTS" === t.type && t.uuid === this._uuid) !1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery()
    }), this._worker = e, this._uuid = (0, a.Z)(), this._callback = t, this._limit = n, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe()
  }
}
class R extends l.Z {
  _initialize() {
    this.rebootWebworker()
  }
  _terminate() {
    null != this._worker && (this._worker.terminate(), this._worker = null)
  }
  rebootWebworker() {
    null != this._worker && (this._worker.terminate(), this._worker = null);
    this._worker = new Worker(new URL(n.p + n.u("561"), n.b))
  }
  updateUsers(e) {
    let {
      _worker: t
    } = this;
    if (null != t) e = e.filter(I.lm), t.postMessage({
      type: "UPDATE_USERS",
      payload: e
    })
  }
  getSearchContext(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
    this.initialize();
    let {
      _worker: n
    } = this;
    if (null == n) throw Error("SearchContextManager: No webworker initialized");
    return new O(n, e, t)
  }
  constructor(...e) {
    super(...e), f(this, "_worker", void 0), f(this, "actions", {
      LOGOUT: () => this._handleLogout(),
      POST_CONNECTION_OPEN: () => this._handleConnectionOpen(),
      CONNECTION_OPEN_SUPPLEMENTAL: e => this._handleConnectionOpenSupplemental(e),
      OVERLAY_INITIALIZE: e => this._handleOverlayInitialize(e),
      CURRENT_USER_UPDATE: e => this._handleCurrentUserUpdate(e),
      GUILD_CREATE: e => this._handleGuildCreate(e),
      GUILD_MEMBERS_CHUNK_BATCH: e => this._handleGuildMembersChunkBatch(e),
      GUILD_MEMBER_ADD: e => this._handleGuildMemberUpdate(e),
      GUILD_MEMBER_UPDATE: e => this._handleGuildMemberUpdate(e),
      RELATIONSHIP_ADD: e => this._handleRelationshipAdd(e),
      RELATIONSHIP_UPDATE: e => this._handleRelationshipUpdate(e),
      RELATIONSHIP_REMOVE: e => this._handleRelationshipRemove(e),
      CHANNEL_CREATE: e => this._handleDMCreate(e),
      CHANNEL_UPDATES: e => this._handleDMUpdates(e),
      CHANNEL_RECIPIENT_ADD: e => this._handleRecipientChanges(e),
      PASSIVE_UPDATE_V2: e => this._handlePassiveUpdateV2(e)
    }), f(this, "_handleLogout", () => {
      this.rebootWebworker()
    }), f(this, "_handleConnectionOpen", () => {
      setTimeout(() => {
        let e = E.default.getCurrentUser();
        if (null == e) return;
        let t = S(e),
          n = {
            [t.id]: t
          };
        Object.values(E.default.getUsers()).forEach(e => {
          n[e.id] = S(e)
        });
        let i = c.ZP.getMutableAllGuildsAndMembers();
        for (let e in i)
          for (let t in i[e]) {
            var r, s;
            let o = n[t],
              a = null !== (s = null === (r = i[e][t]) || void 0 === r ? void 0 : r.nick) && void 0 !== s ? s : h.ZP.getGlobalName(o);
            null != o && (o[e] = null != a && "" !== a ? a : null)
          }
        this.updateUsers(Object.values(n))
      }, 3e3)
    }), f(this, "_handleConnectionOpenSupplemental", e => {
      let {
        guilds: t
      } = e;
      setTimeout(() => {
        let e = o().flatMap(t, e => m(e.members, e.id));
        this.updateUsers(e)
      }, 3e3)
    }), f(this, "_handleOverlayInitialize", e => {
      let {
        users: t,
        guildMembers: n
      } = e, i = new Map;
      for (let e of t) i.set(e.id, S(e));
      for (let e of T.default.keys(n)) {
        let t = n[e];
        if (null != t)
          for (let n of T.default.keys(t)) {
            let r = i.get(n),
              s = t[n];
            if (null != r && null != s && null != s.nick) A(r, e, s.nick), i.set(n, r)
          }
      }
      this.updateUsers(Array.from(i.values())), i.clear()
    }), f(this, "_handleCurrentUserUpdate", e => {
      let {
        user: t
      } = e, n = S(t);
      null != n && this.updateUsers([n])
    }), f(this, "_handleGuildCreate", e => {
      let {
        guild: t
      } = e, {
        members: n
      } = t;
      this.updateUsers(m(n, t.id))
    }), f(this, "_handleGuildMembersChunkBatch", e => {
      let {
        chunks: t
      } = e, n = [];
      for (let e of t) n.push(...m(e.members, e.guildId));
      this.updateUsers(n)
    }), f(this, "_handleGuildMemberUpdate", e => {
      let {
        guildId: t,
        user: n,
        nick: i
      } = e, r = S(n);
      null != r && (A(r, t, i), this.updateUsers([r]))
    }), f(this, "_handlePassiveUpdateV2", e => {
      this.updateUsers(m(e.members, e.guildId))
    }), f(this, "_handleRelationshipAdd", e => {
      let t = S(e.relationship.user);
      this.updateUsers([t])
    }), f(this, "_handleRelationshipUpdate", e => {
      let t = S(E.default.getUser(e.relationship.id));
      this.updateUsers([t])
    }), f(this, "_handleRelationshipRemove", e => {
      let t = S(E.default.getUser(e.relationship.id));
      this.updateUsers([t])
    }), f(this, "_handleDMCreate", e => {
      let {
        channel: {
          id: t
        }
      } = e, n = N(_.Z.getChannel(t));
      if (0 === n.length) return;
      let i = S(E.default.getCurrentUser());
      A(i, t), n.push(i), this.updateUsers(n)
    }), f(this, "_handleDMUpdates", e => {
      let {
        channels: t
      } = e;
      for (let e of t) {
        let t = N(_.Z.getChannel(e.id));
        if (0 === t.length) continue;
        let n = S(E.default.getCurrentUser());
        A(n, e.id), t.push(n), this.updateUsers(t)
      }
    }), f(this, "_handleRecipientChanges", e => {
      let {
        channelId: t,
        user: n,
        isMember: i
      } = e;
      if (!i) return;
      let r = S(n);
      A(r, t), this.updateUsers([r])
    })
  }
}
t.Z = new R