n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(470079),
    i = n(718922),
    a = n(55935),
    o = n(745735);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (0, a.TD)(Date.now(), e),
        u = (0, i.Z)(),
        c = (0, r.useCallback)(() => {
            if ((0 !== l.days || 0 !== l.hours || 0 !== l.minutes || 0 !== l.seconds) && !s) u(), null == n || n();
        }, [l, s, u, n]);
    return (0, o.Z)(c, s ? null : t), l;
}
