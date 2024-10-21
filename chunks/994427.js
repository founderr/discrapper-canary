n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var E = n(192379),
    r = n(409813),
    u = n(45572);
function i(e) {
    let [t, n] = E.useState(u.A.WAITING);
    return (
        E.useEffect(() => {
            null != e && e !== r.h8.REVIEW && t !== u.A.WAITING && t !== u.A.COMPLETED && n(u.A.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
