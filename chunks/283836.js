n.d(t, {
    Z: function () {
        return E;
    },
    q: function () {
        return _;
    }
});
var r = n(192379),
    i = n(442837),
    a = n(241159),
    s = n(496929),
    o = n(558381),
    l = n(171246),
    u = n(509545),
    c = n(238),
    d = n(55563);
function _(e) {
    return (
        r.useEffect(() => {
            E(e);
        }, [e]),
        (0, i.cj)(
            [c.Z, d.Z, u.Z],
            () => {
                let t = c.Z.getStoreLayout(e);
                return {
                    subscriptions: (0, l.Ej)(t.subscriptions, d.Z, u.Z),
                    otps: t.otps
                };
            },
            [e]
        )
    );
}
function E(e) {
    (0, a.k)(e), (0, o.oJ)(e), (0, s.yD)(e, !1);
}
