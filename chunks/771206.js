n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var E = n(470079),
    r = n(122289),
    i = n(622999);
function u() {
    let [e, t] = E.useState(null);
    return (
        E.useEffect(() => {
            (0, i.d2)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, r.q2)(e);
                });
        }, []),
        e
    );
}
