"use strict";
n.r(t), n.d(t, {
  trackMessageNotificationTimestamps: function() {
    return u
  },
  default: function() {
    return A
  }
});
var i = n("446674"),
  l = n("913144"),
  a = n("26989"),
  s = n("282109"),
  r = n("697218");

function u(e, t) {
  var n;
  let i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    u = s.default.isSuppressEveryoneEnabled(t),
    d = s.default.isSuppressRolesEnabled(t),
    o = null != e.mentions && e.mentions.some(e => e.id === i),
    c = null == t || null == i ? null : a.default.getMember(t, i),
    _ = null != e.mention_roles && null != c && null != c.roles && e.mention_roles.some(e => c.roles.includes(e));
  l.default.dispatch({
    type: "MESSAGE_NOTIFICATION_SHOWN",
    guildId: t,
    mentioned: o,
    roleMentioned: _ && !d,
    everyoneMentioned: !0 === e.mention_everyone && !u
  })
}
let d = null,
  o = null,
  c = null,
  _ = null,
  f = {},
  h = {},
  E = {},
  g = {};
class m extends i.default.Store {
  getGlobalStats() {
    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: e(d),
      approx_seconds_since_last_mention: e(o),
      approx_seconds_since_last_role_mention: e(c),
      approx_seconds_since_last_everyone_mention: e(_)
    }
  }
  getStats(e) {
    let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: t(d),
      approx_seconds_since_last_mention: t(o),
      approx_seconds_since_last_role_mention: t(c),
      approx_seconds_since_last_everyone_mention: t(_),
      approx_seconds_since_last_guild_notification: null == e ? null : t(f[e]),
      approx_seconds_since_last_guild_mention: null == e ? null : t(h[e]),
      approx_seconds_since_last_guild_role_mention: null == e ? null : t(g[e]),
      approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(E[e])
    }
  }
}
var A = new m(l.default, {
  CONNECTION_OPEN: function() {
    let e = e => null != e && Date.now() - e < 6e4;
    for (let t in !e(d) && (d = null), !e(o) && (o = null), !e(c) && (c = null), !e(_) && (_ = null), f) !e(f[t]) && delete f[t];
    for (let t in h) !e(h[t]) && delete h[t];
    for (let t in g) !e(g[t]) && delete g[t];
    for (let t in E) !e(E[t]) && delete E[t]
  },
  MESSAGE_NOTIFICATION_SHOWN: function(e) {
    let {
      guildId: t,
      mentioned: n,
      roleMentioned: i,
      everyoneMentioned: l
    } = e, a = Date.now();
    d = a, null != t && (f[t] = a), n && (o = a, null != t && (h[t] = a)), i && (c = a, null != t && (g[t] = a)), l && (_ = a, null != t && (E[t] = a))
  }
})