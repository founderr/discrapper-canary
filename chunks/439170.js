"use strict";
n.r(t), n.d(t, {
  EVERYONE_CHANNEL_ID: function() {
    return M
  },
  EVERYONE_ID: function() {
    return D
  },
  MemberListRowTypes: function() {
    return i
  }
}), n("724458"), n("653041"), n("47120");
var i, r, s, a = n("392711"),
  o = n.n(a),
  l = n("108131"),
  u = n.n(l),
  d = n("149765"),
  _ = n("442837"),
  c = n("570140"),
  E = n("353926"),
  I = n("280234"),
  T = n("653733"),
  f = n("700785"),
  S = n("199902"),
  h = n("314897"),
  A = n("592125"),
  m = n("650774"),
  N = n("271383"),
  p = n("430824"),
  O = n("158776"),
  C = n("885110"),
  R = n("594174"),
  g = n("981631"),
  L = n("689938");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let D = "everyone",
  M = 0;

function y(e, t, n, i) {
  switch (t) {
    case g.StatusTypes.ONLINE:
    case g.StatusTypes.OFFLINE:
    case g.StatusTypes.UNKNOWN:
      return {
        type: "GROUP", key: t, id: t, get title() {
          switch (t) {
            case g.StatusTypes.ONLINE:
              return L.default.Messages.STATUS_ONLINE;
            case g.StatusTypes.OFFLINE:
              return L.default.Messages.STATUS_OFFLINE;
            default:
              return L.default.Messages.STATUS_UNKNOWN
          }
        }, count: n, index: i
      };
    case "recently-online":
      return {
        type: "GROUP", key: t, id: t, get title() {
          return L.default.Messages.RECENTLY_ONLINE
        }, count: n, index: i
      };
    default:
      let r = p.default.getGuild(e),
        s = null != r ? p.default.getRole(r.id, t) : null;
      return {
        type: "GROUP", key: t, id: t, title: null != s ? s.name : "", count: n, index: i
      }
  }
}

function P(e, t, n) {
  let i = n === h.default.getId(),
    r = O.default.isMobileOnline(n),
    s = i ? C.default.getStatus() : O.default.getStatus(n, e),
    a = i ? C.default.getActivities() : O.default.getActivities(n, e),
    o = S.default.getStreamForUser(n, e),
    l = R.default.getUser(n),
    u = O.default.getLastOnlineTimestamp(n),
    {
      isRecentlyOnlineShowable: d
    } = (0, I.getRecentlyOnlineStrategy)(u);
  return null == l ? null : {
    type: "MEMBER",
    ...N.default.getMember(e, n),
    user: l,
    status: s,
    activities: a,
    applicationStream: o,
    isOwner: t === n,
    isMobileOnline: r,
    lastOnlineTimestamp: d ? u : void 0
  }
}

