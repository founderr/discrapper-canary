"use strict";
n.r(t), n.d(t, {
  trackMessageNotificationTimestamps: function() {
    return d
  },
  default: function() {
    return m
  }
});
var i = n("446674"),
  l = n("913144"),
  u = n("26989"),
  s = n("282109"),
  o = n("697218");

function d(e, t) {
  var n;
  let i = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    d = s.default.isSuppressEveryoneEnabled(t),
    a = s.default.isSuppressRolesEnabled(t),
    _ = null != e.mentions && e.mentions.some(e => e.id === i),
    r = null == t || null == i ? null : u.default.getMember(t, i),
    c = null != e.mention_roles && null != r && null != r.roles && e.mention_roles.some(e => r.roles.includes(e));
  l.default.dispatch({
    type: "MESSAGE_NOTIFICATION_SHOWN",
    guildId: t,
    mentioned: _,
    roleMentioned: c && !a,
    everyoneMentioned: !0 === e.mention_everyone && !d
  })
}
let a = null,
  _ = null,
  r = null,
  c = null,
  f = {},
  g = {},
  h = {},
  p = {};
class E extends i.default.Store {
  getGlobalStats() {
    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: e(a),
      approx_seconds_since_last_mention: e(_),
      approx_seconds_since_last_role_mention: e(r),
      approx_seconds_since_last_everyone_mention: e(c)
    }
  }
  getStats(e) {
    let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: t(a),
      approx_seconds_since_last_mention: t(_),
      approx_seconds_since_last_role_mention: t(r),
      approx_seconds_since_last_everyone_mention: t(c),
      approx_seconds_since_last_guild_notification: null == e ? null : t(f[e]),
      approx_seconds_since_last_guild_mention: null == e ? null : t(g[e]),
      approx_seconds_since_last_guild_role_mention: null == e ? null : t(p[e]),
      approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(h[e])
    }
  }
}
var m = new E(l.default, {
  CONNECTION_OPEN: function() {
    let e = e => null != e && Date.now() - e < 6e4;
    for (let t in !e(a) && (a = null), !e(_) && (_ = null), !e(r) && (r = null), !e(c) && (c = null), f) !e(f[t]) && delete f[t];
    for (let t in g) !e(g[t]) && delete g[t];
    for (let t in p) !e(p[t]) && delete p[t];
    for (let t in h) !e(h[t]) && delete h[t]
  },
  MESSAGE_NOTIFICATION_SHOWN: function(e) {
    let {
      guildId: t,
      mentioned: n,
      roleMentioned: i,
      everyoneMentioned: l
    } = e, u = Date.now();
    a = u, null != t && (f[t] = u), n && (_ = u, null != t && (g[t] = u)), i && (r = u, null != t && (p[t] = u)), l && (c = u, null != t && (h[t] = u))
  }
})