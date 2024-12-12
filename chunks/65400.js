r.d(n, {
    F: function () {
        return d;
    },
    s: function () {
        return u;
    }
});
var i = r(192379),
    a = r(584171),
    s = r(5907);
let { useSyncExternalStoreWithSelector: o } = a,
    l = (e) => e;
function u(e, n = l, r) {
    let a = o(e.subscribe, e.getState, e.getInitialState, n, r);
    return i.useDebugValue(a), a;
}
let c = (e, n) => {
        let r = (0, s.M)(e),
            i = (e, i = n) => u(r, e, i);
        return Object.assign(i, r), i;
    },
    d = (e, n) => (e ? c(e, n) : c);
