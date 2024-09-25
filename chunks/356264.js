var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = 0,
    l = {};
function u(e) {
    return (l[e.guildId] = { type: 'loading' }), !1;
}
function c(e) {
    (l[e.guildId] = e.guildInfo), s++;
}
function d(e) {
    return (l[e.guildId] = { type: 'failed' }), !1;
}
class _ extends (r = i.ZP.Store) {
    getGuild(e) {
        let t = l[e];
        if (null != t) {
            if (!('type' in t)) return t;
        }
    }
    getGuildOrStatus(e) {
        return l[e];
    }
    getVersion() {
        return s;
    }
}
o(_, 'displayName', 'BasicGuildStore'),
    (t.Z = new _(a.Z, {
        BASIC_GUILD_FETCH: u,
        BASIC_GUILD_FETCH_SUCCESS: c,
        BASIC_GUILD_FETCH_FAILURE: d
    }));
