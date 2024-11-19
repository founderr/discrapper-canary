n(47120);
var r = n(592125),
    i = n(650774),
    a = n(944486),
    s = n(412788),
    o = n(368321),
    l = n(553245),
    u = n(143806),
    c = n(814074),
    d = n(582142),
    f = n(989263),
    _ = n(872261);
function p(e, t, n) {
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
let h = null,
    m = new l.b(750, 500),
    g = new u.S(15),
    E = !1;
class v extends s.Z {
    initialize() {
        this.waitFor(r.Z), this.waitFor(a.Z), this.waitFor(i.Z), this.syncWith([o.Z], () => !0), this.syncWith([a.Z], b);
    }
    loadCache() {
        let e = this.readSnapshot(v.LATEST_SNAPSHOT_VERSION);
        null != e && ((E = !0), v.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return E;
    }
    saveLimit(e) {
        let t = r.Z.getBasicChannel(e);
        return (null != t && (0, d.p)(t)) || (null != t && m.has(e)) ? 25 : 1;
    }
    getSaveableChannels() {
        let e = r.Z.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e
        }));
        return o.Z.isLowDisk ? (null != h ? [...e, h] : e) : [...e, ...m.values()];
    }
    takeSnapshot() {
        return {
            version: v.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...m.allValues()].filter((e) => !e.fallback),
                penalized: [...g.keys()],
                lastChannel: h
            }
        };
    }
    static mergeSnapshot(e) {
        let t = m,
            n = g;
        for (let n of ((m = new l.b(m.primaryCapacity, m.extendedCapacity)), (g = new u.S(g.capacity)), (h = null != h ? h : e.lastChannel), [e.channels, t.values()])) for (let e of n) !e.fallback && m.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) g.put(e, null);
    }
    static recordChannel(e) {
        let t = r.Z.getBasicChannel(e);
        if (null != t && (0, f.v)(t)) {
            var n;
            let r = {
                guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                channelId: e,
                channelType: t.type
            };
            (h = r), m.put(e, r), (0, c.Hr)(t) && null != g.put(e, null) && m.delete(e);
        }
    }
    static deleteChannel(e) {
        m.delete(e);
    }
    static deleteGuild(e) {
        for (let t of m.allValues()) t.guildId === e && m.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of m.keys()) {
            let t = r.Z.getBasicChannel(e);
            !(0, f.v)(t) && v.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of m.values()) e === t.guildId && !(0, f.$)(t.channelId) && v.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        m = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: O,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: y,
            CHANNEL_UPDATES: S,
            CONNECTION_OPEN_SUPPLEMENTAL: I,
            GUILD_DELETE: C,
            LOGIN_SUCCESS: R,
            THREAD_DELETE: N,
            THREAD_UPDATE: A
        });
    }
}
function b() {
    let e = a.Z.getChannelId();
    null != e && v.recordChannel(e);
}
function I() {
    v.dropUnreachableChannels(), v.replaceLru((0, _.J)(m, 1250));
}
function T(e) {
    let t = e.id,
        n = (0, f.v)(e),
        r = a.Z.getChannelId();
    n && t === r && v.recordChannel(t), !n && v.deleteChannel(t);
}
function S(e) {
    for (let t of e.channels) T(t);
}
function y(e) {
    v.deleteChannel(e.channel.id);
}
function A(e) {
    T(e.channel);
}
function N(e) {
    v.deleteChannel(e.channel.id);
}
function C(e) {
    return !e.guild.unavailable && (v.deleteGuild(e.guild.id), !0);
}
function R(e) {
    m.clear(), g.clear(), (E = !1);
}
function O(e) {
    E = !0;
}
p(v, 'displayName', 'SaveableChannelsStore'), p(v, 'LATEST_SNAPSHOT_VERSION', 1), (t.ZP = new v());
