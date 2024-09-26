var r = n(47120);
var i = n(592125),
    a = n(650774),
    o = n(944486),
    s = n(412788),
    l = n(368321),
    u = n(553245),
    c = n(143806),
    d = n(814074),
    _ = n(582142),
    E = n(989263),
    f = n(872261);
function h(e, t, n) {
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
let p = 750,
    m = 15,
    I = 500,
    T = 25,
    g = 25,
    S = 1,
    A = null,
    v = new u.b(p, I),
    N = new c.S(m),
    O = !1;
class R extends s.Z {
    initialize() {
        this.waitFor(i.Z), this.waitFor(o.Z), this.waitFor(a.Z), this.syncWith([l.Z], () => !0), this.syncWith([o.Z], C);
    }
    loadCache() {
        let e = this.readSnapshot(R.LATEST_SNAPSHOT_VERSION);
        null != e && ((O = !0), R.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return O;
    }
    saveLimit(e) {
        let t = i.Z.getBasicChannel(e);
        return null != t && (0, _.p)(t) ? T : null != t && v.has(e) ? g : S;
    }
    getSaveableChannels() {
        let e = i.Z.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e
        }));
        return l.Z.isLowDisk ? (null != A ? [...e, A] : e) : [...e, ...v.values()];
    }
    takeSnapshot() {
        return {
            version: R.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...v.allValues()].filter((e) => !e.fallback),
                penalized: [...N.keys()],
                lastChannel: A
            }
        };
    }
    static mergeSnapshot(e) {
        let t = v,
            n = N;
        for (let n of ((v = new u.b(v.primaryCapacity, v.extendedCapacity)), (N = new c.S(N.capacity)), (A = null != A ? A : e.lastChannel), [e.channels, t.values()])) for (let e of n) !e.fallback && v.put(e.channelId, e);
        for (let t of [e.penalized, n.keys()]) for (let e of t) N.put(e, null);
    }
    static recordChannel(e) {
        let t = i.Z.getBasicChannel(e);
        if (null != t && (0, E.v)(t)) {
            var n;
            let r = {
                guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                channelId: e,
                channelType: t.type
            };
            (A = r), v.put(e, r), (0, d.Hr)(t) && null != N.put(e, null) && v.delete(e);
        }
    }
    static deleteChannel(e) {
        v.delete(e);
    }
    static deleteGuild(e) {
        for (let t of v.allValues()) t.guildId === e && v.delete(t.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of v.keys()) {
            let t = i.Z.getBasicChannel(e);
            !(0, E.v)(t) && R.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let t of v.values()) e === t.guildId && !(0, E.$)(t.channelId) && R.deleteChannel(t.channelId);
    }
    static replaceLru(e) {
        v = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: x,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: D,
            CHANNEL_UPDATES: b,
            CONNECTION_OPEN_SUPPLEMENTAL: y,
            GUILD_DELETE: U,
            LOGIN_SUCCESS: w,
            THREAD_DELETE: P,
            THREAD_UPDATE: M
        });
    }
}
function C() {
    let e = o.Z.getChannelId();
    null != e && R.recordChannel(e);
}
function y() {
    R.dropUnreachableChannels(), R.replaceLru((0, f.J)(v, p + I));
}
function L(e) {
    let t = e.id,
        n = (0, E.v)(e),
        r = o.Z.getChannelId();
    n && t === r && R.recordChannel(t), !n && R.deleteChannel(t);
}
function b(e) {
    for (let t of e.channels) L(t);
}
function D(e) {
    R.deleteChannel(e.channel.id);
}
function M(e) {
    L(e.channel);
}
function P(e) {
    R.deleteChannel(e.channel.id);
}
function U(e) {
    return !e.guild.unavailable && (R.deleteGuild(e.guild.id), !0);
}
function w(e) {
    v.clear(), N.clear(), (O = !1);
}
function x(e) {
    O = !0;
}
h(R, 'displayName', 'SaveableChannelsStore'), h(R, 'LATEST_SNAPSHOT_VERSION', 1), (t.ZP = new R());
