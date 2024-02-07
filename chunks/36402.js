"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
});
var a = l("446674"),
  n = l("913144");
let r = {},
  i = {};
class u extends a.default.Store {
  getRoleMemberCount(e) {
    return null != e ? r[e] : null
  }
  shouldFetch(e) {
    if (null == e) return !1;
    let t = i[e];
    return null == t || Date.now() - t > 12e4
  }
}
u.displayName = "GuildRoleMemberCountStore";
var s = new u(n.default, {
  GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      roleMemberCount: l
    } = e;
    r[t] = l, i[t] = Date.now()
  },
  GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
    let {
      guildId: t,
      roleId: l,
      count: a
    } = e, n = r[t];
    if (null == n) return !1;
    n[l] = a
  },
  GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
    let {
      guildId: t,
      roleId: l,
      added: a
    } = e, n = r[t];
    if (null == n || null == n[l]) return !1;
    let i = Object.keys(a).length;
    n[l] += i
  },
  GUILD_ROLE_MEMBER_ADD: function(e) {
    let {
      guildId: t,
      roleId: l
    } = e, a = r[t];
    if (null == a || null == a[l]) return !1;
    a[l] = a[l] + 1
  },
  GUILD_ROLE_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      roleId: l
    } = e, a = r[t];
    if (null == a || null == a[l]) return !1;
    a[l] = Math.max(a[l] - 1, 0)
  },
  GUILD_ROLE_CREATE: function(e) {
    let {
      guildId: t,
      role: l
    } = e;
    null == r[t] && (r[t] = {}), r[t][l.id] = 0
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete r[t.id], delete i[t.id]
  }
})