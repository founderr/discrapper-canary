var r,
    i = n(47120);
var a = n(106351),
    o = n(442837),
    s = n(570140),
    l = n(38618);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = new Set(),
    d = {};
function _() {
    c.clear();
}
function E(e) {
    c.delete(e.guild.id);
}
function f(e) {
    null == d[e.guildId] && (d[e.guildId] = {}), (d[e.guildId][e.id] = e.status);
}
function h(e) {
    for (let { id: t, status: n } of ((d[e.guildId] = {}), e.channels)) d[e.guildId][t] = n;
}
class p extends (r = o.ZP.Store) {
    getChannelStatus(e) {
        var t;
        if (null != e && null != e.guild_id) {
            if (e.type === a.d.GUILD_VOICE) return !c.has(e.guild_id) && (c.add(e.guild_id), l.Z.getSocket().requestChannelStatuses(e.guild_id)), null === (t = d[e.guild_id]) || void 0 === t ? void 0 : t[e.id];
        }
    }
}
u(p, 'displayName', 'ChannelStatusStore'),
    (t.Z = new p(s.Z, {
        GUILD_CREATE: E,
        GUILD_DELETE: E,
        CONNECTION_RESUMED: _,
        CONNECTION_OPEN: _,
        VOICE_CHANNEL_STATUS_UPDATE: f,
        CHANNEL_STATUSES: h
    }));
