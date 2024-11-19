n.d(t, {
    U: function () {
        return o;
    }
});
var r = n(192379),
    i = n(103729);
let a = (e) => e,
    s = (e) => {
        let t = (0, i.M)(e),
            n = (e) =>
                (function (e, t = a) {
                    let n = r.useSyncExternalStore(
                        e.subscribe,
                        () => t(e.getState()),
                        () => t(e.getInitialState())
                    );
                    return r.useDebugValue(n), n;
                })(t, e);
        return Object.assign(n, t), n;
    },
    o = (e) => (e ? s(e) : s);
