n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var r = n(470079),
    i = n(399606);
function a(e, t) {
    let { get: n, getIsLoading: a, load: s, useStateHook: o } = t;
    return function () {
        for (var t = arguments.length, l = Array(t), u = 0; u < t; u++) l[u] = arguments[u];
        let c = o([e], () => n(...l), l),
            d = (0, i.e7)([e], () => a(...l), l),
            [_, E] = (0, r.useState)();
        return (
            (0, r.useEffect)(() => {
                if (a(...l) || null != n(...l)) return;
                let e = new AbortController();
                return (
                    s(e.signal, ...l).catch((t) => {
                        !e.signal.aborted && E(t);
                    }),
                    () => e.abort()
                );
            }, l),
            {
                data: c,
                error: _,
                isLoading: d
            }
        );
    };
}
