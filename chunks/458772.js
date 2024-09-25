var r = n(47120);
var i = n(445346),
    a = n(570140),
    o = n(710845),
    s = n(93093);
function l(e, t, n) {
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
let u = new o.Z('BasicChannelCacheStore'),
    c = !1;
class d extends i.y {
    hasChannel(e) {
        return this.channels.has(e);
    }
    hasGuild(e) {
        return this.guilds.has(e);
    }
    getBasicChannel(e) {
        var t;
        return c && u.verbose('getting basic_channel (channel: '.concat(e, ', exists: ').concat(this.channels.has(e), ')')), null !== (t = this.channels.get(e)) && void 0 !== t ? t : null;
    }
    getGuildBasicChannels(e) {
        var t;
        return c && u.verbose('getting guild_basic_channels (guild: '.concat(e, ', exists: ').concat(this.guilds.has(e), ')')), null !== (t = this.guilds.get(e)) && void 0 !== t ? t : null;
    }
    invalidate(e) {
        this.delete(e);
    }
    restored(e) {
        this.delete(e);
    }
    initialize() {
        this.waitFor(s.Z);
    }
    handleCacheLoadedLazy(e) {
        for (let [t, n] of ((this.guilds = new Map()), (this.channels = new Map()), e.basicGuildChannels)) for (let e of (this.guilds.set(t, Object.fromEntries(n.map((e) => [e.id, e]))), n)) this.channels.set(e.id, e);
    }
    handleCacheLoadedLazyNoCache(e) {
        this.guilds.clear(), this.channels.clear();
    }
    handleConnectionOpen(e) {
        let t = s.Z.allGuildIds();
        for (let e of this.guilds.keys()) !t.has(e) && this.delete(e);
    }
    handleLogout(e) {
        this.guilds.clear(), this.channels.clear();
    }
    delete(e) {
        var t;
        for (let n in (c && u.verbose('deleting basic_channels (guild: '.concat(e, ', exists: ').concat(this.guilds.has(e), ')')), null !== (t = this.guilds.get(e)) && void 0 !== t ? t : {})) this.channels.delete(n);
        this.guilds.delete(e);
    }
    constructor() {
        super(a.Z, {
            CACHE_LOADED_LAZY_NO_CACHE: (e) => this.handleCacheLoadedLazyNoCache(e),
            CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            LOGOUT: (e) => this.handleLogout(e)
        }),
            l(this, 'channels', new Map()),
            l(this, 'guilds', new Map());
    }
}
t.Z = new d();
