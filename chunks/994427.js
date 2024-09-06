n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var E = n(470079),
    r = n(409813),
    i = n(45572);
function u(e) {
    let [t, n] = E.useState(i.A.WAITING);
    return (
        E.useEffect(() => {
            null != e && e !== r.h8.REVIEW && t !== i.A.WAITING && t !== i.A.COMPLETED && n(i.A.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
