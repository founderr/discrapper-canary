n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var E = n(470079),
    r = n(122289),
    u = n(622999);
function i() {
    let [e, t] = E.useState(null);
    return (
        E.useEffect(() => {
            (0, u.d2)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, r.q2)(e);
                });
        }, []),
        e
    );
}
