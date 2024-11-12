n(47120);
var i,
    s,
    l,
    r,
    a = n(106351),
    d = n(442837),
    o = n(570140),
    h = n(38618);
let u = new Set(),
    c = {};
function C() {
    u.clear();
}
function g(e) {
    u.delete(e.guild.id);
}
class p extends (i = d.ZP.Store) {
    getChannelStatus(e) {
        var t;
        if (null != e && null != e.guild_id) {
            if (e.type === a.d.GUILD_VOICE) return !u.has(e.guild_id) && (u.add(e.guild_id), h.Z.getSocket().requestChannelStatuses(e.guild_id)), null === (t = c[e.guild_id]) || void 0 === t ? void 0 : t[e.id];
        }
    }
}
(r = 'ChannelStatusStore'),
    (l = 'displayName') in (s = p)
        ? Object.defineProperty(s, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[l] = r),
    (t.Z = new p(o.Z, {
        GUILD_CREATE: g,
        GUILD_DELETE: g,
        CONNECTION_RESUMED: C,
        CONNECTION_OPEN: C,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            null == c[e.guildId] && (c[e.guildId] = {}), (c[e.guildId][e.id] = e.status);
        },
        CHANNEL_STATUSES: function (e) {
            for (let { id: t, status: n } of ((c[e.guildId] = {}), e.channels)) c[e.guildId][t] = n;
        }
    }));
