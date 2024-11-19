n.d(t, {
    F: function () {
        return d;
    },
    s: function () {
        return u;
    }
});
var r = n(192379),
    i = n(584171),
    a = n(451498);
let { useDebugValue: s } = r,
    { useSyncExternalStoreWithSelector: o } = i,
    l = (e) => e;
function u(e, t = l, n) {
    let r = o(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
    return s(r), r;
}
let c = (e, t) => {
        let n = (0, a.M)(e),
            r = (e, r = t) => u(n, e, r);
        return Object.assign(r, n), r;
    },
    d = (e, t) => (e ? c(e, t) : c);
