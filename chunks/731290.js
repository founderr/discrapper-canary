var r,
    i = n(442837),
    a = n(433517),
    o = n(570140);
function s(e, t, n) {
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
let l = 'GuildNSFWAgreeStore',
    u = {};
function c(e) {
    let { guildId: t } = e;
    (u[t] = !0), a.K.set(l, u);
}
class d extends (r = i.ZP.Store) {
    initialize() {
        var e;
        u = null !== (e = a.K.get(l)) && void 0 !== e ? e : u;
    }
    didAgree(e) {
        return null != e && (u[e] || !1);
    }
}
s(d, 'displayName', 'GuildNSFWAgreeStore'), (t.Z = new d(o.Z, { GUILD_NSFW_AGREE: c }));
