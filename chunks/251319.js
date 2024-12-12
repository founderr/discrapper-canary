var i = r(192379);
function a(e, n) {
    return (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n);
}
var s = 'function' == typeof Object.is ? Object.is : a,
    o = i.useState,
    l = i.useEffect,
    u = i.useLayoutEffect,
    c = i.useDebugValue;
function d(e, n) {
    var r = n(),
        i = o({
            inst: {
                value: r,
                getSnapshot: n
            }
        }),
        a = i[0].inst,
        s = i[1];
    return (
        u(
            function () {
                (a.value = r), (a.getSnapshot = n), f(a) && s({ inst: a });
            },
            [e, r, n]
        ),
        l(
            function () {
                return (
                    f(a) && s({ inst: a }),
                    e(function () {
                        f(a) && s({ inst: a });
                    })
                );
            },
            [e]
        ),
        c(r),
        r
    );
}
function f(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var r = n();
        return !s(e, r);
    } catch (e) {
        return !0;
    }
}
function _(e, n) {
    return n();
}
var h = 'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement ? _ : d;
n.useSyncExternalStore = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : h;
