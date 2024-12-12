var i,
    a = r(47120);
var s = r(442837),
    o = r(570140);
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
let u = new Map(),
    c = (e) => {
        let { roleId: n, roleConnectionEligibility: r } = e;
        u.set(n, r);
    };
class d extends (i = s.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? u.get(e) : void 0;
    }
}
l(d, 'displayName', 'GuildRoleConnectionEligibilityStore'), (n.Z = new d(o.Z, { GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: c }));
