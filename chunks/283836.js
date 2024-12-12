r.d(n, {
    Z: function () {
        return h;
    },
    q: function () {
        return _;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(241159),
    o = r(496929),
    l = r(558381),
    u = r(171246),
    c = r(509545),
    d = r(238),
    f = r(55563);
function _(e) {
    i.useEffect(() => {
        h(e);
    }, [e]);
    let n = (0, a.Wu)(
            [d.Z, f.Z, c.Z],
            () => {
                let n = d.Z.getStoreLayout(e);
                return (0, u.Ej)(n.subscriptions, f.Z, c.Z);
            },
            [e]
        ),
        r = (0, a.Wu)([d.Z], () => d.Z.getStoreLayout(e).otps, [e]);
    return i.useMemo(
        () => ({
            subscriptions: n,
            otps: r
        }),
        [n, r]
    );
}
function h(e) {
    (0, s.k)(e), (0, l.oJ)(e), (0, o.yD)(e, !1);
}
