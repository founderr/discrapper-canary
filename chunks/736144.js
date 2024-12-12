r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(451478),
    l = r(576125),
    u = r(465858),
    c = r(112843);
function d(e) {
    let { confettiSpawnRef: n, shouldFire: r } = e,
        i = (0, s.e7)([o.Z], () => o.Z.isFocused()),
        l = (0, c.Z)(),
        d = (0, u.Z)(n);
    return (
        a.useEffect(() => {
            i && r && null != d && l.fire(d.x, d.y);
        }, [l, i, d, r]),
        null
    );
}
function f(e) {
    return (0, i.jsx)(l.Z, {
        confettiLocation: e.confettiLocation,
        children: (0, i.jsx)(d, { ...e })
    });
}
