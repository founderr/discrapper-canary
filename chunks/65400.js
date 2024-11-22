n.d(t, {
    F: function () {
        return c;
    },
    s: function () {
        return l;
    }
});
var r = n(192379),
    i = n(584171),
    a = n(5907);
let { useSyncExternalStoreWithSelector: s } = i,
    o = (e) => e;
function l(e, t = o, n) {
    let i = s(e.subscribe, e.getState, e.getInitialState, t, n);
    return r.useDebugValue(i), i;
}
let u = (e, t) => {
        let n = (0, a.M)(e),
            r = (e, r = t) => l(n, e, r);
        return Object.assign(r, n), r;
    },
    c = (e, t) => (e ? u(e, t) : u);
