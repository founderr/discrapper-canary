r.d(n, {
    U: function () {
        return u;
    }
});
var i = r(192379),
    a = r(5907);
let s = (e) => e;
function o(e, n = s) {
    let r = i.useSyncExternalStore(
        e.subscribe,
        () => n(e.getState()),
        () => n(e.getInitialState())
    );
    return i.useDebugValue(r), r;
}
let l = (e) => {
        let n = (0, a.M)(e),
            r = (e) => o(n, e);
        return Object.assign(r, n), r;
    },
    u = (e) => (e ? l(e) : l);
