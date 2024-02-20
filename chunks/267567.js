"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007"), n("808653");
var i = n("446674"),
  r = n("913144"),
  s = n("26989"),
  a = n("305961"),
  o = n("697218"),
  l = n("49111");
let u = [],
  c = {},
  d = null,
  p = null;

function h(e) {
  let t = u.indexOf(e);
  if (t > -1) {
    let n = [...u];
    return n.splice(t, 1), u = n, delete c[e], !0
  }
  return !1
}

function f(e) {
  return !(e === l.ME || u.includes(e)) && (u = [...u, e], !0)
}
class E extends i.default.Store {
  initialize() {
    this.waitFor(a.default, o.default)
  }
  setHistorySnapshot(e) {
    d = e
  }
  getHistorySnapshot() {
    return d
  }
  lurkingGuildIds() {
    return u
  }
  mostRecentLurkedGuildId() {
    return 0 === u.length ? null : u[u.length - 1]
  }
  isLurking(e) {
    var t;
    let n = s.default.isCurrentUserGuest(e),
      i = null === (t = a.default.getGuild(e)) || void 0 === t ? void 0 : t.isLurker();
    return !!(!n && i)
  }
  getLurkingSource() {
    return p
  }
  getLoadId(e) {
    return null != e ? c[e] : null
  }
}
E.displayName = "LurkingStore";
var _ = new E(r.default, {
  CONNECTION_OPEN: function() {
    let e = Object.values(a.default.getGuilds()).reduce((e, t) => {
      let n = t.isLurker();
      return n ? [...e, t.id] : e
    }, []);
    u = e
  },
  GUILD_JOIN: function(e) {
    let {
      guildId: t,
      lurker: n,
      source: i,
      directoryChannelId: r,
      loadId: s
    } = e;
    if (n) {
      var a, o;
      switch (f(t), a = t, null != (o = s) && (c[a] = o), i) {
        case l.JoinGuildSources.MOBILE_GUILD_DISCOVERY:
          p = {
            type: l.JoinGuildSources.MOBILE_GUILD_DISCOVERY
          };
          break;
        case l.JoinGuildSources.DIRECTORY_ENTRY:
          p = {
            type: l.JoinGuildSources.DIRECTORY_ENTRY,
            directoryChannelId: r
          };
          break;
        default:
          p = null
      }
      return !0
    }
    return !1
  },
  GUILD_STOP_LURKING: function(e) {
    let {
      ignoredGuildIds: t
    } = e, n = function(e) {
      let t = new Set([...null != e ? e : []]);
      return [...u].reduce((e, n) => t.has(n) ? e : h(n) || e, !1)
    }(t);
    return n && (d = null, p = null), n
  },
  GUILD_STOP_LURKING_FAILURE: function(e) {
    let {
      lurkingGuildId: t,
      lurkingSource: n
    } = e;
    return f(t), p = n, !0
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e, n = null == t.joined_at;
    return !!(!n && u.includes(t.id)) && (h(t.id), d = null, p = null, !0)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return !!u.includes(t.id) && (h(t.id), d = null, p = null, !0)
  },
  GUILD_MEMBER_ADD: function(e) {
    var t;
    let {
      guildId: n,
      joinedAt: i,
      user: r
    } = e, s = r.id === (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
    return !!(s && null != i && u.includes(n)) && (h(n), d = null, p = null, !0)
  }
})