function U(e) {
  let t = A.default.getChannel(e);
  return null == t ? D : null == t.memberListId ? function(e) {
    return f.canEveryone(g.Permissions.VIEW_CHANNEL, e) ? D : u().v3(o()(e.permissionOverwrites).reduce((e, t) => {
      let {
        id: n,
        allow: i,
        deny: r
      } = t;
      return d.has(i, g.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : d.has(r, g.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
    }, []).sort().join(",")).toString()
  }(t) : t.memberListId
}(s = i || (i = {})).GROUP = "GROUP", s.MEMBER = "MEMBER", s.CONTENT_INVENTORY = "CONTENT_INVENTORY", s.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP", s.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY";
class b {
  updateOwnerId() {
    let e = p.default.getGuild(this.guildId);
    if (null == e) return !1;
    let t = f.getGuildVisualOwnerId(e);
    return this.ownerId !== t && (this.ownerId = t, !0)
  }
  setGroups(e) {
    let t = 0;
    this.groups = e.map(e => {
      var n;
      let i = t,
        r = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
      return t += r + 1, y(this.guildId, e.id, r, i)
    }), this.rows.length = t
  }
  sync(e, t) {
    let [n] = e;
    t.forEach((e, t) => this.update(n + t, e))
  }
  invalidate(e) {
    let [t, n] = e;
    for (let e = t; e <= n; e++) {
      let t = this.rows[e];
      if (null == t) break;
      delete this.rows[e], "MEMBER" === t.type && delete this.members[t.user.id]
    }
    this.version++
  }
  insert(e, t) {
    let {
      group: n,
      member: i
    } = t;
    if (null != n) this.rows.splice(e, 0, y(this.guildId, n.id, n.count));
    else if (null != i) {
      let t = P(this.guildId, this.ownerId, i.user.id);
      if (null == t) return;
      this.rows.splice(e, 0, t), this.members[i.user.id] = t
    }
    this.version++
  }
  update(e, t) {
    let {
      group: n,
      member: i
    } = t, r = this.rows[e];
    if (null != r && "MEMBER" === r.type && delete this.members[r.user.id], null != n) this.rows[e] = y(this.guildId, n.id, n.count);
    else if (null != i) {
      let t = P(this.guildId, this.ownerId, i.user.id);
      if (null == t) return;
      this.rows[e] = t, this.members[i.user.id] = t
    }
    this.version++
  }
  delete(e) {
    let t = this.rows[e];
    null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
  }
  rebuildMember(e, t) {
    let n = this.members[e];
    null != n && (Object.assign(n, P(this.guildId, this.ownerId, e)), t && this.syncRecentlyOfflineList(), this.version++)
  }
  rebuildMembers() {
    let e = Object.keys(this.members);
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      this.rebuildMember(n, t === e.length)
    }
  }
  syncRecentlyOfflineList() {
    var e, t;
    if (!(0, T.isGuildEligibleForRecentlyOnlineExperiment)(this.guildId) || this.rows.length >= 99) {
      this.experimentalGroups = [], this.experimentalRows = [];
      return
    }
    let n = [],
      i = [],
      r = this.rows.findIndex(e => "GROUP" === e.type && e.id === g.StatusTypes.OFFLINE);
    if (r < 0) {
      this.experimentalGroups = [], this.experimentalRows = [];
      return
    }
    let s = [];
    for (let e = 0; e < r; e++) s.push(this.rows[e]);
    for (let e = r; e < this.rows.length; e++) {
      let t = this.rows[e];
      if (null != t && "MEMBER" === t.type) {
        if (t.status === g.StatusTypes.OFFLINE && null != t.lastOnlineTimestamp) {
          let e = {
            ...t
          };
          n.push(e)
        } else(t.status === g.StatusTypes.OFFLINE || t.status === g.StatusTypes.INVISIBLE) && i.push({
          ...t
        })
      }
    }
    n.sort((e, t) => {
      var n, i;
      return (null !== (n = t.lastOnlineTimestamp) && void 0 !== n ? n : 0) - (null !== (i = e.lastOnlineTimestamp) && void 0 !== i ? i : 0)
    });
    let a = [...this.groups];
    if (a = a.filter(e => e.id !== g.StatusTypes.OFFLINE), n.length > 0) {
      let t = a[a.length - 1],
        i = null != t ? (null !== (e = t.index) && void 0 !== e ? e : 0) + t.count + 1 : 0,
        r = y(this.guildId, "recently-online", n.length, i);
      a.push(r), s.push(r), s.push(...n)
    }
    if (i.length > 0) {
      let e = a[a.length - 1],
        n = null != e ? (null !== (t = e.index) && void 0 !== t ? t : 0) + e.count + 1 : 0,
        r = y(this.guildId, g.StatusTypes.OFFLINE, i.length, n);
      a.push(r), s.push(r), s.push(...i)
    }
    this.experimentalGroups = a, this.experimentalRows = s
  }
  constructor(e, t) {
    v(this, "guildId", void 0), v(this, "listId", void 0), v(this, "ownerId", void 0), v(this, "rows", []), v(this, "experimentalRows", []), v(this, "groups", []), v(this, "experimentalGroups", []), v(this, "members", {}), v(this, "version", 0), this.guildId = e, this.listId = t, this.updateOwnerId()
  }
}
let G = new class e {
  get(e, t) {
    let n = this._guildLists[e];
    null == n && (n = this._guildLists[e] = {});
    let i = n[t];
    return null == i && ((i = new b(e, t)).setGroups([{
      id: g.StatusTypes.UNKNOWN,
      count: 0
    }]), n[t] = i), i
  }
  forEach(e, t) {
    if (null == e) o().forEach(this._guildLists, e => {
      o().forEach(e, t)
    });
    else {
      let n = this._guildLists[e];
      null != n && o().forEach(n, t)
    }
  }
  delete(e) {
    delete this._guildLists[e]
  }
  reset() {
    this._guildLists = {}
  }
  constructor() {
    v(this, "_guildLists", {})
  }
};

function w() {
  G.reset()
}
let k = [];

function B() {
  let e = S.default.getAllApplicationStreams(),
    t = k.concat(e);
  k = e, t.forEach(e => {
    G.forEach(null, t => t.rebuildMember(e.ownerId, !0))
  })
}

function V() {
  let e = h.default.getId();
  G.forEach(null, t => t.rebuildMember(e, !0))
}
class x extends(r = _.default.Store) {
  initialize() {
    this.waitFor(R.default, p.default, A.default, N.default, O.default, C.default, h.default, m.default, S.default, E.default), this.syncWith([C.default], V), this.syncWith([S.default], B)
  }
  getProps(e, t) {
    let n = G.get(e, U(t));
    return n.experimentalRows.length > 0 && n.experimentalGroups.length > 0 ? {
      listId: "".concat(n.guildId, ":").concat(n.listId),
      groups: n.experimentalGroups,
      rows: n.experimentalRows,
      version: n.version,
      isRecentlyOnlineEnabled: !0
    } : {
      listId: "".concat(n.guildId, ":").concat(n.listId),
      groups: n.groups,
      rows: n.rows,
      version: n.version,
      isRecentlyOnlineEnabled: !1
    }
  }
  getRows(e, t) {
    return G.get(e, U(t)).rows
  }
}
v(x, "displayName", "ChannelMemberStore"), t.default = new x(c.default, {
  CONNECTION_OPEN: w,
  OVERLAY_INITIALIZE: w,
  GUILD_MEMBER_LIST_UPDATE: function(e) {
    let t = G.get(e.guildId, e.id);
    e.ops.forEach(e => {
      switch (e.op) {
        case "SYNC":
          t.sync(e.range, e.items);
          break;
        case "INVALIDATE":
          t.invalidate(e.range);
          break;
        case "INSERT":
          t.insert(e.index, e.item);
          break;
        case "UPDATE":
          t.update(e.index, e.item);
          break;
        case "DELETE":
          t.delete(e.index)
      }
    }), t.setGroups(e.groups), t.syncRecentlyOfflineList()
  },
  GUILD_UPDATE: function(e) {
    let {
      guild: t
    } = e;
    G.forEach(t.id, e => {
      e.updateOwnerId() && e.rebuildMembers()
    })
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    G.delete(t.id)
  },
  GUILD_ROLE_UPDATE: function(e) {
    let {
      guildId: t
    } = e;
    G.forEach(t, e => e.rebuildMembers())
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    G.forEach(t, e => e.rebuildMember(n.id, !0))
  },
  CHANNEL_UPDATES: function() {
    return !0
  }
})