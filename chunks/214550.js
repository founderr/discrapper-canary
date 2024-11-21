var r = n(192379),
    i = n(229466),
    a =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    s = i.useSyncExternalStore,
    o = r.useRef,
    l = r.useEffect,
    u = r.useMemo,
    c = r.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var d = o(null);
    if (null === d.current) {
        var f = {
            hasValue: !1,
            value: null
        };
        d.current = f;
    } else f = d.current;
    var _ = s(
        e,
        (d = u(
            function () {
                function e(e) {
                    if (!l) {
                        if (((l = !0), (s = e), (e = r(e)), void 0 !== i && f.hasValue)) {
                            var t = f.value;
                            if (i(t, e)) return (o = t);
                        }
                        return (o = e);
                    }
                    if (((t = o), a(s, e))) return t;
                    var n = r(e);
                    return void 0 !== i && i(t, n) ? t : ((s = e), (o = n));
                }
                var s,
                    o,
                    l = !1,
                    u = void 0 === n ? null : n;
                return [
                    function () {
                        return e(t());
                    },
                    null === u
                        ? void 0
                        : function () {
                              return e(u());
                          }
                ];
            },
            [t, n, r, i]
        ))[0],
        d[1]
    );
    return (
        l(
            function () {
                (f.hasValue = !0), (f.value = _);
            },
            [_]
        ),
        c(_),
        _
    );
};
