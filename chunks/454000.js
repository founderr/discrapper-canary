r.d(e, {
    s: function () {
        return s;
    }
});
var n = r(192379),
    i = r(584171);
let { useDebugValue: o } = n,
    { useSyncExternalStoreWithSelector: a } = i,
    u = (t) => t;
function s(t, e = u, r) {
    let n = a(t.subscribe, t.getState, t.getServerState || t.getInitialState, e, r);
    return o(n), n;
}
