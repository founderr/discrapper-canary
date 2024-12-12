var i = r(47120);
var a = r(592125),
    s = r(650774),
    o = r(944486),
    l = r(412788),
    u = r(368321),
    c = r(553245),
    d = r(143806),
    f = r(814074),
    _ = r(582142),
    h = r(989263),
    p = r(872261);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = 750,
    E = 15,
    v = 500,
    I = 25,
    T = 25,
    b = 1,
    y = null,
    S = new c.b(g, v),
    A = new d.S(E),
    N = !1;
class C extends l.Z {
    initialize() {
        this.waitFor(a.Z), this.waitFor(o.Z), this.waitFor(s.Z), this.syncWith([u.Z], () => !0), this.syncWith([o.Z], R);
    }
    loadCache() {
        let e = this.readSnapshot(C.LATEST_SNAPSHOT_VERSION);
        null != e && ((N = !0), C.mergeSnapshot(e));
    }
    canEvictOrphans() {
        return N;
    }
    saveLimit(e) {
        let n = a.Z.getBasicChannel(e);
        return null != n && (0, _.p)(n) ? I : null != n && S.has(e) ? T : b;
    }
    getSaveableChannels() {
        let e = a.Z.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e
        }));
        return u.Z.isLowDisk ? (null != y ? [...e, y] : e) : [...e, ...S.values()];
    }
    takeSnapshot() {
        return {
            version: C.LATEST_SNAPSHOT_VERSION,
            data: {
                channels: [...S.allValues()].filter((e) => !e.fallback),
                penalized: [...A.keys()],
                lastChannel: y
            }
        };
    }
    static mergeSnapshot(e) {
        let n = S,
            r = A;
        for (let r of ((S = new c.b(S.primaryCapacity, S.extendedCapacity)), (A = new d.S(A.capacity)), (y = null != y ? y : e.lastChannel), [e.channels, n.values()])) for (let e of r) !e.fallback && S.put(e.channelId, e);
        for (let n of [e.penalized, r.keys()]) for (let e of n) A.put(e, null);
    }
    static recordChannel(e) {
        let n = a.Z.getBasicChannel(e);
        if (null != n && (0, h.v)(n)) {
            var r;
            let i = {
                guildId: null !== (r = n.guild_id) && void 0 !== r ? r : null,
                channelId: e,
                channelType: n.type
            };
            (y = i), S.put(e, i), (0, f.Hr)(n) && null != A.put(e, null) && S.delete(e);
        }
    }
    static deleteChannel(e) {
        S.delete(e);
    }
    static deleteGuild(e) {
        for (let n of S.allValues()) n.guildId === e && S.delete(n.channelId);
    }
    static dropUnreachableChannels() {
        for (let e of S.keys()) {
            let n = a.Z.getBasicChannel(e);
            !(0, h.v)(n) && C.deleteChannel(e);
        }
    }
    static deleteUnreadableGuildChannels(e) {
        for (let n of S.values()) e === n.guildId && !(0, h.$)(n.channelId) && C.deleteChannel(n.channelId);
    }
    static replaceLru(e) {
        S = e;
    }
    constructor() {
        super({
            CACHE_LOADED_LAZY_NO_CACHE: U,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: x,
            CHANNEL_UPDATES: L,
            CONNECTION_OPEN_SUPPLEMENTAL: O,
            GUILD_DELETE: M,
            LOGIN_SUCCESS: k,
            THREAD_DELETE: P,
            THREAD_UPDATE: w
        });
    }
}
function R() {
    let e = o.Z.getChannelId();
    null != e && C.recordChannel(e);
}
function O() {
    C.dropUnreachableChannels(), C.replaceLru((0, p.J)(S, g + v));
}
function D(e) {
    let n = e.id,
        r = (0, h.v)(e),
        i = o.Z.getChannelId();
    r && n === i && C.recordChannel(n), !r && C.deleteChannel(n);
}
function L(e) {
    for (let n of e.channels) D(n);
}
function x(e) {
    C.deleteChannel(e.channel.id);
}
function w(e) {
    D(e.channel);
}
function P(e) {
    C.deleteChannel(e.channel.id);
}
function M(e) {
    return !e.guild.unavailable && (C.deleteGuild(e.guild.id), !0);
}
function k(e) {
    S.clear(), A.clear(), (N = !1);
}
function U(e) {
    N = !0;
}
m(C, 'displayName', 'SaveableChannelsStore'), m(C, 'LATEST_SNAPSHOT_VERSION', 1), (n.ZP = new C());
