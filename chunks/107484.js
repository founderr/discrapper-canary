var r,
    i = n(47120);
var a = n(442837),
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
let l = new Map(),
    u = (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        l.set(t, n);
    };
class c extends (r = a.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? l.get(e) : void 0;
    }
}
s(c, 'displayName', 'GuildRoleConnectionEligibilityStore'), (t.Z = new c(o.Z, { GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: u }));
