r.d(n, {
    H: function () {
        return u;
    }
});
var i = r(192379),
    a = r(877124),
    s = r(65400),
    o = r(731965);
function l(e, n) {
    return e === n;
}
function u(e) {
    let n = (0, s.F)((0, a.XR)((n, r, i) => e((e) => (0, o.j)(() => n(e)), r, i)));
    function r(e, r) {
        return n(e, r);
    }
    function u(e) {
        let r = n.getState();
        return null != e ? e(r) : r;
    }
    function c(e) {
        return (n) => n[e];
    }
    function d(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
        return r(
            i.useMemo(() => c(e), [e]),
            n
        );
    }
    function f(e) {
        return u(c(e));
    }
    let _ = (e) => {
        (0, o.j)(() => n.setState(e));
    };
    function h() {
        _(n.getInitialState());
    }
    return {
        useState: r,
        getState: u,
        useField: d,
        getField: f,
        subscribe: function e(e, r, i) {
            return n.subscribe(e, r, i);
        },
        setState: _,
        resetState: h
    };
}
