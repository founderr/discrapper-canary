var r,
    i,
    a = n(442837),
    o = n(570140),
    s = n(314897),
    l = n(900849);
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
!(function (e) {
    (e.UNSET = 'unset'), (e.FETCHING = 'fetching'), (e.FAILED = 'failed'), (e.SUCCEEDED = 'succeeded');
})(r || (r = {}));
let c = {};
function d(e) {
    let { guildId: t } = e;
    c[t] = {
        ...c[t],
        fetchState: 'fetching'
    };
}
function _(e) {
    let { guildId: t, guild: n } = e,
        r = (0, l.PP)(n);
    c[t] = {
        ...c[t],
        guild: r,
        fetchState: 'succeeded'
    };
}
function E(e) {
    let { guildId: t } = e;
    c[t] = {
        ...c[t],
        fetchState: 'failed'
    };
}
class f extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(s.default);
    }
    isFetchingGuild(e) {
        let t = c[e];
        return null != t && 'fetching' === t.fetchState;
    }
    getGuild(e) {
        let t = c[e];
        return null != t ? t.guild : null;
    }
    hasFetchFailed(e) {
        let t = c[e];
        return null != t && 'failed' === t.fetchState;
    }
}
u(f, 'displayName', 'GuildPopoutStore'),
    (t.Z = new f(o.Z, {
        GUILD_POPOUT_FETCH_START: d,
        GUILD_POPOUT_FETCH_SUCCESS: _,
        GUILD_POPOUT_FETCH_FAILURE: E
    }));
