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
let s = [];
function l(e) {
    let { eligibleGuilds: t } = e;
    s = t;
}
class u extends (r = i.ZP.Store) {
    getEligibleGuildsForNagActivate() {
        return s;
    }
}
o(u, 'displayName', 'CreatorMonetizationMarketingStore'), (t.Z = new u(a.Z, { CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: l }));
