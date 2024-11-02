n.d(e, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var r = n(192379),
    E = n(409813),
    i = n(45572);
function u(t) {
    let [e, n] = r.useState(i.A.WAITING);
    return (
        r.useEffect(() => {
            null != t && t !== E.h8.REVIEW && e !== i.A.WAITING && e !== i.A.COMPLETED && n(i.A.WAITING);
        }, [t, e, n]),
        [e, n]
    );
}
