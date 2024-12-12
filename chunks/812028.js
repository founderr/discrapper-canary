r.r(n),
    r.d(n, {
        useCallback: function () {
            return u;
        },
        useCallbackOne: function () {
            return o;
        },
        useMemo: function () {
            return l;
        },
        useMemoOne: function () {
            return s;
        }
    });
var i = r(192379);
function a(e, n) {
    if (e.length !== n.length) return !1;
    for (var r = 0; r < e.length; r++) if (e[r] !== n[r]) return !1;
    return !0;
}
function s(e, n) {
    var r = (0, i.useState)(function () {
            return {
                inputs: n,
                result: e()
            };
        })[0],
        s = (0, i.useRef)(!0),
        o = (0, i.useRef)(r),
        l =
            s.current || (n && o.current.inputs && a(n, o.current.inputs))
                ? o.current
                : {
                      inputs: n,
                      result: e()
                  };
    return (
        (0, i.useEffect)(
            function () {
                (s.current = !1), (o.current = l);
            },
            [l]
        ),
        l.result
    );
}
function o(e, n) {
    return s(function () {
        return e;
    }, n);
}
var l = s,
    u = o;
