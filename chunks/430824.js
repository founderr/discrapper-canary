"use strict";
let i;
n(47120);
var r, s, o, a, l = n(442837),
  u = n(902704),
  _ = n(570140),
  c = n(601964),
  d = n(411198),
  E = n(625137),
  I = n(709054),
  T = n(314897),
  h = n(981631),
  f = n(647086);
let S = {},
  A = {},
  N = !1,
  m = [];

function O(e) {
  for (let t of (A = {}, S = {}, i = 0, e)) i++, A[t.id] = d.cL(t), S[t.id] = t.roles
}

function R(e) {
  let {
    guildId: t,
    role: n
  } = e, i = S[t], r = E.CL(n), s = null == i ? void 0 : i[r.id];
  if (null != s && (0, u.Z)(r, s)) return !1;
  i = {
    ...i,
    [n.id]: E.CL(n)
  }, i = E.iw(t, Object.values(i)), S[t] = i
}
let p = Object.freeze({});
class g extends(r = l.ZP.Store) {
  getGuild(e) {
    return null == e ? void 0 : e === h.I_8 ? f.g : A[e]
  }
  getGuilds() {
    return A
  }
  getGuildIds() {
    return I.default.keys(A)
  }
  getGuildCount() {
    return i
  }
  isLoaded() {
    return N
  }
  getGeoRestrictedGuilds() {
    return m
  }
  getAllGuildsRoles() {
    return S
  }
  getRoles(e) {
    var t;
    return null !== (t = S[e]) && void 0 !== t ? t : p
  }
  getRole(e, t) {
    var n;
    return null === (n = S[e]) || void 0 === n ? void 0 : n[t]
  }
}
a = "GuildStore", (o = "displayName") in(s = g) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new g(_.Z, {
  BACKGROUND_SYNC: function(e) {
    for (let n of e.guilds) {
      var t;
      let e = A[n.id];
      if (null == e || "unavailable" === n.data_mode) return;
      A[n.id] = d.sp(n, e), S[n.id] = "partial" === n.data_mode ? d.EO(n.id, null !== (t = S[n.id]) && void 0 !== t ? t : p, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : E.C5(n.id, n.roles)
    }
    i = Object.keys(A).length
  },
  CONNECTION_OPEN: function(e) {
    N = !0;
    let t = A;
    A = {}, S = {}, i = 0, e.guilds.forEach(e => {
      i++, A[e.id] = d.wD(e, t[e.id]), S[e.id] = e.roles instanceof Array ? E.C5(e.id, e.roles) : e.roles
    });
    let n = !1;
    if (m.length !== e.geoRestrictedGuilds.length) n = !0;
    else
      for (let t = 0; t < e.geoRestrictedGuilds.length; t++)
        if (!(0, u.Z)(m[t], e.geoRestrictedGuilds[t])) {
          n = !0;
          break
        } n && (m = e.geoRestrictedGuilds)
  },
  OVERLAY_INITIALIZE: function(e) {
    var t;
    A = {}, S = {}, i = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
      i++, A[e.id] = new c.ZP(e)
    }), S = e.allGuildsRoles
  },
  CACHE_LOADED: function(e) {
    O(e.guilds)
  },
  CACHE_LOADED_LAZY: function(e) {
    if (0 === e.guilds.length) return !1;
    O(e.guilds)
  },
  GUILD_CREATE: function(e) {
    let t = d.wD(e.guild, A[e.guild.id]);
    null == A[t.id] && i++, A = {
      ...A,
      [t.id]: t
    }, S[t.id] = e.guild.roles instanceof Array ? E.C5(t.id, e.guild.roles) : e.guild.roles
  },
  GUILD_UPDATE: function(e) {
    let t = d.di(e.guild, A[e.guild.id]);
    null == A[t.id] && i++, A = {
      ...A,
      [t.id]: t
    }, S[t.id] = E.C5(t.id, e.guild.roles)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e, n = m.findIndex(e => e.id === t.id);
    if (-1 !== n) {
      m.splice(n, 1), m = [...m];
      return
    }
    if (null == A[t.id] || t.unavailable) return !1;
    A = {
      ...A
    }, delete A[t.id], S[t.id] = void 0, i--
  },
  GUILD_ROLE_CREATE: R,
  GUILD_ROLE_UPDATE: R,
  GUILD_ROLE_DELETE: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e, i = S[t];
    if (null == i) return !1;
    i = {
      ...i
    }, delete i[n], S[t] = i
  },
  GUILD_MEMBER_ADD: function(e) {
    let {
      guildId: t,
      joinedAt: n,
      user: i
    } = e, r = T.default.getId(), s = A[t];
    if (r !== i.id || null == s) return !1;
    let o = "string" == typeof n ? new Date(n) : n;
    if (o === s.joinedAt || null == o) return !1;
    A = {
      ...A,
      [t]: s.updateJoinedAt(o)
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