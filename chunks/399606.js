n.d(t, {
    Wu: function () {
        return _;
    },
    cj: function () {
        return d;
    },
    e7: function () {
        return c;
    },
    pF: function () {
        return u;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(470079),
    o = n(902704),
    s = n(250919);
function l(e, t) {
    return e === t;
}
function u(e, t) {
    return !1;
}
function c(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l,
        { current: i } = (0, a.useRef)({
            stores: e,
            areStatesEqual: r,
            getStateFromStores: t,
            prevDeps: void 0,
            state: void 0
        }),
        u = i.state;
    if (null == n || !(0, o.E)(n, i.prevDeps)) {
        let e = t();
        (null == u || !r(u, e)) && (u = e);
    }
    (0, a.useLayoutEffect)(() => {
        (i.getStateFromStores = t), (i.prevDeps = n), (i.state = u);
    });
    let [, c] = (0, a.useState)(null);
    return (
        (0, a.useLayoutEffect)(() => {
            let t = () => {
                let e = i.getStateFromStores();
                !r(i.state, e) && ((i.state = e), c({}));
            };
            t();
            let n = new s.F(e, t);
            return n.attach('useStateFromStores'), () => n.detach();
        }, []),
        u
    );
}
function d(e, t, n) {
    return c(e, t, n, o.Z);
}
function _(e, t, n) {
    return c(e, t, n, o.E);
}
