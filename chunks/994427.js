n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(470079),
    r = n(409813),
    u = n(45572);
function l(e) {
    let [t, n] = i.useState(u.A.WAITING);
    return (
        i.useEffect(() => {
            null != e && e !== r.h8.REVIEW && t !== u.A.WAITING && t !== u.A.COMPLETED && n(u.A.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
