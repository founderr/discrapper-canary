t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(718922),
    r = t(55935),
    l = t(745735);
function o(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
        t = arguments.length > 2 ? arguments[2] : void 0,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, r.TD)(Date.now(), e),
        s = (0, i.Z)();
    return (
        (0, l.Z)(
            () => {
                if ((0 !== u.days || 0 !== u.hours || 0 !== u.minutes || 0 !== u.seconds) && !o) s(), null == t || t();
            },
            o ? null : n
        ),
        u
    );
}
