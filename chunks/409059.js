var r,
    i = n(442837),
    a = n(570140),
    o = n(741847),
    s = n(58346);
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
let u = {},
    c = null;
function d(e) {
    return null != e && 'function' != typeof u[e] && !0;
}
function _(e, t) {
    var n;
    if (!d(e)) return null;
    let r =
        null !== (n = u[e]) && void 0 !== n
            ? n
            : {
                  code: e,
                  state: s.Rj.RESOLVING
              };
    t((r = { ...r })),
        (u = {
            ...u,
            [e]: r
        });
}
function E(e) {
    let { code: t } = e;
    if (!d(t)) return !0;
    u = {
        ...u,
        [t]: {
            code: t,
            state: s.Rj.RESOLVING
        }
    };
}
function f(e) {
    h(e.guildTemplate);
}
function h(e) {
    return _(e.code, (t) => {
        let n = (0, o.Z)(e);
        for (let e in n) t[e] = n[e];
    });
}
function p(e) {
    let { guildTemplates: t } = e;
    t.forEach((e) => h(e));
}
function m(e) {
    return _(e.code, (e) => {
        e.state = s.Rj.EXPIRED;
    });
}
function I(e) {
    return _(e.code, (e) => {
        e.state = s.Rj.ACCEPTING;
    });
}
function T(e) {
    return _(e.code, (e) => {
        var t;
        (e.state = s.Rj.ACCEPTED), (e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1);
    });
}
function g(e) {
    return _(e.code, (e) => {
        e.state = s.Rj.RESOLVED;
    });
}
function S(e) {
    c = e.code;
}
function A(e) {
    c = null;
}
class v extends (r = i.ZP.Store) {
    getGuildTemplate(e) {
        if (!!d(e)) return null != e ? u[e] : null;
    }
    getGuildTemplates() {
        return u;
    }
    getForGuild(e) {
        for (let t in u) {
            let n = u[t];
            if ('sourceGuildId' in n && n.sourceGuildId === e && n.state !== s.Rj.EXPIRED) return n;
        }
    }
    getDisplayedGuildTemplateCode() {
        return c;
    }
}
l(v, 'displayName', 'GuildTemplateStore'),
    (t.Z = new v(a.Z, {
        GUILD_TEMPLATE_RESOLVE: E,
        GUILD_TEMPLATE_CREATE_SUCCESS: f,
        GUILD_TEMPLATE_SYNC_SUCCESS: f,
        GUILD_TEMPLATE_RESOLVE_SUCCESS: f,
        GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: p,
        GUILD_TEMPLATE_RESOLVE_FAILURE: m,
        GUILD_TEMPLATE_DELETE_SUCCESS: m,
        GUILD_TEMPLATE_ACCEPT: I,
        GUILD_TEMPLATE_ACCEPT_SUCCESS: T,
        GUILD_TEMPLATE_ACCEPT_FAILURE: g,
        GUILD_TEMPLATE_MODAL_SHOW: S,
        GUILD_TEMPLATE_MODAL_HIDE: A
    }));
