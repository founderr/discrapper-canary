t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(470079),
    r = t(718922),
    l = t(55935),
    o = t(745735);
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
        t = arguments.length > 2 ? arguments[2] : void 0,
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = (0, l.TD)(Date.now(), e),
        a = (0, r.Z)(),
        c = (0, i.useCallback)(() => {
            if ((0 !== s.days || 0 !== s.hours || 0 !== s.minutes || 0 !== s.seconds) && !u) a(), null == t || t();
        }, [s, u, a, t]);
    return (0, o.Z)(c, u ? null : n), s;
}
