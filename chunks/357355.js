var i = r(442837),
    a = r(570140);
let s = {
    fetched: !1,
    affinities: []
};
function o(e) {
    let {} = e;
    s.fetched = !0;
}
function l(e) {
    let { res: n } = e;
    s.affinities = n;
}
function u() {
    (s.fetched = !1), (s.affinities = []);
}
class c extends i.ZP.Store {
    get hasFetched() {
        return s.fetched;
    }
    get affinities() {
        return s.affinities;
    }
}
n.Z = new c(a.Z, {
    BILLING_NITRO_AFFINITY_FETCHED: o,
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: l,
    LOGOUT: u
});
