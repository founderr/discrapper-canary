n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(77866),
    o = n(846519);
function s(e, t) {
    let [n, r] = (0, i.useState)(e),
        s = (0, a.Z)(() => new o.V7());
    return (
        (0, i.useEffect)(() => () => s.stop(), [s]),
        [
            n,
            (0, i.useCallback)(
                (n) => {
                    r(n), n !== e && s.start(t, () => r(e));
                },
                [t, e, s]
            )
        ]
    );
}
