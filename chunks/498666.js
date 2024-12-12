var i = r(192379),
    a = r(969710);
function s(e, n) {
    return (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n);
}
var o = 'function' == typeof Object.is ? Object.is : s,
    l = a.useSyncExternalStore,
    u = i.useRef,
    c = i.useEffect,
    d = i.useMemo,
    f = i.useDebugValue;
n.useSyncExternalStoreWithSelector = function (e, n, r, i, a) {
    var s = u(null);
    if (null === s.current) {
        var _ = {
            hasValue: !1,
            value: null
        };
        s.current = _;
    } else _ = s.current;
    var h = l(
        e,
        (s = d(
            function () {
                function e(e) {
                    if (!u) {
                        if (((u = !0), (s = e), (e = i(e)), void 0 !== a && _.hasValue)) {
                            var n = _.value;
                            if (a(n, e)) return (l = n);
                        }
                        return (l = e);
                    }
                    if (((n = l), o(s, e))) return n;
                    var r = i(e);
                    return void 0 !== a && a(n, r) ? n : ((s = e), (l = r));
                }
                var s,
                    l,
                    u = !1,
                    c = void 0 === r ? null : r;
                return [
                    function () {
                        return e(n());
                    },
                    null === c
                        ? void 0
                        : function () {
                              return e(c());
                          }
                ];
            },
            [n, r, i, a]
        ))[0],
        s[1]
    );
    return (
        c(
            function () {
                (_.hasValue = !0), (_.value = h);
            },
            [h]
        ),
        f(h),
        h
    );
};
