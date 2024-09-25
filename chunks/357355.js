var r = n(442837),
    i = n(570140);
let a = {
    fetched: !1,
    affinities: []
};
function o(e) {
    let {} = e;
    a.fetched = !0;
}
function s(e) {
    let { res: t } = e;
    a.affinities = t;
}
function l() {
    (a.fetched = !1), (a.affinities = []);
}
class u extends r.ZP.Store {
    get hasFetched() {
        return a.fetched;
    }
    get affinities() {
        return a.affinities;
    }
}
t.Z = new u(i.Z, {
    BILLING_NITRO_AFFINITY_FETCHED: o,
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: s,
    LOGOUT: l
});
