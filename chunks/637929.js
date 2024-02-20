"use strict";
n.r(t), n.d(t, {
  trackMessageNotificationTimestamps: function() {
    return r
  },
  default: function() {
    return E
  }
});
var i = n("446674"),
  l = n("913144"),
  u = n("26989"),
  o = n("282109"),
  s = n("697218");

function r(e, t) {
  var n;
  let i = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    r = o.default.isSuppressEveryoneEnabled(t),
    a = o.default.isSuppressRolesEnabled(t),
    d = null != e.mentions && e.mentions.some(e => e.id === i),
    c = null == t || null == i ? null : u.default.getMember(t, i),
    _ = null != e.mention_roles && null != c && null != c.roles && e.mention_roles.some(e => c.roles.includes(e));
  l.default.dispatch({
    type: "MESSAGE_NOTIFICATION_SHOWN",
    guildId: t,
    mentioned: d,
    roleMentioned: _ && !a,
    everyoneMentioned: !0 === e.mention_everyone && !r
  })
}
let a = null,
  d = null,
  c = null,
  _ = null,
  f = {},
  h = {},
  g = {},
  p = {};
class m extends i.default.Store {
  getGlobalStats() {
    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: e(a),
      approx_seconds_since_last_mention: e(d),
      approx_seconds_since_last_role_mention: e(c),
      approx_seconds_since_last_everyone_mention: e(_)
    }
  }
  getStats(e) {
    let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: t(a),
      approx_seconds_since_last_mention: t(d),
      approx_seconds_since_last_role_mention: t(c),
      approx_seconds_since_last_everyone_mention: t(_),
      approx_seconds_since_last_guild_notification: null == e ? null : t(f[e]),
      approx_seconds_since_last_guild_mention: null == e ? null : t(h[e]),
      approx_seconds_since_last_guild_role_mention: null == e ? null : t(p[e]),
      approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(g[e])
    }
  }
}
var E = new m(l.default, {
  CONNECTION_OPEN: function() {
    let e = e => null != e && Date.now() - e < 6e4;
    for (let t in !e(a) && (a = null), !e(d) && (d = null), !e(c) && (c = null), !e(_) && (_ = null), f) !e(f[t]) && delete f[t];
    for (let t in h) !e(h[t]) && delete h[t];
    for (let t in p) !e(p[t]) && delete p[t];
    for (let t in g) !e(g[t]) && delete g[t]
  },
  MESSAGE_NOTIFICATION_SHOWN: function(e) {
    let {
      guildId: t,
      mentioned: n,
      roleMentioned: i,
      everyoneMentioned: l
    } = e, u = Date.now();
    a = u, null != t && (f[t] = u), n && (d = u, null != t && (h[t] = u)), i && (c = u, null != t && (p[t] = u)), l && (_ = u, null != t && (g[t] = u))
  }
})