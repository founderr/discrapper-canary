var i,
    a = r(442837),
    s = r(570140),
    o = r(411198);
function l(e, n, r) {
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
let u = {};
function c(e) {
    let { invite: n } = e,
        r = n.guild;
    if (null == r) return !1;
    u[r.id] = (0, o.Qs)(r);
}
class d extends (i = a.ZP.Store) {
    getGuild(e) {
        return u[e];
    }
}
l(d, 'displayName', 'AuthInviteStore'), (n.Z = new d(s.Z, { AUTH_INVITE_UPDATE: c }));
