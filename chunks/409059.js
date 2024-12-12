var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(741847),
    u = r(58346);
function c(e, n, r) {
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
let d = new Map(),
    f = null;
function _(e, n) {
    if (null == e) return;
    let r = d.get(e),
        i =
            null != r
                ? { ...r }
                : {
                      code: e,
                      state: u.Rj.RESOLVING
                  };
    n(i), (d = new Map(d)).set(e, i);
}
function h(e) {
    let { code: n } = e;
    (d = new Map(d)).set(n, {
        code: n,
        state: u.Rj.RESOLVING
    });
}
function p(e) {
    m(e.guildTemplate);
}
function m(e) {
    return _(e.code, (n) => {
        let r = (0, l.Z)(e);
        for (let e in r) n[e] = r[e];
    });
}
function g(e) {
    let { guildTemplates: n } = e;
    n.forEach((e) => m(e));
}
function E(e) {
    return _(e.code, (e) => {
        e.state = u.Rj.EXPIRED;
    });
}
function v(e) {
    return _(e.code, (e) => {
        e.state = u.Rj.ACCEPTING;
    });
}
function I(e) {
    return _(e.code, (e) => {
        var n;
        (e.state = u.Rj.ACCEPTED), (e.usageCount = (null !== (n = e.usageCount) && void 0 !== n ? n : 0) + 1);
    });
}
function T(e) {
    return _(e.code, (e) => {
        e.state = u.Rj.RESOLVED;
    });
}
function b(e) {
    f = e.code;
}
function y(e) {
    f = null;
}
class S extends (i = s.ZP.Store) {
    getGuildTemplate(e) {
        if (null != e) return d.get(e);
    }
    getGuildTemplates() {
        return d;
    }
    getForGuild(e) {
        for (let n of d.keys()) {
            let r = d.get(n);
            if (null != r && 'sourceGuildId' in r && r.sourceGuildId === e && r.state !== u.Rj.EXPIRED) return r;
        }
    }
    getDisplayedGuildTemplateCode() {
        return f;
    }
}
c(S, 'displayName', 'GuildTemplateStore'),
    (n.Z = new S(o.Z, {
        GUILD_TEMPLATE_RESOLVE: h,
        GUILD_TEMPLATE_CREATE_SUCCESS: p,
        GUILD_TEMPLATE_SYNC_SUCCESS: p,
        GUILD_TEMPLATE_RESOLVE_SUCCESS: p,
        GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: g,
        GUILD_TEMPLATE_RESOLVE_FAILURE: E,
        GUILD_TEMPLATE_DELETE_SUCCESS: E,
        GUILD_TEMPLATE_ACCEPT: v,
        GUILD_TEMPLATE_ACCEPT_SUCCESS: I,
        GUILD_TEMPLATE_ACCEPT_FAILURE: T,
        GUILD_TEMPLATE_MODAL_SHOW: b,
        GUILD_TEMPLATE_MODAL_HIDE: y
    }));
