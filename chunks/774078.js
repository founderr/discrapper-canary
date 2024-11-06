n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    r = n(931609),
    l = n(55935),
    o = n(745735);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
        n = arguments.length > 2 ? arguments[2] : void 0,
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = (0, l.TD)(Date.now(), e),
        s = (0, r.Z)(),
        c = (0, i.useCallback)(() => {
            if ((0 !== a.days || 0 !== a.hours || 0 !== a.minutes || 0 !== a.seconds) && !u) s(), null == n || n();
        }, [a, u, s, n]);
    return (0, o.Z)(c, u ? null : t), a;
}
