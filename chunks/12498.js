"use strict";
n.r(t), n("47120");
var i, r, s, a, o = n("106351"),
  l = n("442837"),
  u = n("570140"),
  d = n("38618");
let _ = new Set,
  c = {};

function E() {
  _.clear()
}

function I(e) {
  _.delete(e.guild.id)
}
class T extends(i = l.default.Store) {
  getChannelStatus(e) {
    var t;
    if (null != e && null != e.guild_id) {
      if (e.type === o.ChannelTypes.GUILD_VOICE) return !_.has(e.guild_id) && (_.add(e.guild_id), d.default.getSocket().requestChannelStatuses(e.guild_id)), null === (t = c[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
    }
  }
}
a = "ChannelStatusStore", (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new T(u.default, {
  GUILD_CREATE: I,
  GUILD_DELETE: I,
  CONNECTION_RESUMED: E,
  CONNECTION_OPEN: E,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    null == c[e.guildId] && (c[e.guildId] = {}), c[e.guildId][e.id] = e.status
  },
  CHANNEL_STATUSES: function(e) {
    for (let {
        id: t,
        status: n
      }
      of(c[e.guildId] = {}, e.channels)) c[e.guildId][t] = n
  }
})