t.d(n, {
    Z: function () {
        return u;
    }
});
var r = t(192379),
    i = t(931609),
    l = t(55935),
    o = t(745735);
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
        t = arguments.length > 2 ? arguments[2] : void 0,
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = (0, l.TD)(Date.now(), e),
        a = (0, i.Z)(),
        c = (0, r.useCallback)(() => {
            if ((0 !== s.days || 0 !== s.hours || 0 !== s.minutes || 0 !== s.seconds) && !u) a(), null == t || t();
        }, [s, u, a, t]);
    return (0, o.Z)(c, u ? null : n), s;
}
