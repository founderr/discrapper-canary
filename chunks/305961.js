"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var r = n("917351"),
  s = n.n(r),
  a = n("446674"),
  o = n("913144"),
  l = n("813006"),
  u = n("665618"),
  c = n("605136"),
  d = n("299039"),
  p = n("271938"),
  h = n("49111"),
  f = n("695838");
let E = {},
  _ = !1,
  m = [];

function S(e) {
  E = {}, i = 0, null != e.guilds && s.forEach(e.guilds, e => {
    i++, E[e.id] = u.fromSerializedGuildRecord(e)
  })
}

function g(e) {
  let {
    guildId: t,
    role: n
  } = e, i = E[t];
  null != i && (E = {
    ...E,
    [i.id]: i.upsertRole(c.fromServerRole(n))
  })
}
class T extends a.default.Store {
  getGuild(e) {
    if (null != e) return e === h.FAVORITES ? f.FAVORITES_GUILD_RECORD : E[e]
  }
  getGuilds() {
    return E
  }
  getGuildIds() {
    return d.default.keys(E)
  }
  getGuildCount() {
    return i
  }
  isLoaded() {
    return _
  }
  getGeoRestrictedGuilds() {
    return m
  }
}
T.displayName = "GuildStore";
var I = new T(o.default, {
  BACKGROUND_SYNC: function(e) {
    for (let t of e.guilds) {
      let e = E[t.id];
      if (null == e || "unavailable" === t.data_mode) return;
      E[t.id] = u.fromBackgroundSync(t, e)
    }
    i = Object.keys(E).length
  },
  CONNECTION_OPEN: function(e) {
    _ = !0, E = {}, i = 0, e.guilds.forEach(e => {
      i++, E[e.id] = u.fromServer(e)
    }), m = e.geoRestrictedGuilds
  },
  OVERLAY_INITIALIZE: function(e) {
    var t;
    E = {}, i = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
      i++, E[e.id] = new l.default(e)
    })
  },
  CACHE_LOADED: S,
  CACHE_LOADED_LAZY: S,
  GUILD_CREATE: function(e) {
    let t = u.fromServer(e.guild, E[e.guild.id]);
    null == E[t.id] && i++, E = {
      ...E,
      [t.id]: t
    }
  },
  GUILD_UPDATE: function(e) {
    let t = u.fromServerUpdate(e.guild, E[e.guild.id]);
    null == E[t.id] && i++, E = {
      ...E,
      [t.id]: t
    }
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e, n = m.findIndex(e => e.id === t.id);
    if (-1 !== n) {
      m.splice(n, 1), m = [...m];
      return
    }
    if (null == E[t.id] || t.unavailable) return !1;
    E = {
      ...E
    }, delete E[t.id], i--
  },
  GUILD_ROLE_CREATE: g,
  GUILD_ROLE_UPDATE: g,
  GUILD_ROLE_DELETE: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e, i = E[t];
    null != i && (E = {
      ...E,
      [t]: i.deleteRole(n)
    })
  },
  GUILD_MEMBER_ADD: function(e) {
    let {
      guildId: t,
      joinedAt: n,
      user: i
    } = e, r = p.default.getId(), s = E[t];
    if (r !== i.id || null == s) return !1;
    let a = "string" == typeof n ? new Date(n) : n;
    if (a === s.joinedAt || null == a) return !1;
    E = {
      ...E,
      [t]: s.updateJoinedAt(a)
    }
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
    return !0
  },
  GUILD_GEO_RESTRICTED: function(e) {
    m = [...m, {
      id: e.guildId,
      name: e.name,
      icon: e.icon,
      unavailable: !0,
      geo_restricted: !0
    }]
  }
})