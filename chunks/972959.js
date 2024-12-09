n.d(t, {
    H: function () {
        return l;
    }
});
var r = n(192379),
    i = n(877124),
    a = n(65400),
    s = n(731965);
function o(e, t) {
    return e === t;
}
function l(e) {
    let t = (0, a.F)((0, i.XR)((t, n, r) => e((e) => (0, s.j)(() => t(e)), n, r)));
    function n(e, n) {
        return t(e, n);
    }
    function l(e) {
        let n = t.getState();
        return null != e ? e(n) : n;
    }
    function u(e) {
        return (t) => t[e];
    }
    let c = (e) => {
        (0, s.j)(() => t.setState(e));
    };
    return {
        useState: n,
        getState: l,
        useField: function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
            return t(
                r.useMemo(() => {
                    var t;
                    return (t = e), (e) => e[t];
                }, [e]),
                n
            );
        },
        getField: function (e) {
            var t;
            return l(((t = e), (e) => e[t]));
        },
        subscribe: function (e, n, r) {
            return t.subscribe(e, n, r);
        },
        setState: c,
        resetState: function () {
            c(t.getInitialState());
        }
    };
}
